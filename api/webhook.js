import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { users } from '../src/db/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Simplified raw body extraction using for-await (more stable in Vercel)
async function getRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  // GLOBAL SAFETY NET
  try {
    console.log(`[Webhook] Request received: ${req.method}`);

    if (req.method !== 'POST') {
      console.log(`[Webhook] Rejecting ${req.method} request`);
      return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    // 1. Check for basic config before doing anything
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    const tursoUrl = process.env.TURSO_CONNECTION_URL;
    const tursoToken = process.env.TURSO_AUTH_TOKEN;

    if (!webhookSecret || !stripeKey) {
      console.error('[Webhook] Missing Stripe Configuration');
      return res.status(500).json({ 
        error: 'Stripe configuration missing',
        details: { 
          hasSecret: !!webhookSecret, 
          hasKey: !!stripeKey 
        }
      });
    }

    const sig = req.headers['stripe-signature'];
    if (!sig) {
      console.error('[Webhook] Missing stripe-signature header');
      return res.status(400).json({ error: 'Missing stripe-signature header' });
    }

    // 2. Extract Raw Body
    let rawBody;
    try {
      rawBody = await getRawBody(req);
    } catch (bodyErr) {
      console.error('[Webhook] Failed to read request body:', bodyErr);
      return res.status(400).json({ error: 'Failed to read request body' });
    }

    // 3. Verify Event
    const stripe = new Stripe(stripeKey);
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      console.log(`[Webhook] Verified event: ${event.type}`);
    } catch (err) {
      console.error(`[Webhook] Signature verification failed: ${err.message}`);
      return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    // 4. Handle Event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const email = session.customer_details?.email || session.customer_email || session.metadata?.email;
      const userId = session.metadata?.userId;

      console.log('[Webhook] Processing completion for:', { email, userId });

      if (!email && !userId) {
        return res.status(400).json({ error: 'No email or userId in session' });
      }

      if (!tursoUrl || !tursoToken) {
        console.error('[Webhook] Database configuration missing');
        return res.status(500).json({ error: 'Database configuration missing' });
      }

      try {
        const dbClient = createClient({ url: tursoUrl, authToken: tursoToken });
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
          console.log(`[Webhook] Access unlocked: ${user.id}`);
        } else if (email) {
          const newUserId = userId || Buffer.from(email).toString('base64').replace(/=/g, '');
          await db.insert(users).values({
            id: newUserId,
            email: email,
            hasAccess: true,
            updatedAt: new Date(),
            createdAt: new Date(),
          });
          console.log(`[Webhook] New user created: ${newUserId}`);
        }

        return res.status(200).json({ success: true });
      } catch (dbErr) {
        console.error('[Webhook] Database operation failed:', dbErr);
        return res.status(500).json({ error: `Database error: ${dbErr.message}` });
      }
    }

    return res.status(200).json({ received: true });

  } catch (fatalErr) {
    console.error('[Webhook] FATAL EXCEPTION:', fatalErr);
    return res.status(500).json({ 
      error: 'Internal Server Error (Fatal)', 
      message: fatalErr.message 
    });
  }
}
