import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const questions = [
  {
    problem: "Players are slow to switch from attack to defense after losing possession.",
    options: ["Starting situation", "Jersey numbers", "Longer lecture", "Removing the opponent"],
    correct: 0,
    feedback: "A starting situation can repeatedly place players in the exact moment they need to solve: the transition after losing possession."
  },
  {
    problem: "Players are technically active, but many players are barely involved in decisions.",
    options: ["Number of players", "More waiting", "Bigger speeches", "No scoring"],
    correct: 0,
    feedback: "Changing player numbers can increase involvement, responsibility, and decision-making opportunities."
  },
  {
    problem: "Players always choose the same option, even when the opponent takes it away.",
    options: ["Rules or opponent behavior", "Punishment", "Removing all choices", "Ignoring the problem"],
    correct: 0,
    feedback: "A rule can nudge players away from one habitual option, and opponent behavior can make the need to read more obvious."
  }
]

const Screen22 = () => {
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
    <ScreenLayout title="Which Lever Matches Best?">
      <div className="pt-4 space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {questions.length}</h3>
          <div className="p-6 bg-white hand-drawn">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-2">The Problem</p>
            <p className="text-xl font-medium leading-snug">"{currentQuestion.problem}"</p>
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
            nextLabel={currentIdx < questions.length - 1 ? "Next Question" : "Complete Task"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen22
