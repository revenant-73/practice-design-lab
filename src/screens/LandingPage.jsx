import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText, KeyIdea, VisualPlaceholder } from '../components/CourseComponents'
import { useStore } from '../store'

const LandingPage = () => {
  const { setScreenReady } = useStore()

  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="The Power of Constraints">
      <TeachingText>
        Rules aren't just there to stop play. In reality, <strong className="text-lab-teal">constraints are what make the game possible.</strong>
      </TeachingText>

      <VisualPlaceholder 
        label="The Landscape Metaphor" 
        caption="Constraints funnel players toward solutions by shaping the landscape of the practice."
      >
        <img 
          src="/page_1_landscape_metaphor.png" 
          alt="Landscape Metaphor" 
          className="w-full h-full object-contain"
        />
      </VisualPlaceholder>

      <div className="space-y-6 pt-4">
        <section className="space-y-2">
          <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">What is a Constraint?</h3>
          <TeachingText>
            A constraint is any boundary that shapes how players move, think, and decide. 
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-lab-ink/80 italic">
              <li>The <strong>boundaries</strong> of the field.</li>
              <li>The <strong>shot clock</strong> in basketball.</li>
              <li>The <strong>offside rule</strong> in soccer.</li>
            </ul>
          </TeachingText>
        </section>

        <KeyIdea>
          Constraints don't just restrict; they create the possibilities for skill to emerge.
        </KeyIdea>

        <section className="space-y-2">
          <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">The Constraints-Led Approach (CLA)</h3>
          <TeachingText>
            Instead of "telling" players the answer, we <strong className="text-lab-teal">manipulate the environment</strong> to guide them toward discovering solutions themselves.
          </TeachingText>
        </section>

        <section className="space-y-2">
          <h3 className="font-mono font-bold text-lab-teal uppercase tracking-[0.2em] text-[10px]">Inviting vs. Restricting</h3>
          <TeachingText>
            A weak constraint simply shuts down options (e.g., "don't do that"). 
          </TeachingText>
          <TeachingText>
            A <strong className="text-lab-teal">great constraint</strong> changes the landscape of the practice to <strong className="text-lab-teal">afford</strong> action—inviting players to explore and find new ways to succeed.
          </TeachingText>
        </section>

        <div className="pt-4 p-4 hand-drawn bg-lab-teal/5 border-l-4 border-lab-teal">
          <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-lab-teal mb-1">Your Mission</p>
          <p className="text-sm text-lab-ink/80 leading-relaxed italic">
            In this lab, you will learn how to design constraints that invite exploration rather than shut it down—transforming simple rules into powerful tools for learning.
          </p>
        </div>
      </div>
    </ScreenLayout>
  )
}

export default LandingPage
