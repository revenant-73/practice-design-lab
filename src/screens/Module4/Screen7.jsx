import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen7 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Lever 3: Number of Players">
      <TeachingText>
        Change the number of players when you want to change repetition, responsibility, or decision load.
      </TeachingText>

      <div className="grid grid-cols-2 gap-2 py-4">
        {[
          '1v1', '2v1 / 3v2', '2v2 / 3v3 / 4v4', 'Overloads',
          'Underloads', 'Small to Full progressions', 'Target players', 'Neutral players'
        ].map((item, i) => (
          <div key={i} className="text-[10px] font-mono font-bold uppercase tracking-wider p-2 bg-white border border-lab-ink/5 text-lab-ink/60 rounded">
            {item}
          </div>
        ))}
      </div>

      <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
        <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
          <p className="text-sm font-bold leading-tight">Players are hiding off the ball and not supporting the action.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible number constraint</p>
          <p className="text-sm italic">Use a smaller-sided version of the activity so each player has fewer places to hide and more responsibility to support.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use player numbers when the current activity gives players too little involvement, too much complexity, or not enough responsibility.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen7
