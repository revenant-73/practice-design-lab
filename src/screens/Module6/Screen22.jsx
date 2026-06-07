import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen22 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()
  
  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const plan = activityUpgradePlan

  return (
    <ScreenLayout title="Your Upgraded Activity Draft">
      <TeachingText>
        You now have a draft for your upgraded activity. This connects your clear practice problem to a specific constraint and a plan for coaching observation.
      </TeachingText>

      <div className="space-y-4 mt-6">
        <SummaryItem label="Scenario" value={plan.m5DraftOriginalActivity || plan.originalActivity} />
        <SummaryItem label="Selected Lever" value={plan.m4ChosenLever} teal />
        
        <div className="grid grid-cols-2 gap-2">
          <SummaryItem label="Opponent Rule" value={plan.m4OpponentRule} />
          <SummaryItem label="Restart Rule" value={plan.m4StartBox} />
        </div>
        
        <SummaryItem label="Scoring Rule" value={plan.m4SuccessCriteria} />
        <SummaryItem label="Coaching Question" value={plan.m6RefinedCoachingQuestion} teal />
        
        <div className="p-4 bg-lab-ink/5 rounded border border-lab-ink/10">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/60 mb-2">Player Questions</p>
          <ul className="text-[11px] italic space-y-1">
            <li>1. {plan.m6PlayerQuestion1}</li>
            <li>2. {plan.m6PlayerQuestion2}</li>
          </ul>
        </div>
      </div>
    </ScreenLayout>
  )
}

const SummaryItem = ({ label, value, teal }) => (
  <div className={`p-4 rounded border ${teal ? 'bg-lab-teal/5 border-lab-teal' : 'bg-white border-lab-ink/10'}`}>
    <p className={`text-[10px] font-mono font-bold uppercase tracking-widest ${teal ? 'text-lab-teal' : 'text-lab-ink/60'} mb-1`}>{label}</p>
    <p className="text-xs font-bold">{value || '---'}</p>
  </div>
)

export default Screen22
