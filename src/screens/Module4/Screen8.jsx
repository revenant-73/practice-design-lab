import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen8 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const options = [
    'Start after mistake', 'Start from pressure', 'Start from transition', 'Start near boundary',
    'Start with advantage', 'Start with disadvantage', 'Start from game state', 'Start during recovery'
  ]

  const steps = [
    <div className="grid grid-cols-2 gap-2 py-4">
      {options.map((item, i) => (
        <div key={i} className="text-[10px] font-mono font-bold uppercase tracking-wider p-2 bg-white border border-lab-ink/5 text-lab-ink/60 rounded">
          {item}
        </div>
      ))}
    </div>
  ]

  return (
    <ScreenLayout title="Lever 4: Starting Situation">
      <TeachingText>
        Change the starting situation when the problem happens in a specific moment, like after a mistake or during a transition.
      </TeachingText>

      <StepByStep steps={steps} label="Show Starting Factors" />

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players are slow to recover after losing possession.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible starting constraint</p>
          <p className="text-sm italic">Every round starts immediately after a turnover, and the team has three seconds to recover into useful defensive positions.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use starting situations when you want players to rehearse recognizing and solving a specific game moment.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen8
