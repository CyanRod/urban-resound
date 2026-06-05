import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

// ── Data ───────────────────────────────────────────────────────────────────────
const steps = [
  { num: '01', title: 'Recolección', desc: 'Residuos de cuero y plástico reciclado recolectados de talleres y comunidades de Quisapincha.', img: import.meta.env.BASE_URL + 'proceso1.png' },
  { num: '02', title: 'Clasificación y limpieza', desc: 'Clasificación y limpieza minuciosa de los materiales para garantizar calidad y consistencia en el producto final.', img: import.meta.env.BASE_URL + 'proceso2.png' },
  { num: '03', title: 'Trituración y procesamiento', desc: 'Trituración mecánica de los residuos hasta obtener la granulometría óptima para fabricar los paneles.', img: import.meta.env.BASE_URL + 'proceso3.png' },
  { num: '04', title: 'Incorporación de bioadhesivos', desc: 'Mezcla homogénea con bioadhesivos vegetales 100 % naturales y libres de compuestos tóxicos.', img: import.meta.env.BASE_URL + 'proceso4.png' },
  { num: '05', title: 'Prensado y secado', desc: 'Prensado en moldes estándar y secado controlado para consolidar la estructura y resistencia del panel.', img: import.meta.env.BASE_URL + 'proceso5.png' },
  { num: '06', title: 'Producción de paneles acústicos', desc: 'Paneles listos para distribución con control de calidad integral y certificación sostenible.', img: import.meta.env.BASE_URL + 'proceso6.png' },
  { num: '07', title: 'Comercialización', desc: 'Distribución B2B y B2C a constructoras, diseñadores de interiores y consumidores finales.', img: import.meta.env.BASE_URL + 'proceso7.png' },
  { num: '08', title: 'Impacto económico, social y ambiental', desc: 'Empleo digno, reducción de residuos y beneficio comunitario medible en Quisapincha.', img: import.meta.env.BASE_URL + 'proceso8.png' },
]

// ── SVG icons ──────────────────────────────────────────────────────────────────
const StepIcon: React.FC<{ num: string; className?: string }> = ({ num, className = 'w-12 h-12' }) => {
  const icons: Record<string, React.ReactNode> = {
    '01': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M32 8 L32 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 16 L32 8 L40 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 38 L50 38 L48 56 L16 56 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <circle cx="32" cy="30" r="3.5" fill="currentColor" opacity="0.55"/>
        <path d="M22 28 Q18 22 20 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
        <path d="M42 28 Q46 22 44 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    '02': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <rect x="8" y="10" width="48" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="26" width="40" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="42" width="32" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M56 15.5 L62 15.5 M56 31.5 L60 31.5 M56 47.5 L58 47.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
    '03': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <line x1="10" y1="18" x2="54" y2="18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <path d="M10 24 L54 24 L47 46 L17 46 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <line x1="24" y1="46" x2="20" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="46" x2="32" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="40" y1="46" x2="44" y2="58" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    '04': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M32 8 Q46 24 46 36 A14 14 0 0 1 18 36 Q18 24 32 8Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="32" cy="37" r="5.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
        <path d="M24 52 Q28 46 32 48 Q36 46 40 52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M25 36 Q23 30 27 25" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    '05': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <rect x="6" y="27" width="52" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M32 6 L32 23 M26 17 L32 23 L38 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 58 L32 41 M26 47 L32 41 L38 47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 32 L2 32 M58 32 L62 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
      </svg>
    ),
    '06': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <rect x="6" y="6" width="52" height="52" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="23.3" x2="58" y2="23.3" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <line x1="6" y1="40.7" x2="58" y2="40.7" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <line x1="23.3" y1="6" x2="23.3" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <line x1="40.7" y1="6" x2="40.7" y2="58" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
        <circle cx="14.6" cy="14.6" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="32" cy="14.6" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="49.4" cy="14.6" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="14.6" cy="32" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="32" cy="32" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="49.4" cy="32" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="14.6" cy="49.4" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="32" cy="49.4" r="3.5" fill="currentColor" opacity="0.8"/>
        <circle cx="49.4" cy="49.4" r="3.5" fill="currentColor" opacity="0.8"/>
      </svg>
    ),
    '07': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <path d="M6 42 L6 24 L14 12 L50 12 L58 24 L58 42 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
        <line x1="6" y1="24" x2="58" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="49" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="46" cy="49" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 42 L6 49 L12 49 M24 49 L40 49 M52 49 L58 49 L58 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="32" y1="12" x2="32" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
      </svg>
    ),
    '08': (
      <svg className={className} viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.45"/>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" opacity="0.18"/>
        <path d="M32 26 L32 18 M32 38 L32 46 M26 32 L18 32 M38 32 L46 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M27.2 27.2 L22 22 M36.8 36.8 L42 42 M36.8 27.2 L42 22 M27.2 36.8 L22 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
      </svg>
    ),
  }
  return <>{icons[num]}</>
}

