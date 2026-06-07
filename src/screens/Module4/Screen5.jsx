import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Lever 1: Space">
      <TeachingText>
        Change the space when players need to notice things like open space, crowding, support angles, or defensive gaps.
      </TeachingText>

      <div className="grid grid-cols-2 gap-2 py-4">
        {[
          'Smaller area', 'Larger area', 'Wider area', 'Narrower area',
          'Target zones', 'Protected zones', 'Bonus zones', 'No-go zones'
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
          <p className="text-sm font-bold leading-tight">Players crowd the ball when a teammate is under pressure.</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Possible space constraint</p>
          <p className="text-sm italic">The team earns a bonus point if the next successful action comes from a player who created or found space away from the crowded area.</p>
        </div>
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Best Use</p>
        <p className="text-sm text-lab-ink/80">Use space when the problem is about where players are, where they are not, or what areas they are failing to recognize.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen5
