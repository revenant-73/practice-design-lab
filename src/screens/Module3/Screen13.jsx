import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen13 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = 
      activityUpgradePlan.m3TargetNotice?.length > 2 &&
      activityUpgradePlan.m3TargetWhen?.length > 2 &&
      activityUpgradePlan.m3TargetSoTheyCan?.length > 2
    setScreenReady(isReady)
  }, [
    activityUpgradePlan.m3TargetNotice,
    activityUpgradePlan.m3TargetWhen,
    activityUpgradePlan.m3TargetSoTheyCan,
    setScreenReady
  ])

  return (
    <ScreenLayout title="The Attention Target Sentence">
      <TeachingText>
        Use this sentence to sharpen your attention target. It connects the information to the moment and the outcome.
      </TeachingText>

      <div className="bg-lab-ink text-white p-8 rounded-3xl font-serif italic text-lg leading-snug my-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <p>
          “I want players to notice <span className="text-lab-teal underline underline-offset-4 decoration-2">{activityUpgradePlan.m3TargetNotice || '__________'}</span> when <span className="text-lab-teal underline underline-offset-4 decoration-2">{activityUpgradePlan.m3TargetWhen || '__________'}</span> so they can <span className="text-lab-teal underline underline-offset-4 decoration-2">{activityUpgradePlan.m3TargetSoTheyCan || '__________'}</span>.”
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2 group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">I want players to notice...</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-base transition-all"
            placeholder="e.g., Open support space"
            value={activityUpgradePlan.m3TargetNotice}
            onChange={(e) => updatePlan('m3TargetNotice', e.target.value)}
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">When...</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-base transition-all"
            placeholder="e.g., A teammate is under pressure"
            value={activityUpgradePlan.m3TargetWhen}
            onChange={(e) => updatePlan('m3TargetWhen', e.target.value)}
          />
        </div>

        <div className="space-y-2 group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">So they can...</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-2 text-base transition-all"
            placeholder="e.g., Create better options"
            value={activityUpgradePlan.m3TargetSoTheyCan}
            onChange={(e) => updatePlan('m3TargetSoTheyCan', e.target.value)}
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen13
