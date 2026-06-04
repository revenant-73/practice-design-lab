import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen7 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="The Three-Part Diagnosis Check">
      <TeachingText>
        A useful practice problem usually includes three things:
      </TeachingText>

      <div className="space-y-6">
        {[
          { 
            title: '1. The Situation', 
            subtitle: 'When does it happen?',
            items: ['In transition', 'After a mistake', 'Under pressure', 'Receiving from teammate']
          },
          { 
            title: '2. The Player Behavior', 
            subtitle: 'What are players doing or not doing?',
            items: ['Moving late', 'Crowding the ball', 'Staying quiet', 'Forcing one option']
          },
          { 
            title: '3. The Consequence', 
            subtitle: 'Why does it matter?',
            items: ['Fewer options', 'Easier to defend', 'Poorer support', 'Lost scoring chance']
          }
        ].map(section => (
          <div key={section.title} className="space-y-2">
            <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">{section.title}</h3>
            <p className="text-sm font-bold text-lab-ink/40">{section.subtitle}</p>
            <div className="flex flex-wrap gap-2">
              {section.items.map(item => (
                <span key={item} className="px-3 py-1 bg-white border border-lab-ink/10 rounded-full text-xs italic">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <KeyIdea>
        If your problem includes the <strong>situation</strong>, <strong>behavior</strong>, and <strong>consequence</strong>, you are ready to design.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen7
