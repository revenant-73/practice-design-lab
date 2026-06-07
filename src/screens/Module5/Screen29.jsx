import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const questions = [
  {
    question: "What is the difference between a lever and a constraint?",
    options: [
      "A lever is the category of change; the constraint is the specific change you will use.",
      "A lever is always better than a constraint.",
      "A constraint is random; a lever is planned.",
      "There is no difference."
    ],
    correct: 0,
    feedback: "The lever points to the part of the activity you will adjust. The constraint is the actual activity upgrade."
  },
  {
    question: "Which activity upgrade is strongest?",
    options: [
      "“Try harder to communicate.”",
      "“Earn a bonus point when early, specific communication helps a teammate make a better decision.”",
      "“Do five push-ups after every quiet moment.”",
      "“Talk constantly.”"
    ],
    correct: 1,
    feedback: "This option creates a clear success condition and connects communication to usefulness."
  },
  {
    question: "Why does the success condition matter?",
    options: [
      "It tells players what counts inside the activity.",
      "It makes the activity more confusing.",
      "It replaces coaching completely.",
      "It makes every player choose the same answer."
    ],
    correct: 0,
    feedback: "A clear success condition helps the constraint guide attention and behavior."
  },
  {
    question: "A good coaching question should:",
    options: [
      "Point attention back to the problem",
      "Become a long lecture",
      "Tell players exactly what to do every time",
      "Shame players for mistakes"
    ],
    correct: 0,
    feedback: "The question should help players reflect, search, and adapt."
  }
]

const Screen29 = () => {
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
    <ScreenLayout title="Module 5 Quiz">
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

export default Screen29
