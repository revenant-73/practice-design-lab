import React, { useState, useEffect } from 'react'
import { ScreenLayout, Feedback } from '../../components/CourseComponents'
import { useStore } from '../../store'

const quizData = [
  {
    question: "Why should you start with the problem before choosing a constraint?",
    options: [
      "Because constraints only work when they are complicated",
      "Because the problem tells you what the constraint needs to shape",
      "Because players should always choose the constraint",
      "Because every activity needs at least three rules"
    ],
    correct: 1,
    feedback: "The constraint should serve the problem. If the problem is unclear, the constraint is likely to be random or disconnected."
  },
  {
    question: "Which statement is most useful for practice design?",
    options: [
      "“They need to care more.”",
      "“They are bad at communication.”",
      "“Players are not giving early pressure information before a teammate receives.”",
      "“They need to stop messing up.”"
    ],
    correct: 2,
    feedback: "This is observable and specific. It gives the coach something to design around."
  },
  {
    question: "A clear practice problem usually includes:",
    options: [
      "Situation, behavior, and consequence",
      "Effort, punishment, and repetition",
      "A coach lecture and a technical correction",
      "More intensity and harder conditioning"
    ],
    correct: 0,
    feedback: "Situation, behavior, and consequence help the coach see the shape of the problem."
  },
  {
    question: "Which is the better next step after writing a vague problem?",
    options: [
      "Add a random bonus point",
      "Run the same activity but louder",
      "Translate the vague problem into observable behavior",
      "Stop the activity completely"
    ],
    correct: 2,
    feedback: "Before adding the constraint, make the problem more specific."
  }
]

const Screen19 = () => {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [completed, setCompleted] = useState(false)
  const { setScreenReady } = useStore()

  useEffect(() => {
    if (completed) {
      setScreenReady(true)
    }
  }, [completed, setScreenReady])

  const currentQuestion = quizData[currentIdx]

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
      <ScreenLayout title="Module 2 Quiz Complete">
        <div className="py-12 text-center space-y-6">
          <div className="w-24 h-24 bg-lab-teal rounded-full mx-auto flex items-center justify-center text-white text-4xl">
            ✓
          </div>
          <h2 className="text-2xl font-bold">Excellent Progress!</h2>
          <p className="text-lg text-lab-ink/70">
            You've mastered the art of clarifying the problem. This makes the next step—choosing the right constraint—much more intuitive.
          </p>
          <div className="card bg-white text-left">
            <p className="font-bold text-xs uppercase tracking-widest text-lab-teal mb-2">Next Step</p>
            <p>In Module 3, we'll focus on identifying exactly what players need to <strong>notice</strong> within that problem.</p>
          </div>
        </div>
      </ScreenLayout>
    )
  }

  return (
    <ScreenLayout title="Module 2 Quiz">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-lab-teal uppercase tracking-widest text-xs">Question {currentIdx + 1} of {quizData.length}</h3>
          </div>
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
