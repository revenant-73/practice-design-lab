import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, ReflectionBox } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen23 = () => {
  const { 
    activityUpgradePlan, 
    updatePlan,
    setScreenReady 
  } = useStore()
  
  useEffect(() => {
    setScreenReady(
      !!activityUpgradePlan.m6FinalReflectionWorking && 
      !!activityUpgradePlan.m6FinalReflectionNextAction
    )
  }, [activityUpgradePlan.m6FinalReflectionWorking, activityUpgradePlan.m6FinalReflectionNextAction, setScreenReady])

  return (
    <ScreenLayout title="Final Reflection">
      <TeachingText>
        Before you finish Module 6, take a moment to reflect on your progress through the Practice Design Lab.
      </TeachingText>

      <div className="space-y-6 mt-4">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Which part of the Lab was most useful?</p>
          <ReflectionBox
            placeholder="e.g., Finding the 'Attention Target'..."
            value={activityUpgradePlan.m6FinalReflectionWorking}
            onChange={(v) => updatePlan('m6FinalReflectionWorking', v)}
          />
        </div>
        
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">What is one thing you will do differently in your next session?</p>
          <ReflectionBox
            placeholder="e.g., I'll wait longer before asking a question."
            value={activityUpgradePlan.m6FinalReflectionNextAction}
            onChange={(v) => updatePlan('m6FinalReflectionNextAction', v)}
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen23
