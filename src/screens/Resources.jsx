import React, { useEffect } from 'react'
import { ScreenLayout, TeachingText } from '../components/CourseComponents'
import { useStore } from '../store'

const Resources = () => {
  const { setView, setScreenReady } = useStore()

  // Always allow leaving resources
  useEffect(() => {
    setScreenReady(true)
  }, [setScreenReady])

  return (
    <ScreenLayout title="Course Resources">
      <TeachingText>
        This page will contain additional guides, templates, and deep-dives to help you master constraints.
      </TeachingText>
      
      <div className="py-12 flex flex-col items-center justify-center space-y-4 opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-lab-teal"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
        <p className="font-bold uppercase tracking-widest text-xs">Resources Coming Soon</p>
      </div>

      <button 
        onClick={() => setView('course')}
        className="w-full btn-secondary mt-8"
      >
        Return to Course
      </button>
    </ScreenLayout>
  )
}

export default Resources
