import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen16 = () => {
  const [selected, setSelected] = useState(null)
  const { setScreenReady } = useStore()

  useEffect(() => {
    if (selected !== null) {
      setScreenReady(true)
    }
  }, [selected, setScreenReady])

  const options = [
    "“We need better offense.”",
    "“Players need to be tougher.”",
    "“Players are rushing the next action after receiving under pressure, which leads to forced choices and lost possession.”",
    "“The team needs more energy.”"
  ]

  return (
    <ScreenLayout title="Ready for a Constraint?">
      <div className="pt-4 space-y-6">
        <p className="text-lg font-bold">Which problem statement is most ready for constraint design?</p>
        
        <div className="space-y-3">
          {options.map((option, idx) => {
            const isCorrect = idx === 2
            const showFeedback = selected !== null
            
            let colorClass = 'border-lab-ink/10 bg-white'
            if (showFeedback) {
              if (isCorrect) colorClass = 'border-lab-teal bg-lab-teal/5'
              else if (selected === idx) colorClass = 'border-lab-coral bg-lab-coral/5'
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => setSelected(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex gap-4 ${colorClass} ${!showFeedback && 'hover:border-lab-teal/40'}`}
              >
                <span className="font-bold text-lab-ink/30 uppercase">{String.fromCharCode(65 + idx)}</span>
                <span className="flex-1 text-sm">{option}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <Feedback isCorrect={selected === 2}>
            C is ready because it gives us:
            <ul className="mt-2 text-xs space-y-1 opacity-80">
              <li>• Situation: receiving under pressure</li>
              <li>• Behavior: rushing the next action</li>
              <li>• Consequence: forced choices and lost possession</li>
            </ul>
            Now a constraint can be connected to the real problem.
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen16
