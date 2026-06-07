import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen28 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const mistakes = [
    { title: "Mismatched Problem", desc: "If the problem is spacing, but the constraint rewards effort, the match is weak." },
    { title: "Too Many Rules", desc: "If players need a long explanation, simplify." },
    { title: "Unclear Success Condition", desc: "If no one knows what counts, the constraint will not guide attention." },
    { title: "Lost the Sport", desc: "If the game problem disappears, the constraint may be too artificial." },
    { title: "Giving Away the Answer", desc: "Let players search. Use questions to guide attention without solving it for them." }
  ]

  return (
    <ScreenLayout title="Common Build Mistakes">
      <TeachingText>
        Watch out for these common traps when building your activity upgrade.
      </TeachingText>

      <div className="space-y-4 py-4">
        {mistakes.map((m, i) => (
          <div key={i} className="flex gap-4 p-4 bg-white hand-drawn border border-lab-ink/5">
            <div className="shrink-0 w-8 h-8 rounded-full bg-lab-coral/10 text-lab-coral flex items-center justify-center font-bold font-mono">
              {i + 1}
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-lab-ink leading-tight">{m.title}</h4>
              <p className="text-xs text-lab-ink/60 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Screen28
