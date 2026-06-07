import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  const resources = [
    {
      title: "Space",
      notice: "Open space, crowding, support angles, defensive gaps, width, depth.",
      changes: "Smaller area, larger area, target zones, no-go zones."
    },
    {
      title: "Scoring",
      notice: "What to value, behavior changes, decision outcomes.",
      changes: "Bonus points, double points, score only after target behavior."
    },
    {
      title: "Numbers",
      notice: "Involvement, touches, decisions, responsibility.",
      changes: "1v1, 2v1, 3v2, small-sided overloads."
    },
    {
      title: "Starting Situation",
      notice: "Specific game moments, transitions, mistakes.",
      changes: "Start after a mistake, start from pressure, start in transition."
    }
  ]

  return (
    <ScreenLayout title="Lever Cheat Sheet">
      <TeachingText>
        Quick tools you can return to after the course. Use this to help choose a lever for future activity upgrades.
      </TeachingText>

      <div className="grid grid-cols-1 gap-4 mt-6">
        {resources.map((r, i) => (
          <div key={i} className="p-4 border-2 border-lab-ink/10 rounded-2xl bg-white">
            <h3 className="font-bold text-lab-teal mb-2 uppercase tracking-widest text-xs">{r.title}</h3>
            <div className="space-y-2">
              <p className="text-[10px]"><span className="font-bold text-lab-ink/60 uppercase">Notice:</span> {r.notice}</p>
              <p className="text-[10px]"><span className="font-bold text-lab-ink/60 uppercase">Common Changes:</span> {r.changes}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-lab-ink/5 rounded-xl italic text-[10px] text-lab-ink/70">
        More levers: Rules (shaping options), Roles (responsibility), Pressure (time/score limits), Opponent Behavior (reading the game).
      </div>
    </ScreenLayout>
  )
}

export default Screen3
