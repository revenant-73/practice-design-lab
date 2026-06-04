import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const questions = [
  {
    text: "“Communicate earlier.”",
    correct: "A",
    feedback: "This may be a useful reminder, but by itself it does not change the activity."
  },
  {
    text: "“The team earns a bonus point when early, useful communication helps a teammate make a better play.”",
    correct: "B",
    feedback: "This changes what the activity rewards. It gives communication a clearer purpose."
  },
  {
    text: "“Stop crowding the ball.”",
    correct: "A",
    feedback: "This names the problem, but it does not yet reshape the activity."
  },
  {
    text: "“The team can only score if the final action comes from a player who created or found open space.”",
    correct: "B",
    feedback: "This changes the problem. Players now have a reason to recognize and use space."
  }
]

const Screen6 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const currentQuestion = questions[currentIdx]

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setSelected(null)
      setCurrentIdx(currentIdx + 1)
    } else {
      setScreenReady(true)
    }
  }

  return (
    <ScreenLayout title="Telling or Designing?">
      <TeachingText>
        Read each coaching statement. Then choose whether it is mostly <strong>telling</strong> or <strong>designing</strong>.
      </TeachingText>

      <div className="pt-4 space-y-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {questions.length}</h3>
          <div className="p-6 bg-white hand-drawn">
            <p className="text-xl font-medium leading-snug">{currentQuestion.text}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Telling', 'Designing'].map((label, i) => {
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
                <span className="font-bold">{label}</span>
              </button>
            )
          })}
        </div>

        {selected && (
          <Feedback 
            isCorrect={selected === currentQuestion.correct}
            onNext={handleNext}
            nextLabel={currentIdx < questions.length - 1 ? "Next Question" : "Complete Task"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen6
