import React, { useState } from 'react'

const modules = [
  { title: 'Foundations', detail: 'PLCs, Sensors, Actuators, SCADA' },
  { title: 'Control', detail: 'PID, State Machines, Safety' },
  { title: 'Robotics', detail: 'Kinematics, Path Planning, ROS basics' },
  { title: 'Vision + AI', detail: 'OpenCV, YOLO, QC automation' },
  { title: 'Integration', detail: 'Modbus, OPC UA, MQTT, Edge' },
  { title: 'Capstone', detail: 'Design, simulate, deploy a mini cell' },
]

const Curriculum = () => {
  const [open, setOpen] = useState(null)
  return (
    <section id="curriculum" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Curriculum Map</h2>
        <div className="mt-8 border-l border-white/10">
          {modules.map((m, i) => (
            <div key={m.title} className="relative pl-6 py-4">
              <span className="absolute left-[-6px] top-6 w-3 h-3 rounded-full bg-[#0E5FFF]"></span>
              <button onClick={() => setOpen(open===i? null: i)} className="w-full text-left">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{m.title}</p>
                  <span className="text-white/60">{open===i? '−' : '+'}</span>
                </div>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open===i? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'} border-t border-white/10 mt-2`}>
                  <div className="overflow-hidden text-white/70 pt-2">{m.detail}</div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curriculum