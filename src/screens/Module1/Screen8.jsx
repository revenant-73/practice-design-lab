import React, { useState } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'

const Screen8 = () => {
  const [selected, setSelected] = useState(null)

  const options = [
    "Players run if they miss two shots in a row.",
    "Every player must shoot with their non-dominant hand.",
    "A team earns a bonus point when a player passes out of pressure to an open teammate.",
    "The coach stops play every time a player makes the wrong choice and explains the correct answer."
  ]

  return (
    <ScreenLayout title="Scenario Check">
      <div className="card bg-lab-ink text-white space-y-4">
        <p className="text-sm font-bold uppercase tracking-widest text-lab-teal">The Situation</p>
        <p className="text-lg leading-snug">
          A basketball coach runs a 3v3 game. The players keep forcing shots into pressure instead of recognizing open teammates. 
        </p>
        <p className="text-sm italic opacity-80">
          The coach wants players to notice the defense and make better decisions.
        </p>
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-lg font-bold">Which constraint is most useful?</p>
        
        <div className="space-y-3">
          {options.map((option, idx) => {
            const isCorrect = idx === 2
            const showFeedback = selected !== null
            
            let colorClass = 'border-lab-ink/10 bg-white'
            if (showFeedback) {
              if (isCorrect) colorClass = 'border-lab-teal bg-lab-teal/5'
              else if (selected === idx) colorClass = 'border-lab-coral bg-lab-coral/5'
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => setSelected(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex gap-4 ${colorClass} ${!showFeedback && 'hover:border-lab-teal/40'}`}
              >
                <span className="font-bold text-lab-ink/30 uppercase">{String.fromCharCode(65 + idx)}</span>
                <span className="flex-1 text-sm">{option}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <Feedback isCorrect={selected === 2}>
            C connects the constraint to the actual problem. The problem is not effort. The problem is that players are missing better options under pressure. The constraint rewards noticing pressure, finding the open teammate, and choosing the better option.
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen8
