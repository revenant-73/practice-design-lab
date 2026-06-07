import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="The Constraint Lever Board">
      <VisualPlaceholder 
        label="Choose One Lever"
        caption="A constraint is one meaningful change, not a pile of rules."
      >
        <img 
          src="/page_53_choose_one_lever.png" 
          alt="Choose One Lever" 
          className="w-full h-full object-contain rounded-lg"
        />
      </VisualPlaceholder>

      <TeachingText>
        Think of the activity like a control board. You do not need to flip every switch.
      </TeachingText>

      <TeachingText>
        You are looking for the one lever that makes the practice problem clearer. Too many changes create noise. One good change creates focus.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen3