// ── Timeline node ──────────────────────────────────────────────────────────────
const Node: React.FC<{ index: number }> = ({ index }) => (
  <motion.div
    className="relative flex items-center justify-center w-9 h-9 shrink-0"
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4, delay: 0.1 }}
  >
    <motion.div
      className="absolute inset-0 rounded-full bg-[#C8914A]/25"
      animate={{ scale: [1, 1.9, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.35, ease: 'easeInOut' }}
    />
    <div className="w-3.5 h-3.5 rounded-full bg-[#C8914A] z-10" />
    <div className="absolute inset-[5px] rounded-full border border-[#C8914A]/30" />
  </motion.div>
)

// ── Step card ──────────────────────────────────────────────────────────────────
const Card: React.FC<{ step: typeof steps[0]; side: 'left' | 'right'; index?: number }> = ({ step, side }) => (
  <motion.div
    initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-70px' }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
    whileHover={{ y: -5, transition: { duration: 0.22 } }}
    className="relative border border-white/[0.08] rounded-2xl overflow-hidden group cursor-default"
    style={{ minHeight: '200px' }}
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={step.img}
        alt={step.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Dark overlay — lighter on hover to reveal more image */}
    <div className="absolute inset-0 bg-[#080808]/80 group-hover:bg-[#080808]/65 transition-colors duration-500" />

    {/* Gradient: darker at bottom so text is readable */}
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.2) 100%)' }}
    />

    {/* Amber glow on hover */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(200,145,74,0.12) 0%, transparent 60%)' }}
    />

    {/* Content */}
    <div className="relative z-10 p-5 flex flex-col h-full">
      {/* Icon top-right */}
      <div className="flex justify-end mb-auto pb-4">
        <div className="text-[#C8914A] drop-shadow-lg">
          <StepIcon num={step.num} className="w-11 h-11" />
        </div>
      </div>

      {/* Text bottom */}
      <div>
        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#C8914A]/70 uppercase block mb-1.5">
          Paso {step.num}
        </span>
        <h3 className="text-base sm:text-lg font-normal text-[#E1E0CC] mb-1.5 leading-snug">{step.title}</h3>
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{step.desc}</p>
      </div>
    </div>

    {/* Bottom accent line */}
    <div
      className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
      style={{ background: 'linear-gradient(to right, rgba(200,145,74,0.7), transparent)' }}
    />
  </motion.div>
)

// ── SVG decorative background ──────────────────────────────────────────────────
const BgGrid = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="proc-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#proc-grid)"/>
  </svg>
)

// ── Main component ─────────────────────────────────────────────────────────────
const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end center'],
  })

  const rawScale = useTransform(scrollYProgress, [0, 1], [0, 1])
  const lineScaleY = useSpring(rawScale, { stiffness: 55, damping: 18 })

  return (
    <section id="proceso" ref={sectionRef} className="relative bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden">
      <BgGrid />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Header ─────────────────────────────────────────────────────────── */}
        <motion.span
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Cómo Funciona
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'De residuos a', className: 'text-[#E1E0CC]' },
            { text: 'soluciones acústicas.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-3"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          Cada paso transforma un residuo en dignidad, en empleo,
          en calor para alguien que lo necesita.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm sm:text-base text-gray-500 max-w-lg mb-20"
        >
          Un proceso circular que convierte lo que antes era descarte en valor real para
          la comunidad y el medioambiente.
        </motion.p>

        {/* ── Timeline ───────────────────────────────────────────────────────── */}
        <div className="relative">

          {/* Animated line — desktop center / mobile left */}
          <div className="absolute top-0 bottom-0 left-[1.125rem] lg:left-1/2 lg:-translate-x-1/2 w-px bg-white/[0.04] pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full origin-top"
              style={{
                scaleY: lineScaleY,
                height: '100%',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(200,145,74,0.5) 25%, rgba(200,145,74,0.5) 75%, transparent 100%)',
              }}
            />
          </div>

          {/* SVG dashed overlay on line */}
          <div className="absolute top-0 bottom-0 left-[1.125rem] lg:left-1/2 lg:-translate-x-1/2 w-px pointer-events-none overflow-hidden">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="rgba(200,145,74,0.15)" strokeWidth="1" strokeDasharray="4 8"/>
            </svg>
          </div>

          <div className="flex flex-col gap-8 lg:gap-4">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <div key={step.num} className="relative">

                  {/* Mobile layout */}
                  <div className="flex lg:hidden items-start gap-5">
                    <div className="shrink-0 pt-4">
                      <Node index={i} />
                    </div>
                    <div className="flex-1">
                      <Card step={step} side="right" index={i} />
                    </div>
                  </div>

                  {/* Desktop layout */}
                  <div className="hidden lg:grid items-center" style={{ gridTemplateColumns: '1fr 4.5rem 1fr' }}>

                    {/* Left slot */}
                    <div className="pr-8">
                      {isLeft
                        ? <Card step={step} side="left" index={i} />
                        : <div />}
                    </div>

                    {/* Center node */}
                    <div className="flex justify-center">
                      <Node index={i} />
                    </div>

                    {/* Right slot */}
                    <div className="pl-8">
                      {!isLeft
                        ? <Card step={step} side="right" index={i} />
                        : <div />}
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Process
