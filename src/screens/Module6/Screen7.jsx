import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen7 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Outcome 1: Too Easy">
      <TeachingText>
        The activity may be too easy if players solve the problem immediately or the constraint stops creating challenge. This is not bad; it means you can increase the challenge.
      </TeachingText>

      <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal space-y-3 my-4">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Possible Adjustments</p>
        <ul className="grid grid-cols-1 gap-2">
          {["Add pressure", "Expand the space", "Reduce the bonus", "Add stronger opponent challenge", "Move closer to full game"].map((item, i) => (
            <li key={i} className="text-xs text-lab-ink/80 flex items-center gap-2">
               <div className="w-1 h-1 rounded-full bg-lab-teal" /> {item}
            </li>
          ))}
        </ul>
      </div>

      <KeyIdea>
        If it is too easy, make the problem more game-like or more demanding.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen7
