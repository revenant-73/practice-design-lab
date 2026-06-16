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

export const M3Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 3"
    question="What is the primary purpose of a constraint in the Practice Design Lab?"
    options={[
      "To punish players for making technical mistakes",
      "To make practice look more creative and complex",
      "To shape what players notice, choose, and do",
      "To force players to use one perfect technique"
    ]}
    correctAnswer={2}
    feedback="Exactly. We use constraints to shape the learning environment, not just to add rules."
  />
)

export const M4Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 4"
    question="Why do we need to identify the 'Real Problem' before building a constraint?"
    options={[
      "So we can explain the theory to our players",
      "So the constraint actually addresses the behavior we want to change",
      "To make the practice session last longer",
      "To ensure we are using enough technical jargon"
    ]}
    correctAnswer={1}
    feedback="Correct! A constraint that doesn't match the problem is just a random rule."
  />
)

export const M5Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 5"
    question="What does it mean for a constraint to 'afford' action?"
    options={[
      "It makes the activity more expensive to run",
      "It restricts players so they only have one choice",
      "It invites players to explore and find new solutions",
      "It requires a lot of coaching explanation"
    ]}
    correctAnswer={2}
    feedback="Yes! Good constraints create a landscape that invites exploration rather than just shutting options down."
  />
)

export const M6Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 6"
    question="What is an 'Attention Target'?"
    options={[
      "The specific information players need to notice to solve the problem",
      "The player who is making the most mistakes",
      "A physical target on the field players must hit",
      "The coach's whiteboard during a tactical timeout"
    ]}
    correctAnswer={0}
    feedback="Perfect. We want players to notice specific cues in the environment to help them make better decisions."
  />
)

export default RetrievalScreen
