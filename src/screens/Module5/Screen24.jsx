import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen24 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = (activityUpgradePlan.m5CoachingQuestion || '').length > 5
    setScreenReady(isReady)
  }, [activityUpgradePlan.m5CoachingQuestion, setScreenReady])

  const stems = [
    'What did you notice?', 'What changed?', 'What option became available?',
    'What did the opponent give you?', 'Where could you become useful?',
    'What information helped?', 'What was the next useful action?'
  ]

  return (
    <ScreenLayout title="Write Your Question">
      <TeachingText>
        Write one coaching question for your upgraded activity. Short and inviting thought is better than a lecture.
      </TeachingText>

      <div className="flex flex-wrap gap-2 py-4">
        {stems.map((stem, i) => (
          <span key={i} className="px-3 py-1 bg-lab-teal/5 text-lab-teal border border-lab-teal/10 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider">
            {stem}
          </span>
        ))}
      </div>

      <textarea
        value={activityUpgradePlan.m5CoachingQuestion || ''}
        onChange={(e) => updatePlan('m5CoachingQuestion', e.target.value)}
        placeholder="Enter your question here..."
        className="w-full p-4 bg-white hand-drawn italic text-sm focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5 min-h-[100px]"
      />

      <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4 mt-6">
        <p className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-3">Final Check</p>
        <ul className="space-y-1">
          <li className="text-xs text-lab-ink/80 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-lab-teal" /> Connects to attention target?
          </li>
          <li className="text-xs text-lab-ink/80 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-lab-teal" /> Is it short?
          </li>
          <li className="text-xs text-lab-ink/80 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-lab-teal" /> Invites players to think?
          </li>
        </ul>
      </div>
    </ScreenLayout>
  )
}

export default Screen24
