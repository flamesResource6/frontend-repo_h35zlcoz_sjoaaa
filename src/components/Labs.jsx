import React, { useRef, useEffect } from 'react'

const labs = [
  { title:'PLC ladder logic', desc:'Hands-on PLC programming.' },
  { title:'Robot arm pick-and-place', desc:'Trajectory and toolpaths.' },
  { title:'Vision-guided inspection', desc:'Defect detection with OpenCV.' },
  { title:'Conveyor + sensor arrays', desc:'I/O and interlocks.' },
  { title:'Digital twin in simulation', desc:'Validate flows before deploy.' },
]

const Labs = () => {
  const track = useRef(null)
  useEffect(() => {
    const el = track.current
    if (!el) return
    let raf
    const loop = () => {
      el.scrollLeft += 0.5
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) el.scrollLeft = 0
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="labs" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Live Labs</h2>
        <div ref={track} className="mt-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 w-max pr-6">
            {labs.map((lab, i) => (
              <div key={lab.title} data-tilt className="min-w-[280px] bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="h-24 rounded-lg bg-gradient-to-br from-[#0E5FFF]/30 to-[#00D1B2]/30 mb-3" aria-hidden="true" />
                <p className="font-medium">{lab.title}</p>
                <p className="text-white/70 text-sm mt-1">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Labs