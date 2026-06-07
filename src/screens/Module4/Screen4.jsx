import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const { setScreenReady } = useStore()
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const handleQuizResult = (idx) => {
    const correct = idx === 1
    setIsCorrect(correct)
    setShowFeedback(true)
    if (correct) {
      setScreenReady(true)
    }
  }

  return (
    <ScreenLayout title="The One-Lever Rule">
      <TeachingText>
        When coaches first start using constraints, they often add too much. A bonus point, a new rule, a smaller space, a time limit, all at once.
      </TeachingText>

      <TeachingText>
        That usually creates confusion. Players stop solving the sport problem and start trying to remember the coach’s instructions.
      </TeachingText>

      <div className="hand-drawn p-6 border-l-4 border-lab-teal bg-lab-teal/5 my-6">
        <p className="text-xl font-serif font-bold italic text-lab-ink text-center">
          “One good constraint beats five clever ones.”
        </p>
      </div>

      <div className="pt-4 border-t border-lab-ink/10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lab-teal mb-4">Quick Check</p>
        <Quiz 
          question="Which version is usually better for a first attempt?"
          options={[
            "Change the scoring, space, roles, time limit, and contact rules all at once.",
            "Change one meaningful part of the activity and watch what happens."
          ]}
          correctAnswer={1}
          onSelect={handleQuizResult}
        />
      </div>

      {showFeedback && (
        <Feedback isCorrect={isCorrect}>
          {isCorrect 
            ? "Exactly. B gives you a cleaner signal. If the activity improves or breaks down, you can actually tell what changed."
            : "Actually, that might create too much noise. Try starting with just one meaningful change to see if it works."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen4
