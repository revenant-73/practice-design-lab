import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = activityUpgradePlan.m5FormulaChange && 
                    activityUpgradePlan.m5FormulaNotice && 
                    activityUpgradePlan.m5FormulaUse
    setScreenReady(isReady)
  }, [activityUpgradePlan, setScreenReady])

  return (
    <ScreenLayout title="The Upgrade Formula">
      <TeachingText>
        Use this formula to draft your upgrade:
      </TeachingText>

      <div className="hand-drawn bg-white p-6 space-y-6 border-2 border-lab-ink/5">
        <div className="space-y-3">
          <p className="text-sm font-bold text-lab-ink/80">“In this activity, I will change...”</p>
          <input 
            type="text"
            value={activityUpgradePlan.m5FormulaChange || ''}
            onChange={(e) => updatePlan('m5FormulaChange', e.target.value)}
            placeholder="the scoring, space, etc."
            className="w-full p-3 bg-lab-cream/50 hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-none"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-bold text-lab-ink/80">“...so players need to notice...”</p>
          <input 
            type="text"
            value={activityUpgradePlan.m5FormulaNotice || ''}
            onChange={(e) => updatePlan('m5FormulaNotice', e.target.value)}
            placeholder="open space, teammate position, etc."
            className="w-full p-3 bg-lab-cream/50 hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-none"
          />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-bold text-lab-ink/80">“...and use it to...”</p>
          <input 
            type="text"
            value={activityUpgradePlan.m5FormulaUse || ''}
            onChange={(e) => updatePlan('m5FormulaUse', e.target.value)}
            placeholder="create better options, recover, etc."
            className="w-full p-3 bg-lab-cream/50 hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-none"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-lab-ink/5">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-2">Example</p>
        <p className="text-xs italic text-lab-ink/60 leading-relaxed">
          “In this activity, I will change the scoring so players need to notice open support space and use it to create better options for a teammate under pressure.”
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen4
