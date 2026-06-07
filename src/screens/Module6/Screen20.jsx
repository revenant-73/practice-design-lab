import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen20 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Post-Activity Debrief">
      <TeachingText>
        Once the activity is over, move from **guiding attention** to **reflective analysis**. 
      </TeachingText>

      <div className="space-y-4 my-6">
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-lab-teal text-white flex items-center justify-center shrink-0 font-bold">1</div>
           <div>
             <p className="font-bold text-[11px]">What worked?</p>
             <p className="text-[10px] text-lab-ink/70">Establish what successfully solved the problem.</p>
           </div>
        </div>
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-lab-teal text-white flex items-center justify-center shrink-0 font-bold">2</div>
           <div>
             <p className="font-bold text-[11px]">Why did it work?</p>
             <p className="text-[10px] text-lab-ink/70">Connect the action to the environmental cue.</p>
           </div>
        </div>
        <div className="flex gap-4">
           <div className="w-8 h-8 rounded-full bg-lab-teal text-white flex items-center justify-center shrink-0 font-bold">3</div>
           <div>
             <p className="font-bold text-[11px]">When else?</p>
             <p className="text-[10px] text-lab-ink/70">Discuss transfer to the real game scenario.</p>
           </div>
        </div>
      </div>

      <KeyIdea>
        Debriefing is where we build the "Library of Solutions" for future games.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen20
