import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen21 = () => {
  const { setScreenReady } = useStore()
  const [activeSport, setActiveSport] = useState(0)

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const examples = [
    {
      sport: 'Basketball',
      problem: 'Off-ball players crowd the ball when the ball handler is pressured.',
      target: 'Open support angles.',
      lever: 'Space',
      why: 'The problem is about where support is being created or lost.'
    },
    {
      sport: 'Soccer',
      problem: 'Players force the ball down the line near the sideline, trapping the next teammate.',
      target: 'Pressure, central support, and safer options.',
      lever: 'Opponent behavior or Space',
      why: 'The coach may shape opponent pressure near the sideline or reward switching away from pressure.'
    },
    {
      sport: 'Volleyball',
      problem: 'Players send the ball over with no plan.',
      target: 'Open space and defender position.',
      lever: 'Scoring or Opponent behavior',
      why: 'Scoring can reward intentional placement, or opponent positioning can create a clearer reading problem.'
    },
    {
      sport: 'Hockey',
      problem: 'Players hold the puck too long under pressure.',
      target: 'Early support options.',
      lever: 'Pressure or Number of players',
      why: 'The coach can preserve pressure while creating more frequent chances to recognize support.'
    }
  ]

  return (
    <ScreenLayout title="Multi-Sport Examples">
      <TeachingText>
        See how different sports use levers to solve specific problems.
      </TeachingText>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {examples.map((ex, i) => (
          <button
            key={i}
            onClick={() => setActiveSport(i)}
            className={`px-4 py-2 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest whitespace-nowrap transition-all ${activeSport === i ? 'bg-lab-teal text-white' : 'bg-white border border-lab-ink/10 text-lab-ink/40'}`}
          >
            {ex.sport}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4 min-h-[280px] animate-in fade-in duration-500">
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">The Problem</p>
          <p className="text-sm font-bold">{examples[activeSport].problem}</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Attention Target</p>
          <p className="text-sm italic text-lab-ink/80">{examples[activeSport].target}</p>
        </div>
        <div className="pt-2 border-t border-lab-ink/5">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Best Lever</p>
          <p className="text-sm font-bold text-lab-teal">{examples[activeSport].lever}</p>
        </div>
        <div>
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Why</p>
          <p className="text-sm text-lab-ink/70 leading-relaxed">{examples[activeSport].why}</p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen21
