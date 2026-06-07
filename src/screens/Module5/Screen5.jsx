import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const parts = [
    { title: "Original Activity", desc: "What are you already running?" },
    { title: "Problem", desc: "What is breaking down?" },
    { title: "Attention Target", desc: "What do players need to notice?" },
    { title: "Constraint", desc: "What one thing will you change?" },
    { title: "Success Condition", desc: "How will players know what matters?" },
    { title: "Coaching Question", desc: "What question will help players reflect?" }
  ]

  return (
    <ScreenLayout title="Anatomy of an Upgrade">
      <TeachingText>
        A useful activity upgrade includes six parts. If you can fill in these six parts, you have a usable first version.
      </TeachingText>

      <div className="grid grid-cols-1 gap-3 py-4">
        {parts.map((part, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white hand-drawn border border-lab-ink/5 items-center">
            <div className="shrink-0 w-6 h-6 rounded-full bg-lab-teal/10 text-lab-teal flex items-center justify-center font-bold font-mono text-xs">
              {i + 1}
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm text-lab-ink leading-tight">{part.title}</h4>
              <p className="text-[10px] text-lab-ink/40 uppercase tracking-widest">{part.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hand-drawn bg-lab-teal text-white p-6">
        <p className="text-xl font-bold italic text-center">“It needs to be clear enough to test.”</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen5
