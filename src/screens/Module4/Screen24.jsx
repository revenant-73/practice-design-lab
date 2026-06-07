import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const questions = [
  {
    question: "What is a constraint lever?",
    options: [
      "A random rule added for variety",
      "One part of the activity the coach can adjust",
      "A punishment for poor performance",
      "A motivational phrase"
    ],
    correct: 1,
    feedback: "A constraint lever is one part of the activity you can change, such as space, scoring, player numbers, rules, roles, pressure, starting situation, or opponent behavior."
  },
  {
    question: "Why should you usually start with one lever?",
    options: [
      "Because one lever gives you a cleaner signal about what changed",
      "Because multiple levers are illegal",
      "Because players should never be challenged",
      "Because practice should be boring"
    ],
    correct: 0,
    feedback: "One meaningful change helps you see whether the constraint is shaping the problem in the way you intended."
  },
  {
    question: "Which lever is most connected to rewarding a desired behavior?",
    options: ["Scoring", "Shoe size", "Weather", "Team name"],
    correct: 0,
    feedback: "Scoring tells players what matters inside the activity. It can reward the behavior, decision, or outcome you want to make more meaningful."
  },
  {
    question: "Which lever is most useful when the problem happens in a specific game moment?",
    options: ["Starting situation", "Random punishment", "Longer warm-up", "Removing all decisions"],
    correct: 0,
    feedback: "Starting situation constraints let you place players directly into the moment they need to recognize and solve."
  }
]

const Screen24 = () => {
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
    <ScreenLayout title="Module 4 Quiz">
      <div className="pt-4 space-y-6">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {questions.length}</h3>
        </div>

        <Quiz 
          key={currentIdx}
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctAnswer={currentQuestion.correct}
          onSelect={handleSelect}
        />

        {selected !== null && (
          <Feedback 
            isCorrect={selected === currentQuestion.correct}
            onNext={handleNext}
            nextLabel={currentIdx < questions.length - 1 ? "Next Question" : "Complete Quiz"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen24
