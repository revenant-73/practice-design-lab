import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      currentScreen: 0,
      activityUpgradePlan: {
        originalActivity: '',
        problem: '',
        noticing: '',
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
      
      setScreen: (index) => set({ currentScreen: index, screenReady: false, currentView: 'course' }),
      setScreenReady: (ready) => set({ screenReady: ready }),
      setView: (view) => set({ currentView: view }),
      
      updatePlan: (field, value) => set((state) => ({
        activityUpgradePlan: { ...state.activityUpgradePlan, [field]: value }
      })),
      
      setResponse: (key, value) => set((state) => ({
        responses: { ...state.responses, [key]: value }
      })),

      reset: () => set({
        currentScreen: 0,
        activityUpgradePlan: {
          originalActivity: '',
          problem: '',
          noticing: '',
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
