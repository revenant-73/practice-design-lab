import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(), // Using Clerk/Auth ID
  email: text('email').notNull(),
  name: text('name'),
  hasAccess: integer('has_access', { mode: 'boolean' }).notNull().default(false),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});

export const progress = sqliteTable('progress', {
  userId: text('user_id').primaryKey().references(() => users.id),
  currentScreen: integer('current_screen').notNull().default(0),
  activityUpgradePlan: text('activity_upgrade_plan', { mode: 'json' }).notNull().default({
    originalActivity: '',
    problem: '',
    attentionTarget: '',
    constraint: '',
    coachingQuestion: '',
    adjustmentPlan: ''
  }),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull().$defaultFn(() => new Date()),
});
