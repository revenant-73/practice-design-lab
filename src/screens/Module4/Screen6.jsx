import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen6 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const options = [
    'Bonus points', 'Double points', 'Must-win sequences', 'Start at pressure score',
    'Consequence scoring', 'Streak scoring', 'Response scoring', 'Behavior-locked scoring'
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
    <ScreenLayout title="Lever 2: Scoring">
      <TeachingText>
        Change the scoring when players need to value a behavior, decision, or outcome differently. Scoring is powerful because it tells players: <strong>"This matters."</strong>
      </TeachingText>

      <StepByStep steps={steps} label="Show Scoring Factors" />

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players keep choosing safe options that do not challenge the opponent.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible scoring constraint</p>
          <p className="text-sm italic">A team earns two points when an action creates clear pressure on the opponent, and one point for a normal score.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use scoring when players understand the activity but need the game to reward a different behavior or decision.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen6
