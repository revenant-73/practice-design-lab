import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const clearProblem = `Players are ${activityUpgradePlan.problemPlayersAre} when ${activityUpgradePlan.problemWhen}, which leads to ${activityUpgradePlan.problemLeadsTo}.`
  const attentionTarget = `I want players to notice ${activityUpgradePlan.m3TargetNotice} when ${activityUpgradePlan.m3TargetWhen} so they can ${activityUpgradePlan.m3TargetSoTheyCan}.`

  return (
    <ScreenLayout title="Where We Left Off">
      <TeachingText>
        In Module 3, you created an attention target. You defined exactly what you want players to notice and why it matters.
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
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My attention target</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.m3TargetNotice ? attentionTarget : 'Not yet defined'}</div>
        </div>
      </div>

      <TeachingText>
        Now we are ready for the next step. We are not adding a random rule. We are choosing one part of the activity to change because we want players to notice something specific.
      </TeachingText>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway Preview</p>
        <p className="text-xl font-bold italic">“Choose the lever that makes the important information matter.”</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
