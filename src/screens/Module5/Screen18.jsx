import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen18 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 2) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Which Is Too Weird?">
      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Scenario</p>
        <p className="text-sm font-bold">Players are not recognizing open space.</p>
      </div>

      <TeachingText className="pt-4">
        Which constraint is most likely to make the activity <strong>weird</strong> instead of clearer?
      </TeachingText>

      <Quiz 
        options={[
          "Add a bonus point for using open space before scoring.",
          "Create a target zone that rewards useful spacing.",
          "Make players shout a random animal before moving.",
          "Reduce the playing area to create more spacing decisions."
        ]}
        correctAnswer={2}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 2}>
          {selected === 2 
            ? "Correct. This may be memorable, but it does not connect to the sport problem. A useful constraint should make the real problem clearer, not add unrelated noise."
            : "Actually, this is a legitimate constraint that helps with spacing."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen18
