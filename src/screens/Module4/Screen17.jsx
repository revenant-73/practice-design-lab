import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen17 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Scenario: Decisions Under Pressure">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-sm">A team makes good choices in a slow drill, but the same choices disappear when the opponent adds pressure. The coach wants players to <strong>notice available options under pressure</strong>.</p>
      </div>

      <TeachingText className="pt-4">
        Which lever is probably the best first choice?
      </TeachingText>

      <Quiz 
        options={[
          "Pressure: Replicate the game-like stress where the problem appears",
          "More lines: Reduce individual repetitions",
          "Less decision-making: Simplify the sport",
          "Unrelated warm-up: Distract from the problem"
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Exactly. The problem appears when pressure increases. The constraint should preserve the pressure while helping players search for useful options inside it."
            : "That might reduce the pressure, but it doesn't help players solve the problem when it actually matters. Choose the lever that addresses the core issue."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen17
