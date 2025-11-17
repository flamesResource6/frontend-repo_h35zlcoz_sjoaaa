import React, { useState } from 'react'

const initial = { first_name:'', last_name:'', email:'', phone:'', preferred_mode:'Offline', consent:true }

const ApplicationForm = () => {
  const [data, setData] = useState(initial)
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${backend}/api/apply`, {
        method:'POST', headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(data)
      })
      const out = await res.json()
      if (!res.ok) throw new Error(out.detail? JSON.stringify(out.detail) : 'Failed')
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event:'application_submitted', id: out.id })
      setStatus('Success! We will contact you shortly.')
      setData(initial)
      setStep(1)
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="apply" className="bg-[#0A0F1A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 data-motion className="text-2xl font-semibold">Application Form</h2>
        <form onSubmit={submit} className="mt-6 grid sm:grid-cols-2 gap-4">
          {step===1 && (
            <>
              <label className="block">First Name<input required value={data.first_name} onChange={e=>setData({...data, first_name:e.target.value})} className="mt-1 w-full bg-transparent border border-white/20 rounded-md px-3 py-2" /></label>
              <label className="block">Last Name<input required value={data.last_name} onChange={e=>setData({...data, last_name:e.target.value})} className="mt-1 w-full bg-transparent border border-white/20 rounded-md px-3 py-2" /></label>
              <label className="block sm:col-span-2">Email<input type="email" required value={data.email} onChange={e=>setData({...data, email:e.target.value})} className="mt-1 w-full bg-transparent border border-white/20 rounded-md px-3 py-2" /></label>
            </>
          )}
          {step===2 && (
            <>
              <label className="block sm:col-span-2">Phone<input value={data.phone} onChange={e=>setData({...data, phone:e.target.value})} className="mt-1 w-full bg-transparent border border-white/20 rounded-md px-3 py-2" /></label>
              <label className="block sm:col-span-2">Preferred Mode<select value={data.preferred_mode} onChange={e=>setData({...data, preferred_mode:e.target.value})} className="mt-1 w-full bg-transparent border border-white/20 rounded-md px-3 py-2"><option>Offline</option><option>Hybrid</option></select></label>
              <label className="inline-flex items-center gap-2"><input type="checkbox" checked={data.consent} onChange={e=>setData({...data, consent:e.target.checked})} /> <span className="text-sm text-white/70">I agree to be contacted.</span></label>
            </>
          )}

          <div className="sm:col-span-2 flex items-center gap-3 mt-2">
            {step>1 && <button type="button" onClick={()=>setStep(step-1)} className="px-4 py-2 rounded-md border border-white/20">Back</button>}
            {step<2 && <button type="button" onClick={()=>setStep(step+1)} className="px-4 py-2 rounded-md bg-[#0E5FFF]">Next</button>}
            {step===2 && <button className="px-4 py-2 rounded-md bg-[#00D1B2]">Submit</button>}
          </div>
          {status && <p className="sm:col-span-2 text-sm text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default ApplicationForm