import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen10 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Outcome 4: Nothing Changes">
      <TeachingText>
        Nothing may change if the constraint does not match the problem or the scoring doesn't matter enough. This is not a disaster; it is feedback.
      </TeachingText>

      <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal space-y-3 my-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Possible Adjustments</p>
        <ul className="grid grid-cols-1 gap-2">
          {["Revisit problem statement", "Clarify attention target", "Strengthen scoring", "Change the lever", "Make success condition more visible"].map((item, i) => (
            <li key={i} className="text-xs text-lab-ink/80 flex items-center gap-2">
               <div className="w-1 h-1 rounded-full bg-lab-teal" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <KeyIdea>
        If nothing changes, the constraint probably needs a clearer connection to the problem.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen10
