import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen9 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const options = [
    'Must use teammate', 'Attack time limit', 'No repeating options', 'Change attack point',
    'Contact limits', 'Entry timing rules', 'Recovery requirements', 'Outcome-specific rules'
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
    <ScreenLayout title="Lever 5: Rules">
      <TeachingText>
        Change the rules when you want to limit, require, or shape player options. Rules nudge players away from habits and toward exploration.
      </TeachingText>

      <StepByStep steps={steps} label="Show Rule Factors" />

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players force the same option every time.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible rule constraint</p>
          <p className="text-sm italic">The team cannot score using the same final option twice in a row.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use rules when the activity needs a boundary that nudges players away from habits and toward exploration.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen9
