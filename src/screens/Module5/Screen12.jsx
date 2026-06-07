import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen12 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Start Constraint">
      <WorkedExample 
        activity="Normal possession or transition game."
        problem="Players are slow to recover after losing possession."
        target="The moment possession changes and the next useful recovery space."
        lever="Starting situation"
        constraint="Every round starts immediately after a turnover, loose ball, or change of possession."
        success="The team must recover into useful defensive or support positions within three seconds."
        question="What changed the moment possession changed?"
        why="The constraint places players directly into the moment they need to solve. Instead of waiting for the problem to appear, the activity begins there."
      />
    </ScreenLayout>
  )
}

export default Screen12
