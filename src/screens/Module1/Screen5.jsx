import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, StepByStep } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen5 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const quotes = ['“Talk more.”', '“Move.”', '“Find space.”', '“Read the defense.”', '“Be more aggressive.”']
  
  const steps = [
    <div className="flex flex-wrap gap-2 py-2">
      {quotes.map((quote) => (
        <span key={quote} className="px-3 py-1 bg-lab-ink/5 rounded text-sm italic">{quote}</span>
      ))}
    </div>
  ]

  return (
    <ScreenLayout title="From Telling to Designing">
      <TeachingText>
        Coaches often say things like:
      </TeachingText>

      <StepByStep steps={steps} label="Show Coaching Habits" />

      <TeachingText>
        But if the activity does not create a <strong>reason</strong> for players to communicate or move, the words may not change much.
      </TeachingText>

      <TeachingText>
        A constraint helps you move from only <strong>telling</strong> players what you want to <strong>designing</strong> a task where the players can feel the problem.
      </TeachingText>

      <div className="hand-drawn bg-white p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase text-lab-ink/40">Instead of only saying:</p>
          <p className="text-lg font-bold">“Find space.”</p>
        </div>
        <div className="w-8 h-px bg-lab-ink/20 mx-auto" />
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase text-lab-teal">You might design:</p>
          <p className="text-lg leading-snug">A small-sided game where a team earns a bonus point when a player receives the ball after creating useful space away from pressure.</p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen5
