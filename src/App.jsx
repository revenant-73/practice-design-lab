import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from './store'
import { Save, Home, BookOpen, Check } from 'lucide-react'

// Module 1
import LandingPage from './screens/LandingPage'
import Screen1 from './screens/Module1/Screen1'
import Screen2 from './screens/Module1/Screen2'
import Screen3 from './screens/Module1/Screen3'
import Screen4 from './screens/Module1/Screen4'
import Screen5 from './screens/Module1/Screen5'
import Screen6 from './screens/Module1/Screen6'
import Screen7 from './screens/Module1/Screen7'
import Screen8 from './screens/Module1/Screen8'
import Screen9 from './screens/Module1/Screen9'
import Screen10 from './screens/Module1/Screen10'

// Module 2
import M2S1 from './screens/Module2/Screen1'
import M2S2 from './screens/Module2/Screen2'
import M2S3 from './screens/Module2/Screen3'
import M2S4 from './screens/Module2/Screen4'
import M2S5 from './screens/Module2/Screen5'
import M2S6 from './screens/Module2/Screen6'
import M2S7 from './screens/Module2/Screen7'
import M2S8 from './screens/Module2/Screen8'
import M2S9 from './screens/Module2/Screen9'
import M2S10 from './screens/Module2/Screen10'
import M2S11 from './screens/Module2/Screen11'
import M2S12 from './screens/Module2/Screen12'
import M2S13 from './screens/Module2/Screen13'
import M2S14 from './screens/Module2/Screen14'
import M2S15 from './screens/Module2/Screen15'
import M2S16 from './screens/Module2/Screen16'
import M2S17 from './screens/Module2/Screen17'
import M2S18 from './screens/Module2/Screen18'
import M2S19 from './screens/Module2/Screen19'
import M2S20 from './screens/Module2/Screen20'

// Module 3
import M3S1 from './screens/Module3/Screen1'
import M3S2 from './screens/Module3/Screen2'
import M3S3 from './screens/Module3/Screen3'
import M3S4 from './screens/Module3/Screen4'
import M3S5 from './screens/Module3/Screen5'
import M3S6 from './screens/Module3/Screen6'
import M3S7 from './screens/Module3/Screen7'
import M3S8 from './screens/Module3/Screen8'
import M3S9 from './screens/Module3/Screen9'
import M3S10 from './screens/Module3/Screen10'
import M3S11 from './screens/Module3/Screen11'
import M3S12 from './screens/Module3/Screen12'
import M3S13 from './screens/Module3/Screen13'
import M3S14 from './screens/Module3/Screen14'
import M3S15 from './screens/Module3/Screen15'
import M3S16 from './screens/Module3/Screen16'
import M3S17 from './screens/Module3/Screen17'
import M3S18 from './screens/Module3/Screen18'
import M3S19 from './screens/Module3/Screen19'
import M3S20 from './screens/Module3/Screen20'

// Module 4
import M4S1 from './screens/Module4/Screen1'
import M4S2 from './screens/Module4/Screen2'
import M4S3 from './screens/Module4/Screen3'
import M4S4 from './screens/Module4/Screen4'
import M4S5 from './screens/Module4/Screen5'
import M4S6 from './screens/Module4/Screen6'
import M4S7 from './screens/Module4/Screen7'
import M4S8 from './screens/Module4/Screen8'
import M4S9 from './screens/Module4/Screen9'
import M4S10 from './screens/Module4/Screen10'
import M4S11 from './screens/Module4/Screen11'
import M4S12 from './screens/Module4/Screen12'
import M4S13 from './screens/Module4/Screen13'
import M4S14 from './screens/Module4/Screen14'
import M4S15 from './screens/Module4/Screen15'
import M4S16 from './screens/Module4/Screen16'
import M4S17 from './screens/Module4/Screen17'
import M4S18 from './screens/Module4/Screen18'
import M4S19 from './screens/Module4/Screen19'
import M4S20 from './screens/Module4/Screen20'
import M4S21 from './screens/Module4/Screen21'
import M4S22 from './screens/Module4/Screen22'
import M4S23 from './screens/Module4/Screen23'
import M4S24 from './screens/Module4/Screen24'
import M4S25 from './screens/Module4/Screen25'

