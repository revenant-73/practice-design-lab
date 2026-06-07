import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const quizData = [
  {
    question: "Why do we identify an attention target before choosing a constraint?",
    options: [
      "So we can make the activity more complicated",
      "So the constraint has a clear job",
      "So players never make mistakes",
      "So the coach can talk longer"
    ],
    correct: 1,
    feedback: "Correct. The attention target gives the constraint direction. It tells us what the activity should help players notice."
  },
  {
    question: "Which is the clearest attention target?",
    options: [
      "Players need to notice the game.",
      "Players need to be better.",
      "Players need to notice open space and support options when a teammate is under pressure.",
      "Players need to listen to the coach."
    ],
    correct: 2,
    feedback: "Correct. This is specific, observable, and connected to a real team-sport problem."
  },
  {
    question: "A player who acts late may not need:",
    options: [
      "More punishment",
      "Better information earlier",
      "A clearer problem to solve",
      "More chances to notice the cue"
    ],
    correct: 0,
    feedback: "Correct. Punishment may increase stress, but it does not necessarily help players notice the useful information earlier."
  },
  {
    question: "The attention target should usually connect to:",
    options: [
      "What the coach wants to yell",
      "What players need to notice, choose, or do differently",
      "What makes the activity look unique",
      "What makes the drill harder for no reason"
    ],
    correct: 1,
    feedback: "Correct. The attention target is the bridge between the problem and the future constraint."
  }
]

const Screen19 = () => {
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
      <ScreenLayout title="Module 3 Complete">
        <div className="py-12 text-center space-y-6">
          <div className="w-24 h-24 bg-lab-teal rounded-full mx-auto flex items-center justify-center text-white text-4xl shadow-xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Excellent!</h2>
          <p className="text-lg text-lab-ink/70">
            You've mastered the concept of attention targets.
          </p>
          <div className="card bg-white text-left">
            <p className="font-bold text-xs uppercase tracking-widest text-lab-teal mb-2">Next Step</p>
            <p>We'll wrap up this module with a summary of what you've achieved.</p>
          </div>
        </div>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout title="Module 3 Quiz">
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

export default Screen19
