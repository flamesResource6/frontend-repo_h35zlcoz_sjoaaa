import React from 'react'

const Item = ({ title, value }) => (
  <div data-tilt data-motion className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <p className="text-xs uppercase tracking-[0.14em] text-white/60">{title}</p>
    <p className="mt-2 text-lg text-white">{value}</p>
  </div>
)

const Snapshot = () => {
  const items = [
    { title: 'Duration', value: '8 weeks · 60+ hours' },
    { title: 'Mode', value: 'Offline / Hybrid' },
    { title: 'Schedule', value: 'Sat-Sun · Evenings' },
    { title: 'Prerequisites', value: 'Basic electronics, Python' },
    { title: 'Outcomes', value: 'Deploy industrial cells' },
  ]
  return (
    <section id="snapshot" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <h2 data-motion className="text-2xl font-semibold">Program Snapshot</h2>
          <p data-motion data-motion-delay="120" className="mt-2 text-white/70">Key facts at a glance.</p>
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <Item key={i} title={it.title} value={it.value} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Snapshot