import React from 'react'
import { motion } from 'framer-motion'

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
  <p className={`text-base leading-relaxed text-lab-ink/90 font-sans selection:bg-lab-teal/30 ${className}`}>
    {children}
  </p>
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
    <div className={`p-4 organic-border ${isCorrect ? 'bg-lab-teal/5 border-lab-teal/30 text-lab-teal' : 'bg-lab-coral/5 border-lab-coral/30 text-lab-coral'}`}>
      <p className="font-mono font-bold text-[9px] uppercase tracking-[0.2em] mb-2">
        {isCorrect ? '✓ Verification Successful' : '× Field Correction'}
      </p>
      <p className="text-lab-ink text-base leading-snug font-sans">
        {children}
      </p>
    </div>
    
    {onNext && (
      <button 
        onClick={onNext}
        className="w-full btn-primary py-3 flex items-center justify-center gap-3"
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

export const Quiz = ({ question, options, correctAnswer, onCorrect, onIncorrect }) => {
  const [selected, setSelected] = React.useState(null)

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
              onClick={() => setSelected(idx)}
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
