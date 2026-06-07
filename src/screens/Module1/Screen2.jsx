import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const factors = [
    'The space and boundaries of the field.',
    'The scoring system and rewards.',
    'The number of players or numerical advantages.',
    'The starting situation or reset points.',
    'The time limits and shot clocks.',
    'The pressure level from opponents.',
    'The specific behavior of the opposition.',
    'The roles and responsibilities assigned.'
  ]

  return (
    <ScreenLayout title="What Is a Constraint?">
      <TeachingText>
        A constraint is a purposeful change to an activity. You can manipulate many different factors:
      </TeachingText>

      <StepByStep steps={factors} />

      <TeachingText>
        When you change one of those things, you change the <strong>problem</strong> players have to solve. And when you change the problem, you change what players are invited to <strong>notice, choose, and do.</strong>
      </TeachingText>

      <KeyIdea>
        A constraint is not just a rule. <br/>
        <span className="text-lab-teal">A constraint is a design choice.</span>
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
