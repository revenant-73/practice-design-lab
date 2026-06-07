import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback, FieldMission } from '../../components/CourseComponents'
import { useStore } from '../../store'

const quizData = [
  {
    question: "What is a constraint?",
    options: [
      "A random rule added to make practice more creative",
      "A purposeful change to an activity that shapes what players notice, choose, and do",
      "A punishment for poor execution",
      "A way to make players repeat one perfect technique"
    ],
    correct: 1,
    feedback: "Correct. A constraint is a design choice that shapes the learning problem."
  },
  {
    question: "What should a good constraint usually do?",
    options: [
      "Make the activity more complicated",
      "Make the coach talk more",
      "Make the problem clearer",
      "Make practice look different from the sport"
    ],
    correct: 2,
    feedback: "Yes. The goal is clarity, not complexity."
  },
  {
    question: "Which question should come before choosing a constraint?",
    options: [
      "What cool rule can I add?",
      "How can I make this harder?",
      "What problem are players trying to solve?",
      "How can I make this look like a drill I saw online?"
    ],
    correct: 2,
    feedback: "Exactly. You must understand the problem before you can design the constraint."
  }
]

const Screen10 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [completed, setCompleted] = useState(false)
  const { setScreenReady } = useStore()

  const currentQuestion = quizData[currentIdx]

  useEffect(() => {
    if (completed) {
      setScreenReady(true)
    }
  }, [completed, setScreenReady])

  const handleNext = () => {
    if (currentIdx < quizData.length - 1) {
      setCurrentIdx(currentIdx + 1)
      setSelected(null)
    } else {
      setCompleted(true)
    }
  }

  if (completed) {
    return (
      <ScreenLayout title="Module 1 Complete">
        <div className="py-6 text-center space-y-6">
          <div className="w-20 h-20 bg-lab-teal rounded-full mx-auto flex items-center justify-center text-white text-3xl shadow-xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Great work!</h2>
          <p className="text-base text-lab-ink/70">
            You've completed Module 1. You now have a solid understanding of what constraints are.
          </p>
          
          <FieldMission title="The Noticing Task">
            At your next practice, don't change anything yet. Just listen to yourself. Every time you find yourself "telling" a player to do something (e.g., "Find space!"), note it down. These are your first clues for future constraints.
          </FieldMission>

          <div className="card bg-white text-left p-4 rounded-xl border border-lab-ink/5">
            <p className="font-bold text-[10px] uppercase tracking-widest text-lab-teal mb-1">Next Step</p>
            <p className="text-sm">In the next module, we'll dive into identifying the "Real Problem".</p>
          </div>
        </div>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout title="Module 1 Quiz">
      <div className="space-y-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {quizData.length}</h3>
          <p className="text-xl font-bold leading-tight">{currentQuestion.question}</p>
        </div>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isCorrect = idx === currentQuestion.correct
            const showFeedback = selected !== null
            
            let colorClass = 'border-lab-ink/10 bg-white'
            if (showFeedback) {
              if (isCorrect) colorClass = 'border-lab-teal bg-lab-teal/5'
              else if (selected === idx) colorClass = 'border-lab-coral bg-lab-coral/5'
            }

            return (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => setSelected(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex gap-4 ${colorClass} ${!showFeedback && 'hover:border-lab-teal/40'}`}
              >
                <span className="font-bold text-lab-ink/30 uppercase">{String.fromCharCode(65 + idx)}</span>
                <span className="flex-1 text-sm">{option}</span>
              </button>
            )
          })}
        </div>

        {selected !== null && (
          <Feedback 
            isCorrect={selected === currentQuestion.correct}
            onNext={handleNext}
            nextLabel={currentIdx < quizData.length - 1 ? "Next Question" : "Finish Quiz"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen10
