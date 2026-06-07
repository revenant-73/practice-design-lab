import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen8 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const question = {
    text: "A coach says: “After losing the ball, players are slow to recover into useful defensive positions.” What is the most useful attention target?",
    options: [
      "The mistake they just made",
      "The next recovery space and opponent threat",
      "Whether the coach is upset",
      "The technical details of the previous action"
    ],
    correct: 1,
    feedback: "Correct. This points players toward the next useful action. The issue is not rewatching the mistake. The issue is noticing where to recover and what threat matters next."
  }

  useEffect(() => {
    if (selected === question.correct) {
      setScreenReady(true)
    }
  }, [selected, setScreenReady])

  return (
    <ScreenLayout title="Quiz: What Needs to Be Noticed?">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-xl font-bold leading-tight">{question.text}</p>
        </div>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isCorrect = idx === question.correct
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
          <Feedback isCorrect={selected === question.correct}>
            {selected === question.correct ? question.feedback : "Not quite. Think about which option helps the player take the next useful action."}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen8
