import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen9 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Notice Earlier, Not Just Try Harder">
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="space-y-3">
          <img 
            src="/page_39_late_noticing.png" 
            alt="Late noticing"
            className="w-full h-auto rounded-xl shadow-md border-2 border-lab-ink/5"
          />
          <p className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-lab-coral text-center">Late noticing</p>
          <p className="text-[10px] text-lab-ink/60 italic text-center leading-tight">Late noticing = rushed action</p>
        </div>
        <div className="space-y-3">
          <img 
            src="/page_39_early_noticing.png" 
            alt="Earlier noticing"
            className="w-full h-auto rounded-xl shadow-md border-2 border-lab-ink/5"
          />
          <p className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-lab-teal text-center">Earlier noticing</p>
          <p className="text-[10px] text-lab-ink/60 italic text-center leading-tight">Earlier noticing = better options</p>
        </div>
      </div>

      <TeachingText>
        Better action often starts before the action. A player who notices earlier usually has more options.
      </TeachingText>

      <TeachingText>
        A player who notices late may look passive, rushed, or careless. But the real issue may be that the important information showed up before they were ready to use it.
      </TeachingText>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xl font-bold italic text-center">
          “A good constraint can help players notice earlier.”
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen9
