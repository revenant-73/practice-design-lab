import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen21 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  const examples = [
    { weak: '“Communicate better.”', strong: '“The team earns a bonus point when communication is early, specific, and helps a teammate make a better decision.”' },
    { weak: '“Use space.”', strong: '“The team earns a bonus point when a player creates or finds useful space away from pressure before the team scores.”' },
    { weak: '“Recover faster.”', strong: '“After losing possession, the team has three seconds to recover into useful defensive positions.”' }
  ]

  return (
    <ScreenLayout title="Make Success Visible">
      <TeachingText>
        A constraint needs a success condition. It tells players what counts. Without it, the activity can become confusing.
      </TeachingText>

      <div className="space-y-4 py-4">
        {examples.map((ex, i) => (
          <div key={i} className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-lab-coral/5 border border-lab-coral/20 rounded text-[10px] italic text-lab-ink/60 line-through">
              {ex.weak}
            </div>
            <div className="p-3 bg-lab-teal/5 border border-lab-teal/20 rounded text-[10px] font-medium text-lab-ink">
              {ex.strong}
            </div>
          </div>
        ))}
      </div>

      <KeyIdea>
        The success condition should make the constraint visible.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen21
