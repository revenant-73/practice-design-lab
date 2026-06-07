import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen16 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const menu = [
    { title: 'To Increase Challenge', items: ['Add pressure', 'Add opponent complexity', 'Increase space', 'Reduce time'] },
    { title: 'To Reduce Challenge', items: ['Reduce pressure', 'Shrink space', 'Slow starting situation', 'Use fewer players'] },
    { title: 'To Reconnect to Sport', items: ['Remove artificial rules', 'Use normal scoring', 'Add real opponent problem', 'Game-relevant success'] }
  ]

  return (
    <ScreenLayout title="The Adjustment Menu">
      <TeachingText>
        Use this menu when you need to design the next version of your activity.
      </TeachingText>

      <div className="grid grid-cols-1 gap-4 py-4">
        {menu.map((section, i) => (
          <div key={i} className="bg-white hand-drawn p-4 border border-lab-ink/5 shadow-sm">
            <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-3">{section.title}</h4>
            <div className="grid grid-cols-2 gap-2">
              {section.items.map((item, j) => (
                <div key={j} className="text-xs text-lab-ink/60 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-lab-teal/30" /> {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <TeachingText className="text-sm italic text-center">
        The goal is a clearer signal, not a longer rule book.
      </TeachingText>
    </ScreenLayout>
  )
}

export default Screen16
