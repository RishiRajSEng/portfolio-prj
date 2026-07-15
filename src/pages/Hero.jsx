import React from 'react'
import heroImage from '../assets/Rishi.png'

const Hero = () => {
  return (
    <section id="home" className="bg-[#4b5668] text-white">
      <div className="mx-auto grid min-h-[520px] max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#12d35f]">
            Full Stack Developer
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#12d35f] sm:text-5xl lg:text-6xl">
            Rishi Raj Pandey
          </h1>
          <p className="max-w-xl text-base leading-8 text-white/95 sm:text-lg">
            I build intelligent, secure, and highly scalable web applications with modern
            technologies and innovative solutions. I specialize in transforming complex ideas
            into user-friendly, high-performance digital products.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-[#12d35f]/20 blur-3xl" />
            <div className="h-[270px] w-[270px] overflow-hidden rounded-full border-4 border-[#12d35f] shadow-[0_24px_60px_rgba(0,0,0,0.28)] sm:h-[320px] sm:w-[320px]">
              <img
                src={heroImage}
                alt="Rishi Raj Pandey"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
