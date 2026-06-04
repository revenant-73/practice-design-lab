import React, { useState } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'

const Screen9 = () => {
  const [selected, setSelected] = useState(null)

  const options = [
    "“Players need better possession.”",
    "“Players are panicking when pressured near the sideline.”",
    "“Players are forcing passes down the line near the sideline, which traps the next teammate and makes possession easier to lose.”",
    "“Players need to be more confident.”"
  ]

  return (
    <ScreenLayout title="Scenario: Choose the Better Problem">
      <div className="card bg-lab-ink text-white space-y-4">
        <p className="text-sm font-bold uppercase tracking-widest text-lab-teal">The Coach Says</p>
        <p className="text-xl leading-snug italic">“We need to keep possession better.”</p>
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-lg font-bold">Which version is more useful for designing a constraint?</p>
        
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
            C is the strongest because it includes the situation, behavior, and consequence.
            <ul className="mt-2 text-xs space-y-1 opacity-80">
              <li>• Situation: near the sideline</li>
              <li>• Behavior: forcing passes down the line</li>
              <li>• Consequence: trapping the next teammate and losing possession</li>
            </ul>
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen9
