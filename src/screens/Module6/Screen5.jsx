import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = activityUpgradePlan.m6WatchFor && activityUpgradePlan.m6KnowHelping
    setScreenReady(isReady)
  }, [activityUpgradePlan, setScreenReady])

  const fields = [
    { key: 'm6WatchFor', label: 'During the activity, I will watch for:', placeholder: 'e.g. support angles, eye contact...' },
    { key: 'm6KnowHelping', label: 'I will know the constraint is helping if:', placeholder: 'e.g. players move earlier...' },
    { key: 'm6KnowNotHelping', label: 'I will know the constraint is not helping if:', placeholder: 'e.g. players look confused...' },
    { key: 'm6SpecificBehavior', label: 'One specific behavior I want to see more often:', placeholder: 'e.g. early calling...' }
  ]

  return (
    <ScreenLayout title="Observation Focus">
      <TeachingText>
        Do not try to track everything. Pick one or two signals that connect directly to your attention target.
      </TeachingText>

      <div className="bg-white/50 p-4 hand-drawn italic text-xs mb-6 border border-lab-ink/5">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Attention Target</p>
        {activityUpgradePlan.m5DraftAttentionTarget || 'Not yet defined'}
      </div>

      <div className="space-y-6">
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

export default Screen5
