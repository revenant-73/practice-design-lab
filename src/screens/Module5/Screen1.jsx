import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Where We Left Off">
      <TeachingText>
        In Module 4, you chose one constraint lever. Now you will turn that lever into a specific change you can actually use in practice.
      </TeachingText>

      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">My Activity</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.originalActivity || 'Not yet defined'}</div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">My Attention Target</label>
          <div className="p-4 bg-white hand-drawn italic">
            {activityUpgradePlan.m3TargetNotice 
              ? `I want players to notice ${activityUpgradePlan.m3TargetNotice} when ${activityUpgradePlan.m3TargetWhen} so they can ${activityUpgradePlan.m3TargetSoTheyCan}.`
              : 'Not yet defined'}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">My Chosen Lever</label>
          <div className="p-4 bg-white hand-drawn font-bold italic text-lab-teal border-2 border-lab-teal/20">
            {activityUpgradePlan.m4ChosenLever || 'Not yet defined'}
          </div>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway Preview</p>
        <p className="text-xl font-bold italic">“The lever is the category. The constraint is the actual change.”</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
