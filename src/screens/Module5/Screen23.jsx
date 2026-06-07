import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen23 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  const examples = [
    { target: 'Open support space', question: '“Where could you become useful before your teammate ran out of options?”' },
    { target: 'Opponent position', question: '“What did the opponent take away, and what did that open?”' },
    { target: 'Pressure', question: '“What option did you see under pressure?”' },
    { target: 'Next useful action', question: '“What mattered most after the mistake?”' }
  ]

  return (
    <ScreenLayout title="Add a Coaching Question">
      <TeachingText>
        A good coaching question helps players reflect without taking over the problem. The question should connect directly to the attention target.
      </TeachingText>

      <div className="space-y-3 py-4">
        {examples.map((ex, i) => (
          <div key={i} className="p-4 bg-white hand-drawn border border-lab-ink/5">
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Attention Target: {ex.target}</p>
            <p className="text-sm font-bold text-lab-ink italic leading-snug">{ex.question}</p>
          </div>
        ))}
      </div>

      <KeyIdea>
        The question should point attention back to the problem. It should not become a lecture disguised as a question.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen23
