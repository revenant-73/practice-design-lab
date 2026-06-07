import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen13 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Rule Constraint">
      <WorkedExample 
        activity="Small-sided attacking game."
        problem="Players force the same option even when the opponent takes it away."
        target="Opponent position and alternative options."
        lever="Rules"
        constraint="The team cannot score using the same final option twice in a row."
        success="Players must recognize what the opponent is protecting and search for a different useful option."
        question="What did the opponent take away, and what did that open?"
        why="The constraint nudges players away from automatic repetition. It asks them to read the situation and search for another solution."
      />
    </ScreenLayout>
  )
}

export default Screen13
