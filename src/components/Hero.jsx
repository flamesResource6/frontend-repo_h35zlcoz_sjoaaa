import React, { useEffect } from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  useEffect(() => {
    // no-op, Spline loads on mount
  }, [])

  return (
    <section id="hero" className="relative min-h-[90vh] grid place-items-center overflow-hidden bg-[#0A0F1A] text-white">
      <div data-parallax-grid className="absolute inset-0 opacity-[0.18]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize:'36px 36px', backgroundPosition:'50% 50%'}} />

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/utrirTwDrFc8TLoE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 py-24 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <h1 data-motion="rise" className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Industrial Automation & Robotics Program
          </h1>
          <p data-motion="rise" data-motion-delay="80" className="mt-4 text-white/80 max-w-xl">
            From control systems to autonomous cells—learn, build, deploy.
          </p>
          <div data-motion="rise" data-motion-delay="140" className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="px-5 py-2 rounded-full bg-[#0E5FFF] hover:bg-[#00D1B2] transition-colors">Apply Now</a>
            <a href="/files/brochure.pdf" className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40">Download Brochure</a>
            <a href="#admissions" className="px-5 py-2 rounded-full border border-white/20 hover:border-white/40">Talk to Admissions</a>
          </div>
          <div className="mt-10 flex gap-8 text-sm">
            {[
              {k:'60+ Hours'},
              {k:'5 Labs'},
              {k:'1 Capstone'}
            ].map((item, i) => (
              <div key={i} data-motion="rise" data-motion-delay={200 + i*80} className="border border-white/10 rounded-lg px-4 py-3 bg-white/5">
                <span className="font-medium">{item.k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero