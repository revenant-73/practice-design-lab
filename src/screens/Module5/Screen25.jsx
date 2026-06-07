import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen25 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="The Upgrade Card">
      <VisualPlaceholder 
        label="Activity Upgrade Card"
        caption="A practical tool you can use before every practice."
      >
        <div className="w-full h-full p-4 bg-lab-cream/50 flex flex-col gap-2">
          <div className="bg-white border-2 border-lab-ink/10 rounded p-2 flex flex-col gap-1 shadow-sm">
             <div className="flex justify-between items-center border-b border-lab-ink/5 pb-1 mb-1">
               <span className="text-[6px] font-mono font-bold uppercase text-lab-teal">Activity Upgrade Card</span>
               <div className="w-2 h-2 rounded bg-lab-coral opacity-20" />
             </div>
             <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                {[
                  '1. Original Activity', '2. Problem', '3. Attention Target',
                  '4. Constraint', '5. Success Condition', '6. Coaching Question'
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-0.5">
                    <span className="text-[4px] font-mono font-bold uppercase opacity-30">{item.split('. ')[0]}. {item.split('. ')[1].toUpperCase()}</span>
                    <div className="h-2 bg-lab-ink/5 rounded-sm flex items-center px-1">
                       <div className="w-1/2 h-[1px] bg-lab-teal/30" />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </VisualPlaceholder>

      <TeachingText>
        This is the core artifact of the course. If you can fill out this card, you can walk into practice tomorrow with a clearer activity.
      </TeachingText>

      <TeachingText>
        The card does not need to be perfect. It needs to be usable. You will learn how to adjust it in the next module.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen25
