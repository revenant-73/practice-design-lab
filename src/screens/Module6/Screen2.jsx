import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Testing Is Part of Design">
      <TeachingText>
        A constraint is not a finished product; it is a design attempt. You change one meaningful part of the activity, then you watch.
      </TeachingText>

      <ul className="space-y-3 py-4">
        {[
          "Did the activity make the problem clearer?",
          "Did players notice different information?",
          "Did the behavior change?",
          "Did the activity stay connected to the sport?",
          "Did it create learning or weird behavior?"
        ].map((q, i) => (
          <li key={i} className="flex items-center gap-3 p-3 bg-white hand-drawn text-sm font-medium text-lab-ink/80">
            <div className="w-1.5 h-1.5 rounded-full bg-lab-teal" />
            {q}
          </li>
        ))}
      </ul>

      <KeyIdea>
        Good practice design is not “set it and forget it.” It is noticing, adapting, and committing to the next version.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
