import React from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { activityUpgradePlan, updatePlan } = useStore()

  const combined = `When ${activityUpgradePlan.problemWhen || '...'}, players are ${activityUpgradePlan.problemPlayersAre || '...'}, which leads to ${activityUpgradePlan.problemLeadsTo || '...'}. They may need to ${activityUpgradePlan.problemNeedTo || '...'}.`

  return (
    <ScreenLayout title="Build Your Problem Statement">
      <TeachingText>
        Use the activity you selected in Module 1. Answer these four prompts to build a clear sentence.
      </TeachingText>

      <div className="space-y-6 pt-4">
        {[
          { label: 'When...', field: 'problemWhen', placeholder: 'e.g., we lose possession' },
          { label: 'Players are...', field: 'problemPlayersAre', placeholder: 'e.g., slow to recover' },
          { label: 'Which leads to...', field: 'problemLeadsTo', placeholder: 'e.g., easy counter-attacks' },
          { label: 'They may need to...', field: 'problemNeedTo', placeholder: 'e.g., recognize the transition moment faster' }
        ].map(item => (
          <div key={item.field} className="space-y-2">
            <label className="text-xs font-bold uppercase text-lab-ink/40 tracking-widest">{item.label}</label>
            <input
              type="text"
              className="w-full bg-transparent border-b-2 border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic"
              placeholder={item.placeholder}
              value={activityUpgradePlan[item.field] || ''}
              onChange={(e) => updatePlan(item.field, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="pt-8 space-y-4">
        <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs text-center">Your Combined Statement</h3>
        <div className="p-6 bg-white hand-drawn min-h-[100px] flex items-center justify-center">
          <p className="text-lg text-center leading-relaxed italic">
            {activityUpgradePlan.problemWhen || activityUpgradePlan.problemPlayersAre ? combined : <span className="text-lab-ink/20 font-normal not-italic">Start typing above to build your statement...</span>}
          </p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen5
