import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea, FieldMission } from '../../components/CourseComponents'
import { useStore } from '../../store'
import { Award } from 'lucide-react'

const Screen24 = () => {
  const { setScreenReady } = useStore()
  useEffect(() => { setScreenReady(true) }, [setScreenReady])

  return (
    <ScreenLayout title="Module 6 Complete">
      <div className="flex flex-col items-center text-center space-y-6 py-8">
        <div className="w-20 h-20 bg-lab-teal/10 rounded-full flex items-center justify-center text-lab-teal animate-bounce">
          <Award size={48} />
        </div>
        
        <TeachingText>
          Well done! You have completed the core modules of the Practice Design Lab.
        </TeachingText>

        <p className="text-sm text-lab-ink/70">
          You now have the framework to transform any practice activity into a powerful environment for learning.
        </p>

        <KeyIdea>
          The best coaching isn't about what you say, but what you help your players notice.
        </KeyIdea>

        <FieldMission title="The Launch">
          Take your upgraded activity to the field. Run it for 15 minutes. Don't over-coach. Just watch. Does the constraint change the problem? Do players notice the target? If yes, you've successfully upgraded your practice.
        </FieldMission>
        
        <div className="pt-8">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-ink/40">Up Next</p>
          <p className="text-xs font-bold">Post-Course Certification & Completion</p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen24
