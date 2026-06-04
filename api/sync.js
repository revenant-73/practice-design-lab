import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { progress } from '../src/db/schema';
import { eq } from 'drizzle-orm';

const client = createClient({
  url: process.env.TURSO_CONNECTION_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client);

export default async function handler(req, res) {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    if (req.method === 'GET') {
      const result = await db.select().from(progress).where(eq(progress.userId, userId)).get();
      return res.status(200).json(result || null);
    } 
    
    if (req.method === 'POST') {
      const { currentScreen, activityUpgradePlan } = req.body;
      
      await db.insert(progress).values({
        userId,
        currentScreen,
        activityUpgradePlan,
        updatedAt: new Date(),
      }).onConflictDoUpdate({
        target: progress.userId,
        set: {
          currentScreen,
          activityUpgradePlan,
          updatedAt: new Date(),
        }
      });

      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
