import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Sparkles, ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.45, 0.32, 0.9]
    }
  }
}

export const ScreenLayout = ({ title, children }) => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="space-y-6"
  >
    {title && (
      <motion.header variants={itemVariants}>
        <h1 className="text-2xl font-serif font-bold tracking-tight leading-[1.2] text-lab-ink">
          {title}
        </h1>
        <div className="w-12 h-1 bg-lab-teal mt-3 organic-border border-none bg-opacity-80" />
      </motion.header>
    )}
    <div className="space-y-5">
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export const TeachingText = ({ children, className = "" }) => (
  <div className={`text-base leading-relaxed text-lab-ink/90 font-sans selection:bg-lab-teal/30 ${className}`}>
    {children}
  </div>
)

export const KeyIdea = ({ children }) => (
  <div className="organic-border bg-white p-6 my-6 relative overflow-hidden group shadow-lg">
    <div className="absolute top-0 left-0 w-full h-1 bg-lab-teal opacity-20" />
    <span className="stamped !text-[7px] absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Key Concept</span>
    <p className="text-xl font-serif font-bold leading-tight italic text-lab-ink">
      {children}
    </p>
  </div>
)

export const Feedback = ({ isCorrect, children, onNext, nextLabel = "Next Question" }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
    <div className={`p-4 organic-border border-2 ${isCorrect ? 'bg-lab-teal/10 border-lab-teal text-lab-ink' : 'bg-lab-coral/10 border-lab-coral text-lab-ink'}`}>
      <div className="flex items-center gap-2 mb-2">
        {isCorrect ? <CheckCircle2 size={16} className="text-lab-teal" /> : <AlertCircle size={16} className="text-lab-coral" />}
        <p className={`font-mono font-bold text-[9px] uppercase tracking-[0.2em] ${isCorrect ? 'text-lab-teal' : 'text-lab-coral'}`}>
          {isCorrect ? '✓ Verification Successful' : '× Field Correction'}
        </p>
      </div>
      <p className="text-base leading-snug font-sans">
        {children}
      </p>
    </div>
    
    {onNext && (
      <button 
        onClick={onNext}
        className="w-full btn-primary py-3 flex items-center justify-center gap-3 bg-lab-ink text-white rounded-xl"
      >
        <span className="font-bold uppercase tracking-widest text-[10px]">{nextLabel}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    )}
  </div>
)

export const VisualPlaceholder = ({ label, caption, children, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <div className="aspect-video bg-white hand-drawn flex items-center justify-center p-4 text-center overflow-hidden relative group">
      <div className="absolute inset-0 bg-lab-cream/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      {children || (
        <div className="flex flex-col items-center gap-2 opacity-20">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
          <span className="text-[9px] font-mono uppercase tracking-widest">Illustration: {label}</span>
        </div>
      )}
    </div>
    <div className="flex items-center gap-2">
      <div className="h-px flex-1 bg-lab-ink/10" />
      {label && <p className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-lab-teal">{label}</p>}
      <div className="h-px flex-1 bg-lab-ink/10" />
    </div>
    {caption && <p className="text-xs text-lab-ink/60 italic leading-snug font-sans text-center px-4">{caption}</p>}
  </div>
)

export const WorkedExample = ({ title, activity, problem, target, lever, constraint, success, question, why }) => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-2xl border-2 border-lab-ink/5 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Original Activity</p>
          <p className="text-xs font-bold leading-tight">{activity}</p>
        </div>
        <div>
          <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Lever</p>
          <p className="text-xs font-bold text-lab-teal leading-tight">{lever}</p>
        </div>
      </div>
      
      <div>
        <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-coral mb-1">Problem</p>
        <p className="text-xs italic text-lab-ink/80 leading-snug">{problem}</p>
      </div>

      <div>
        <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Attention Target</p>
        <p className="text-xs font-bold leading-tight">{target}</p>
      </div>

      <div className="pt-4 border-t border-lab-ink/5">
        <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">The Upgrade</p>
        <div className="space-y-3">
          <div>
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Constraint</p>
            <p className="text-xs font-medium leading-snug">{constraint}</p>
          </div>
          <div>
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Success Condition</p>
            <p className="text-xs italic leading-snug text-lab-ink/70">{success}</p>
          </div>
          <div>
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">Coaching Question</p>
            <p className="text-xs font-bold text-lab-teal leading-tight">“{question}”</p>
          </div>
        </div>
      </div>
    </div>

    <div className="hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal p-4">
      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Why It Works</p>
      <p className="text-xs text-lab-ink/80 leading-relaxed">{why}</p>
    </div>
  </div>
)

