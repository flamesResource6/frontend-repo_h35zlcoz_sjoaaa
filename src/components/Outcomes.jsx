import React from 'react'

const items = ['System Design','HMI/SCADA','Robot Programming','Vision QA','Maintenance Analytics']

const Outcomes = () => {
  return (
    <section id="outcomes" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Outcomes</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((t, i) => (
            <div key={t} data-motion data-tilt className="flex items-center gap-3 border border-white/10 rounded-xl p-4 bg-white/5">
              <span className="inline-flex size-5 rounded-full border border-[#00D1B2] text-[#00D1B2] items-center justify-center">✓</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Outcomes