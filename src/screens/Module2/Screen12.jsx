import React, { useState } from 'react'
import { ScreenLayout, TeachingText, Feedback } from '../../components/CourseComponents'

const statements = [
  {
    text: "“They do not communicate.”",
    correct: "Complaint",
    feedback: "This names a broad concern, but it does not yet say what kind of communication is missing or when it matters."
  },
  {
    text: "“Players are not calling pressure early enough for teammates to adjust.”",
    correct: "Problem",
    feedback: "This identifies the missing behavior and the purpose of the communication."
  },
  {
    text: "“They always panic.”",
    correct: "Complaint",
    feedback: "This describes frustration, but it does not tell us what is happening in the game."
  },
  {
    text: "“When the score is close, players rush the first option instead of recognizing the better available option.”",
    correct: "Problem",
    feedback: "This gives us situation, behavior, and consequence. It can be designed around."
  }
]

const Screen12 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)

  const current = statements[currentIdx]

  const handleNext = () => {
    setSelected(null)
    setCurrentIdx(currentIdx + 1)
  }

  return (
    <ScreenLayout title="Complaint or Practice Problem?">
      <TeachingText>
        Sort each statement into the correct category.
      </TeachingText>

      <div className="pt-4 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Statement {currentIdx + 1} of {statements.length}</h3>
            {selected && currentIdx < statements.length - 1 && (
              <button onClick={handleNext} className="text-sm font-bold text-lab-teal underline">Next Statement</button>
            )}
          </div>
          <div className="p-6 bg-white hand-drawn min-h-[100px] flex items-center justify-center">
            <p className="text-xl font-medium text-center leading-snug italic">"{current.text}"</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Complaint', 'Problem'].map((label) => {
            const isSelected = selected === label
            const isCorrect = label === current.correct
            
            let colorClass = 'border-lab-ink/10'
            if (selected) {
              if (label === current.correct) colorClass = 'border-lab-teal bg-lab-teal/5'
              else if (isSelected) colorClass = 'border-lab-coral bg-lab-coral/5'
            }

            return (
              <button
                key={label}
                disabled={selected !== null}
                onClick={() => setSelected(label)}
                className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${colorClass} ${!selected && 'hover:border-lab-teal/40'}`}
              >
                <span className="font-bold">{label}</span>
              </button>
            )
          })}
        </div>

        {selected && (
          <Feedback isCorrect={selected === current.correct}>
            {current.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen12
