import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen14 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 2) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Adjustment: It Gets Weird">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">You reward communication, but players start yelling random words just to earn the bonus.</p>
      </div>

      <TeachingText className="pt-4">
        What should you try next?
      </TeachingText>

      <Quiz 
        options={[
          "Reward louder communication.",
          "Remove all communication from practice.",
          "Clarify that info must be early, specific, and useful.",
          "Ignore it."
        ]}
        correctAnswer={2}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 2}>
          {selected === 2 
            ? "Correct. The activity got weird. The constraint needs a better success condition that connects communication to helping a teammate."
            : "Actually, that would just reinforce the weirdness or avoid the problem."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen14
