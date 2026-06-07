import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, FieldMission } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen30 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Module 5 Summary">
      <TeachingText>
        In this module, you turned your lever into a specific activity upgrade. You now have the first complete version of your upgraded activity.
      </TeachingText>

      <div className="pt-4 space-y-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/30">Your Upgrade Includes:</p>
        <ul className="grid grid-cols-2 gap-2">
          {[
            "Original Activity", "Clear Problem", "Attention Target",
            "Constraint Lever", "Specific Constraint", "Success Condition", "Coaching Question"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-xs font-medium text-lab-ink/70 p-2 bg-white hand-drawn">
              <div className="w-1.5 h-1.5 rounded-full bg-lab-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="hand-drawn bg-lab-teal text-white p-6 my-6">
        <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Module Takeaway</p>
        <p className="text-xl font-bold italic">“Build the simplest version that clearly changes the problem.”</p>
      </div>

      <FieldMission title="The Explanation Challenge">
        Try explaining your new constraint to another person (a spouse, a friend, or another coach) in under 30 seconds. If they look confused, your constraint might be too complex. Aim for: "We're playing [Game], but [One Change] so that players notice [Attention Target]."
      </FieldMission>

      <TeachingText className="pt-2 font-bold text-lab-teal italic">
        In the next module, you will learn how to run it, watch what changes, and adjust without panicking.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen30
