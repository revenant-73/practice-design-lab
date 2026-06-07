import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen18 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Timing Your Questions">
      <TeachingText>
        Do not stop every single moment. Let players experience the problem, then use questions to point attention back to what matters.
      </TeachingText>

      <div className="grid grid-cols-2 gap-2 py-4">
        <div className="p-4 bg-lab-teal/5 border border-lab-teal/20 rounded shadow-sm">
           <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">Useful Moments</p>
           <ul className="text-[10px] text-lab-ink/80 space-y-1">
             <li>• After a short round</li>
             <li>• During a natural break</li>
             <li>• After behavior appears</li>
             <li>• Before restarting</li>
           </ul>
        </div>
        <div className="p-4 bg-lab-coral/5 border border-lab-coral/20 rounded shadow-sm">
           <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-coral mb-2">Less Useful</p>
           <ul className="text-[10px] text-lab-ink/80 space-y-1">
             <li>• After every mistake</li>
             <li>• Before experience</li>
             <li>• When it's a lecture</li>
             <li>• When not listening</li>
           </ul>
        </div>
      </div>

      <KeyIdea>
        Ask questions to guide attention, not to perform coaching intelligence.
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen18
