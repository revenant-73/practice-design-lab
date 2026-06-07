import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen16 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Opponent Constraint">
      <WorkedExample 
        activity="Small-sided attacking game."
        problem="Players do not recognize when the opponent leaves space open."
        target="Opponent position and available space."
        lever="Opponent behavior"
        constraint="The defending team starts by overloading one side, creating open space somewhere else."
        success="The attacking team must identify and use the available space before the defense can recover."
        question="What did the opponent give you?"
        why="The constraint makes the opponent’s behavior easier to read at first. Over time, the opponent can become less predictable."
      />
    </ScreenLayout>
  )
}

export default Screen16
