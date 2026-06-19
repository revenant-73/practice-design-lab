export const config = {
  api: {
    bodyParser: false,
  },
};

// Simplified raw body extraction
async function getRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  console.log(`[Webhook] Request received: ${req.method}`);

  try {
    // 1. If it's not a POST, we can exit early without loading any heavy libraries
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // 2. Load dependencies dynamically to catch loading crashes
    let Stripe, createClient, drizzle, users, eq;
    try {
      const stripeMod = await import('stripe');
      Stripe = stripeMod.default;

      const libsqlMod = await import('@libsql/client');
      createClient = libsqlMod.createClient;

      const drizzleMod = await import('drizzle-orm/libsql');
      drizzle = drizzleMod.drizzle;

      const schemaMod = await import('../src/db/schema.js');
      users = schemaMod.users;

      const ormMod = await import('drizzle-orm');
      eq = ormMod.eq;
    } catch (importErr) {
      console.error('[Webhook] Dependency Loading Error:', importErr);
      return res.status(500).json({ 
        error: 'Failed to load dependencies', 
        message: importErr.message,
        stack: importErr.stack
      });
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const sig = req.headers['stripe-signature'];

    if (!webhookSecret || !stripeKey || !sig) {
      return res.status(400).json({ error: 'Missing configuration or signature' });
    }

    // 3. Process Webhook
    const rawBody = await getRawBody(req);
    const stripe = new Stripe(stripeKey);
    
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
      return res.status(400).json({ error: `Signature verification failed: ${err.message}` });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_details?.email || session.customer_email || session.metadata?.email;
      const userId = session.metadata?.userId;

      if (!email && !userId) {
        return res.status(400).json({ error: 'No user ID or email' });
      }

      const dbClient = createClient({ 
        url: process.env.TURSO_CONNECTION_URL, 
        authToken: process.env.TURSO_AUTH_TOKEN 
      });
      const db = drizzle(dbClient);

      let user = null;
      if (userId) {
        user = await db.select().from(users).where(eq(users.id, userId)).get();
      }
      if (!user && email) {
        user = await db.select().from(users).where(eq(users.email, email)).get();
      }

      if (user) {
        await db.update(users)
          .set({ hasAccess: true, updatedAt: new Date() })
          .where(eq(users.id, user.id));
      } else if (email) {
        const newUserId = userId || Buffer.from(email).toString('base64').replace(/=/g, '');
        await db.insert(users).values({
          id: newUserId,
          email,
          hasAccess: true,
          updatedAt: new Date(),
          createdAt: new Date(),
        });
      }
      return res.status(200).json({ success: true });
    }

    return res.status(200).json({ received: true });

  } catch (fatalErr) {
    console.error('[Webhook] FATAL ERROR:', fatalErr);
    return res.status(500).json({ error: 'Internal Server Error', message: fatalErr.message });
  }
}
