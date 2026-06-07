import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen17 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = activityUpgradePlan.m6AdjTooEasy && activityUpgradePlan.m6AdjTooHard
    setScreenReady(isReady)
  }, [activityUpgradePlan, setScreenReady])

  const fields = [
    { key: 'm6AdjTooEasy', label: 'If it is too easy, I will:', placeholder: 'e.g. add pressure...' },
    { key: 'm6AdjTooHard', label: 'If it is too hard, I will:', placeholder: 'e.g. shrink space...' },
    { key: 'm6AdjTooWeird', label: 'If it gets weird, I will:', placeholder: 'e.g. remove one rule...' },
    { key: 'm6AdjNothingChanges', label: 'If nothing changes, I will:', placeholder: 'e.g. check the match...' }
  ]

  return (
    <ScreenLayout title="Create Your Adjustment Plan">
      <TeachingText>
        Write one adjustment for each outcome. This helps you stay calm when the first version does not land perfectly.
      </TeachingText>

      <div className="space-y-6 py-4">
        {fields.map((f) => (
          <div key={f.key} className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">
              {f.label}
            </label>
            <input
              type="text"
              value={activityUpgradePlan[f.key] || ''}
              onChange={(e) => updatePlan(f.key, e.target.value)}
              className="w-full p-3 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5"
              placeholder={f.placeholder}
            />
          </div>
        ))}
      </div>
    </ScreenLayout>
  )
}

export default Screen17