export const Quiz = ({ question, options, correctAnswer, onSelect }) => {
  const [selected, setSelected] = React.useState(null)

  const handleSelect = (idx) => {
    setSelected(idx)
    if (onSelect) onSelect(idx)
  }

  return (
    <div className="space-y-4">
      {question && <p className="text-lg font-serif font-bold text-lab-ink leading-tight">{question}</p>}
      <div className="space-y-2">
        {options.map((option, idx) => {
          const isSelected = selected === idx
          const isCorrect = idx === correctAnswer
          const showFeedback = selected !== null
          
          let borderColor = 'border-lab-ink/10'
          let bgColor = 'bg-white'
          let textColor = 'text-lab-ink'
          
          if (showFeedback) {
            if (isCorrect) {
              borderColor = 'border-lab-teal'
              bgColor = 'bg-lab-teal/5'
              textColor = 'text-lab-teal'
            } else if (isSelected) {
              borderColor = 'border-lab-coral'
              bgColor = 'bg-lab-coral/5'
              textColor = 'text-lab-coral'
            } else {
              borderColor = 'border-lab-ink/5'
              textColor = 'text-lab-ink/30'
            }
          }

          return (
            <button
              key={idx}
              disabled={showFeedback}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-3 rounded-lg border-2 transition-all duration-300 relative overflow-hidden group ${borderColor} ${bgColor} ${!showFeedback && 'hover:border-lab-teal/40 hover:translate-x-1 shadow-sm'}`}
            >
              <div className="flex gap-4 items-center">
                <span className={`font-mono font-bold text-[10px] w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${showFeedback && isCorrect ? 'bg-lab-teal border-lab-teal text-white' : 'border-current opacity-30'}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className={`flex-1 text-sm font-sans font-medium ${textColor}`}>{option}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export const ReflectionBox = ({ value, onChange, placeholder, minHeight = "120px" }) => (
  <div className="relative group">
    <textarea
      value={value || ''}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ minHeight }}
      className="w-full p-6 bg-white hand-drawn italic text-base font-sans focus:ring-2 focus:ring-lab-teal outline-none border-2 border-lab-ink/5 resize-none transition-shadow hover:shadow-md"
    />
    <div className="absolute bottom-4 right-4 opacity-10 group-focus-within:opacity-30 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    </div>
  </div>
)

export const CurrentBuild = ({ plan }) => {
  const fields = [
    { label: 'Activity', value: plan.originalActivity, color: 'text-lab-ink' },
    { label: 'Problem', value: plan.problem, color: 'text-lab-coral' },
    { label: 'Attention Target', value: plan.attentionTarget, color: 'text-lab-teal' },
    { label: 'Constraint', value: plan.constraint, color: 'text-lab-teal' },
  ]

  const activeFields = fields.filter(f => f.value && f.value.length > 0)

  if (activeFields.length === 0) return null

  return (
    <div className="mt-8 pt-8 border-t-2 border-lab-ink/5">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles size={14} className="text-lab-teal" />
        <h4 className="font-mono font-bold text-[10px] uppercase tracking-[0.2em] text-lab-ink/40">Current Activity Build</h4>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {activeFields.map((field, i) => (
          <div key={i} className="bg-white/50 p-3 rounded-lg border border-lab-ink/5">
            <p className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/30 mb-1">{field.label}</p>
            <p className={`text-xs font-bold leading-tight ${field.color}`}>{field.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const FieldMission = ({ title, children }) => (
  <div className="mt-8 p-6 hand-drawn bg-lab-ink text-lab-cream relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-24 h-24 bg-lab-teal/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-lab-teal/30 transition-all" />
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-lab-teal animate-pulse" />
        <h4 className="font-mono font-bold text-[10px] uppercase tracking-[0.3em] text-lab-teal">Field Mission: {title}</h4>
      </div>
      <div className="text-sm leading-relaxed italic opacity-90">
        {children}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-lab-teal/60">
        <span>Target: Next Practice</span>
        <div className="h-px flex-1 bg-lab-teal/20" />
      </div>
    </div>
  </div>
)

export const StepByStep = ({ steps, label = "Show Next Factor" }) => {
  const [visibleCount, setVisibleCount] = React.useState(1)

  return (
    <div className="space-y-4">
      {steps.slice(0, visibleCount).map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full"
        >
          {typeof step === 'string' ? (
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-lab-teal/10 flex items-center justify-center shrink-0 mt-1">
                <span className="text-[10px] font-mono font-bold text-lab-teal">{i + 1}</span>
              </div>
              <p className="text-sm leading-relaxed text-lab-ink/80">{step}</p>
            </div>
          ) : (
            step
          )}
        </motion.div>
      ))}
      {visibleCount < steps.length && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setVisibleCount(v => v + 1)}
          className="w-full mt-6 py-4 bg-lab-teal/10 hover:bg-lab-teal/20 text-lab-teal rounded-xl border-2 border-dashed border-lab-teal/30 transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em]">{label}</span>
          <ChevronDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          <div className="absolute inset-0 bg-lab-teal/5 animate-pulse rounded-xl pointer-events-none" />
        </motion.button>
      )}
    </div>
  )
}
