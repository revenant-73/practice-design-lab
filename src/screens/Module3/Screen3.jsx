import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, VisualPlaceholder } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen3 = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Illustration: The Attention Spotlight">
      <div className="my-6">
        <img 
          src="/page_33_the_attention_spotlight.png" 
          alt="The Attention Spotlight"
          className="w-full h-auto rounded-2xl shadow-lg border-2 border-lab-ink/5"
        />
        <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-teal text-center mt-4">The Attention Spotlight</p>
        <p className="text-xs text-lab-ink/60 italic leading-snug font-sans text-center px-4 mt-2">A constraint should help players notice the information that matters.</p>
      </div>

      <TeachingText>
        Players cannot adapt to information they do not notice. Sometimes the issue is not effort. Sometimes the issue is attention.
      </TeachingText>

      <TeachingText>
        The player may be working hard, but looking at the wrong thing, noticing too late, or missing the useful information completely.
      </TeachingText>

      <div className="hand-drawn p-6 bg-lab-teal/5 border-lab-teal/20 mt-4">
        <p className="text-sm font-sans italic text-lab-ink/80 leading-relaxed">
          The constraint should help bring the right information into focus.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen3
