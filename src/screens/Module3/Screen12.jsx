import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen12 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [completed, setCompleted] = useState(false)
  const { setScreenReady } = useStore()

  const quizData = [
    {
      problem: "Problem 1: Players crowd the ball when a teammate is pressured.",
      options: [
        "Open support space and passing angles",
        "The final score",
        "The coach’s instructions",
        "The previous mistake"
      ],
      correct: 0,
      feedback: "Correct. The problem is connected to space and support. The players need to notice where help can be created."
    },
    {
      problem: "Problem 2: Players rush after mistakes.",
      options: [
        "Teammate shoe color",
        "The next useful action",
        "The scoreboard only",
        "The mistake itself"
      ],
      correct: 1,
      feedback: "Correct. The players need to reorient toward what can be done next."
    },
    {
      problem: "Problem 3: Players force low-percentage attacks into pressure.",
      options: [
        "Available options and opponent position",
        "How angry the coach looks",
        "How tired they feel",
        "Whether the activity is almost over"
      ],
      correct: 0,
      feedback: "Correct. This problem is about recognizing options and pressure before committing."
    }
  ]

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
      <ScreenLayout title="Matching Complete">
        <div className="py-12 text-center space-y-6">
          <div className="w-20 h-20 bg-lab-teal rounded-full mx-auto flex items-center justify-center text-white text-3xl shadow-xl">
            ✓
          </div>
          <h2 className="text-xl font-bold italic">“Aim the attention, solve the problem.”</h2>
          <p className="text-sm text-lab-ink/70 px-8">
            You've matched the problems to the right targets. Now let's refine your own.
          </p>
          <button onClick={() => setCompleted(false) || setCurrentIdx(0) || setSelected(null)} className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal/60 hover:text-lab-teal transition-colors pt-4">
            Restart Exercise
          </button>
        </div>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout title="Match the Problem">
      <TeachingText>
        Each coaching problem below is caused by players missing specific information. Select the <strong>Attention Target</strong> that would best help players solve that problem.
      </TeachingText>

      <div className="space-y-8 mt-6">
        <div className="space-y-4">
          <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Situation {currentIdx + 1} of {quizData.length}</h3>
          <p className="text-xl font-bold leading-tight">{currentQuestion.problem}</p>
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
            nextLabel={currentIdx < quizData.length - 1 ? "Next Situation" : "Finish Exercise"}
          >
            {currentQuestion.feedback}
          </Feedback>
        )}
      </div>
    </ScreenLayout>
  )
}

export default Screen12
