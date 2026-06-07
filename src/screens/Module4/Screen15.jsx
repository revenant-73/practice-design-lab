import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen15 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Scenario: Crowding">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-sm">A coach runs a 5v5 small-sided game. The players keep crowding the ball when a teammate is pressured. The coach wants players to notice <strong>open support space earlier</strong>.</p>
      </div>

      <TeachingText className="pt-4">
        Which lever is probably the best first choice?
      </TeachingText>

      <Quiz 
        options={["Space", "Punishment", "Longer water break", "Random trivia questions"]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Correct. The problem is about spacing and support. A space constraint can make open support areas more visible or more valuable. For example, a bonus zone for support away from pressure."
            : "Actually, that won't help with the spacing problem. Try the lever that directly addresses where players are positioned."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen15
