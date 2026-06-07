import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen13 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 1) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Adjustment: Too Hard">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">You create a pressure game, but players are overwhelmed. They rush, guess, and rarely recognize the option you wanted them to notice.</p>
      </div>

      <TeachingText className="pt-4">
        What should you try next?
      </TeachingText>

      <Quiz 
        options={[
          "Make it even harder immediately.",
          "Simplify the problem or reduce pressure.",
          "Tell them they are not tough enough.",
          "Remove all decision-making."
        ]}
        correctAnswer={1}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 1}>
          {selected === 1 
            ? "Correct. The activity is probably too hard for the current version. Reduce pressure enough for them to engage, then build it back up."
            : "Actually, overwhelming players stops them from learning. Simplify the task so they can search for the right info."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen13
