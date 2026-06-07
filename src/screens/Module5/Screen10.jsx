import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen10 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Scoring Constraint">
      <WorkedExample 
        activity="Small-sided competitive game."
        problem="Players make safe choices that do not challenge the opponent."
        target="Moments when pressure can be created."
        lever="Scoring"
        constraint="A team scores two points when their action clearly creates pressure on the opponent, and one point for a normal score."
        success="The action must make the opponent rushed, stretched, disorganized, or forced into a lower-quality response."
        question="What choice made the opponent’s problem harder?"
        why="The constraint changes what the activity rewards. Players are learning to recognize when and how they can create pressure."
      />
    </ScreenLayout>
  )
}

export default Screen10
