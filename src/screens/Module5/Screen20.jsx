import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen20 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = (activityUpgradePlan.m5FinalConstraint || '').length > 10
    setScreenReady(isReady)
  }, [activityUpgradePlan.m5FinalConstraint, setScreenReady])

  return (
    <ScreenLayout title="Write Your First Constraint">
      <TeachingText>
        Now write your first version. The lever is the category; the constraint is the actual change.
      </TeachingText>

      <div className="hand-drawn bg-white p-6 space-y-4 border-2 border-lab-ink/5">
        <p className="text-sm font-bold text-lab-ink/80">“In this activity, I will change...”</p>
        <textarea 
          value={activityUpgradePlan.m5FinalConstraint || ''}
          onChange={(e) => updatePlan('m5FinalConstraint', e.target.value)}
          placeholder="the scoring by giving a bonus point when..."
          className="w-full p-4 bg-lab-cream/50 hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-none min-h-[120px]"
        />
      </div>

      <div className="pt-4 space-y-1">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">Your Attention Target</p>
        <p className="text-xs italic text-lab-ink/60">
          I want players to notice {activityUpgradePlan.m3TargetNotice || '...'} when {activityUpgradePlan.m3TargetWhen || '...'} so they can {activityUpgradePlan.m3TargetSoTheyCan || '...'}.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen20
