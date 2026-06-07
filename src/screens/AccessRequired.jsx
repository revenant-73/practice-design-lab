import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea } from '../components/CourseComponents'
import { useStore } from '../store'
import { Lock, Sparkles, Rocket, RefreshCw } from 'lucide-react'

const AccessRequired = () => {
  const { setAccess, setScreenReady, email, userId, loadProgress } = useStore()
  const [isChecking, setIsChecking] = React.useState(false)

  useEffect(() => {
    // We don't want the "Next" button in the footer to be active yet
    // The user must pay or bypass first
    setScreenReady(false)
  }, [setScreenReady])

  const handleCheckStatus = async () => {
    if (!userId) return
    setIsChecking(true)
    await loadProgress(userId)
    setIsChecking(false)
  }

  const handlePurchase = () => {
    const checkoutUrl = new URL('https://practice-design-lab.lemonsqueezy.com/checkout/buy/79c74bfd-0e95-45f5-b5d7-29523292197d')
    
    // Prefill the email to make it easier for the coach
    if (email) {
      checkoutUrl.searchParams.set('checkout[email]', email)
    }
    
    window.open(checkoutUrl.toString(), '_blank')
  }

  const handleBypass = () => {
    setAccess(true)
    setScreenReady(true)
  }

  return (
    <ScreenLayout title="Field Access Required">
      <div className="flex justify-center py-6">
        <div className="w-20 h-20 rounded-full bg-lab-teal/10 flex items-center justify-center border-2 border-lab-teal animate-pulse">
          <Lock size={40} className="text-lab-teal" />
        </div>
      </div>

      <TeachingText className="text-center px-4">
        You've completed the foundation. Now it's time to build your <strong className="text-lab-teal">Activity Upgrade Plan</strong>.
      </TeachingText>

      <div className="space-y-4 py-4">
        <div className="bg-white p-5 hand-drawn space-y-3 relative overflow-hidden group">
          <div className="flex items-center gap-3">
            <Sparkles size={18} className="text-lab-teal" />
            <h4 className="font-mono font-bold text-[10px] uppercase tracking-[0.2em] text-lab-teal">Full Lab Access Includes:</h4>
          </div>
          <ul className="space-y-2 text-sm text-lab-ink/80">
            <li className="flex gap-2">
              <span className="text-lab-teal">01.</span>
              <span><strong>The Full 6-Module Build:</strong> Complete your practice-ready activity upgrade.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-lab-teal">02.</span>
              <span><strong>Constraint Lever Library:</strong> Deep dive into all 7 levers.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-lab-teal">03.</span>
              <span><strong>Adjustment Framework:</strong> Learn how to fix "too easy/hard/weird" sessions.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-lab-teal">04.</span>
              <span><strong>The Tomorrow Challenge:</strong> Concrete tools for your next practice.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <button 
          onClick={handlePurchase}
          className="w-full bg-lab-ink text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 shadow-lg hover:bg-lab-teal transition-colors"
        >
          Unlock Full Lab Access
          <Rocket size={16} />
        </button>
        <button 
          onClick={handleCheckStatus}
          disabled={isChecking}
          className="w-full py-3 flex items-center justify-center gap-2 text-lab-ink/40 hover:text-lab-teal transition-colors disabled:opacity-50"
        >
          <RefreshCw size={14} className={isChecking ? 'animate-spin' : ''} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
            {isChecking ? 'Checking Server...' : 'Already Purchased? Check Status'}
          </span>
        </button>
        <p className="text-[10px] text-center text-lab-ink/40 font-mono uppercase tracking-tighter italic pt-1">One-time payment • Lifetime access</p>
      </div>

      {/* Dev Bypass - To be removed before shipping */}
      <div className="mt-12 pt-8 border-t border-lab-ink/5">
        <button 
          onClick={handleBypass}
          className="w-full py-2 border-2 border-dashed border-lab-ink/10 text-[9px] font-mono font-bold uppercase tracking-widest text-lab-ink/20 hover:text-lab-teal hover:border-lab-teal transition-all"
        >
          [ Dev Mode ] Test User Bypass
        </button>
      </div>
    </ScreenLayout>
  )
}

export default AccessRequired
