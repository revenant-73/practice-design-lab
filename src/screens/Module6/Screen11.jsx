import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen11 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const quadrants = [
    { title: 'Too Easy', icon: '↗', desc: 'Increase challenge.' },
    { title: 'Too Hard', icon: '🎒', desc: 'Simplify the problem.' },
    { title: 'Too Weird', icon: '➿', desc: 'Reconnect to the sport.' },
    { title: 'Nothing Changes', icon: '⎯', desc: 'Check the match.' }
  ]

  return (
    <ScreenLayout title="Read the Signal">
      <VisualPlaceholder 
        label="Read the Signal"
        caption="Each outcome is a signal for the next version."
      >
        <div className="grid grid-cols-2 gap-2 w-full h-full p-4">
          {quadrants.map((q, i) => (
            <div key={i} className="bg-white border-2 border-lab-teal/30 rounded-lg p-2 flex flex-col items-center justify-center text-center gap-1">
              <span className="text-sm">{q.icon}</span>
              <p className="text-[7px] font-mono font-bold uppercase tracking-widest text-lab-teal">{q.title}</p>
              <p className="text-[6px] text-lab-ink/60">{q.desc}</p>
            </div>
          ))}
        </div>
      </VisualPlaceholder>

      <TeachingText>
        The goal is not to judge the constraint as good or bad. The goal is to decide what the next version needs.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen11
