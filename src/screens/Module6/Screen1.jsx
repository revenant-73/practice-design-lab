import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const cardData = [
    { label: 'Original Activity', value: activityUpgradePlan.m5DraftOriginalActivity },
    { label: 'Problem', value: activityUpgradePlan.m5DraftProblem },
    { label: 'Attention Target', value: activityUpgradePlan.m5DraftAttentionTarget },
    { label: 'Constraint', value: activityUpgradePlan.m5FinalConstraint },
    { label: 'Success Condition', value: activityUpgradePlan.m5SuccessCounts },
    { label: 'Coaching Question', value: activityUpgradePlan.m5CoachingQuestion }
  ]

  return (
    <ScreenLayout title="Where We Left Off">
      <TeachingText>
        In Module 5, you created a complete activity upgrade. Now the goal is not to prove that your first version is perfect, but to run it, notice what changes, and adjust.
      </TeachingText>

      <div className="bg-white p-6 border-2 border-lab-teal/20 rounded-2xl space-y-4 shadow-sm my-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">My Upgrade Card</p>
        <div className="grid grid-cols-1 gap-4">
          {cardData.map((d, i) => (
            <div key={i}>
              <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">{d.label}</p>
              <p className="text-xs italic text-lab-ink/80 border-b border-lab-ink/5 pb-1">{d.value || 'Not defined'}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway Preview</p>
        <p className="text-xl font-bold italic text-center">“The first version does not need to be perfect. It needs to teach you what to change next.”</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
