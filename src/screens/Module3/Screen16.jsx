import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../../components/CourseComponents'
import { useStore } from '../../store'

const Screen16 = () => {
  const { activityUpgradePlan, updatePlan, setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(activityUpgradePlan.m3ObservableTarget?.length > 5)
  }, [activityUpgradePlan.m3ObservableTarget, setScreenReady])

  return (
    <ScreenLayout title="Make It Observable">
      <TeachingText>
        A useful attention target should be observable. You should be able to watch the activity and ask: <strong>“Are players noticing this earlier, more clearly, or more often?”</strong>
      </TeachingText>

      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="bg-lab-coral/5 p-4 rounded-xl border border-lab-coral/10">
          <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-lab-coral mb-2">Less Observable</h4>
          <ul className="text-[11px] space-y-2 opacity-60 italic">
            <li>• Be smarter</li>
            <li>• More confidence</li>
            <li>• Care more</li>
            <li>• Understand the game</li>
          </ul>
        </div>
        <div className="bg-lab-teal/5 p-4 rounded-xl border border-lab-teal/10">
          <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-2">More Observable</h4>
          <ul className="text-[11px] space-y-2 font-medium">
            <li>• Notice open space</li>
            <li>• Recognize pressure</li>
            <li>• Communicate early</li>
            <li>• Recover immediately</li>
          </ul>
        </div>
      </div>

      <div className="pt-4 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <h3 className="font-mono font-bold text-lab-ink/20 uppercase tracking-[0.2em] text-[10px]">Current target</h3>
            <div className="h-px flex-1 bg-lab-ink/10" />
          </div>
          <p className="text-lg font-serif italic text-lab-ink/40 leading-tight">
            {activityUpgradePlan.m3AttentionTarget || 'Not yet defined'}
          </p>
        </div>

        <div className="space-y-4 relative group">
          <label className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-lab-ink/30 group-focus-within:text-lab-teal transition-colors">Rewrite for observability</label>
          <textarea
            className="w-full bg-white organic-border p-6 min-h-[120px] outline-none focus:border-lab-teal transition-all font-sans text-lg shadow-sm"
            placeholder="e.g., I will see players checking their shoulders for open space before receiving the ball..."
            value={activityUpgradePlan.m3ObservableTarget}
            onChange={(e) => updatePlan('m3ObservableTarget', e.target.value)}
          />
          <div className="absolute -right-2 top-0 stamped opacity-0 group-focus-within:opacity-100 transition-opacity">Active</div>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default Screen16
