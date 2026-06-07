import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen12 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Adjustment: Too Easy">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">You create a bonus point for using open space. Players solve it quickly, score often, and the activity no longer challenges them.</p>
      </div>

      <TeachingText className="pt-4">
        What should you try next?
      </TeachingText>

      <Quiz 
        options={[
          "Add pressure or move closer to the full game.",
          "Stop using constraints.",
          "Add five unrelated rules.",
          "Punish them for solving it."
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Correct. The activity is too easy, not broken. Increase the challenge while keeping the same learning goal."
            : "Actually, solving it is a good sign. It just means they're ready for more challenge."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen12
