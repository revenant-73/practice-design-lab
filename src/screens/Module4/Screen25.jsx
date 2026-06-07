import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen25 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Module 4 Summary">
      <TeachingText>
        In this module, you learned how to choose one constraint lever that matches your attention target.
      </TeachingText>

      <div className="grid grid-cols-2 gap-2 py-4">
        {[
          'Space', 'Scoring', 'Number of players', 'Starting situation',
          'Rules', 'Roles', 'Pressure', 'Opponent behavior'
        ].map((lever, i) => (
          <div key={i} className="flex items-center gap-2 p-2 bg-white hand-drawn text-xs font-medium text-lab-ink/70">
            <div className="w-1 h-1 rounded-full bg-lab-teal" />
            {lever}
          </div>
        ))}
      </div>

      <TeachingText>
        Do not add complexity to look clever. Choose the lever that makes the important information matter.
      </TeachingText>

      <div className="hand-drawn bg-lab-teal text-white p-6 my-4">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway</p>
        <p className="text-xl font-bold italic">“One meaningful lever is enough to start.”</p>
      </div>

      <div className="pt-4 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">You now have:</p>
        <ul className="space-y-2">
          {[
            "One activity you already use",
            "One clear practice problem",
            "One attention target",
            "One constraint lever"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-sm font-medium text-lab-ink">
              <div className="w-5 h-5 rounded-full bg-lab-teal/10 text-lab-teal flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <TeachingText className="pt-6 font-bold text-lab-teal italic">
        In the next module, you will turn that lever into a specific activity upgrade.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen25
