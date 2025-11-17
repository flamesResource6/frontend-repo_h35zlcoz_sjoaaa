import React, { useState } from 'react'

const faqs = [
  { q:'Who is this for?', a:'Engineers and technicians moving into industrial automation and robotics.' },
  { q:'Do I need prior robotics?', a:'No. Basics of electronics and Python help.' },
  { q:'Is there a certificate?', a:'Yes. You receive a graded certificate after the capstone.' },
]

const FAQs = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="faqs" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">FAQs</h2>
        <div className="mt-6 divide-y divide-white/10">
          {faqs.map((f, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open===i? null:i)} className="w-full text-left py-3 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-white/60">{open===i? '−' : '+'}</span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open===i? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} text-white/70`}>
                <div className="overflow-hidden pb-3">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs