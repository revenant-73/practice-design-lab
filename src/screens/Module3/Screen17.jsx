import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen17 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const question = {
    text: "Which attention target is more observable during a practice activity?",
    options: [
      "Players need to be more confident.",
      "Players need to notice when pressure is coming and where their support options are.",
      "Players need to care more.",
      "Players need to play smarter."
    ],
    correct: 1,
    feedback: "Correct. This gives the coach something specific to watch for. Confidence and smartness may matter, but they are too vague for designing or measuring the effect of a constraint."
  }

  useEffect(() => {
    if (selected === question.correct) {
      setScreenReady(true)
    }
  }, [selected, setScreenReady])

  return (
    <ScreenLayout title="Which Is More Observable?">
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
            {selected === question.correct ? question.feedback : "Not quite. Think about which option describes an actual behavior you can see on the field."}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen17
