import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { db } from './db'
import { progress } from './db/schema'
import { eq } from 'drizzle-orm'

export const useStore = create(
  persist(
    (set, get) => ({
      currentScreen: 0,
      userId: null, // Set this after login (e.g., from Clerk)
      activityUpgradePlan: {
        originalActivity: '',
        problem: '',
        attentionTarget: '',
        constraint: '',
        coachingQuestion: '',
        adjustmentPlan: '',
        // Module 2 Specifics
        problemPlayersAre: '',
        problemWhen: '',
        problemLeadsTo: '',
        problemNeedTo: '',
      },
      responses: {},
      screenReady: false,
      currentView: 'course', // 'course' or 'resources'
      isSyncing: false,
      
      setUserId: (id) => set({ userId: id }),
      setScreen: (index) => set({ currentScreen: index, screenReady: false, currentView: 'course' }),
      setScreenReady: (ready) => set({ screenReady: ready }),
      setView: (view) => set({ currentView: view }),
      
      updatePlan: (field, value) => set((state) => ({
        activityUpgradePlan: { ...state.activityUpgradePlan, [field]: value }
      })),
      
      setResponse: (key, value) => set((state) => ({
        responses: { ...state.responses, [key]: value }
      })),

      saveProgress: async () => {
        const state = get()
        if (!state.userId) return;

        set({ isSyncing: true })
        try {
          await db.insert(progress).values({
            userId: state.userId,
            currentScreen: state.currentScreen,
            activityUpgradePlan: state.activityUpgradePlan,
            updatedAt: new Date(),
          }).onConflictDoUpdate({
            target: progress.userId,
            set: {
              currentScreen: state.currentScreen,
              activityUpgradePlan: state.activityUpgradePlan,
              updatedAt: new Date(),
            }
          })
        } catch (error) {
          console.error('Failed to sync with Turso:', error)
        } finally {
          set({ isSyncing: false })
        }
      },

      loadProgress: async (userId) => {
        if (!userId) return;
        
        try {
          const result = await db.query.progress.findFirst({
            where: eq(progress.userId, userId)
          })
          
          if (result) {
            set({
              currentScreen: result.currentScreen,
              activityUpgradePlan: result.activityUpgradePlan,
            })
          }
        } catch (error) {
          console.error('Failed to load progress:', error)
        }
      },

      reset: () => set({
        currentScreen: 0,
        activityUpgradePlan: {
          originalActivity: '',
          problem: '',
          attentionTarget: '',
          constraint: '',
          coachingQuestion: '',
          adjustmentPlan: '',
        },
        responses: {},
      }),
    }),
    {
      name: 'practice-design-lab-storage',
    }
  )
)
