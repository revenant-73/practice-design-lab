import React from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'

const Screen3 = () => {
  return (
    <ScreenLayout title="The Foggy vs. The Clear Problem">
      <div className="space-y-8">
        <VisualPlaceholder 
          label="Foggy Problem" 
          caption="Vague problem: too many possible meanings."
        >
          <div className="relative w-full h-full flex items-center justify-center bg-lab-ink/5">
            <div className="absolute inset-0 flex flex-wrap gap-2 p-4 opacity-10">
               {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full bg-lab-ink" />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-2 p-4">
              {['Communication', 'Movement', 'Decisions', 'Effort'].map(t => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-white/80 px-2 py-1 blur-[0.5px]">{t}</span>
              ))}
            </div>
          </div>
        </VisualPlaceholder>

        <VisualPlaceholder 
          label="Clear Problem" 
          caption="Clear problem: easier to design around."
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
             <div className="hand-drawn bg-white p-2 text-[10px] font-bold text-center leading-tight">
              Players are late giving useful information before a teammate acts.
            </div>
            <div className="mt-4 flex gap-8">
              <div className="w-6 h-6 rounded-full bg-lab-ink/20" />
              <div className="w-6 h-6 rounded-full bg-lab-teal flex items-center justify-center">
                <div className="w-1 h-1 bg-white rounded-full animate-ping" />
              </div>
            </div>
          </div>
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
