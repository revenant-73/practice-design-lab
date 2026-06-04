import React, { useState } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'

const Screen18 = () => {
  const [checks, setChecks] = useState(Array(7).fill(false))

  const toggleCheck = (idx) => {
    const newChecks = [...checks]
    newChecks[idx] = !newChecks[idx]
    setChecks(newChecks)
  }

  const checklist = [
    "Does it describe what players are doing or not doing?",
    "Does it name when the problem happens?",
    "Does it explain why the problem matters?",
    "Does it avoid judging the players as people?",
    "Could another coach understand what you mean?",
    "Could this problem happen inside a real game?",
    "Does it give you something to design around?"
  ]

  const count = checks.filter(Boolean).length

  return (
    <ScreenLayout title="Is Your Problem Clear Enough?">
      <TeachingText>
        Before moving on, check your problem statement against these criteria.
      </TeachingText>

      <div className="space-y-3 pt-4">
        {checklist.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleCheck(i)}
            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${checks[i] ? 'bg-lab-teal/5 border-lab-teal' : 'bg-white border-lab-ink/5'}`}
          >
            <div className={`w-6 h-6 rounded border-2 flex items-center justify-center shrink-0 ${checks[i] ? 'bg-lab-teal border-lab-teal text-white' : 'border-lab-ink/20'}`}>
              {checks[i] && <span className="text-xs font-bold">✓</span>}
            </div>
            <span className={`text-sm ${checks[i] ? 'text-lab-ink' : 'text-lab-ink/60'}`}>{item}</span>
          </button>
        ))}
      </div>

      <div className="pt-8">
        {count >= 5 ? (
          <div className="animate-in zoom-in duration-500">
             <KeyIdea>
              You're ready to move on! You have a solid starting point for designing your constraint.
            </KeyIdea>
          </div>
        ) : (
          <div className="card bg-lab-coral/5 border-lab-coral/20">
            <p className="text-sm font-bold text-lab-coral uppercase tracking-widest mb-1">Keep Polishing</p>
            <p className="text-xs text-lab-ink/70">
              Try to get at least five "Yes" answers. Make the problem more specific by adding when it happens, what players are doing, and why it matters.
            </p>
          </div>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen18
