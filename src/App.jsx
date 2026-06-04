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
  const { currentScreen, setScreen, screenReady, currentView, setView, reset } = useStore()
  const [saveStatus, setSaveStatus] = useState(false)
  
  const CurrentScreenComponent = currentView === 'resources' ? Resources : (screens[currentScreen] || Screen1)

  const progress = ((currentScreen + 1) / screens.length) * 100

  const moduleInfo = useMemo(() => {
    if (currentScreen < 10) return { number: 1, title: "What Constraints Do" }
    if (currentScreen < 30) return { number: 2, title: "Start With the Problem" }
    return { number: 3, title: "Designing the Upgrade" }
  }, [currentScreen])

  const handleSave = () => {
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
      <header className="px-6 py-4 bg-lab-cream/90 backdrop-blur-md border-b border-lab-ink/5 sticky top-0 z-40">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-lab-teal mb-0.5">The Practice Design Lab</span>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-lab-ink">Constraints</h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-lab-ink/40">Mod {moduleInfo.number}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-lab-teal animate-pulse" />
            </div>
          </div>
          <p className="text-[10px] text-lab-ink/60 italic mt-0.5 truncate">{moduleInfo.title}</p>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-lab-ink/10 relative z-50">
        <motion.div 
          className="h-full bg-lab-teal"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      {/* Save Notification */}
      <AnimatePresence>
        {saveStatus && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-lab-teal text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold"
          >
            <Check size={14} /> Progress Saved
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

      {/* Navigation Footer */}
      <div className="flex flex-col sticky bottom-0 z-40">
        <footer className="px-6 py-4 flex items-center justify-between bg-lab-cream/80 backdrop-blur-sm border-t border-lab-ink/5">
          <button
            onClick={() => setScreen(Math.max(0, currentScreen - 1))}
            disabled={currentScreen === 0 || currentView === 'resources'}
            className="text-lab-ink font-medium disabled:opacity-30 flex items-center gap-1 transition-opacity"
          >
            <span>Back</span>
          </button>
          
          <div className="text-xs font-bold uppercase tracking-widest text-lab-ink/40">
            {currentView === 'resources' ? 'Resources' : `Screen ${currentScreen + 1}`}
          </div>

          <button
            onClick={() => setScreen(Math.min(screens.length - 1, currentScreen + 1))}
            disabled={currentScreen === screens.length - 1 || !screenReady || currentView === 'resources'}
            className="btn-primary py-2 px-4 text-sm disabled:bg-lab-ink/20 disabled:shadow-none"
          >
            Next
          </button>
        </footer>

        {/* Utility Footer */}
        <nav className="px-6 py-3 bg-lab-ink flex items-center justify-between text-white/60">
          <button 
            onClick={handleReturnHome}
            className="flex flex-col items-center gap-1 hover:text-white transition-colors"
          >
            <Home size={16} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Main</span>
          </button>
          <button 
            onClick={handleSave}
            className="flex flex-col items-center gap-1 hover:text-white transition-colors"
          >
            <Save size={16} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Save</span>
          </button>
          <button 
            onClick={() => setView(currentView === 'resources' ? 'course' : 'resources')}
            className={`flex flex-col items-center gap-1 transition-colors ${currentView === 'resources' ? 'text-lab-teal' : 'hover:text-white'}`}
          >
            <BookOpen size={16} />
            <span className="text-[10px] font-bold uppercase tracking-tighter">Resources</span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default App
