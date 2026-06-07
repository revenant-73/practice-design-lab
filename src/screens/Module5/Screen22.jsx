import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen22 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = activityUpgradePlan.m5SuccessCounts && activityUpgradePlan.m5SuccessPlayersKnow
    setScreenReady(isReady)
  }, [activityUpgradePlan, setScreenReady])

  const fields = [
    { key: 'm5SuccessCounts', label: 'What counts as success?' },
    { key: 'm5SuccessNotCounts', label: 'What does not count?' },
    { key: 'm5SuccessPlayersKnow', label: 'How will players know?' },
    { key: 'm5SuccessCoachKnows', label: 'How will I know?' }
  ]

  return (
    <ScreenLayout title="Write the Success Condition">
      <TeachingText>
        Return to your first constraint and define how success will be recognized. Make it clear enough that players can understand it quickly.
      </TeachingText>

      <div className="bg-white/50 p-4 hand-drawn italic text-xs mb-6 border border-lab-ink/5">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">My Constraint</p>
        {activityUpgradePlan.m5FinalConstraint || 'Not yet defined'}
      </div>

      <div className="space-y-6">
        {fields.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">
              {f.label}
            </label>
            <input
              type="text"
              value={activityUpgradePlan[f.key] || ''}
              onChange={(e) => updatePlan(f.key, e.target.value)}
              className="w-full p-3 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5"
            />
          </div>
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Screen22
