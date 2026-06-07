import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen10 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = activityUpgradePlan.m3NoticingProblem && activityUpgradePlan.m3NoticingProblemWhy?.length > 2
    setScreenReady(isReady)
  }, [activityUpgradePlan.m3NoticingProblem, activityUpgradePlan.m3NoticingProblemWhy, setScreenReady])

  const problemTypes = [
    { id: 'Too late', label: 'Too late', example: 'They recognize pressure only after they are trapped.' },
    { id: 'Not clear enough', label: 'Not clear enough', example: 'They see a teammate but do not recognize whether that teammate is useful.' },
    { id: 'Wrong focus', label: 'Wrong focus', example: 'They focus only on the ball and miss space, support, or opponent behavior.' },
    { id: 'Not acting on it', label: 'Not acting on it', example: 'They see the open space but do not commit to using it.' },
    { id: 'Not sure yet', label: 'Not sure yet', example: 'I need to observe more closely to be sure which information is missing.' }
  ]

  return (
    <ScreenLayout title="Earlier, Clearer, Differently">
      <TeachingText>
        Look at your attention target. Now choose what kind of noticing problem you are dealing with.
      </TeachingText>

      <div className="space-y-2 mt-4">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">My Attention Target</label>
        <div className="p-4 bg-white hand-drawn italic border-2 border-lab-ink/5 shadow-sm text-lab-ink/70">
          {activityUpgradePlan.m3AttentionTarget || 'Not yet defined'}
        </div>
      </div>

      <div className="space-y-3 my-6">
        {problemTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => updatePlan('m3NoticingProblem', type.id)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all flex flex-col gap-1 ${activityUpgradePlan.m3NoticingProblem === type.id ? 'border-lab-teal bg-lab-teal/5' : 'border-lab-ink/10 bg-white hover:border-lab-teal/40'}`}
          >
            <span className="font-bold text-sm text-lab-ink">{type.label}</span>
            <span className="text-xs text-lab-ink/50 italic">{type.example}</span>
          </button>
        ))}
      </div>

      <div className="space-y-3 group">
        <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">Why did you choose this?</label>
        <textarea
          className="w-full bg-white/50 organic-border p-4 min-h-[100px] outline-none focus:border-lab-teal transition-all font-sans text-sm"
          placeholder="Explain what you are seeing in practice..."
          value={activityUpgradePlan.m3NoticingProblemWhy}
          onChange={(e) => updatePlan('m3NoticingProblemWhy', e.target.value)}
        />
      </div>
    </ScreenLayout>
  )
}

export default Screen10
