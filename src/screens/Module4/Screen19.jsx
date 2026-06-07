import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen19 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const examples = [
    { lever: 'Scoring', constraint: 'The team earns a bonus point when early, useful communication helps a teammate make a better decision.' },
    { lever: 'Space', constraint: 'A player must create or find open support space before the team can score.' },
    { lever: 'Pressure', constraint: 'Start each round at a close score, and the team must solve the same problem under game-like pressure.' }
  ]

  return (
    <ScreenLayout title="Category vs. Change">
      <TeachingText>
        You have chosen the lever. But we are not finished. Choosing the lever is not the same as writing the constraint.
      </TeachingText>

      <div className="space-y-6 py-4">
        {examples.map((ex, i) => (
          <div key={i} className="bg-white hand-drawn overflow-hidden border-2 border-lab-ink/5">
            <div className="bg-lab-teal/10 px-4 py-2 border-b border-lab-ink/5 flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">Lever (Category)</span>
              <span className="text-sm font-bold text-lab-ink">{ex.lever}</span>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Constraint (Actual Change)</p>
              <p className="text-sm italic text-lab-ink/80">{ex.constraint}</p>
            </div>
          </div>
        ))}
      </div>

      <TeachingText>
        The <strong>lever</strong> is the category. The <strong>constraint</strong> is the actual change.
      </TeachingText>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-4">
        <p className="text-lg font-serif italic">
          “In the next module, you will turn the lever into a specific activity upgrade.”
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen19
