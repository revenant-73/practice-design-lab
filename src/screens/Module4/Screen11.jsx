import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen11 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const options = [
    'Time limit', 'Score pressure', 'One-ball challenge', 'Double-score streak',
    'Late-game start', 'Mistake bonus for opp.', 'High-value recovery', 'Limited attempts'
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
    <ScreenLayout title="Lever 7: Pressure">
      <TeachingText>
        Change pressure when players can solve the problem in easy conditions but lose it when the challenge rises.
      </TeachingText>

      <StepByStep steps={steps} label="Show Pressure Factors" />

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players make good choices in low-pressure practice but rush when the score is close.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible pressure constraint</p>
          <p className="text-sm italic">Start each round at a close score and require the team to win two pressure points before rotating.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use pressure when the problem is not whether players can do something, but whether they can still do it when the moment matters.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen11
