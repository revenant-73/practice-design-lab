import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store'
import { moduleDefinitions } from '../ScreenRegistry'
import { CheckCircle2, ChevronRight, Menu, X } from 'lucide-react'

const ModuleMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentScreen, setScreen } = useStore()

  const handleModuleClick = (start) => {
    setScreen(start)
    setIsOpen(false)
  }

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-lab-ink/40 backdrop-blur-sm z-[9998]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-lab-cream border-l-2 border-lab-ink shadow-2xl z-[9999] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-serif font-bold text-xl">Module Index</h3>
                <button onClick={() => setIsOpen(false)} className="text-lab-ink/40 hover:text-lab-ink transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {moduleDefinitions.map((mod) => {
                  const isCurrent = currentScreen >= mod.start && currentScreen <= mod.end
                  const isCompleted = currentScreen > mod.end

                  return (
                    <button
                      key={mod.id}
                      onClick={() => handleModuleClick(mod.start)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group ${
                        isCurrent 
                          ? 'border-lab-teal bg-lab-teal/5 shadow-md' 
                          : 'border-lab-ink/5 bg-white hover:border-lab-teal/30'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-lab-teal/60">
                            Module {mod.id}
                          </span>
                          {isCompleted && <CheckCircle2 size={10} className="text-lab-teal" />}
                        </div>
                        <p className={`font-bold text-sm ${isCurrent ? 'text-lab-ink' : 'text-lab-ink/70'}`}>
                          {mod.title}
                        </p>
                      </div>
                      <ChevronRight 
                        size={16} 
                        className={`transition-transform ${isCurrent ? 'text-lab-teal translate-x-0' : 'text-lab-ink/20 -translate-x-2 group-hover:translate-x-0 group-hover:text-lab-teal/40'}`} 
                      />
                    </button>
                  )
                })}
              </div>

              <div className="mt-12 p-6 hand-drawn bg-lab-teal text-white">
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-80 mb-1">Your Progress</p>
                <p className="text-xs italic leading-relaxed">
                  "Every practice is an experiment. Use the index to return to specific levers as you observe your players."
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 flex flex-col items-center justify-center gap-0.5 text-lab-ink/40 hover:text-lab-ink transition-colors"
      >
        <Menu size={16} />
        <span className="text-[8px] font-mono font-bold uppercase tracking-tighter">Index</span>
      </button>

      {typeof document !== 'undefined' && createPortal(menuContent, document.body)}
    </>
  )
}

export default ModuleMenu
