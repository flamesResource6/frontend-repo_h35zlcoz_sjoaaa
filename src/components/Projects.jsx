import React, { useState } from 'react'

const projects = [
  { title:'Pick-and-Place Cell', problem:'Bin picking variability', approach:'Calibrated frames + RRT path planning', result:'99.2% success @ 40ppm'},
  { title:'Vision QC Line', problem:'Mixed defects', approach:'YOLOv8 + classical edge filters', result:'F1=0.92 at 12ms/frame'},
  { title:'Conveyor Merge', problem:'Throughput imbalance', approach:'Discrete-event sim + PID speed control', result:'+18% throughput'},
]

const Projects = () => {
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Projects & Capstone</h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-6 [column-fill:balance]"><div className="grid gap-4 break-inside-avoid">
          {projects.map((p, i) => (
            <button key={p.title} onClick={() => setActive(p)} className="text-left break-inside-avoid border border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-colors" data-tilt>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-white/70">{p.problem}</p>
            </button>
          ))}
        </div></div>

        {active && (
          <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/60" onClick={() => setActive(null)}>
            <div className="max-w-lg w-[90%] rounded-xl bg-[#0A0F1A] border border-white/10 p-6" onClick={(e)=>e.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{active.title}</h3>
                <button onClick={() => setActive(null)} className="text-white/70">✕</button>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <p><span className="text-white/60">Problem:</span> {active.problem}</p>
                <p><span className="text-white/60">Approach:</span> {active.approach}</p>
                <p><span className="text-white/60">Result:</span> {active.result}</p>
                <a href="#" className="text-[#0E5FFF] underline">Artifacts</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects