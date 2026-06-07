import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'
import { CheckCircle } from 'lucide-react'

const Screen6 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Course Completed">
      <div className="flex flex-col items-center text-center space-y-6 py-12">
        <div className="w-24 h-24 bg-lab-teal text-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
          <CheckCircle size={64} />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-lab-ink">Congratulations!</h2>
          <p className="text-lab-ink/60 italic font-serif">You have completed the Practice Design Lab: Constraints</p>
        </div>

        <TeachingText>
          You now have the tools to design, run, and adjust activities that help your players notice what matters most.
        </TeachingText>

        <KeyIdea>
          The lab never ends. Every practice is another version of the experiment.
        </KeyIdea>

        <div className="pt-8 w-full border-t border-lab-ink/10 mt-12">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40 mb-4">What's next?</p>
          <div className="grid grid-cols-2 gap-4">
            <a href="/" className="p-3 bg-lab-ink text-white rounded-xl text-xs font-bold transition-transform active:scale-95">Go Home</a>
            <button 
              onClick={() => window.print()}
              className="p-3 border-2 border-lab-ink text-lab-ink rounded-xl text-xs font-bold transition-transform active:scale-95"
            >
              Print Certificate
            </button>
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen6
