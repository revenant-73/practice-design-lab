import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen4 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="What Should You Watch?">
      <TeachingText>
        When you run the upgraded activity, do not watch everything. Watch the thing your constraint was designed to change.
      </TeachingText>

      <div className="space-y-4 py-4">
        <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal space-y-3">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Checklist</p>
          {[
            "Are players noticing it earlier?",
            "Are players noticing it more clearly?",
            "Are players acting on it more often?",
            "Are players communicating about it?",
            "Is the activity still connected to the sport?"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-4 h-4 rounded border border-lab-teal/30 flex items-center justify-center text-[10px] text-lab-teal font-bold shrink-0 mt-0.5">?</div>
              <p className="text-xs text-lab-ink/80 leading-snug">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <KeyIdea>
        Watch the attention target first. That tells you whether the constraint is doing its job.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen4
