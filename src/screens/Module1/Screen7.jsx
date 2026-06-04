import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen7 = () => {
  const { responses, setResponse, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(responses.myDefinition?.length > 10)
  }, [responses.myDefinition, setScreenReady])

  return (
    <ScreenLayout title="The Simple Definition Test">
      <TeachingText>
        A coach should be able to explain constraints without sounding like a textbook.
      </TeachingText>

      <div className="hand-drawn bg-white p-6 text-center italic">
        "A constraint is a purposeful change to an activity that shapes what players notice, choose, and do."
      </div>

      <div className="grid grid-cols-3 gap-4 py-4">
        {[
          { label: 'Notice', text: 'What are players paying attention to?' },
          { label: 'Choose', text: 'What options are becoming available?' },
          { label: 'Do', text: 'What actions are becoming more likely?' }
        ].map(item => (
          <div key={item.label} className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-lab-teal">{item.label}</p>
            <p className="text-[10px] leading-tight text-lab-ink/60 font-medium uppercase">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 space-y-4">
        <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Open Response</h3>
        <p className="text-lg">In your own words, define a constraint.</p>
        <textarea
          className="w-full bg-transparent border-2 border-lab-ink/10 rounded-xl focus:border-lab-teal outline-none p-4 text-lg transition-colors min-h-[120px] italic"
          placeholder="Try to keep it simple enough that another coach could understand it quickly."
          value={responses.myDefinition || ''}
          onChange={(e) => setResponse('myDefinition', e.target.value)}
        />
      </div>
    </ScreenLayout>
  )
}

export default Screen7
