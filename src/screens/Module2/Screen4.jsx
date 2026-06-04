import React from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'

const Screen4 = () => {
  return (
    <ScreenLayout title="The Problem Formula">
      <TeachingText>Use this simple formula to sharpen your focus:</TeachingText>

      <div className="space-y-4">
        {[
          { label: 'Players are...', detail: 'What are players doing or not doing?' },
          { label: 'When...', detail: 'In what situation does it happen?' },
          { label: 'Which leads to...', detail: 'What problem does it create?' },
          { label: 'They may need to...', detail: 'What might they need to notice, choose, or do differently?' }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-lab-teal/10 text-lab-teal flex items-center justify-center font-bold text-xs shrink-0">{i+1}</div>
            <div className="space-y-1">
              <p className="font-bold text-lab-ink tracking-tight leading-tight">{item.label}</p>
              <p className="text-sm text-lab-ink/60">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-white mt-8 space-y-4">
        <p className="text-xs font-bold uppercase text-lab-teal tracking-widest">Example</p>
        <p className="text-sm italic text-lab-ink/80 leading-relaxed">
          <strong>Players are</strong> crowding the ball <strong>when</strong> a teammate is under pressure, <strong>which leads to</strong> fewer passing options and easier defending. <strong>They may need to</strong> notice open space and support angles earlier.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen4
