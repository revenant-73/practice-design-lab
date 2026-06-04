import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Same Activity, Different Problem">
      <div className="space-y-8">
        <VisualPlaceholder 
          label="Original Activity" 
          caption="Players are moving, but the learning problem is unclear."
        >
          <img 
            src="/page_3_original_activity.png" 
            alt="Original Activity" 
            className="w-full h-full object-contain"
          />
        </VisualPlaceholder>

        <VisualPlaceholder 
          label="Activity + Constraint" 
          caption="One meaningful change makes the problem clearer."
        >
          <img 
            src="/page_3_activity_constraint.png" 
            alt="Activity + Constraint" 
            className="w-full h-full object-contain"
          />
        </VisualPlaceholder>
      </div>

      <TeachingText>
        The activity may look almost the same. But the learning problem has changed. That is the point.
      </TeachingText>

      <TeachingText>
        A good constraint does not need to make practice look fancy. It needs to make the problem <strong>clearer.</strong>
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen3
