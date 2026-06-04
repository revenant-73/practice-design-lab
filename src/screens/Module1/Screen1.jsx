import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(activityUpgradePlan.originalActivity.length > 2)
  }, [activityUpgradePlan.originalActivity, setScreenReady])

  return (
    <ScreenLayout title="Welcome to the Lab">
      <TeachingText>
        Most coaches do not need a brand-new list of drills. You probably already have activities you use all the time.
      </TeachingText>
      
      <div className="space-y-2 italic text-lab-ink/40 font-mono text-[10px] uppercase tracking-wider">
        <p>• Small-sided games • Competitive games</p>
        <p>• Technical activities • Scrimmage variations</p>
      </div>

      <TeachingText>
        The goal of this course is to help you <strong className="text-lab-teal">upgrade</strong> those activities so they create better learning problems for your players.
      </TeachingText>

      <div className="pt-8 space-y-10">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Case Study 01</h3>
            <div className="h-px flex-1 bg-lab-teal/20" />
          </div>
          <p className="text-2xl font-serif font-bold text-lab-ink leading-tight">Think of one activity you already use often in practice. Write it down.</p>
        </div>

        <div className="space-y-4 relative group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">Field Entry</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-3 text-2xl font-serif italic transition-all placeholder:text-lab-ink/10"
            placeholder="e.g., 3v3 Scrimmage"
            value={activityUpgradePlan.originalActivity}
            onChange={(e) => updatePlan('originalActivity', e.target.value)}
          />
          <p className="text-xs text-lab-ink/40 italic font-sans">Do not overthink it. Pick something familiar.</p>
          <div className="absolute -right-2 top-0 stamped opacity-0 group-focus-within:opacity-100 transition-opacity">Active</div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
