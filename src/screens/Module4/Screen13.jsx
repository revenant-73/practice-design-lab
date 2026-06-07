import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen13 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const levers = [
    { name: 'Space', icon: '⧉', phrase: 'Where can players go?' },
    { name: 'Scoring', icon: '★', phrase: 'What gets rewarded?' },
    { name: 'Numbers', icon: '👥', phrase: 'How many involved?' },
    { name: 'Start', icon: '🏁', phrase: 'Where and how does the action start?' },
    { name: 'Rules', icon: '⚖', phrase: 'What options are shaped?' },
    { name: 'Roles', icon: '🎭', phrase: 'Who has responsibility?' },
    { name: 'Pressure', icon: '⚡', phrase: 'What makes it matter?' },
    { name: 'Opponent', icon: '⚔', phrase: 'How does the opponent act and respond?' }
  ]

  return (
    <ScreenLayout title="Constraint Lever Menu">
      <div className="grid grid-cols-2 gap-4 py-4">
        {levers.map((lever, i) => (
          <div key={i} className="bg-white hand-drawn overflow-hidden group hover:border-lab-teal transition-colors">
            <div className="bg-lab-teal text-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest flex justify-between items-center">
              {lever.name}
              <span className="text-sm">{lever.icon}</span>
            </div>
            <div className="p-4">
              <p className="text-xs font-serif italic text-lab-ink/80 leading-tight">
                {lever.phrase}
              </p>
            </div>
          </div>
        ))}
      </div>

      <TeachingText>
        The menu gives you options. It does not give you the answer.
      </TeachingText>

      <TeachingText>
        The answer comes from the relationship between the problem, the attention target, and the lever that makes the right information matter.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen13
