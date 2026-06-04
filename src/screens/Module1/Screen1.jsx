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
      
      <div className="space-y-2 italic text-lab-ink/60 text-sm">
        <p>Small-sided games. Competitive games. Warm-up games.</p>
        <p>Technical activities. Pressure games. Scrimmage variations.</p>
      </div>

      <TeachingText>
        The goal of this course is to help you <strong>upgrade</strong> those activities so they create better learning problems for your players.
      </TeachingText>

      <div className="pt-8 space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Quick Reflection</h3>
          <p className="text-lg">Think of one activity you already use often in practice. Write it down.</p>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-lab-ink/40">My Activity</label>
          <input
            type="text"
            className="w-full bg-transparent border-b-2 border-lab-ink/20 focus:border-lab-teal outline-none py-2 text-xl transition-colors"
            placeholder="e.g., 3v3 Scrimmage"
            value={activityUpgradePlan.originalActivity}
            onChange={(e) => updatePlan('originalActivity', e.target.value)}
          />
          <p className="text-sm text-lab-ink/50 italic">Do not overthink it. Pick something familiar.</p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
