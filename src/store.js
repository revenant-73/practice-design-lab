import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      currentScreen: 0,
      userId: null, // Set this after login
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
      currentView: 'course',
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
          const response = await fetch(`/api/sync?userId=${state.userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              currentScreen: state.currentScreen,
              activityUpgradePlan: state.activityUpgradePlan,
            }),
          });
          
          if (!response.ok) throw new Error('Failed to save');
        } catch (error) {
          console.error('Failed to sync progress:', error)
        } finally {
          set({ isSyncing: false })
        }
      },

      loadProgress: async (userId) => {
        if (!userId) return;
        
        try {
          const response = await fetch(`/api/sync?userId=${userId}`);
          const data = await response.json();
          
          if (data) {
            set({
              currentScreen: data.currentScreen,
              activityUpgradePlan: data.activityUpgradePlan,
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
