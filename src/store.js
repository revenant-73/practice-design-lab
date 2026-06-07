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
        // Module 3 Specifics
        m3AttentionTarget: '',
        m3WhatExactly: '',
        m3WhenNotice: '',
        m3WhyMatters: '',
        m3NoticingProblem: '',
        m3NoticingProblemWhy: '',
        m3TargetNotice: '',
        m3TargetWhen: '',
        m3TargetSoTheyCan: '',
        m3ObservableTarget: '',
        // Module 4 Specifics
        m4ChosenLever: '',
        m4ConstraintDetail: '',
        m4WhyLeverMatches: '',
        m4SmallestChange: '',
        m4OpponentRule: '',
        m4StartBox: '',
        m4SuccessCriteria: '',
        // Module 5 Specifics
        m5FormulaChange: '',
        m5FormulaNotice: '',
        m5FormulaUse: '',
        m5DraftOriginalActivity: '',
        m5DraftProblem: '',
        m5DraftAttentionTarget: '',
        m5DraftLever: '',
        m5DraftConstraint: '',
        m5DraftSuccessCondition: '',
        m5DraftCoachingQuestion: '',
        m5FinalConstraint: '',
        m5SuccessCounts: '',
        m5SuccessNotCounts: '',
        m5SuccessPlayersKnow: '',
        m5SuccessCoachKnows: '',
        m5CoachingQuestion: '',
        m5UpgradeCardExplanation: '',
        // Module 6 Specifics
        m6WatchFor: '',
        m6KnowHelping: '',
        m6KnowNotHelping: '',
        m6SpecificBehavior: '',
        m6AdjTooEasy: '',
        m6AdjTooHard: '',
        m6AdjTooWeird: '',
        m6AdjNothingChanges: '',
        m6RefinedCoachingQuestion: '',
        m6PlayerQuestion1: '',
        m6PlayerQuestion2: '',
        m6UnexpectedResponse: '',
        m6FinalReflectionActivity: '',
        m6FinalReflectionProblem: '',
        m6FinalReflectionNotice: '',
        m6FinalReflectionChange: '',
        m6FinalReflectionWorking: '',
        m6FinalReflectionNextAction: '',
        // Post-Course Specifics
        postCourseReflectionWhatChanged: '',
        postCourseReflectionWhatNoticed: '',
        postCourseReflectionWhatBroke: '',
        postCourseReflectionAdjustment: '',
        postCourseReflectionNextTime: '',
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
