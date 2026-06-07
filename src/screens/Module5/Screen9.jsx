import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen9 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Space Constraint">
      <WorkedExample 
        activity="Small-sided possession game."
        problem="Players crowd the ball when a teammate is under pressure."
        target="Open support space and passing angles."
        lever="Space"
        constraint="A team earns a bonus point when a player creates or finds useful support space before the team completes the next action."
        success="The support player must be available away from pressure, not just standing nearby."
        question="Where could you become useful before your teammate ran out of options?"
        why="The constraint makes space matter. Players are not just told to spread out; they are rewarded for recognizing where support is needed."
      />
    </ScreenLayout>
  )
}

export default Screen9
