import React, { useEffect, useState } from 'react'
import { ScreenLayout, TeachingText, KeyIdea, VisualPlaceholder } from '../components/CourseComponents'
import { useStore } from '../store'
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react'

const LandingPage = () => {
  const { setScreenReady, email, setEmail, loadProgress, setScreen } = useStore()
  const [localEmail, setLocalEmail] = useState(email)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isIdentified, setIsIdentified] = useState(!!email)

  useEffect(() => {
    // Landing page is always ready to move forward if identified
    setScreenReady(isIdentified)
  }, [isIdentified, setScreenReady])

  const handleIdentify = async (e) => {
    e.preventDefault()
    if (!localEmail || !localEmail.includes('@')) return

    setIsSubmitting(true)
    const userId = setEmail(localEmail)
    await loadProgress(userId)
    // Save progress immediately to create/update user in DB
    const { saveProgress } = useStore.getState()
    await saveProgress()
    setIsIdentified(true)
    setIsSubmitting(false)
  }

  return (
    <ScreenLayout title="The Power of Constraints">
      <TeachingText>
        Rules aren't just there to stop play. In reality, <strong className="text-lab-teal">constraints are what make the game possible.</strong>
      </TeachingText>

      <VisualPlaceholder 
        label="The Landscape Metaphor" 
        caption="Constraints funnel players toward solutions by shaping the landscape of the practice."
      >
        <img 
          src="/page_1_landscape_metaphor.png" 
          alt="Landscape Metaphor" 
          className="w-full h-full object-contain"
        />
      </VisualPlaceholder>

      <div className="space-y-6 pt-4">
        {/* Identity Section */}
        {!isIdentified ? (
          <div className="bg-white p-6 hand-drawn border-2 border-lab-teal/20 space-y-4">
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-lab-teal" />
              <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Identify for Field Session</h3>
            </div>
            <TeachingText className="text-xs italic text-lab-ink/60">
              Enter your email to save your progress and access your Activity Upgrade Plan across devices.
            </TeachingText>
            <form onSubmit={handleIdentify} className="space-y-3">
              <input
                type="email"
                required
                className="w-full bg-lab-cream/50 border-2 border-lab-ink/5 rounded-lg px-4 py-3 outline-none focus:border-lab-teal transition-all text-sm font-sans"
                placeholder="coach@yourclub.com"
                value={localEmail}
                onChange={(e) => setLocalEmail(e.target.value)}
              />
              <button 
                type="submit"
                disabled={isSubmitting || !localEmail.includes('@')}
                className="w-full bg-lab-ink text-white py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-lab-teal transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Verifying...' : 'Initialize Session'}
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-lab-teal/5 p-4 hand-drawn border-2 border-lab-teal/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-lab-teal" />
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal">Session Active</p>
                <p className="text-sm font-sans font-medium text-lab-ink/80">{email}</p>
              </div>
            </div>
            <button 
              onClick={() => setIsIdentified(false)}
              className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 hover:text-lab-coral transition-colors"
            >
              Change
            </button>
          </div>
        )}

        <section className="space-y-2">
          <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">What is a Constraint?</h3>
          <TeachingText>
            A constraint is any boundary that shapes how players move, think, and decide. 
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-lab-ink/80 italic">
              <li>The <strong>boundaries</strong> of the field.</li>
              <li>The <strong>shot clock</strong> in basketball.</li>
              <li>The <strong>offside rule</strong> in soccer.</li>
            </ul>
          </TeachingText>
        </section>

        <KeyIdea>
          Constraints don't just restrict; they create the possibilities for skill to emerge.
        </KeyIdea>
      </div>
    </ScreenLayout>
  )
}

export default LandingPage
