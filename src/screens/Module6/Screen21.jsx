import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, ReflectionBox } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen21 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()
  const { m6PlayerQuestion1, m6PlayerQuestion2 } = activityUpgradePlan
  
  useEffect(() => {
    setScreenReady(!!m6PlayerQuestion1 && !!m6PlayerQuestion2)
  }, [m6PlayerQuestion1, m6PlayerQuestion2, setScreenReady])

  return (
    <ScreenLayout title="Draft Player Questions">
      <TeachingText>
        Now choose two **player questions** that could prompt your players to explore the answer to your coaching question.
      </TeachingText>

      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Question 1</p>
          <ReflectionBox
            placeholder="e.g., Where was the space opening up?"
            value={m6PlayerQuestion1}
            onChange={(v) => updatePlan('m6PlayerQuestion1', v)}
          />
        </div>
        
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Question 2</p>
          <ReflectionBox
            placeholder="e.g., When did you decide to pass?"
            value={m6PlayerQuestion2}
            onChange={(v) => updatePlan('m6PlayerQuestion2', v)}
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen21
