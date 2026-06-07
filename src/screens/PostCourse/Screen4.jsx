import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Activity Upgrade Card">
      <TeachingText>
        Use this reusable template for your future activity designs.
      </TeachingText>

      <div className="mt-6 border-2 border-lab-teal border-dashed p-6 rounded-3xl bg-white space-y-6">
        <h2 className="text-center font-bold text-lab-teal uppercase tracking-widest text-sm border-b-2 border-lab-teal pb-2">Activity Upgrade Card</h2>
        
        <TemplateField label="Original Activity" />
        <TemplateField label="Clear Practice Problem" />
        
        <div className="space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40">Attention Target</p>
          <div className="text-[11px] leading-relaxed">
            I want players to notice <span className="border-b border-lab-ink/20 px-8"></span> when <span className="border-b border-lab-ink/20 px-8"></span> so they can <span className="border-b border-lab-ink/20 px-8"></span>.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <TemplateField label="Constraint Lever" />
          <TemplateField label="Constraint" />
        </div>

        <TemplateField label="Success Condition" />
        <TemplateField label="Coaching Question" />
        <TemplateField label="What I Will Watch For" />
      </div>

      <p className="mt-8 text-center text-[10px] text-lab-ink/40 font-mono">You can screenshot this template to use in your coaching notes.</p>
    </ScreenLayout>
  )
}

const TemplateField = ({ label }) => (
  <div className="space-y-1">
    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40">{label}</p>
    <div className="h-8 border-b border-lab-ink/10"></div>
  </div>
)

export default Screen4
