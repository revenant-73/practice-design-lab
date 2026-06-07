import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen18 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()
  const [localLever, setLocalLever] = useState(activityUpgradePlan.m4ChosenLever || '')
  const [localWhy, setLocalWhy] = useState(activityUpgradePlan.m4WhyLeverMatches || '')

  useEffect(() => {
    const isReady = localLever !== '' && localWhy.length > 10
    setScreenReady(isReady)
  }, [localLever, localWhy, setScreenReady])

  const handleLeverChange = (lever) => {
    setLocalLever(lever)
    updatePlan('m4ChosenLever', lever)
  }

  const handleWhyChange = (e) => {
    setLocalWhy(e.target.value)
    updatePlan('m4WhyLeverMatches', e.target.value)
  }

  const levers = [
    'Space', 'Scoring', 'Number of players', 'Starting situation',
    'Rules', 'Roles', 'Pressure', 'Opponent behavior'
  ]

  const attentionTarget = `I want players to notice ${activityUpgradePlan.m3TargetNotice} when ${activityUpgradePlan.m3TargetWhen} so they can ${activityUpgradePlan.m3TargetSoTheyCan}.`

  return (
    <ScreenLayout title="Choose Your First Lever">
      <TeachingText>
        Return to your activity, problem, and attention target.
      </TeachingText>

      <div className="space-y-4 pt-2">
        <div className="space-y-1">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">My Attention Target</label>
          <div className="p-4 bg-white/50 hand-drawn text-sm italic">{activityUpgradePlan.m3TargetNotice ? attentionTarget : 'Not yet defined'}</div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">Choose One Lever</label>
        <div className="grid grid-cols-2 gap-2">
          {levers.map((lever) => (
            <button
              key={lever}
              onClick={() => handleLeverChange(lever)}
              className={`p-3 text-left text-sm font-medium transition-all hand-drawn ${localLever === lever ? 'bg-lab-teal text-white border-lab-teal' : 'bg-white border-lab-ink/10 hover:border-lab-teal/40'}`}
            >
              {lever}
            </button>
          ))}
        </div>
      </div>

      {localLever && (
        <div className="space-y-4 pt-4 animate-in fade-in slide-in-from-top-4">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">Why this lever?</label>
          <TeachingText className="text-sm italic">
            Complete the sentence: "I am choosing this lever because I want players to notice..."
          </TeachingText>
          <textarea
            value={localWhy}
            onChange={handleWhyChange}
            placeholder="Explain why this lever makes the information in your attention target matter..."
            className="w-full p-4 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none min-h-[120px]"
          />
        </div>
      )}
    </ScreenLayout>
  )
}

export default Screen18
