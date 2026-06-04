import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from './store'
import { Save, Home, BookOpen, Check } from 'lucide-react'
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
import Resources from './screens/Resources'

const screens = [
  Screen1, Screen2, Screen3, Screen4, Screen5,
  Screen6, Screen7, Screen8, Screen9, Screen10,
  M2S1, M2S2, M2S3, M2S4, M2S5, M2S6, M2S7, M2S8, M2S9, M2S10,
  M2S11, M2S12, M2S13, M2S14, M2S15, M2S16, M2S17, M2S18, M2S19, M2S20
]

function App() {
  const { currentScreen, setScreen, screenReady, currentView, setView, reset, saveProgress, isSyncing } = useStore()
  const [saveStatus, setSaveStatus] = useState(false)
  
  const CurrentScreenComponent = currentView === 'resources' ? Resources : (screens[currentScreen] || Screen1)

  const progress = ((currentScreen + 1) / screens.length) * 100

  const moduleInfo = useMemo(() => {
    if (currentScreen < 10) return { number: 1, title: "What Constraints Do" }
    if (currentScreen < 30) return { number: 2, title: "Start With the Problem" }
    return { number: 3, title: "Designing the Upgrade" }
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
    <div className="min-h-screen max-w-lg mx-auto flex flex-col relative overflow-hidden shadow-2xl bg-lab-cream">
      {/* Course Header */}
      <header className="px-6 py-3 bg-lab-cream/95 backdrop-blur-md border-b-2 border-lab-ink/5 sticky top-0 z-40">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-lab-teal animate-pulse" />
              <span className="text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-lab-teal/60 truncate">Field Session</span>
            </div>
            <h2 className="text-lg font-serif font-bold text-lab-ink tracking-tight truncate">Constraints</h2>
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
      <footer className="sticky bottom-0 z-40 bg-lab-cream/95 backdrop-blur-md border-t-2 border-lab-ink/5 px-4 py-3 pb-safe">
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
