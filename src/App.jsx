import React, { useMemo, useState, Suspense, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from './store'
import { Save, Home, BookOpen, Check, Loader2, ChevronDown } from 'lucide-react'
import { screens, moduleDefinitions } from './ScreenRegistry'
import ModuleMenu from './components/ModuleMenu'

// Import only core components and few static screens to keep bundle small
import LandingPage from './screens/LandingPage'
import Resources from './screens/Resources'
import AccessRequired from './screens/AccessRequired'

const LoadingScreen = () => (
  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
    <div className="w-12 h-12 rounded-full border-4 border-lab-teal/20 border-t-lab-teal animate-spin" />
    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lab-teal">Accessing Lab Data...</p>
  </div>
)

function App() {
  const { currentScreen, setScreen, screenReady, currentView, setView, reset, saveProgress, isSyncing, hasAccess } = useStore()
  const [saveStatus, setSaveStatus] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const mainRef = useRef(null)
  
  const checkScroll = () => {
    if (mainRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = mainRef.current
      const canScroll = scrollHeight > clientHeight + 10
      const atBottom = scrollTop + clientHeight >= scrollHeight - 30
      setShowScrollHint(canScroll && !atBottom)
    }
  }

  useEffect(() => {
    // Small delay to allow content to render before checking scroll
    const timer = setTimeout(checkScroll, 500)
    return () => clearTimeout(timer)
  }, [currentScreen, currentView])

  const isGateOpen = hasAccess || currentScreen < 11
  const CurrentScreenComponent = currentView === 'resources' 
    ? Resources 
    : (!isGateOpen ? AccessRequired : (screens[currentScreen] || LandingPage))

  const progress = ((currentScreen + 1) / screens.length) * 100

  const moduleInfo = useMemo(() => {
    const mod = moduleDefinitions.find(m => currentScreen >= m.start && currentScreen <= m.end)
    return mod || { id: "Final", title: "Wrap-Up & Challenge" }
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
            <span className="stamped !text-[7px] !px-1.5 !py-0.5 !rotate-1 mb-1 opacity-40">Module {moduleInfo.id}</span>
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
      <main 
        ref={mainRef}
        onScroll={checkScroll}
        className="flex-1 px-6 py-8 overflow-y-auto relative scroll-smooth"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView === 'resources' ? 'resources' : currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full"
          >
            <Suspense fallback={<LoadingScreen />}>
              <CurrentScreenComponent />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Scroll Hint */}
      <AnimatePresence>
        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-[8px] font-mono font-bold uppercase tracking-[0.3em] text-lab-teal bg-lab-cream/80 backdrop-blur-sm px-2 py-0.5 rounded-full">More Intel</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-lab-teal"
              >
                <ChevronDown size={16} strokeWidth={3} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <ModuleMenu />
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
