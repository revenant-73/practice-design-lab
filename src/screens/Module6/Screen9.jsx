import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen9 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Outcome 3: It Gets Weird">
      <TeachingText>
        It may be getting weird if players are “gaming” the scoring or the activity no longer looks like the sport. This usually means the constraint became louder than the sport problem.
      </TeachingText>

      <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal space-y-3 my-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Possible Adjustments</p>
        <ul className="grid grid-cols-1 gap-2">
          {["Remove one rule", "Simplify the scoring", "Make success condition game-connected", "Return to normal activity", "Choose cleaner lever"].map((item, i) => (
            <li key={i} className="text-xs text-lab-ink/80 flex items-center gap-2">
               <div className="w-1 h-1 rounded-full bg-lab-teal" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <KeyIdea>
        If it gets weird, reconnect the constraint to the sport problem.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen9
