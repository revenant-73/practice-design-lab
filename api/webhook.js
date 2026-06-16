import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { users } from '../src/db/schema';
import { eq } from 'drizzle-orm';
import Stripe from 'stripe';

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

export const config = {
  api: {
    bodyParser: false,
  },
};

async function getRawBody(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is missing');
    return res.status(500).json({ error: 'Webhook configuration error' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    console.error('STRIPE_SECRET_KEY is missing');
    return res.status(500).json({ error: 'Stripe configuration error' });
  }

  if (!process.env.TURSO_CONNECTION_URL || !process.env.TURSO_AUTH_TOKEN) {
    console.error('Turso configuration is missing');
    return res.status(500).json({ error: 'Database configuration error' });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let event;

  try {
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details?.email || session.customer_email;
    const userId = session.metadata?.userId;

    if (!email && !userId) {
      console.error('Webhook Error: No email or userId found in session');
      return res.status(400).json({ error: 'No email or userId found in session' });
    }

    try {
      // Find the user by ID or email
      let user = null;
      if (userId) {
        user = await db.select().from(users).where(eq(users.id, userId)).get();
      }
      
      if (!user && email) {
        user = await db.select().from(users).where(eq(users.email, email)).get();
      }

      if (user) {
        // Unlock access
        await db.update(users)
          .set({ 
            hasAccess: true,
            updatedAt: new Date() 
          })
          .where(eq(users.id, user.id));
        
        console.log(`Access unlocked for user: ${email} (${user.id})`);
      } else if (email) {
        // If user doesn't exist yet, we create them
        // Using the same ID generation logic as before if userId wasn't provided
        const newUserId = userId || Buffer.from(email).toString('base64').replace(/=/g, '');
        await db.insert(users).values({
          id: newUserId,
          email: email,
          hasAccess: true,
          updatedAt: new Date(),
          createdAt: new Date(),
        });
        
        console.log(`New user created and unlocked: ${email}`);
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Webhook DB Error:', error);
      return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
  }

  return res.status(200).json({ received: true });
}
