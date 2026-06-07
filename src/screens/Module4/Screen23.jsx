import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'
import { Check } from 'lucide-react'

const Screen23 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()
  const [checked, setChecked] = useState(new Array(7).fill(false))

  useEffect(() => {
    const yesCount = checked.filter(c => c).length
    setScreenReady(yesCount >= 5)
  }, [checked, setScreenReady])

  const toggleCheck = (idx) => {
    const newChecked = [...checked]
    newChecked[idx] = !newChecked[idx]
    setChecked(newChecked)
  }

  const items = [
    "Does this lever connect to my clear practice problem?",
    "Does this lever connect to my attention target?",
    "Can I change this lever without making the activity unrecognizable?",
    "Can I explain the change quickly?",
    "Will this lever help players notice something useful?",
    "Does this lever avoid unnecessary complexity?",
    "Can I watch the activity and see whether it helped?"
  ]

  return (
    <ScreenLayout title="Lever Selection Self-Check">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">My Selected Lever</label>
            <div className="p-3 bg-lab-teal/5 hand-drawn font-bold italic text-lab-ink border-2 border-lab-teal">
              {activityUpgradePlan.m4ChosenLever || 'Not yet selected'}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40">Attention Target</label>
            <div className="p-3 bg-white hand-drawn text-[10px] italic text-lab-ink border-2 border-lab-ink/10">
              {activityUpgradePlan.m3AttentionTarget || activityUpgradePlan.attentionTarget || 'Not yet defined'}
            </div>
          </div>
        </div>

        <TeachingText>
          Before moving on, check your lever choice. If you have at least <strong>five yes answers</strong>, you are ready to move on.
        </TeachingText>
      </div>

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
          If your lever does not fit, ask: "Which lever would make my attention target information matter?"
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen23
