import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'
import { Check } from 'lucide-react'

const Screen27 = () => {
  const { setScreenReady } = useStore()
  const [checked, setChecked] = useState(new Array(8).fill(false))

  useEffect(() => {
    const yesCount = checked.filter(c => c).length
    setScreenReady(yesCount >= 6)
  }, [checked, setScreenReady])

  const toggleCheck = (idx) => {
    const newChecked = [...checked]
    newChecked[idx] = !newChecked[idx]
    setChecked(newChecked)
  }

  const items = [
    "Does the constraint connect to the clear practice problem?",
    "Does it connect to the attention target?",
    "Is it based on one main lever?",
    "Can you explain it quickly?",
    "Does the activity still feel connected to the sport?",
    "Does the success condition make sense?",
    "Does the coaching question point back to the problem?",
    "Could you run this tomorrow?"
  ]

  return (
    <ScreenLayout title="Is It Ready to Test?">
      <TeachingText>
        Before moving on, check your activity upgrade. If you have at least <strong>six yes answers</strong>, you are ready to move on.
      </TeachingText>

      <div className="space-y-2 py-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => toggleCheck(i)}
            className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 transition-all ${checked[i] ? 'bg-lab-teal/5 border-lab-teal text-lab-ink' : 'bg-white border-lab-ink/10 text-lab-ink/60'}`}
          >
            <div className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 ${checked[i] ? 'bg-lab-teal border-lab-teal text-white' : 'border-current'}`}>
              {checked[i] && <Check size={14} strokeWidth={3} />}
            </div>
            <span className="text-left text-sm font-medium leading-tight">{item}</span>
          </button>
        ))}
      </div>

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-2">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-1">Revision Prompt</p>
        <p className="text-xs text-lab-ink/80 italic leading-relaxed">
          If your upgrade feels too complicated, remove one rule or one bonus point. What is the one change that matters most?
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen27
