import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'
import { Copy, Check, Download } from 'lucide-react'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const plan = activityUpgradePlan

  const fullPlanText = `
ACTIVITY UPGRADE PLAN
---------------------
Activity: ${plan.m5DraftOriginalActivity || plan.originalActivity}
Problem: ${plan.m5DraftProblem || plan.problem}
Attention Target: ${plan.m5DraftAttentionTarget || (plan.m3TargetNotice ? `I want players to notice ${plan.m3TargetNotice} when ${plan.m3TargetWhen} so they can ${plan.m3TargetSoTheyCan}.` : plan.attentionTarget)}
Lever: ${plan.m4ChosenLever}
Constraint: ${plan.m5FinalConstraint || plan.constraint}
Success Condition: ${plan.m4SuccessCriteria || plan.m5DraftSuccessCondition}
Coaching Question: ${plan.m6RefinedCoachingQuestion || plan.coachingQuestion}
Watch For: ${plan.m6WatchFor}
Adjustments:
- Too Easy: ${plan.m6AdjTooEasy}
- Too Hard: ${plan.m6AdjTooHard}
- Too Weird: ${plan.m6AdjTooWeird}
- Nothing Changes: ${plan.m6AdjNothingChanges}
  `.trim()

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPlanText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <ScreenLayout title="Your Activity Upgrade Plan Is Ready">
      <div className="flex items-center justify-between gap-4 mb-2">
        <TeachingText className="flex-1">
          Review your practice-ready activity upgrade before moving on.
        </TeachingText>
        <button 
          onClick={handleCopy}
          className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all text-[10px] font-bold uppercase tracking-widest ${copied ? 'bg-lab-teal border-lab-teal text-white' : 'border-lab-ink/10 text-lab-ink/40 hover:border-lab-teal/40 hover:text-lab-teal'}`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Copied' : 'Copy Plan'}
        </button>
      </div>

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
