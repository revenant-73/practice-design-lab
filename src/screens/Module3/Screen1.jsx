import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const clearProblem = `Players are ${activityUpgradePlan.problemPlayersAre} when ${activityUpgradePlan.problemWhen}, which leads to ${activityUpgradePlan.problemLeadsTo}.`

  return (
    <ScreenLayout title="Where We Left Off">
      <TeachingText>
        In Module 2, you turned a vague coaching concern into a clearer practice problem.
      </TeachingText>

      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My Activity</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.originalActivity || 'Not yet defined'}</div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My clear practice problem</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.problemPlayersAre ? clearProblem : 'Not yet defined'}</div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My first guess at what players need to notice</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.problemNeedTo || 'Not yet defined'}</div>
        </div>
      </div>

      <TeachingText>
        Now we are going to sharpen that last piece. Before we choose a constraint, we need to ask:
      </TeachingText>

      <div className="hand-drawn p-6 border-l-4 border-lab-teal bg-lab-teal/5 my-6">
        <p className="text-lg font-serif italic text-lab-ink">
          “What information do players need to notice to solve this problem better?”
        </p>
      </div>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway</p>
        <p className="text-xl font-bold italic">“A constraint works better when it has a clear attention target.”</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
