import React from 'react'

export const ScreenLayout = ({ title, children }) => (
  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
    {title && (
      <header>
        <h1 className="text-3xl font-bold tracking-tight leading-tight text-lab-ink">
          {title}
        </h1>
        <div className="w-12 h-1 bg-lab-teal mt-4" />
      </header>
    )}
    <div className="space-y-6">
      {children}
    </div>
  </div>
)

export const TeachingText = ({ children, className = "" }) => (
  <p className={`text-lg leading-relaxed text-lab-ink/90 ${className}`}>
    {children}
  </p>
)

export const KeyIdea = ({ children }) => (
  <div className="hand-drawn bg-white p-6 my-8">
    <p className="text-xl font-bold leading-tight">
      {children}
    </p>
  </div>
)

export const Feedback = ({ isCorrect, children, onNext, nextLabel = "Next Question" }) => (
  <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
    <div className={`p-4 rounded-lg mt-4 ${isCorrect ? 'bg-lab-teal/10 text-lab-teal' : 'bg-lab-coral/10 text-lab-coral'}`}>
      <p className="font-bold text-sm uppercase tracking-wider mb-1">
        {isCorrect ? 'Correct' : 'Feedback'}
      </p>
      <p className="text-lab-ink/90 leading-snug">
        {children}
      </p>
    </div>
    
    {onNext && (
      <button 
        onClick={onNext}
        className="w-full btn-primary py-4 flex items-center justify-center gap-2 shadow-lg"
      >
        <span>{nextLabel}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </button>
    )}
  </div>
)

export const VisualPlaceholder = ({ label, caption, children, className = "" }) => (
  <div className={`space-y-3 ${className}`}>
    <div className="aspect-video bg-white hand-drawn flex items-center justify-center p-4 text-center overflow-hidden">
      {children || <span className="text-lab-ink/20 font-bold italic">Illustration: {label}</span>}
    </div>
    {label && <p className="text-xs font-bold uppercase tracking-widest text-lab-teal">{label}</p>}
    {caption && <p className="text-sm text-lab-ink/60 italic leading-snug">{caption}</p>}
  </div>
)

export const Quiz = ({ question, options, correctAnswer, onCorrect, onIncorrect }) => {
  const [selected, setSelected] = React.useState(null)

  return (
    <div className="space-y-4">
      {question && <p className="text-lg font-bold">{question}</p>}
      <div className="space-y-3">
        {options.map((option, idx) => {
          const isSelected = selected === idx
          const isCorrect = idx === correctAnswer
          const showFeedback = selected !== null
          
          let borderColor = 'border-lab-ink/10'
          let bgColor = 'bg-white'
          
          if (showFeedback) {
            if (isCorrect) {
              borderColor = 'border-lab-teal'
              bgColor = 'bg-lab-teal/5'
            } else if (isSelected) {
              borderColor = 'border-lab-coral'
              bgColor = 'bg-lab-coral/5'
            }
          }

          return (
            <button
              key={idx}
              disabled={showFeedback}
              onClick={() => setSelected(idx)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${borderColor} ${bgColor} ${!showFeedback && 'hover:border-lab-teal/40'}`}
            >
              <div className="flex gap-4">
                <span className="font-bold text-lab-ink/30 uppercase">{String.fromCharCode(65 + idx)}</span>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
