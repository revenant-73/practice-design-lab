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
    <ScreenLayout title="Which Constraint Fits?">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">Players rush the first option when pressured, even when a teammate is open.</p>
      </div>

      <TeachingText className="pt-4">
        Which constraint best fits the problem?
      </TeachingText>

      <Quiz 
        options={[
          "The team earns a bonus point when a player passes out of pressure to an open teammate.",
          "Players run after every mistake.",
          "The activity uses a completely different sport.",
          "The coach stops play every ten seconds to explain all options."
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Correct. This connects to the problem and attention target. It rewards noticing pressure, recognizing the open teammate, and choosing a better option."
            : "Actually, that doesn't solve the core decision-making problem under pressure."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen17
