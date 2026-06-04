import React, { useState } from 'react'
import { ScreenLayout, TeachingText, Feedback } from '../../components/CourseComponents'

const questions = [
  {
    text: "“We need to make better decisions.”",
    correct: "A",
    feedback: "This is too broad. What decisions? In what situation? What information are players missing?"
  },
  {
    text: "“Players are forcing the first option when they are under pressure, even when a teammate is open.”",
    correct: "B",
    feedback: "This gives us something to design around. The problem involves pressure, option selection, and recognizing an available teammate."
  },
  {
    text: "“We need more intensity.”",
    correct: "A",
    feedback: "This may be true, but it is not specific yet. Is the issue effort, attention, speed of transition, or something else?"
  },
  {
    text: "“After losing the ball, players are slow to recover into a useful defensive position.”",
    correct: "B",
    feedback: "This gives us a clear situation and behavior. Now we can design an activity that makes the recovery moment matter."
  }
]

const Screen6 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)

  const currentQuestion = questions[currentIdx]

  const handleNext = () => {
    setSelected(null)
    setCurrentIdx(currentIdx + 1)
  }

  return (
    <ScreenLayout title="Vague or Clear?">
      <TeachingText>
        Read each problem statement. Choose whether it is <strong>vague</strong> or <strong>clear enough to design from</strong>.
      </TeachingText>

      <div className="pt-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {questions.length}</h3>
            {selected && currentIdx < questions.length - 1 && (
              <button onClick={handleNext} className="text-sm font-bold text-lab-teal underline">Next Question</button>
            )}
          </div>
          <div className="p-6 bg-white hand-drawn">
            <p className="text-xl font-medium leading-snug italic">"{currentQuestion.text}"</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Vague', 'Clear enough'].map((label, i) => {
            const letter = i === 0 ? 'A' : 'B'
            const isSelected = selected === letter
            const isCorrect = letter === currentQuestion.correct
            
            let colorClass = 'border-lab-ink/10'
            if (selected) {
              if (letter === currentQuestion.correct) colorClass = 'border-lab-teal bg-lab-teal/5'
              else if (isSelected) colorClass = 'border-lab-coral bg-lab-coral/5'
            }

            return (
              <button
                key={label}
                disabled={selected !== null}
                onClick={() => setSelected(letter)}
                className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${colorClass} ${!selected && 'hover:border-lab-teal/40'}`}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-lab-ink/30">{letter}</span>
                <span className="font-bold text-sm">{label}</span>
              </button>
            )
          })}
        </div>

        {selected && (
          <Feedback isCorrect={selected === currentQuestion.correct}>
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen6
