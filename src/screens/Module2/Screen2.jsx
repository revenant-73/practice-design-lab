import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const clearerQuestions = [
    'Are they failing to speak early enough?',
    'Is the information they share actually useful?',
    'Are they failing to claim responsibility?',
    'Is it a lack of coordination between specific roles?'
  ]

  return (
    <ScreenLayout title="Why Vague Problems Create Weak Constraints">
      <TeachingText>
        Most coaches can quickly name what they want to improve: Communication. Spacing. Defense. Passing.
      </TeachingText>

      <TeachingText>
        But those are not clear practice problems yet. They are <strong>categories</strong>.
      </TeachingText>

      <div className="card space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase text-lab-coral tracking-widest">Vague</p>
          <p className="text-lg font-medium italic">“We need better communication.”</p>
        </div>
        <div className="w-full h-px bg-lab-ink/5" />
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase text-lab-teal tracking-widest">Clearer Questions</p>
          <StepByStep steps={clearerQuestions} />
        </div>
      </div>

      <KeyIdea>
        A vague problem points in a direction. <br/>
        <span className="text-lab-teal">A clear problem gives you something to design around.</span>
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
