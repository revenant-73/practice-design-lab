import React, { useState } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'

const Screen10 = () => {
  const [selected, setSelected] = useState(null)

  const options = [
    "“The players are lazy.”",
    "“Players away from the ball are not creating passing lanes when the ball handler is pressured.”",
    "“They need to run more.”",
    "“They do not care enough.”"
  ]

  return (
    <ScreenLayout title="What Problem Is Hiding Under the Complaint?">
      <div className="card bg-lab-ink text-white space-y-4">
        <p className="text-sm font-bold uppercase tracking-widest text-lab-teal">The Complaint</p>
        <p className="text-xl leading-snug italic">“We need to stop standing around.”</p>
      </div>

      <div className="pt-6 space-y-6">
        <p className="text-lg font-bold">Which clearer problem might be hiding underneath?</p>
        
        <div className="space-y-3">
          {options.map((option, idx) => {
            const isCorrect = idx === 1
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
          <Feedback isCorrect={selected === 1}>
            B turns the complaint into a design problem. It avoids judging the players and identifies what needs to change inside the activity. The issue may not be effort; it may be that players do not recognize when or how to support the ball handler.
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen10
