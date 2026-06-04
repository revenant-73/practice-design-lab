import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen17 = () => {
  const { activityUpgradePlan, updatePlan, responses, setResponse, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = (responses.vagueComplaint?.length > 2) && 
                    (responses.specificSituation?.length > 2) && 
                    (responses.specificBehavior?.length > 2) && 
                    (responses.specificConsequence?.length > 2) && 
                    (responses.specificMissingInfo?.length > 2)
    setScreenReady(isReady)
  }, [
    responses.vagueComplaint,
    responses.specificSituation,
    responses.specificBehavior,
    responses.specificConsequence,
    responses.specificMissingInfo,
    setScreenReady
  ])

  const combined = `When ${responses.specificSituation || '...'}, players are ${responses.specificBehavior || '...'}, which results in ${responses.specificConsequence || '...'}. They may need to notice ${responses.specificMissingInfo || '...'} more clearly.`

  return (
    <ScreenLayout title="Build Your Clear Practice Problem">
      <TeachingText>
        Finalize your problem statement. This will be the foundation for your constraint in the next module.
      </TeachingText>

      <div className="space-y-6 pt-4">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-teal">Activity I already use:</label>
          <div className="p-3 bg-white hand-drawn italic text-sm">{activityUpgradePlan.originalActivity || 'Not yet defined'}</div>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Vague problem or complaint:', field: 'vagueComplaint', type: 'input', placeholder: 'e.g., They are quiet' },
            { label: 'When...', field: 'specificSituation', type: 'input', placeholder: 'e.g., during serve receive' },
            { label: 'Players are...', field: 'specificBehavior', type: 'input', placeholder: 'e.g., hesitating to call the ball' },
            { label: 'Resulting in...', field: 'specificConsequence', type: 'input', placeholder: 'e.g., uncertainty and errors' },
            { label: 'They may need to notice...', field: 'specificMissingInfo', type: 'textarea', placeholder: 'e.g., the serve trajectory' }
          ].map(item => (
            <div key={item.field} className="space-y-2">
              <label className="text-xs font-bold uppercase text-lab-ink/40 tracking-widest">{item.label}</label>
              {item.type === 'input' ? (
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic text-sm"
                  placeholder={item.placeholder}
                  value={responses[item.field] || ''}
                  onChange={(e) => setResponse(item.field, e.target.value)}
                />
              ) : (
                <textarea
                  className="w-full bg-transparent border-b border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic text-sm min-h-[40px]"
                  placeholder={item.placeholder}
                  value={responses[item.field] || ''}
                  onChange={(e) => setResponse(item.field, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        <div className="pt-8 space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs text-center">Clear Practice Problem</h3>
          <div className="p-6 bg-lab-ink text-white hand-drawn min-h-[120px] flex items-center justify-center">
            <p className="text-lg text-center leading-relaxed italic">
              {combined}
            </p>
          </div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen17
