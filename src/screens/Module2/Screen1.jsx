import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen1 = () => {
  const { activityUpgradePlan, responses, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Where We Left Off">
      <TeachingText>
        In Module 1, you chose one activity you already use in practice. You also named one behavior you often coach during that activity.
      </TeachingText>

      <div className="space-y-6 pt-4">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">My Activity</label>
          <div className="p-4 bg-white hand-drawn italic">{activityUpgradePlan.originalActivity || 'Not yet defined'}</div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">One behavior I keep coaching during this activity</label>
          <div className="p-4 bg-white hand-drawn italic">{responses.behaviorWantMore || 'Not yet defined'}</div>
        </div>
      </div>

      <TeachingText>
        Now we are going to slow down before adding a constraint. The better question is: <strong>“What problem are players actually trying to solve?”</strong>
      </TeachingText>

      <div className="hand-drawn bg-lab-teal text-white p-6 mt-8">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway</p>
        <p className="text-xl font-bold">Start with the problem, not the rule.</p>
      </div>
    </ScreenLayout>
  )
}

export default Screen1
