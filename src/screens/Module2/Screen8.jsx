import React from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'

const Screen8 = () => {
  return (
    <ScreenLayout title="The Practice Problem Triangle">
      <VisualPlaceholder 
        label="Problem Diagnosis" 
        caption="A problem is easier to solve when you can see its shape."
      >
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* Simple SVG Triangle */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 15 L85 80 L15 80 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-lab-teal" />
            
            {/* Points labels */}
            <g className="text-[6px] font-bold uppercase tracking-tighter">
              <text x="50" y="10" textAnchor="middle" fill="currentColor" className="text-lab-ink">Situation</text>
              <text x="85" y="88" textAnchor="middle" fill="currentColor" className="text-lab-ink">Consequence</text>
              <text x="15" y="88" textAnchor="middle" fill="currentColor" className="text-lab-ink">Behavior</text>
            </g>

            {/* Center label */}
            <text x="50" y="60" textAnchor="middle" fontSize="5" fontWeight="bold" fill="currentColor" className="text-lab-teal uppercase">Clear Problem</text>
          </svg>
        </div>
      </VisualPlaceholder>

      <div className="grid grid-cols-1 gap-4 pt-4">
        <div className="space-y-1">
          <p className="font-bold text-sm text-lab-teal">The situation</p>
          <p className="text-sm text-lab-ink/60">Tells you where to look.</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold text-sm text-lab-teal">The behavior</p>
          <p className="text-sm text-lab-ink/60">Tells you what is happening.</p>
        </div>
        <div className="space-y-1">
          <p className="font-bold text-sm text-lab-teal">The consequence</p>
          <p className="text-sm text-lab-ink/60">Tells you why it matters.</p>
        </div>
      </div>

      <TeachingText className="pt-4 italic text-center text-sm">
        Once those three pieces are clearer, the constraint has a job.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen8
