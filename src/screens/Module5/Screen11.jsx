import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen11 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Number Constraint">
      <WorkedExample 
        activity="Full-team scrimmage or large-sided game."
        problem="Some players are hiding from decisions."
        target="When and where to support the current action."
        lever="Number of players"
        constraint="Reduce the activity to a smaller-sided version where each player has more responsibility and fewer places to hide."
        success="Every player must be involved as either an option, support player, defender, or recovery player during each sequence."
        question="How were you connected to the play when you did not have the ball?"
        why="The constraint changes involvement. Smaller numbers usually increase touches, decisions, communication, and responsibility."
      />
    </ScreenLayout>
  )
}

export default Screen11
