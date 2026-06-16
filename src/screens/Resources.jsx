import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../components/CourseComponents'
import { useStore } from '../store'
import { Search, Zap, AlertTriangle, MessageSquare, ArrowLeft } from 'lucide-react'

const Resources = () => {
  const { setView, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Field Intel">
      <div className="flex items-center justify-between mb-2">
        <TeachingText className="text-sm italic opacity-70">
          A high-utility guide for designing and adjusting activities in real-time.
        </TeachingText>
      </div>

      <div className="space-y-8 pb-20">
        {/* Section 1: Lever Cheat Sheet */}
        <IntelSection 
          icon={<Zap size={16} className="text-lab-teal" />}
          title="The Lever Cheat Sheet"
          description="The primary tools for changing the problem."
        >
          <div className="grid grid-cols-1 gap-3">
            <IntelCard 
              label="Space" 
              details="Change size/shape. Add 'No-Go' zones or high-value 'Target' zones." 
            />
            <IntelCard 
              label="Scoring" 
              details="Reward the behavior you want to see. Bonus points for 'early communication' or 'clean exits'." 
            />
            <IntelCard 
              label="Numbers" 
              details="Use 2v1, 3v2, or 4v4 to change involvement and decision complexity." 
            />
            <IntelCard 
              label="Rules" 
              details="Restrict options (e.g., 'no dribbling') or invite them (e.g., 'score in 3 seconds')." 
            />
          </div>
        </IntelSection>

        {/* Section 2: Notice Targets */}
        <IntelSection 
          icon={<Search size={16} className="text-lab-teal" />}
          title="Notice Targets"
          description="Look for these clues to identify the 'Real Problem'."
        >
          <div className="space-y-3">
            <IntelBullet 
              label="Spacing" 
              text="Are players crowding the ball or hiding in dead space?" 
            />
            <IntelBullet 
              label="Timing" 
              text="Is the action happening too early (rushed) or too late (reactive)?" 
            />
            <IntelBullet 
              label="Communication" 
              text="Is the info useful/early, or just noise after the play?" 
            />
            <IntelBullet 
              label="Support" 
              text="Is the teammate away from the ball helping or watching?" 
            />
          </div>
        </IntelSection>

        {/* Section 3: Troubleshooting */}
        <IntelSection 
          icon={<AlertTriangle size={16} className="text-lab-coral" />}
          title="Troubleshooting Guide"
          description="Quick fixes for when the session breaks down."
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white border border-lab-ink/5 rounded-xl">
              <p className="text-[9px] font-bold text-lab-ink/40 uppercase mb-1">Too Easy?</p>
              <p className="text-[10px] leading-tight">Add pressure, reduce space, or increase opponent complexity.</p>
            </div>
            <div className="p-3 bg-white border border-lab-ink/5 rounded-xl">
              <p className="text-[9px] font-bold text-lab-ink/40 uppercase mb-1">Too Hard?</p>
              <p className="text-[10px] leading-tight">Add a 'safe zone', reduce player numbers, or add a cue.</p>
            </div>
            <div className="p-3 bg-white border border-lab-ink/5 rounded-xl">
              <p className="text-[9px] font-bold text-lab-ink/40 uppercase mb-1">Too Weird?</p>
              <p className="text-[10px] leading-tight">Players are gaming the rule. Simplify the scoring immediately.</p>
            </div>
            <div className="p-3 bg-white border border-lab-ink/5 rounded-xl">
              <p className="text-[9px] font-bold text-lab-ink/40 uppercase mb-1">No Change?</p>
              <p className="text-[10px] leading-tight">The lever is too subtle. Make the change more extreme.</p>
            </div>
          </div>
        </IntelSection>

        {/* Section 4: The Question Bank */}
        <IntelSection 
          icon={<MessageSquare size={16} className="text-lab-teal" />}
          title="The Question Bank"
          description="Replace 'Telling' with 'Designing' questions."
        >
          <div className="space-y-4">
            <div className="relative pl-4 border-l-2 border-lab-teal/20">
              <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Instead of: "Find space!"</p>
              <p className="text-xs font-bold italic">"Where is the gap the defense isn't covering yet?"</p>
            </div>
            <div className="relative pl-4 border-l-2 border-lab-teal/20">
              <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Instead of: "Talk more!"</p>
              <p className="text-xs font-bold italic">"What does your teammate need to know before the ball arrives?"</p>
            </div>
          </div>
        </IntelSection>
      </div>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] w-full max-w-xs px-6">
        <button 
          onClick={() => setView('course')}
          className="w-full btn-primary bg-lab-ink shadow-xl py-4 flex items-center justify-center gap-3"
        >
          <ArrowLeft size={16} />
          <span className="font-bold uppercase tracking-widest text-[10px]">Return to Lab</span>
        </button>
      </div>
    </ScreenLayout>
  )
}

const IntelSection = ({ icon, title, description, children }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      {icon}
      <h3 className="font-serif font-bold text-lg text-lab-ink">{title}</h3>
    </div>
    <p className="text-xs text-lab-ink/50 leading-snug">{description}</p>
    <div className="pt-2">
      {children}
    </div>
  </div>
)

const IntelCard = ({ label, details }) => (
  <div className="p-4 bg-white border-2 border-lab-ink/5 rounded-2xl group hover:border-lab-teal/30 transition-all">
    <p className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-lab-teal mb-1">{label}</p>
    <p className="text-xs font-medium leading-relaxed">{details}</p>
  </div>
)

const IntelBullet = ({ label, text }) => (
  <div className="flex gap-4 p-3 bg-lab-ink/5 rounded-xl">
    <div className="w-1.5 h-1.5 rounded-full bg-lab-teal mt-1.5 shrink-0" />
    <div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-lab-ink/60">{label}</p>
      <p className="text-xs italic leading-tight">{text}</p>
    </div>
  </div>
)

export default Resources
