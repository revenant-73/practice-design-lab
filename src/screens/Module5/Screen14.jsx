import React, { useEffect } from 'react'
import { ScreenLayout, WorkedExample } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen14 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Example: Role Constraint">
      <WorkedExample 
        activity="Small-sided team game."
        problem="Players communicate late or give information that does not help."
        target="A teammate’s situation and what information would help."
        lever="Roles"
        constraint="One player is assigned as the information player. The team earns a bonus point when they give early, useful information."
        success="The information must be early enough and specific enough to help the teammate act."
        question="What information actually helped your teammate?"
        why="The constraint gives communication a purpose. It moves players away from noise and toward useful information."
      />
    </ScreenLayout>
  )
}

export default Screen14
