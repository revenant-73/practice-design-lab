import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const [showFeedback, setShowFeedback] = useState(false)
  const { setScreenReady } = useStore()

  useEffect(() => {
    if (showFeedback) {
      setScreenReady(true)
    }
  }, [showFeedback, setScreenReady])

  return (
    <ScreenLayout title="What Constraints Are Not">
      <TeachingText>
        Constraints can be powerful. They can also be misused.
      </TeachingText>
      
      <div className="card space-y-2">
        <p className="font-bold text-xs uppercase tracking-widest text-lab-coral">A constraint is not:</p>
        <ul className="text-sm space-y-1 text-lab-ink/80 list-disc list-inside">
          <li>A random rule</li>
          <li>A punishment</li>
          <li>A gimmick</li>
          <li>A trick to make practice look creative</li>
          <li>A way to force one perfect answer</li>
        </ul>
      </div>

      <div className="pt-6 space-y-6">
        <div className="space-y-2">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Quick Check</h3>
          <p className="text-lg">Which one sounds more like a useful constraint?</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={() => setShowFeedback(true)}
            className="w-full text-left p-4 rounded-lg border-2 border-lab-ink/10 hover:border-lab-teal/40 transition-all"
          >
            <div className="flex gap-4">
              <span className="font-bold text-lab-ink/30 uppercase">A</span>
              <span className="flex-1 text-sm">“If you make a mistake, your team runs.”</span>
            </div>
          </button>

          <button 
            onClick={() => setShowFeedback(true)}
            className="w-full text-left p-4 rounded-lg border-2 border-lab-ink/10 hover:border-lab-teal/40 transition-all"
          >
            <div className="flex gap-4">
              <span className="font-bold text-lab-ink/30 uppercase">B</span>
              <span className="flex-1 text-sm">“Your team earns a bonus point when early communication helps a teammate make a better decision.”</span>
            </div>
          </button>
        </div>

        {showFeedback && (
          <Feedback isCorrect={true}>
            B is better because it shapes attention and behavior inside the activity. The players are not just avoiding punishment. They are learning what useful communication looks like, when it matters, and how it helps the team.
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen4
