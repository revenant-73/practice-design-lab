import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="What Is a Constraint?">
      <TeachingText>
        A constraint is a purposeful change to an activity.
      </TeachingText>

      <div className="grid grid-cols-2 gap-3">
        {['The space', 'The scoring', 'The number of players', 'The starting situation', 'The target', 'The time limit', 'The pressure', 'The behavior of the opponent'].map((item) => (
          <div key={item} className="p-3 bg-lab-teal/5 rounded border border-lab-teal/10 text-sm font-medium text-lab-teal">
            {item}
          </div>
        ))}
      </div>

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
