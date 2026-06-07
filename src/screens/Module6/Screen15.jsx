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
    <ScreenLayout title="Adjustment: Nothing Changes">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">You add a constraint, but the activity looks exactly the same. Players do not notice anything differently.</p>
      </div>

      <TeachingText className="pt-4">
        What should you check first?
      </TeachingText>

      <Quiz 
        options={[
          "Whether the constraint matches the problem.",
          "Whether the players are wearing the right shoes.",
          "Whether to replace activity with conditioning.",
          "Whether the coach explained enough theory."
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Correct. If nothing changes, check the match between the problem, attention target, lever, and constraint. One of those links may be weak."
            : "Actually, those things are unlikely to be the primary cause of the activity not changing."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen15
