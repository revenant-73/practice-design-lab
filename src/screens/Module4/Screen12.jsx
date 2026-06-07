import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen12 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const options = [
    'Zonal pressure', 'Starting shape', 'Spatial restriction', 'Weakness exploitation',
    'Round-by-round change', 'Predictable to Unpredictable', 'Locked roles', 'Recovery triggers'
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
    <ScreenLayout title="Lever 8: Opponent Behavior">
      <TeachingText>
        Change opponent behavior when you want players to read a specific problem or exploit a specific weakness.
      </TeachingText>

      <StepByStep steps={steps} label="Show Opponent Factors" />

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players are not recognizing when the opponent leaves space open.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible opponent constraint</p>
          <p className="text-sm italic">The defense starts by overloading one side, creating open space elsewhere. The attacking team must identify and use the space.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use opponent behavior when players need to learn to read an actual opponent, not just execute a pattern.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen12