// Module 5
import M5S1 from './screens/Module5/Screen1'
import M5S2 from './screens/Module5/Screen2'
import M5S3 from './screens/Module5/Screen3'
import M5S4 from './screens/Module5/Screen4'
import M5S5 from './screens/Module5/Screen5'
import M5S6 from './screens/Module5/Screen6'
import M5S7 from './screens/Module5/Screen7'
import M5S8 from './screens/Module5/Screen8'
import M5S9 from './screens/Module5/Screen9'
import M5S10 from './screens/Module5/Screen10'
import M5S11 from './screens/Module5/Screen11'
import M5S12 from './screens/Module5/Screen12'
import M5S13 from './screens/Module5/Screen13'
import M5S14 from './screens/Module5/Screen14'
import M5S15 from './screens/Module5/Screen15'
import M5S16 from './screens/Module5/Screen16'
import M5S17 from './screens/Module5/Screen17'
import M5S18 from './screens/Module5/Screen18'
import M5S19 from './screens/Module5/Screen19'
import M5S20 from './screens/Module5/Screen20'
import M5S21 from './screens/Module5/Screen21'
import M5S22 from './screens/Module5/Screen22'
import M5S23 from './screens/Module5/Screen23'
import M5S24 from './screens/Module5/Screen24'
import M5S25 from './screens/Module5/Screen25'
import M5S26 from './screens/Module5/Screen26'
import M5S27 from './screens/Module5/Screen27'
import M5S28 from './screens/Module5/Screen28'
import M5S29 from './screens/Module5/Screen29'
import M5S30 from './screens/Module5/Screen30'

// Module 6
import M6S1 from './screens/Module6/Screen1'
import M6S2 from './screens/Module6/Screen2'
import M6S3 from './screens/Module6/Screen3'
import M6S4 from './screens/Module6/Screen4'
import M6S5 from './screens/Module6/Screen5'
import M6S6 from './screens/Module6/Screen6'
import M6S7 from './screens/Module6/Screen7'
import M6S8 from './screens/Module6/Screen8'
import M6S9 from './screens/Module6/Screen9'
import M6S10 from './screens/Module6/Screen10'
import M6S11 from './screens/Module6/Screen11'
import M6S12 from './screens/Module6/Screen12'
import M6S13 from './screens/Module6/Screen13'
import M6S14 from './screens/Module6/Screen14'
import M6S15 from './screens/Module6/Screen15'
import M6S16 from './screens/Module6/Screen16'
import M6S17 from './screens/Module6/Screen17'
import M6S18 from './screens/Module6/Screen18'
import M6S19 from './screens/Module6/Screen19'
import M6S20 from './screens/Module6/Screen20'
import M6S21 from './screens/Module6/Screen21'
import M6S22 from './screens/Module6/Screen22'
import M6S23 from './screens/Module6/Screen23'
import M6S24 from './screens/Module6/Screen24'

// Post-Course
import PCS1 from './screens/PostCourse/Screen1'
import PCS2 from './screens/PostCourse/Screen2'
import PCS3 from './screens/PostCourse/Screen3'
import PCS4 from './screens/PostCourse/Screen4'
import PCS5 from './screens/PostCourse/Screen5'
import PCS6 from './screens/PostCourse/Screen6'

import Resources from './screens/Resources'
import RetrievalScreen from './screens/RetrievalScreen'

// Retrieval Screens
const M3Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 3"
    question="What is the primary purpose of a constraint in the Practice Design Lab?"
    options={[
      "To punish players for making technical mistakes",
      "To make practice look more creative and complex",
      "To shape what players notice, choose, and do",
      "To force players to use one perfect technique"
    ]}
    correctAnswer={2}
    feedback="Exactly. We use constraints to shape the learning environment, not just to add rules."
  />
)

