import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen14 = () => {
  const { responses, setResponse, setScreenReady } = useStore()

  useEffect(() => {
    const isReady = !!responses.selectedCategory && 
                    (responses.specificSituation?.length > 2) && 
                    (responses.specificBehavior?.length > 2) && 
                    (responses.specificConsequence?.length > 2) && 
                    (responses.specificMissingInfo?.length > 2)
    setScreenReady(isReady)
  }, [
    responses.selectedCategory,
    responses.specificSituation,
    responses.specificBehavior,
    responses.specificConsequence,
    responses.specificMissingInfo,
    setScreenReady
  ])

  const categories = ['Space', 'Timing', 'Support', 'Pressure', 'Communication', 'Decision-making', 'Transition', 'Composure', 'Other']

  return (
    <ScreenLayout title="Make It More Specific">
      <TeachingText>
        Choose the category that best fits your activity, then answer the questions to sharpen it.
      </TeachingText>

      <div className="space-y-8 pt-4">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-lab-ink/40">My Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setResponse('selectedCategory', cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all border-2 ${responses.selectedCategory === cat ? 'bg-lab-teal text-white border-lab-teal' : 'bg-white text-lab-ink/60 border-lab-ink/10 hover:border-lab-teal/40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {[
            { label: 'When...', field: 'specificSituation', placeholder: 'e.g., during serve receive' },
            { label: 'Players are...', field: 'specificBehavior', placeholder: 'e.g., hesitating to call the ball' },
            { label: 'Resulting in...', field: 'specificConsequence', placeholder: 'e.g., uncertainty and errors' },
            { label: 'They may need to notice...', field: 'specificMissingInfo', placeholder: 'e.g., the serve trajectory' }
          ].map(item => (
            <div key={item.field} className="space-y-2">
              <label className="text-xs font-bold uppercase text-lab-ink/40 tracking-widest">{item.label}</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-lab-ink/10 focus:border-lab-teal outline-none py-1 transition-colors italic"
                placeholder={item.placeholder}
                value={responses[item.field] || ''}
                onChange={(e) => setResponse(item.field, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen14
