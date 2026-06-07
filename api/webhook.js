import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { users } from '../src/db/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 1. Verify the signature from Lemon Squeezy
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
  const hmac = crypto.createHmac('sha256', secret);
  const digest = Buffer.from(hmac.update(JSON.stringify(req.body)).digest('hex'), 'utf8');
  const signature = Buffer.from(req.headers['x-signature'] || '', 'utf8');

  if (!crypto.timingSafeEqual(digest, signature)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  const payload = req.body;
  const eventName = payload.meta.event_name;
  const email = payload.data.attributes.user_email;

  // 2. Handle the "order_created" event
  if (eventName === 'order_created' || eventName === 'subscription_created') {
    try {
      // Find the user by email
      const user = await db.select().from(users).where(eq(users.email, email)).get();

      if (user) {
        // Unlock access
        await db.update(users)
          .set({ 
            hasAccess: true,
            updatedAt: new Date() 
          })
          .where(eq(users.id, user.id));
        
        console.log(`Access unlocked for user: ${email}`);
      } else {
        // If user doesn't exist yet (e.g. they paid before starting), we create them
        const userId = btoa(email).replace(/=/g, '');
        await db.insert(users).values({
          id: userId,
          email: email,
          hasAccess: true,
          updatedAt: new Date(),
        });
        
        console.log(`New user created and unlocked: ${email}`);
      }

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Webhook DB Error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(200).json({ message: 'Event ignored' });
}
