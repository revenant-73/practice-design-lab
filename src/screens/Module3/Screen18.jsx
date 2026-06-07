import React, { useState, useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen18 = () => {
  const { setScreenReady } = useStore()
  const [checks, setChecks] = useState(new Array(7).fill(false))

  useEffect(() => {
    const checkedCount = checks.filter(c => c).length
    setScreenReady(checkedCount >= 5)
  }, [checks, setScreenReady])

  const checklistItems = [
    "Does it connect to the clear practice problem?",
    "Does it name specific information players need to notice?",
    "Does it include when that information matters?",
    "Is it observable during the activity?",
    "Could it happen inside a real game?",
    "Could a constraint help bring it into focus?",
    "Could another coach understand what you mean?"
  ]

  const toggleCheck = (idx) => {
    const newChecks = [...checks]
    newChecks[idx] = !newChecks[idx]
    setChecks(newChecks)
  }

  return (
    <ScreenLayout title="The Attention Target Check">
      <TeachingText>
        Before moving on, check your attention target. If you have at least five "Yes" answers, you are ready to move on.
      </TeachingText>

      <div className="space-y-3 my-6">
        {checklistItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => toggleCheck(idx)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex gap-4 items-center ${checks[idx] ? 'border-lab-teal bg-lab-teal/5 text-lab-teal' : 'border-lab-ink/5 bg-white text-lab-ink/60'}`}
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${checks[idx] ? 'bg-lab-teal border-lab-teal text-white' : 'border-current opacity-30'}`}>
              {checks[idx] && <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>}
            </div>
            <span className="text-sm font-medium leading-tight">{item}</span>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 italic text-xs text-lab-ink/40 leading-relaxed">
        <p><strong>Note:</strong> If you're struggling to get to 5 checks, consider revising your target by adding more specific details about <strong>what</strong> players notice, <strong>when</strong> they notice it, and <strong>why</strong> it matters.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen18
