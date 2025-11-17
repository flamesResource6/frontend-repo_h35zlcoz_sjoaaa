import React from 'react'

const rows = [
  { label:'Tuition', value:'$1,800' },
  { label:'Scholarship', value:'Up to 25% merit-based' },
  { label:'EMI', value:'From $75/mo' },
]

const Admissions = () => {
  return (
    <section id="admissions" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Admissions & Pricing</h2>
        <ol className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
          {['Apply','Interview','Offer'].map((s,i) => (
            <li key={s} className="rounded-xl border border-white/10 p-4 bg-white/5">
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#0E5FFF]" style={{ width: `${(i+1)/3*100}%` }} />
              </div>
              <p className="mt-3 font-medium">{s}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 border border-white/10 rounded-xl overflow-hidden">
          <div className="divide-y divide-white/10">
            {rows.map(r => (
              <div key={r.label} className="flex items-center justify-between px-4 py-3 bg-white/5">
                <span className="text-white/70">{r.label}</span>
                <span>{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admissions