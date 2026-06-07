import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen6 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  const categories = [
    {
      title: "1. Ball / Object",
      items: ["Where is it going?", "How fast?", "How high?", "How much time does it create?"]
    },
    {
      title: "2. Space",
      items: ["Where is space opening?", "Where is space closing?", "Where is pressure coming from?"]
    },
    {
      title: "3. People",
      items: ["Where are teammates?", "Where are opponents?", "Who needs help?", "Who is available?"]
    },
    {
      title: "4. Moment",
      items: ["Transition moment?", "Pressure moment?", "Recovery moment?", "Chance to attack or reset?"]
    }
  ]

  return (
    <ScreenLayout title="Notice What?">
      <TeachingText>
        Many coaching problems come from players missing one of four broad information sources.
      </TeachingText>

      <div className="grid grid-cols-1 gap-4 my-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-lab-ink/5 shadow-sm">
            <h4 className="font-bold text-lab-teal text-sm mb-3 uppercase tracking-widest">{cat.title}</h4>
            <div className="grid grid-cols-1 gap-2">
              {cat.items.map((item, i) => (
                <div key={i} className="flex gap-2 items-center text-xs text-lab-ink/70">
                  <div className="w-1 h-1 rounded-full bg-lab-teal/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-lab-ink text-white p-6 rounded-2xl organic-border border-none">
        <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] opacity-60 mb-2 text-lab-teal">Key Idea</h4>
        <p className="text-lg font-serif italic leading-tight">
          Players are always noticing something. The question is whether they are noticing the useful thing soon enough.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen6
