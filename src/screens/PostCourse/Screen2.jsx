import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, ReflectionBox, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()
  
  useEffect(() => {
    // This is a reflection screen, we'll let them pass even if empty because they might come back
    setScreenReady(true)
  }, [setScreenReady])

  const plan = activityUpgradePlan

  return (
    <ScreenLayout title="The Tomorrow Challenge">
      <TeachingText>
        Run this activity at your next practice. Do not wait until the plan feels perfect. Use the first version, watch what changes, and make one adjustment.
      </TeachingText>

      <div className="bg-lab-teal/5 p-6 rounded-2xl border-2 border-lab-teal/20 my-6">
        <h3 className="font-bold text-lab-teal mb-4 uppercase tracking-wider text-xs">At your next practice:</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3"><span className="font-bold text-lab-teal">1.</span> Run the activity you upgraded.</li>
          <li className="flex gap-3"><span className="font-bold text-lab-teal">2.</span> Explain the constraint simply.</li>
          <li className="flex gap-3"><span className="font-bold text-lab-teal">3.</span> Watch the attention target.</li>
          <li className="flex gap-3"><span className="font-bold text-lab-teal">4.</span> Ask your coaching question.</li>
          <li className="flex gap-3"><span className="font-bold text-lab-teal">5.</span> Notice the signals and adjust.</li>
        </ul>
      </div>

      <div className="space-y-6 mt-12">
        <h2 className="font-bold text-lg">Post-Practice Reflection</h2>
        <TeachingText>Come back here after your session to record what happened.</TeachingText>
        
        <ReflectionField 
          label="What changed?"
          value={plan.postCourseReflectionWhatChanged}
          onChange={(v) => updatePlan('postCourseReflectionWhatChanged', v)}
        />
        <ReflectionField 
          label="What did players notice?"
          value={plan.postCourseReflectionWhatNoticed}
          onChange={(v) => updatePlan('postCourseReflectionWhatNoticed', v)}
        />
        <ReflectionField 
          label="What adjustment did I make (or should I make next)?"
          value={plan.postCourseReflectionAdjustment}
          onChange={(v) => updatePlan('postCourseReflectionAdjustment', v)}
        />
      </div>

      <div className="mt-8">
        <KeyIdea>Run it. Watch it. Adjust one thing. Try the next version.</KeyIdea>
      </div>
    </ScreenLayout>
  )
}

const ReflectionField = ({ label, value, onChange }) => (
  <div className="space-y-2">
    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">{label}</p>
    <ReflectionBox
      placeholder="Type here..."
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Screen2
