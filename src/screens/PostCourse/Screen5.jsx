import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Troubleshooting Guide">
      <TeachingText>
        Helpful adjustments for when your activity upgrade doesn't go exactly to plan.
      </TeachingText>

      <div className="space-y-4 mt-6">
        <TroubleItem 
          title="If It Is Too Easy" 
          tips={["Add pressure", "Add opponent complexity", "Increase space", "Reduce time"]} 
        />
        <TroubleItem 
          title="If It Is Too Hard" 
          tips={["Reduce player numbers", "Add an 'out' or safe zone", "Decrease space", "Add a prompt or cue"]} 
        />
        <TroubleItem 
          title="If It Gets Weird" 
          tips={["Check the scoring (is it rewarding the wrong thing?)", "Reset the start point", "Simplify the rule"]} 
        />
        <TroubleItem 
          title="If Nothing Changes" 
          tips={["Make the lever more extreme", "Change the lever entirely", "Stop and ask: 'What are you noticing right now?'"]} 
        />
      </div>
    </ScreenLayout>
  )
}

const TroubleItem = ({ title, tips }) => (
  <div className="p-4 bg-white border-2 border-lab-ink/10 rounded-2xl">
    <h3 className="font-bold text-lab-ink mb-2 uppercase tracking-widest text-[10px]">{title}</h3>
    <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
      {tips.map((tip, i) => (
        <li key={i} className="text-[10px] text-lab-ink/70 flex gap-2">
          <span className="text-lab-teal">•</span> {tip}
        </li>
      ))}
    </ul>
  </div>
)

export default Screen5