const M4Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 4"
    question="Why do we need to identify the 'Real Problem' before building a constraint?"
    options={[
      "So we can explain the theory to our players",
      "So the constraint actually addresses the behavior we want to change",
      "To make the practice session last longer",
      "To ensure we are using enough technical jargon"
    ]}
    correctAnswer={1}
    feedback="Correct! A constraint that doesn't match the problem is just a random rule."
  />
)

const M5Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 5"
    question="What does it mean for a constraint to 'afford' action?"
    options={[
      "It makes the activity more expensive to run",
      "It restricts players so they only have one choice",
      "It invites players to explore and find new solutions",
      "It requires a lot of coaching explanation"
    ]}
    correctAnswer={2}
    feedback="Yes! Good constraints create a landscape that invites exploration rather than just shutting options down."
  />
)

const M6Retrieval = () => (
  <RetrievalScreen 
    nextModule="Module 6"
    question="What is an 'Attention Target'?"
    options={[
      "The specific information players need to notice to solve the problem",
      "The player who is making the most mistakes",
      "A physical target on the field players must hit",
      "The coach's whiteboard during a tactical timeout"
    ]}
    correctAnswer={0}
    feedback="Perfect. We want players to notice specific cues in the environment to help them make better decisions."
  />
)

const screens = [
  LandingPage,
  // M1 (1-10)
  Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8, Screen9, Screen10,
  // M2 (11-30)
  M2S1, M2S2, M2S3, M2S4, M2S5, M2S6, M2S7, M2S8, M2S9, M2S10,
  M2S11, M2S12, M2S13, M2S14, M2S15, M2S16, M2S17, M2S18, M2S19, M2S20,
  // M3 (31-51)
  M3Retrieval, M3S1, M3S2, M3S3, M3S4, M3S5, M3S6, M3S7, M3S8, M3S9, M3S10,
  M3S11, M3S12, M3S13, M3S14, M3S15, M3S16, M3S17, M3S18, M3S19, M3S20,
  // M4 (52-77)
  M4Retrieval, M4S1, M4S2, M4S3, M4S4, M4S5, M4S6, M4S7, M4S8, M4S9, M4S10,
  M4S11, M4S12, M4S13, M4S14, M4S15, M4S16, M4S17, M4S18, M4S19, M4S20,
  M4S21, M4S22, M4S23, M4S24, M4S25,
  // M5 (78-108)
  M5Retrieval, M5S1, M5S2, M5S3, M5S4, M5S5, M5S6, M5S7, M5S8, M5S9, M5S10,
  M5S11, M5S12, M5S13, M5S14, M5S15, M5S16, M5S17, M5S18, M5S19, M5S20,
  M5S21, M5S22, M5S23, M5S24, M5S25, M5S26, M5S27, M5S28, M5S29, M5S30,
  // M6 (109-133)
  M6Retrieval, M6S1, M6S2, M6S3, M6S4, M6S5, M6S6, M6S7, M6S8, M6S9, M6S10,
  M6S11, M6S12, M6S13, M6S14, M6S15, M6S16, M6S17, M6S18, M6S19, M6S20,
  M6S21, M6S22, M6S23, M6S24,
  // Post-Course (134-139)
  PCS1, PCS2, PCS3, PCS4, PCS5, PCS6
]

