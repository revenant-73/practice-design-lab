import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, ReflectionBox } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen19 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()
  const { m5CoachingQuestion, m6RefinedCoachingQuestion } = activityUpgradePlan
  
  useEffect(() => {
    setScreenReady(!!m6RefinedCoachingQuestion)
  }, [m6RefinedCoachingQuestion, setScreenReady])

  return (
    <ScreenLayout title="Refine Your Question">
      <TeachingText>
        Look at the question you drafted earlier:
      </TeachingText>
      
      <div className="p-4 bg-lab-ink/5 border-l-2 border-lab-teal italic text-[11px] mb-6">
        "{m5CoachingQuestion || 'No question drafted yet'}"
      </div>

      <TeachingText>
        Now, rewrite it to be shorter and more focused on **observation** (what they see) rather than **recollection** (what they know).
      </TeachingText>

      <ReflectionBox
        placeholder="Refine your question here..."
        value={m6RefinedCoachingQuestion}
        onChange={(v) => updatePlan('m6RefinedCoachingQuestion', v)}
      />
    </ScreenLayout>
  )
}

export default Screen19
