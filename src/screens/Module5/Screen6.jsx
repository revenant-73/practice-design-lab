import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen6 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    // Basic validation: at least the new parts are started
    const isReady = activityUpgradePlan.m5DraftConstraint && 
                    activityUpgradePlan.m5DraftSuccessCondition && 
                    activityUpgradePlan.m5DraftCoachingQuestion
    setScreenReady(isReady)
  }, [activityUpgradePlan, setScreenReady])

  // Initialize with previous values if empty
  useEffect(() => {
    if (!activityUpgradePlan.m5DraftOriginalActivity) updatePlan('m5DraftOriginalActivity', activityUpgradePlan.originalActivity)
    if (!activityUpgradePlan.m5DraftProblem) updatePlan('m5DraftProblem', activityUpgradePlan.problemPlayersAre ? `Players are ${activityUpgradePlan.problemPlayersAre} when ${activityUpgradePlan.problemWhen}` : '')
    if (!activityUpgradePlan.m5DraftAttentionTarget) {
      const fullTarget = activityUpgradePlan.m3TargetNotice 
        ? `I want players to notice ${activityUpgradePlan.m3TargetNotice} when ${activityUpgradePlan.m3TargetWhen} so they can ${activityUpgradePlan.m3TargetSoTheyCan}.`
        : ''
      updatePlan('m5DraftAttentionTarget', fullTarget)
    }
    if (!activityUpgradePlan.m5DraftLever) updatePlan('m5DraftLever', activityUpgradePlan.m4ChosenLever || '')
  }, [])

  const fields = [
    { key: 'm5DraftOriginalActivity', label: 'Original Activity' },
    { key: 'm5DraftProblem', label: 'Clear Practice Problem' },
    { key: 'm5DraftAttentionTarget', label: 'Attention Target' },
    { key: 'm5DraftLever', label: 'Constraint Lever' },
    { key: 'm5DraftConstraint', label: 'Constraint / One Change', placeholder: 'What will you actually change?' },
    { key: 'm5DraftSuccessCondition', label: 'Success Condition', placeholder: 'How will players know what counts?' },
    { key: 'm5DraftCoachingQuestion', label: 'Coaching Question', placeholder: 'What will you ask them?' }
  ]

  return (
    <ScreenLayout title="Draft the Six Parts">
      <TeachingText>
        Use your own activity to draft the six parts. Do not worry if this feels rough; you will refine it throughout the module.
      </TeachingText>

      <div className="space-y-6 py-4">
        {fields.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">
              {f.label}
            </label>
            <textarea
              value={activityUpgradePlan[f.key] || ''}
              onChange={(e) => updatePlan(f.key, e.target.value)}
              placeholder={f.placeholder}
              className="w-full p-4 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5 min-h-[80px] resize-none"
            />
          </div>
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Screen6
