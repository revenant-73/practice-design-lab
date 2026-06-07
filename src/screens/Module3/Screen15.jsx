import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen15 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="From Problem to Attention Target">
      <VisualPlaceholder 
        label="The Attention Target Map"
        caption="The attention target bridges the problem and the constraint."
      >
        <div className="flex flex-col items-center gap-2 py-4">
          <div className="px-4 py-2 bg-lab-ink text-white rounded-lg text-[10px] font-bold uppercase tracking-widest">Clear Practice Problem</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-lab-teal"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
          <div className="px-4 py-2 border-2 border-lab-teal/30 rounded-lg text-[9px] font-bold text-lab-teal uppercase tracking-widest">What information is missing?</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-lab-teal"><path d="m7 13 5 5 5-5M7 6l5 5 5-5"/></svg>
          <div className="px-4 py-2 bg-lab-teal text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg">Attention Target</div>
        </div>
      </VisualPlaceholder>

      <TeachingText>
        If the problem tells us what is breaking down, the attention target tells us what players may need to perceive differently.
      </TeachingText>

      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 mt-4">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-3">Example Map</h4>
        <div className="space-y-3">
          <p className="text-sm font-bold leading-tight"><span className="text-lab-coral italic">Problem:</span> Players crowd the ball when a teammate is pressured.</p>
          <p className="text-sm font-bold leading-tight"><span className="text-lab-teal italic">Missing information:</span> Open support space.</p>
          <p className="text-sm font-bold leading-tight"><span className="text-lab-ink italic">Target:</span> Notice support angles before the teammate is trapped.</p>
        </div>
      </div>

      <TeachingText className="font-bold text-lab-teal italic pt-4">
        The constraint comes next. But first, aim the attention.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen15
