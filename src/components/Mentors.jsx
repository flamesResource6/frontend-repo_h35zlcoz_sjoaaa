import React from 'react'

const mentors = [
  { name:'A. Kumar', role:'Controls', cred:'Ex-ABB, SIL2 safety' },
  { name:'R. Mehta', role:'Robotics', cred:'10y Fanuc/KUKA' },
  { name:'S. Iyer', role:'Vision', cred:'QC/Metrology' },
]

const Card = ({ m }) => (
  <div className="[transform-style:preserve-3d] group perspective-[1200px]" data-tilt>
    <div className="relative h-44 rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-500 [transform:rotateY(0deg)] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0 backface-hidden">
        <div className="h-full w-full rounded-lg bg-gradient-to-br from-white/10 to-white/0" />
        <div className="absolute bottom-3 left-3">
          <p className="font-medium">{m.name}</p>
          <p className="text-sm text-white/70">{m.role}</p>
        </div>
      </div>
      <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden grid place-items-center">
        <p className="text-sm text-center px-6">{m.cred}</p>
      </div>
    </div>
  </div>
)

const Mentors = () => {
  return (
    <section id="mentors" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Mentors</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.map((m) => <Card key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  )
}

export default Mentors