import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Snapshot from './components/Snapshot'
import Curriculum from './components/Curriculum'
import Labs from './components/Labs'
import Outcomes from './components/Outcomes'
import Mentors from './components/Mentors'
import Projects from './components/Projects'
import Admissions from './components/Admissions'
import Partners from './components/Partners'
import FAQs from './components/FAQs'
import ApplicationForm from './components/ApplicationForm'
import { Motion } from './utils/motion'

function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => { Motion.init() }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme==='dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <Nav onApplyClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })} />
      <main>
        <Hero />
        <Snapshot />
        <Curriculum />
        <Labs />
        <Outcomes />
        <Mentors />
        <Projects />
        <Admissions />
        <Partners />
        <FAQs />
        <ApplicationForm />
      </main>

      <button aria-label="Toggle theme" onClick={() => setTheme(theme==='dark'? 'light':'dark')} className="fixed bottom-5 right-5 z-50 rounded-full border border-white/10 bg-white/10 backdrop-blur px-4 py-2">
        {theme==='dark'? 'Light' : 'Dark'}
      </button>

      <a href="#apply" className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 px-5 py-3 rounded-full bg-[#0E5FFF]">Apply Now</a>
    </div>
  )
}

export default App