import React from 'react'

const logos = ['ABB','KUKA','Siemens','FANUC','Omron','Universal Robots']

const Partners = () => {
  return (
    <section id="partners" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Placement & Partners</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((l,i) => (
            <div key={l} className="h-16 rounded-lg border border-white/10 bg-white/5 grid place-items-center text-white/70">
              <span className="animate-pulse" style={{animationDelay:`${i*120}ms`}}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners