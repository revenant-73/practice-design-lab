import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen15 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const examples = [
    {
      sport: 'Volleyball',
      vague: '“We need better serve receive.”',
      clearer: 'Passers are late recognizing short/deep serve depth, which creates rushed first contacts and fewer attacking options.'
    },
    {
      sport: 'Basketball',
      vague: '“We need better spacing.”',
      clearer: 'Off-ball players drift toward the ball when the ball handler is pressured, which removes passing lanes and makes help defense easier.'
    },
    {
      sport: 'Soccer',
      vague: '“We need to defend better.”',
      clearer: 'After losing possession, players are slow to recover central space, which gives the opponent an easier path forward.'
    },
    {
      sport: 'Hockey',
      vague: '“We need better puck movement.”',
      clearer: 'Players hold the puck too long under pressure instead of recognizing the early support option.'
    }
  ]

  return (
    <ScreenLayout title="Multi-Sport Examples">
      <TeachingText>
        Use these examples as models. The clearer version describes the problem well enough that a constraint can be designed.
      </TeachingText>

      <div className="space-y-6 pt-4">
        {examples.map(ex => (
          <div key={ex.sport} className="card bg-white space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-lab-teal">{ex.sport}</h4>
            <div className="space-y-1">
              <p className="text-[10px] uppercase font-bold text-lab-coral/40 line-through decoration-lab-coral/20">Vague: {ex.vague}</p>
              <p className="text-sm font-medium leading-relaxed italic">“{ex.clearer}”</p>
            </div>
          </div>
        ))}
      </div>

      <KeyIdea>
        The clearer version does not need to solve the problem yet. It just needs to describe it.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen15
