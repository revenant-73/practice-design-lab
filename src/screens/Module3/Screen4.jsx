import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const targets = [
    'Space', 'Teammates', 'Opponents', 'Timing', 'Pressure', 'Score',
    'Support options', 'Body position', 'Movement cues', 'Communication',
    'Consequences', 'Available choices', 'The next useful action'
  ]

  return (
    <ScreenLayout title="The Attention Target">
      <TeachingText>
        An attention target is the specific thing you want players to notice during the activity.
      </TeachingText>

      <div className="flex flex-wrap gap-2 my-6">
        {targets.map((target, idx) => (
          <span key={idx} className="px-3 py-1 bg-white border border-lab-ink/10 rounded-full text-[10px] font-mono uppercase tracking-wider text-lab-ink/60">
            {target}
          </span>
        ))}
      </div>

      <TeachingText>
        This does not mean you tell players exactly what to do every time. It means you know what the activity is meant to help them notice.
      </TeachingText>

      <div className="pt-6 space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Example</h3>
          <div className="h-px flex-1 bg-lab-teal/20" />
        </div>
        
        <div className="space-y-4 bg-white p-6 rounded-2xl border-2 border-lab-ink/5">
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Problem</p>
            <p className="text-sm font-bold">Players crowd the ball when a teammate is under pressure.</p>
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Attention target</p>
            <p className="text-sm italic">Open support space and passing angles.</p>
          </div>
          <div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Possible constraint later</p>
            <p className="text-sm text-lab-ink/70">The team earns a bonus point when a player creates or finds a useful support option away from pressure.</p>
          </div>
        </div>
      </div>

      <TeachingText className="font-bold text-lab-teal italic pt-4">
        The attention target comes before the constraint.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen4
