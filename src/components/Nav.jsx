import React, { useEffect, useState } from 'react'

const Nav = ({ onApplyClick }) => {
  const [active, setActive] = useState('hero')
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const handler = () => {
      let current = 'hero'
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'snapshot', label: 'Snapshot' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'labs', label: 'Labs' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'projects', label: 'Projects' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'partners', label: 'Partners' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'apply', label: 'Apply' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[color:rgb(10_15_26_/_0.6)] text-white border-b border-white/10">
      <nav className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="text-sm tracking-[0.12em] font-semibold">ROBOTICS PROGRAM</a>
        <div className="hidden md:flex gap-5 text-sm">
          {links.slice(1, -1).map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`hover:text-[#00D1B2] transition-colors ${active===l.id? 'text-[#0E5FFF]': 'text-white/80'}`}>{l.label}</a>
          ))}
        </div>
        <button onClick={onApplyClick} className="rounded-full bg-[#0E5FFF] hover:bg-[#00D1B2] transition-colors text-sm px-4 py-2">Apply Now</button>
      </nav>
    </header>
  )
}

export default Nav