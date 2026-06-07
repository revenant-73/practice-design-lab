import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText, Quiz, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen19 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  const handleSelect = (idx) => {
    setSelected(idx)
    if (idx === 0) setScreenReady(true)
  }

  return (
    <ScreenLayout title="Which Is Too Broad?">
      <TeachingText>
        Which constraint is too broad to run clearly?
      </TeachingText>

      <Quiz 
        options={[
          "“Play smarter.”",
          "“Earn a bonus point when early communication helps a teammate make a better decision.”",
          "“Start each round after a turnover and recover into defensive space within three seconds.”",
          "“The team scores double when the final action comes from a player who created useful space.”"
        ]}
        correctAnswer={0}
        onSelect={handleSelect}
      />

      {selected !== null && (
        <Feedback isCorrect={selected === 0}>
          {selected === 0 
            ? "Exactly. “Play smarter” may be a goal, but it is not a constraint. It does not tell players what changes in the activity or what problem they are solving."
            : "Actually, this is a specific enough constraint to be implemented and tracked."}
        </Feedback>
      )}
    </ScreenLayout>
  )
}

export default Screen19
