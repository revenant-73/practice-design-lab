import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="What Is a Constraint Lever?">
      <TeachingText>
        A constraint lever is one part of the activity you can adjust. You are not redesigning the entire practice. You are changing one meaningful thing.
      </TeachingText>

      <TeachingText>
        That one change might involve:
      </TeachingText>

      <ul className="grid grid-cols-2 gap-3 pt-2">
        {[
          'Space', 'Scoring', 'Number of players', 'Starting situation',
          'Rules', 'Roles', 'Pressure', 'Opponent behavior'
        ].map((lever, i) => (
          <li key={i} className="flex items-center gap-2 p-3 bg-white hand-drawn text-sm font-medium text-lab-ink">
            <div className="w-1.5 h-1.5 rounded-full bg-lab-teal" />
            {lever}
          </li>
        ))}
      </ul>

      <TeachingText className="pt-4">
        Each lever changes the problem in a different way. The goal is not to use every lever. The goal is to choose the lever that best matches your attention target.
      </TeachingText>

      <KeyIdea>
        The constraint should serve the problem. Change the activity to make the right information more useful, more visible, or more necessary.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
