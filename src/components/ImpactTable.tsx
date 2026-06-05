import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import CountUp from './animations/CountUp'

const WARM = '#C8914A'
const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASE },
})

/* ── Animated distribution bar ── */
const distribution = [
  { pct: 54, label: 'Para la comunidad', amount: '$8,100',  hero: true  },
  { pct: 25, label: 'Utilidad',          amount: '$3,750',  hero: false },
  { pct: 21, label: 'Costos',            amount: '$3,150',  hero: false },
]

const DistributionBar: React.FC = () => {
  const ref  = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const colors  = [WARM, 'rgba(200,145,74,0.35)', '#222']
  const borders = ['none', 'none', '1px solid #333']

  return (
    <div ref={ref}>
      <div className="flex rounded-full overflow-hidden" style={{ height: 8, gap: 2 }}>
        {distribution.map((s, i) => (
          <div
            key={s.label}
            style={{
              width: on ? `${s.pct}%` : '0%',
              background: colors[i],
              border: borders[i],
              transition: `width 1.4s cubic-bezier(0.22,1,0.36,1) ${i * 0.18}s`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-3">
        {distribution.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: colors[i], border: borders[i] }} />
            <span className="text-xs text-gray-500">{s.label}</span>
            <span className="text-xs font-medium" style={{ color: s.hero ? WARM : '#555' }}>{s.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const ImpactTable: React.FC = () => {
  return (
    <section id="impacto" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.span {...fadeUp()} className="section-label block mb-4">
          Impacto Económico
        </motion.span>
        <WordsPullUpMultiStyle
          segments={[
            { text: 'Economía circular con', className: 'text-[#E1E0CC]' },
            { text: 'resultados reales.',    className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />
        <motion.p {...fadeUp(0.15)} className="text-sm text-gray-500 mb-14 max-w-lg">
          Proyecciones de la fase piloto: 500 paneles mensuales desde Quisapincha.
        </motion.p>

        {/* PASO 1 — Cómo se genera el ingreso */}
        <motion.p {...fadeUp(0)} className="section-label block mb-6">Cómo se genera el ingreso</motion.p>
        <motion.div
          {...fadeUp(0.05)}
          className="grid grid-cols-3 mb-12 rounded-2xl overflow-hidden border border-white/[0.07]"
        >
          {[
            { num: '$30',     sub: 'precio por panel',      note: 'cada unidad vendida' },
            { num: '× 500',   sub: 'paneles al mes',        note: 'producción fase piloto' },
            { num: '$15,000', sub: 'ingresos mensuales',    note: 'total generado' },
          ].map((step, i) => (
            <div
              key={step.num}
              className="flex flex-col items-center justify-center py-8 px-4 text-center relative"
              style={{
                background: i === 2 ? `${WARM}10` : '#0f0f0f',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              {i > 0 && (
                <span
                  className="absolute -left-3 top-1/2 -translate-y-1/2 text-lg z-10 hidden sm:block"
                  style={{ color: `${WARM}40` }}
                >→</span>
              )}
              <p
                className="text-2xl sm:text-3xl font-medium leading-none mb-2"
                style={{ color: i === 2 ? WARM : '#E1E0CC' }}
              >{step.num}</p>
              <p className="text-xs font-medium text-gray-400 mb-1">{step.sub}</p>
              <p className="text-[10px] text-gray-700">{step.note}</p>
            </div>
          ))}
        </motion.div>

        {/* PASO 2 — Cómo se distribuye */}
        <motion.p {...fadeUp(0)} className="section-label block mb-6">Cómo se distribuye</motion.p>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {distribution.map((d, i) => (
            <motion.div
              key={d.label}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl p-5 sm:p-6 text-center"
              style={{
                background: d.hero ? `${WARM}0f` : '#0f0f0f',
                border: `1px solid ${d.hero ? `${WARM}35` : 'rgba(255,255,255,0.06)'}`,
              }}
            >
              <p
                className="text-3xl sm:text-4xl font-medium leading-none mb-2"
                style={{ color: d.hero ? WARM : '#666' }}
              >
                <CountUp to={d.pct} suffix="%" thousands={false} delay={i * 0.1} />
              </p>
              <p className="text-sm font-medium mb-1" style={{ color: d.hero ? '#E1E0CC' : '#888' }}>
                {d.amount}
              </p>
              <p className="text-[10px] text-gray-600 uppercase tracking-widest">{d.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.1)} className="rounded-2xl px-5 py-5 bg-[#0f0f0f] border border-white/[0.06]">
          <DistributionBar />
        </motion.div>

        {/* PASO 3 — Impacto directo */}
        <motion.p {...fadeUp(0)} className="section-label block mt-12 mb-6">Impacto directo</motion.p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { prefix: '$', value: 15000, suffix: '', label: 'Ingresos mensuales',    sub: 'fase piloto',        thousands: true  },
            { prefix: '$', value: 8100,  suffix: '', label: 'Beneficio comunitario', sub: 'directo a familias', thousands: true  },
            { prefix: '',  value: 30,    suffix: '', label: 'Familias beneficiadas', sub: 'de forma directa',   thousands: false },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl px-6 py-7 bg-[#0f0f0f] border border-white/[0.07]"
            >
              <p className="text-[10px] font-medium uppercase tracking-widest mb-3" style={{ color: `${WARM}70` }}>
                {s.label}
              </p>
              <p className="text-4xl sm:text-5xl font-normal text-[#E1E0CC] leading-none">
                <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} thousands={s.thousands} delay={i * 0.12} />
              </p>
              <p className="text-xs mt-2 text-gray-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ImpactTable
