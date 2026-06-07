import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen20 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const mistakes = [
    { title: "Choosing the Most Creative Lever", desc: "Creativity is not the goal. Use the lever that best fits the problem." },
    { title: "Choosing Too Many Levers", desc: "Start with one. You can always adjust later." },
    { title: "Mismatched Attention Target", desc: "If you want players to notice space, but your constraint only changes punishment, it probably doesn't match." },
    { title: "Making the Activity Unrecognizable", desc: "The activity should still feel connected to the sport." },
    { title: "Confusing Difficulty With Usefulness", desc: "Harder is not automatically better. A useful constraint makes the problem clearer." }
  ]

  return (
    <ScreenLayout title="Common Lever Mistakes">
      <TeachingText>
        Watch out for these common traps when selecting your first constraint lever.
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

export default Screen20
