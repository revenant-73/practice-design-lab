import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen14 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const question = {
    text: "Which attention target is specific enough to design a constraint around?",
    options: [
      "“I want players to notice everything.”",
      "“I want players to notice the game.”",
      "“I want players to notice when their teammate is under pressure and where the nearest useful support option is.”",
      "“I want players to notice that they need to be better.”"
    ],
    correct: 2,
    feedback: "Correct. This names the situation, the information, and the useful action that may follow. It gives the future constraint a clear target."
  }

  useEffect(() => {
    if (selected === question.correct) {
      setScreenReady(true)
    }
  }, [selected, setScreenReady])

  return (
    <ScreenLayout title="Too Broad or Specific Enough?">
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
            {selected === question.correct ? question.feedback : "Not quite. Look for the option that provides the most specific and actionable information."}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen14
