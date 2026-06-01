import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WordsPullUp } from './animations/WordsPullUp'

const EASE = [0.16, 1, 0.3, 1] as const

const Hero: React.FC = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="inicio"
      className="h-screen p-3 sm:p-4 md:p-5 bg-black"
      style={{ minHeight: '600px' }}
    >
      {/* Inset rounded container */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Noise overlay */}
        <div
          className="absolute inset-0 noise pointer-events-none z-[1]"
          style={{ opacity: 0.06, mixBlendMode: 'overlay' }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 40%, rgba(0,0,0,0.72) 100%)',
          }}
        />

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-8 md:p-10 pb-7 sm:pb-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            {/* Giant heading — left 8 cols */}
            <div className="col-span-12 lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 sm:mb-4"
                style={{ color: 'rgba(222,219,200,0.55)' }}
              >
                Quisapincha · Tungurahua · Ecuador
              </motion.p>

              <h1
                className="font-medium leading-[0.85] tracking-[-0.045em]"
                style={{
                  fontSize: 'clamp(3.5rem, 14vw, 14rem)',
                  color: '#E1E0CC',
                }}
              >
                <WordsPullUp text="Urban" delay={0.15} />
                <br />
                <WordsPullUp text="ReSound" delay={0.23} showAsterisk />
              </h1>
            </div>

            {/* Right 4 cols: description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-1">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: 'rgba(222,219,200,0.65)', lineHeight: 1.6 }}
              >
                Transformamos residuos de cuero y plástico reciclado en paneles acústicos
                sostenibles, impulsando economía circular e impacto comunitario desde Ecuador.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <button
                  onClick={() => scrollTo('#solucion')}
                  className="group inline-flex items-center gap-2 bg-primary rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base hover:gap-3 transition-all duration-200"
                  style={{ color: '#000' }}
                >
                  Conoce el proyecto
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    <ArrowRight size={15} className="text-primary -rotate-45" />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom-right sparkle detail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 right-7 z-10 hidden sm:flex items-center gap-2"
          style={{ color: 'rgba(222,219,200,0.4)' }}
        >
          <Sparkles size={11} />
          <span className="text-[10px] uppercase tracking-widest">Yachay Tech · 2026</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
