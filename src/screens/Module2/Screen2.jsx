import React from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'

const Screen2 = () => {
  return (
    <ScreenLayout title="Why Vague Problems Create Weak Constraints">
      <TeachingText>
        Most coaches can quickly name what they want to improve: Communication. Spacing. Defense. Passing.
      </TeachingText>

      <TeachingText>
        But those are not clear practice problems yet. They are <strong>categories</strong>.
      </TeachingText>

      <div className="card space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-bold uppercase text-lab-coral tracking-widest">Vague</p>
          <p className="text-lg font-medium italic">“We need better communication.”</p>
        </div>
        <div className="w-full h-px bg-lab-ink/5" />
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase text-lab-teal tracking-widest">Clearer Questions</p>
          <ul className="text-sm grid grid-cols-2 gap-2 text-lab-ink/70">
            <li>• Speak earlier?</li>
            <li>• Useful info?</li>
            <li>• Claim responsibility?</li>
            <li>• Coordination?</li>
          </ul>
        </div>
      </div>

      <KeyIdea>
        A vague problem points in a direction. <br/>
        <span className="text-lab-teal">A clear problem gives you something to design around.</span>
      </KeyIdea>
    </ScreenLayout>
  )
}

export default Screen2
