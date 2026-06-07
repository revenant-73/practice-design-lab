import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="From Lever to Upgrade">
      <VisualPlaceholder 
        label="From Lever to Constraint"
        caption="The upgrade should make the right information matter."
      >
        <div className="flex flex-col items-center gap-4 w-full px-4 py-2">
          <div className="w-full p-2 bg-lab-ink/5 border border-lab-ink/10 rounded-lg text-center">
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest opacity-40">Attention Target</p>
            <p className="text-xs font-bold">Open support space</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-lab-teal"><path d="m7 10 5 5 5-5"/></svg>
          <div className="w-full p-2 bg-lab-teal/10 border border-lab-teal/30 rounded-lg text-center">
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-teal/60">Constraint Lever</p>
            <p className="text-xs font-bold text-lab-teal">Space</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-lab-teal"><path d="m7 10 5 5 5-5"/></svg>
          <div className="w-full p-2 bg-lab-coral/10 border border-lab-coral/30 rounded-lg text-center">
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-coral/60">Activity Upgrade</p>
            <p className="text-xs font-bold text-lab-coral leading-tight px-2">Bonus point when a player finds useful support space before scoring</p>
          </div>
        </div>
      </VisualPlaceholder>

      <TeachingText>
        The activity upgrade should connect directly to the attention target. If the attention target is space, the upgrade should make space matter.
      </TeachingText>

      <TeachingText>
        The constraint should not be random. It should have a job.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen3
