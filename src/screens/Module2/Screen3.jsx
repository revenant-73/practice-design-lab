import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="The Foggy vs. The Clear Problem">
      <div className="space-y-8">
        <VisualPlaceholder 
          label="Foggy Problem" 
          caption="Vague problem: too many possible meanings."
        >
          <img 
            src="/pg_13_foggy_problem.png" 
            alt="Foggy Problem" 
            className="w-full h-full object-contain"
          />
        </VisualPlaceholder>

        <VisualPlaceholder 
          label="Clear Problem" 
          caption="Clear problem: easier to design around."
        >
          <img 
            src="/pg_13_clear_problem.png" 
            alt="Clear Problem" 
            className="w-full h-full object-contain"
          />
        </VisualPlaceholder>
      </div>

      <TeachingText>
        The goal is not to make the problem sound fancy. It is to make it specific enough that you can design a better activity.
      </TeachingText>

      <div className="p-4 bg-lab-coral/5 border-l-4 border-lab-coral">
        <p className="text-sm italic text-lab-ink/80">
          If you cannot describe the problem clearly, you are probably not ready to choose the constraint yet.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen3
