import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen13 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const categories = [
    { title: 'Space', text: 'Recognizing, creating, or protecting open space.' },
    { title: 'Timing', text: 'Acting too early, too late, or without reading the moment.' },
    { title: 'Support', text: 'Helping the teammate with the ball or the immediate problem.' },
    { title: 'Pressure', text: 'Rushing, hiding, or freezing when the challenge increases.' },
    { title: 'Communication', text: 'Saying too little, too much, or giving info that doesn\'t help.' },
    { title: 'Decision-Making', text: 'Choosing before looking or missing better options.' },
    { title: 'Transition', text: 'Switching roles after gaining/losing possession or advantage.' },
    { title: 'Composure', text: 'Carrying the last mistake into the next action.' }
  ]

  return (
    <ScreenLayout title="Common Problem Categories">
      <TeachingText>
        If you feel stuck, start with one of these common team-sport problem categories. Then make it more specific.
      </TeachingText>

      <div className="grid grid-cols-1 gap-3 pt-4">
        {categories.map((cat) => (
          <div key={cat.title} className="p-4 bg-white border border-lab-ink/10 rounded-xl hover:border-lab-teal transition-colors group">
            <h4 className="font-bold text-lab-teal text-sm uppercase tracking-widest mb-1 group-hover:scale-105 transition-transform origin-left">{cat.title}</h4>
            <p className="text-xs text-lab-ink/70 leading-relaxed">{cat.text}</p>
          </div>
        ))}
      </div>

      <KeyIdea>
        The category is only the starting point. Your job is to make it specific enough to design around.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen13
