import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen2 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Constraints Guide Attention">
      <TeachingText>
        A constraint is not just a rule. A constraint is a way to shape what players pay attention to.
      </TeachingText>

      <div className="space-y-4 my-8">
        <div className="flex gap-4 items-start">
          <div className="w-2 h-2 rounded-full bg-lab-teal mt-2 shrink-0" />
          <p className="text-sm">If players are missing space, the constraint should help them notice space.</p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-2 h-2 rounded-full bg-lab-teal mt-2 shrink-0" />
          <p className="text-sm">If players are late helping a teammate, the constraint should help them notice the teammate’s problem earlier.</p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-2 h-2 rounded-full bg-lab-teal mt-2 shrink-0" />
          <p className="text-sm">If players rush under pressure, the constraint should help them notice available options before acting.</p>
        </div>
        <div className="flex gap-4 items-start">
          <div className="w-2 h-2 rounded-full bg-lab-teal mt-2 shrink-0" />
          <p className="text-sm">If players lose focus after mistakes, the constraint should help them notice the next useful action.</p>
        </div>
      </div>

      <TeachingText>
        The constraint is not the goal. The goal is better player perception, decision-making, and action.
      </TeachingText>

      <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 mt-8">
        <h4 className="text-xs font-bold uppercase tracking-widest text-lab-teal mb-3">Key Idea</h4>
        <p className="text-lg font-serif italic text-lab-ink leading-tight">
          Before asking, “What constraint should I add?”
          <br /><br />
          Ask: “What do players need to notice?”
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen2
