import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen20 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Module 3 Summary">
      <TeachingText>
        A constraint works better when it has a clear attention target. In this module, you learned to ask:
      </TeachingText>

      <div className="grid grid-cols-1 gap-2 my-6">
        {[
          "What information are players missing?",
          "Are they noticing too late?",
          "Are they noticing the wrong thing?",
          "Are they noticing but not acting?",
          "What do I want them to notice earlier or more clearly?"
        ].map((q, i) => (
          <div key={i} className="flex gap-4 items-center bg-white p-3 rounded-lg border border-lab-ink/5 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-lab-teal/10 flex items-center justify-center text-lab-teal">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <p className="text-sm font-medium text-lab-ink/80">{q}</p>
          </div>
        ))}
      </div>

      <div className="bg-lab-teal text-white p-6 rounded-2xl organic-border border-none shadow-xl mb-8">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] opacity-80 mb-2">Module Takeaway</h4>
        <p className="text-xl font-bold italic leading-tight">
          “Before you change the activity, decide what you want players to notice.”
        </p>
      </div>

      <div className="space-y-4 pt-4 border-t border-lab-ink/5">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">Before Moving On, you have:</h4>
        <ul className="grid grid-cols-1 gap-3">
          {[
            "One activity you already use",
            "One clear practice problem",
            "One specific attention target",
            "A better sense of what players need to notice earlier"
          ].map((item, i) => (
            <li key={i} className="flex gap-3 items-center text-xs text-lab-ink/60 italic">
              <div className="w-1.5 h-1.5 rounded-full bg-lab-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card bg-white mt-8">
        <p className="font-bold text-xs uppercase tracking-widest text-lab-teal mb-2">Up Next</p>
        <p className="text-sm">In the next module, you will choose the constraint lever that best matches your attention target.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen20
