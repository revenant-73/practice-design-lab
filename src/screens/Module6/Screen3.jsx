import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const steps = [
    { label: 'Run the Activity', color: 'bg-lab-teal' },
    { label: 'Watch What Changes', color: 'bg-lab-teal' },
    { label: 'Name the Signal', color: 'bg-lab-teal' },
    { label: 'Adjust One Thing', color: 'bg-lab-teal' },
    { label: 'Run Next Version', color: 'bg-lab-teal' }
  ]

  return (
    <ScreenLayout title="The Test-and-Adjust Loop">
      <VisualPlaceholder 
        label="The Test-and-Adjust Loop"
        caption="Constraints are not pass/fail. They give you feedback."
      >
        <div className="relative w-full h-full flex items-center justify-center">
           <div className="w-32 h-32 border-4 border-dashed border-lab-teal/20 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="w-24 h-24 bg-white border-2 border-lab-teal flex items-center justify-center rounded-full text-center p-2 shadow-inner">
                 <p className="text-[8px] font-bold text-lab-teal leading-tight">BETTER PRACTICE DESIGN</p>
              </div>
           </div>
           {/* Steps in loop */}
           <div className="absolute inset-0 grid grid-cols-2 grid-rows-3 p-4 pointer-events-none">
              <div className="col-start-1 row-start-1 flex justify-center items-start pt-2"><span className="bg-lab-teal text-white text-[6px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">1. RUN</span></div>
              <div className="col-start-2 row-start-1 flex justify-center items-start pt-2"><span className="bg-lab-teal text-white text-[6px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">2. WATCH</span></div>
              <div className="col-start-2 row-start-2 flex justify-end items-center pr-4"><span className="bg-lab-teal text-white text-[6px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">3. NAME</span></div>
              <div className="col-start-2 row-start-3 flex justify-center items-end pb-2"><span className="bg-lab-teal text-white text-[6px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">4. ADJUST</span></div>
              <div className="col-start-1 row-start-2 flex justify-start items-center pl-4"><span className="bg-lab-teal text-white text-[6px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-sm">5. RUN NEXT</span></div>
           </div>
        </div>
      </VisualPlaceholder>

      <TeachingText>
        If the activity gets too easy, too hard, too weird, or nothing changes, that is information. The coach’s job is to read that information and make the next useful adjustment.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen3
