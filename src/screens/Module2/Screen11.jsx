import React from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen11 = () => {
  const { responses, setResponse } = useStore()

  return (
    <ScreenLayout title="Remove the Judgment">
      <TeachingText>
        Coaches often describe problems with judgment words: Lazy. Quiet. Soft. Selfish.
      </TeachingText>
      
      <TeachingText>
        Those describe how it feels, but they don't help design better practice. Try translating judgment into <strong>observable behavior.</strong>
      </TeachingText>

      <div className="space-y-4">
        {[
          { from: '“They are lazy.”', to: '“Players are slow to recover after losing the ball.”' },
          { from: '“They are selfish.”', to: '“Players are forcing low-percentage options instead of recognizing open teammates.”' }
        ].map((pair, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p className="text-xs font-bold uppercase text-lab-coral/60 line-through decoration-lab-coral/30">{pair.from}</p>
            <p className="text-sm font-bold text-lab-teal">→ {pair.to}</p>
          </div>
        ))}
      </div>

      <div className="pt-8 space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-lab-ink/40 tracking-widest">My vague complaint</label>
          <input
            type="text"
            className="w-full bg-transparent border-b border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic"
            placeholder="e.g., They are quiet"
            value={responses.vagueComplaint || ''}
            onChange={(e) => setResponse('vagueComplaint', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase text-lab-teal tracking-widest">Observable behavior</label>
          <textarea
            className="w-full bg-transparent border-b border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic min-h-[60px]"
            placeholder="e.g., Players are not giving useful information early enough to help a teammate act."
            value={responses.observableBehavior || ''}
            onChange={(e) => setResponse('observableBehavior', e.target.value)}
          />
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen11
