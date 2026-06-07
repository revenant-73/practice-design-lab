import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen26 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = (activityUpgradePlan.m5UpgradeCardExplanation || '').length > 10
    setScreenReady(isReady)
  }, [activityUpgradePlan.m5UpgradeCardExplanation, setScreenReady])

  const fields = [
    { key: 'm5DraftOriginalActivity', label: '1. Original Activity' },
    { key: 'm5DraftProblem', label: '2. Problem' },
    { key: 'm5DraftAttentionTarget', label: '3. Attention Target' },
    { key: 'm4ChosenLever', label: '4. Constraint Lever' },
    { key: 'm5FinalConstraint', label: '5. Constraint' },
    { key: 'm5SuccessCounts', label: '6. Success Condition' },
    { key: 'm5CoachingQuestion', label: '7. Coaching Question' }
  ]

  return (
    <ScreenLayout title="Complete Your Card">
      <TeachingText>
        Fill this out now. This is your first complete activity upgrade.
      </TeachingText>

      <div className="space-y-4 py-4">
        <div className="bg-white p-6 border-2 border-lab-teal/30 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          
          <div className="space-y-6">
            {fields.map((f) => (
              <div key={f.key} className="space-y-1">
                <label className="text-[9px] font-mono font-bold uppercase tracking-widest text-lab-teal">{f.label}</label>
                <textarea
                  value={activityUpgradePlan[f.key] || ''}
                  onChange={(e) => updatePlan(f.key, e.target.value)}
                  className="w-full p-2 bg-lab-cream/30 hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-none min-h-[60px] resize-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-6">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">One Sentence Explanation</label>
          <TeachingText className="text-sm italic">
            This upgrade should help players <strong>notice...</strong> when... so they can...
          </TeachingText>
          <textarea
            value={activityUpgradePlan.m5UpgradeCardExplanation || ''}
            onChange={(e) => updatePlan('m5UpgradeCardExplanation', e.target.value)}
            placeholder="This upgrade should help players notice [TARGET] when [SITUATION] so they can [GOAL]."
            className="w-full p-4 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5 min-h-[100px]"
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen26
