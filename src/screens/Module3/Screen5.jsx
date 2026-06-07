import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = 
      activityUpgradePlan.m3AttentionTarget?.length > 2 &&
      activityUpgradePlan.m3WhatExactly?.length > 2 &&
      activityUpgradePlan.m3WhenNotice?.length > 2 &&
      activityUpgradePlan.m3WhyMatters?.length > 2
    setScreenReady(isReady)
  }, [
    activityUpgradePlan.m3AttentionTarget,
    activityUpgradePlan.m3WhatExactly,
    activityUpgradePlan.m3WhenNotice,
    activityUpgradePlan.m3WhyMatters,
    setScreenReady
  ])

  return (
    <ScreenLayout title="Name the Attention Target">
      <TeachingText>
        Return to your clear practice problem. Complete this sentence:
      </TeachingText>

      <div className="bg-lab-ink text-white p-6 rounded-2xl font-serif italic text-lg leading-tight my-6">
        “In this activity, I want players to notice <span className="text-lab-teal underline decoration-2 underline-offset-4">{activityUpgradePlan.m3AttentionTarget || '__________'}</span> earlier or more clearly.”
      </div>

      <div className="space-y-8 pt-4">
        <div className="space-y-3 group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">My attention target</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-xl font-serif italic transition-all placeholder:text-lab-ink/10"
            placeholder="e.g., Open support space"
            value={activityUpgradePlan.m3AttentionTarget}
            onChange={(e) => updatePlan('m3AttentionTarget', e.target.value)}
          />
        </div>

        <div className="space-y-3 group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">What exactly should players notice?</label>
          <textarea
            className="w-full bg-white/50 organic-border p-4 min-h-[80px] outline-none focus:border-lab-teal transition-all font-sans text-sm"
            placeholder="Describe the specific cue or information..."
            value={activityUpgradePlan.m3WhatExactly}
            onChange={(e) => updatePlan('m3WhatExactly', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-3 group">
            <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">When should they notice it?</label>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-sm transition-all"
              placeholder="e.g., Before the teammate is trapped"
              value={activityUpgradePlan.m3WhenNotice}
              onChange={(e) => updatePlan('m3WhenNotice', e.target.value)}
            />
          </div>

          <div className="space-y-3 group">
            <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">Why does it matter?</label>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-sm transition-all"
              placeholder="e.g., To create more attacking options"
              value={activityUpgradePlan.m3WhyMatters}
              onChange={(e) => updatePlan('m3WhyMatters', e.target.value)}
            />
          </div>
        </div>
      </div>

      <p className="text-[10px] font-mono text-lab-ink/40 uppercase tracking-widest pt-8 text-center italic">
        Do not choose the constraint yet. For now, your job is to aim the learning.
      </p>
    </ScreenLayout>
  )
}

export default Screen5
