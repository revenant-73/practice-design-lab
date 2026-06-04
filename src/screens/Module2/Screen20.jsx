import React from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../../components/CourseComponents'

const Screen20 = () => {
  return (
    <ScreenLayout title="Module 2 Summary">
      <TeachingText>
        A vague problem creates vague practice design. A clear problem gives the constraint a job.
      </TeachingText>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-lab-coral opacity-60">From Vague</p>
          <ul className="text-[10px] space-y-2 font-bold opacity-40 uppercase">
            <li>• Better communication</li>
            <li>• Better decisions</li>
            <li>• Better spacing</li>
            <li>• More intensity</li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-lab-teal">Toward Clearer</p>
          <ul className="text-[10px] space-y-2 font-bold uppercase">
            <li>• The situation</li>
            <li>• The behavior</li>
            <li>• The consequence</li>
            <li>• What to notice</li>
          </ul>
        </div>
      </div>

      <KeyIdea>
        The clearer the problem, the easier the constraint.
      </KeyIdea>

      <div className="pt-8 space-y-4">
        <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Ready for Module 3?</h3>
        <p className="text-sm text-lab-ink/70 italic">
          You should now have a clear practice problem and a first guess at what players may need to notice. In the next module, we will turn that guess into a clear attention target.
        </p>
      </div>
    </ScreenLayout>
  )
}

export default Screen20
