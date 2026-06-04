import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen9 = () => {
  const { activityUpgradePlan, updatePlan, responses, setResponse, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = (responses.oftenTell?.length > 2) && 
                    (responses.behaviorWantMore?.length > 2) && 
                    (activityUpgradePlan.problem?.length > 2)
    setScreenReady(isReady)
  }, [responses.oftenTell, responses.behaviorWantMore, activityUpgradePlan.problem, setScreenReady])

  return (
    <ScreenLayout title="Apply It to Your Activity">
      <TeachingText>
        Return to the activity you wrote down at the beginning. Now answer these questions.
      </TeachingText>

      <div className="space-y-8 pt-4">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My activity is:</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.originalActivity || 'Not yet defined'}</div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-lab-ink/40">One thing I often tell players during this activity is:</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-lab-ink/20 focus:border-lab-teal outline-none py-2 transition-colors"
              placeholder="e.g., 'Talk more'"
              value={responses.oftenTell || ''}
              onChange={(e) => setResponse('oftenTell', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-lab-ink/40">The behavior I want more of is:</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-lab-ink/20 focus:border-lab-teal outline-none py-2 transition-colors"
              placeholder="e.g., Early defensive communication"
              value={responses.behaviorWantMore || ''}
              onChange={(e) => setResponse('behaviorWantMore', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase text-lab-ink/40">The problem players may need to notice more clearly is:</label>
            <textarea
              className="w-full bg-transparent border-b border-lab-ink/20 focus:border-lab-teal outline-none py-2 transition-colors min-h-[60px]"
              placeholder="e.g., When the opponent starts their rotation"
              value={activityUpgradePlan.problem}
              onChange={(e) => updatePlan('problem', e.target.value)}
            />
          </div>
        </div>

        <div className="card bg-lab-teal/5 border-lab-teal/10">
          <p className="text-sm italic text-lab-ink/80">
            Do not create the constraint yet. For now, just identify the behavior and the problem. Good constraints usually start with better noticing by the coach.
          </p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen9