function App() {
  const { currentScreen, setScreen, screenReady, currentView, setView, reset, saveProgress, isSyncing } = useStore()
  const [saveStatus, setSaveStatus] = useState(false)
  
  const CurrentScreenComponent = currentView === 'resources' ? Resources : (screens[currentScreen] || LandingPage)
  const progress = ((currentScreen + 1) / screens.length) * 100

  const moduleInfo = useMemo(() => {
    if (currentScreen < 11) return { number: 1, title: "What Constraints Do" }
    if (currentScreen < 31) return { number: 2, title: "Start With the Problem" }
    if (currentScreen < 52) return { number: 3, title: "Decide What Players Need to Notice" }
    if (currentScreen < 78) return { number: 4, title: "Choose One Constraint Lever" }
    if (currentScreen < 109) return { number: 5, title: "Build the Constraint" }
    if (currentScreen < 134) return { number: 6, title: "Observation & Adjustment" }
    return { number: "Final", title: "Wrap-Up & Challenge" }
  }, [currentScreen])

  const handleSave = async () => {
    await saveProgress()
    setSaveStatus(true)
    setTimeout(() => setSaveStatus(false), 2000)
  }

  const handleReturnHome = () => {
    if (window.confirm("Return to main screen? Your progress is saved automatically.")) {
      reset()
    }
  }

  return (
    <div className="h-screen max-w-lg mx-auto flex flex-col relative overflow-hidden shadow-2xl bg-lab-cream">
      {/* Course Header */}
      <header className="px-6 py-3 bg-lab-cream/95 backdrop-blur-md border-b-2 border-lab-ink/5 relative z-40">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-lab-teal animate-pulse" />
              <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-lab-teal/60 truncate">Field Session</span>
            </div>
            <h2 className="text-lg font-serif font-bold text-lab-ink tracking-tight truncate">{moduleInfo.title}</h2>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span className="stamped !text-[7px] !px-1.5 !py-0.5 !rotate-1 mb-1 opacity-40">Module {moduleInfo.number}</span>
            <div className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-ink/20">Pg. {currentScreen + 1}</div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-lab-ink/5 relative z-50">
        <motion.div 
          className="h-full bg-lab-teal relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>

      {/* Save Notification */}
      <AnimatePresence>
        {(saveStatus || isSyncing) && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-lab-teal text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold"
          >
            {isSyncing ? (
              <>
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <Check size={14} /> Progress Saved
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <main className="flex-1 px-6 py-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView === 'resources' ? 'resources' : currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            <CurrentScreenComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Compact Navigation Bar */}
      <footer className="relative bottom-0 z-40 bg-lab-cream/95 backdrop-blur-md border-t-2 border-lab-ink/5 px-4 py-3 pb-safe">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <button
            onClick={() => setScreen(Math.max(0, currentScreen - 1))}
            disabled={currentScreen === 0 || currentView === 'resources'}
            className="flex flex-col items-center gap-1 text-lab-ink/40 disabled:opacity-10 transition-all hover:text-lab-ink"
          >
            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </div>
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Prev</span>
          </button>

          <div className="flex items-center bg-lab-ink/5 rounded-full px-2 py-1 gap-1">
            <button 
              onClick={handleReturnHome}
              className="w-10 h-10 flex flex-col items-center justify-center gap-0.5 text-lab-ink/40 hover:text-lab-ink transition-colors"
            >
              <Home size={16} />
              <span className="text-[8px] font-mono font-bold uppercase tracking-tighter">Base</span>
            </button>
            <button 
              onClick={handleSave}
              className="w-10 h-10 flex flex-col items-center justify-center gap-0.5 text-lab-ink/40 hover:text-lab-ink transition-colors"
            >
              <Save size={16} />
              <span className="text-[8px] font-mono font-bold uppercase tracking-tighter">Save</span>
            </button>
            <button 
              onClick={() => setView(currentView === 'resources' ? 'course' : 'resources')}
              className={`w-10 h-10 flex flex-col items-center justify-center gap-0.5 transition-colors ${currentView === 'resources' ? 'text-lab-teal' : 'text-lab-ink/40 hover:text-lab-ink'}`}
            >
              <BookOpen size={16} />
              <span className="text-[8px] font-mono font-bold uppercase tracking-tighter">Intel</span>
            </button>
          </div>

          <button
            onClick={() => setScreen(Math.min(screens.length - 1, currentScreen + 1))}
            disabled={currentScreen === screens.length - 1 || !screenReady || currentView === 'resources'}
            className="flex flex-col items-center gap-1 group disabled:opacity-10 transition-all"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${screenReady ? 'bg-lab-teal text-white shadow-[0_3px_0_0_#065f46] group-active:translate-y-0.5 group-active:shadow-none' : 'border border-lab-ink/20 text-lab-ink/20'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
            <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${screenReady ? 'text-lab-teal' : 'text-lab-ink/20'}`}>Next</span>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
