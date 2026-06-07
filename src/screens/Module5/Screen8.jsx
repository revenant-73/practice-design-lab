import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen8 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Meaningful or Random?">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">Players keep crowding the ball when a teammate is under pressure.</p>
      </div>

      <TeachingText className="pt-4">
        Which constraint is more meaningful?
      </TeachingText>

      <Quiz 
        options={[
          "The team earns a bonus point when a player creates or finds useful support space away from pressure.",
          "Every player must clap twice before touching the ball."
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Exactly. Option A connects to the problem. It rewards the behavior and attention target we want: noticing and using support space."
            : "Actually, Option B might be different, but different is not the same as useful. Clapping doesn't help solve the crowding problem."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen8
