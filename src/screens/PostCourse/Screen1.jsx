import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()
  
  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const plan = activityUpgradePlan

  return (
    <ScreenLayout title="Your Activity Upgrade Plan Is Ready">
      <TeachingText>
        You have completed the core build. Review your practice-ready activity upgrade before moving on.
      </TeachingText>

      <div className="space-y-4 mt-6">
        <ReviewSection label="Activity I already use" value={plan.m5DraftOriginalActivity || plan.originalActivity} />
        <ReviewSection label="Clear practice problem" value={plan.m5DraftProblem || plan.problem} />
        <ReviewSection label="What players need to notice" value={plan.m5DraftAttentionTarget || (plan.m3TargetNotice ? `I want players to notice ${plan.m3TargetNotice} when ${plan.m3TargetWhen} so they can ${plan.m3TargetSoTheyCan}.` : plan.attentionTarget)} />
        <ReviewSection label="Constraint lever" value={plan.m4ChosenLever} />
        <ReviewSection label="Constraint I will add or change" value={plan.m5FinalConstraint || plan.constraint} />
        <ReviewSection label="Success condition" value={plan.m4SuccessCriteria || plan.m5DraftSuccessCondition} />
        <ReviewSection label="Coaching question I will ask" value={plan.m6RefinedCoachingQuestion || plan.coachingQuestion} />
        
        <div className="grid grid-cols-2 gap-2">
          <ReviewSection label="Watch for" value={plan.m6WatchFor} />
          <ReviewSection label="If too easy" value={plan.m6AdjTooEasy} />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <ReviewSection label="If too hard" value={plan.m6AdjTooHard} />
          <ReviewSection label="If too weird" value={plan.m6AdjTooWeird} />
        </div>

        <ReviewSection label="If nothing changes" value={plan.m6AdjNothingChanges} />
      </div>

      <div className="mt-8 p-6 bg-lab-teal text-white rounded-2xl hand-drawn">
        <p className="font-bold text-center">If you can explain this plan clearly, you are ready to test it.</p>
      </div>
    </ScreenLayout>
  )
}

const ReviewSection = ({ label, value }) => (
  <div className="p-4 bg-white border-2 border-lab-ink/10 rounded-xl">
    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40 mb-1">{label}</p>
    <p className="text-sm font-bold text-lab-ink">{value || '---'}</p>
  </div>
)

export default Screen1
