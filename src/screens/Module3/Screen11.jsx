import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen11 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const examples = [
    {
      title: "Communication",
      problem: "Players are not helping teammates early enough.",
      target: "The teammate’s situation and what information would help before they act."
    },
    {
      title: "Spacing",
      problem: "Players crowd the ball.",
      target: "Open space, support angles, and pressure around the teammate."
    },
    {
      title: "Decision-Making",
      problem: "Players force one option.",
      target: "Opponent position, teammate availability, and risk/reward."
    },
    {
      title: "Defense",
      problem: "Players react late.",
      target: "Opponent movement, body shape, available options, and early cues."
    },
    {
      title: "Transition",
      problem: "Players are slow after possession changes.",
      target: "The moment of change and the next useful space."
    },
    {
      title: "Composure",
      problem: "Players carry mistakes into the next action.",
      target: "The next playable moment, not the previous mistake."
    }
  ]

  return (
    <ScreenLayout title="Attention Target Examples">
      <TeachingText>
        Use these examples as models for sharpening your own attention target.
      </TeachingText>

      <div className="space-y-4 my-6">
        {examples.map((ex, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border-2 border-lab-ink/5 shadow-sm">
            <h4 className="font-mono font-bold text-lab-teal text-[10px] uppercase tracking-[0.2em] mb-3">{ex.title}</h4>
            <div className="space-y-2">
              <p className="text-xs text-lab-ink/40 font-bold uppercase tracking-widest">Problem</p>
              <p className="text-sm font-medium mb-3">{ex.problem}</p>
              <p className="text-xs text-lab-teal font-bold uppercase tracking-widest">Attention Target</p>
              <p className="text-sm italic">{ex.target}</p>
            </div>
          </div>
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Screen11
