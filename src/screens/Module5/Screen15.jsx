import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen15 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Pressure Constraint">
      <WorkedExample 
        activity="Regular small-sided or full-team game."
        problem="Players make good decisions in easy moments but rush when the score is close."
        target="Available options under pressure."
        lever="Pressure"
        constraint="Each round starts in a close-score situation, and the team must win two pressure points before rotating."
        success="Players must continue recognizing useful options while the outcome matters."
        question="What option did you see under pressure?"
        why="The constraint keeps the problem connected to the pressure moment. It does not remove the challenge; it helps players learn inside it."
      />
    </ScreenLayout>
  )
}

export default Screen15
