import React from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'

const Screen3 = () => {
  return (
    <ScreenLayout title="Same Activity, Different Problem">
      <div className="space-y-8">
        <VisualPlaceholder 
          label="Original Activity" 
          caption="Players are moving, but the learning problem is unclear."
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex flex-wrap gap-4 p-4 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-lab-ink" />
              ))}
            </div>
            <span className="text-3xl">??</span>
          </div>
        </VisualPlaceholder>

        <VisualPlaceholder 
          label="Activity + Constraint" 
          caption="One meaningful change makes the problem clearer."
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex flex-wrap gap-4 p-4 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-lab-ink" />
              ))}
            </div>
            <div className="w-24 h-24 border-4 border-dashed border-lab-teal flex items-center justify-center">
              <span className="text-lab-teal font-bold">TARGET</span>
            </div>
          </div>
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
