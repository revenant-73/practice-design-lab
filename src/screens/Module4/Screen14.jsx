import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const questions = [
  {
    target: "Players need to notice open space and support angles.",
    options: ["Space", "Uniform color", "Punishment", "Lecture length"],
    correct: 0,
    feedback: "Space is the strongest match because the attention target is about where players are and where useful options can appear."
  },
  {
    target: "Players need to value early useful communication.",
    options: ["Scoring", "More laps", "Random teams", "Longer explanation"],
    correct: 0,
    feedback: "Scoring can reward the behavior and make communication matter inside the activity."
  },
  {
    target: "Players need more responsibility and fewer places to hide.",
    options: ["Number of players", "New uniforms", "Extra conditioning", "More waiting in line"],
    correct: 0,
    feedback: "Reducing player numbers often increases involvement, responsibility, and decision-making opportunities."
  }
]

const Screen14 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const currentQuestion = questions[currentIdx]

  const handleSelect = (idx) => {
    setSelected(idx)
  }

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setSelected(null)
      setCurrentIdx(currentIdx + 1)
    } else {
      setScreenReady(true)
    }
  }

  return (
    <ScreenLayout title="Match Target to Lever">
      <TeachingText>
        Choose the lever that best fits the attention target.
      </TeachingText>

      <div className="pt-4 space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Target {currentIdx + 1} of {questions.length}</h3>
          <div className="p-6 bg-white hand-drawn">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-2">Attention Target</p>
            <p className="text-xl font-medium leading-snug italic">"{currentQuestion.target}"</p>
          </div>
        </div>

        <Quiz 
          key={currentIdx}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correct}
          onSelect={handleSelect}
        />

        {selected !== null && (
          <Feedback 
            isCorrect={selected === currentQuestion.correct}
            onNext={handleNext}
            nextLabel={currentIdx < questions.length - 1 ? "Next Target" : "Complete Task"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen14
