import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen7 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Meaningful vs. Weak">
      <TeachingText>
        A meaningful constraint changes the problem in the direction of the learning goal.
      </TeachingText>

      <div className="grid grid-cols-1 gap-4 py-2">
        <div className="bg-lab-teal/5 p-5 border-l-4 border-lab-teal">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-3">Meaningful Constraints</h4>
          <ul className="space-y-2">
            {[
              'Make useful information easier to notice',
              'Make a better decision more valuable',
              'Make an unhelpful habit less useful',
              'Preserve game-like pressure',
              'Keep the activity connected to the sport'
            ].map((item, i) => (
              <li key={i} className="text-xs flex items-start gap-2 text-lab-ink/80">
                <span className="text-lab-teal font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-lab-coral/5 p-5 border-l-4 border-lab-coral">
          <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-coral mb-3">Weak Constraints</h4>
          <ul className="space-y-2">
            {[
              'Add complexity without purpose',
              'Rewards something unrelated',
              'Punishes mistakes without teaching',
              'Forces one answer too tightly',
              'Solves a different problem'
            ].map((item, i) => (
              <li key={i} className="text-xs flex items-start gap-2 text-lab-ink/80">
                <span className="text-lab-coral font-bold">×</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <KeyIdea>
        A constraint is meaningful when it makes the right information more useful, more visible, or more necessary.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen7
