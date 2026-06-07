import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen8 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Outcome 2: Too Hard">
      <TeachingText>
        The activity may be too hard if players look overwhelmed, the problem happens too fast, or the success condition rarely happens. It means the first version asked for too much too soon.
      </TeachingText>

      <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal space-y-3 my-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Possible Adjustments</p>
        <ul className="grid grid-cols-1 gap-2">
          {["Reduce pressure", "Shrink the space", "Slow starting situation", "Use fewer players", "Make success condition clearer"].map((item, i) => (
            <li key={i} className="text-xs text-lab-ink/80 flex items-center gap-2">
               <div className="w-1 h-1 rounded-full bg-lab-teal" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <KeyIdea>
        If it is too hard, simplify the problem without removing the learning goal.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen8
