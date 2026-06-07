import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen6 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const outcomes = [
    { title: "1. It Is Too Easy", desc: "Players solve it quickly and the problem disappears." },
    { title: "2. It Is Too Hard", desc: "Players are overwhelmed and cannot engage." },
    { title: "3. It Gets Weird", desc: "Activity no longer feels connected to the sport." },
    { title: "4. Nothing Changes", desc: "Constraint doesn't shape attention or behavior." }
  ]

  return (
    <ScreenLayout title="The Four Common Outcomes">
      <TeachingText>
        When you test a constraint, you usually see one of these four outcomes. Each gives you a different adjustment path.
      </TeachingText>

      <div className="grid grid-cols-1 gap-3 py-4">
        {outcomes.map((o, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white hand-drawn border border-lab-ink/5 items-center">
            <div className="shrink-0 w-8 h-8 rounded-full bg-lab-coral/10 text-lab-coral flex items-center justify-center font-bold font-mono text-sm">
              {i + 1}
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm text-lab-ink leading-tight">{o.title}</h4>
              <p className="text-xs text-lab-ink/60 leading-tight">{o.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <KeyIdea>
        Do not abandon the idea too quickly. First, name what happened.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen6
