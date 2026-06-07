import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const examples = [
    { lever: 'Scoring', constraint: 'The team earns a bonus point when early, useful communication helps a teammate make a better decision.' },
    { lever: 'Space', constraint: 'The team can only score if the final action comes from a player who created or found useful space away from pressure.' },
    { lever: 'Starting Situation', constraint: 'Each round begins immediately after a turnover, and the team has three seconds to recover into useful defensive positions.' }
  ]

  return (
    <ScreenLayout title="Lever vs. Constraint">
      <TeachingText>
        Choosing a lever is not the same as creating the constraint. The lever points you in the right direction; the constraint tells the players what actually changes.
      </TeachingText>

      <div className="space-y-6 py-4">
        {examples.map((ex, i) => (
          <div key={i} className="bg-white hand-drawn overflow-hidden border-2 border-lab-ink/5">
            <div className="bg-lab-teal/10 px-4 py-2 border-b border-lab-ink/5 flex justify-between items-center">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">Lever</span>
              <span className="text-sm font-bold text-lab-ink">{ex.lever}</span>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Constraint</p>
              <p className="text-sm italic text-lab-ink/80">{ex.constraint}</p>
            </div>
          </div>
        ))}
      </div>

      <KeyIdea>
        A good constraint is specific enough to run, but simple enough to explain quickly.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
