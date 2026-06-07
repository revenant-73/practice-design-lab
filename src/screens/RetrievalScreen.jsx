import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback, Quiz } from '../components/CourseComponents'
import { useStore } from '../store'

const RetrievalScreen = ({ title, question, options, correctAnswer, feedback, nextModule }) => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === correctAnswer) {
      setScreenReady(true)
    }
  }

  return (
    <ScreenLayout title={title || "Quick Recall"}>
      <div className="mb-6 p-4 bg-lab-teal/5 border-l-4 border-lab-teal text-xs italic text-lab-ink/70">
        Wait! Before we start {nextModule}, let's make sure the foundation is solid.
      </div>
      
      <Quiz 
        question={question}
        options={options}
        correctAnswer={correctAnswer}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <div className="mt-8">
          <Feedback isCorrect={selected === correctAnswer}>
            {feedback}
          </Feedback>
        </div>
      )}
    </ScreenLayout>
  )
}

export default RetrievalScreen
