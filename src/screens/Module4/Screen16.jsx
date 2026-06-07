import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen16 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Scenario: Communication">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-sm">A coach notices that players communicate, but most of it is late or not useful. The coach wants players to <strong>give information early enough</strong> to help a teammate act.</p>
      </div>

      <TeachingText className="pt-4">
        Which lever is probably the best first choice?
      </TeachingText>

      <Quiz 
        options={["Scoring", "Field size (randomly)", "Remove all opponents", "Stop every 10 seconds"]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Exactly. Scoring can make useful communication valuable. For example, a bonus point when early information clearly helps a teammate make a better decision."
            : "That might disrupt the flow without solving the core communication problem. Look for a lever that rewards the right behavior."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen16
