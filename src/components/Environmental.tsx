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

/* ── Donut chart data ── */
interface DonutSlice { label: string; pct: number; color: string }

const donutSlices: DonutSlice[] = [
  { label: 'Residuos de cuero',  pct: 35, color: '#C8914A' },
  { label: 'Plástico reciclado', pct: 25, color: '#a06830' },
  { label: 'Biomasa',            pct: 20, color: '#6b8c42' },
  { label: 'Impacto social',     pct: 12, color: '#4a7c8c' },
  { label: 'Reducción contam.',  pct:  8, color: '#555555' },
]

const CX = 160
const CY = 160
const R_OUTER = 120
const R_INNER = 72

/**
 * Build a donut segment SVG path.
 * startPct / endPct are fractions 0–1, start = top (12 o'clock).
 */
function donutPath(
  cx: number, cy: number,
  r: number, ir: number,
  startPct: number, endPct: number
): string {
  const toXY = (pct: number, radius: number) => {
    const angle = (pct - 0.25) * 2 * Math.PI
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    }
  }
  const p1 = toXY(startPct, r)
  const p2 = toXY(endPct,   r)
  const p3 = toXY(endPct,   ir)
  const p4 = toXY(startPct, ir)
  const large = endPct - startPct > 0.5 ? 1 : 0

  return [
    `M ${p1.x},${p1.y}`,
    `A ${r},${r} 0 ${large},1 ${p2.x},${p2.y}`,
    `L ${p3.x},${p3.y}`,
    `A ${ir},${ir} 0 ${large},0 ${p4.x},${p4.y}`,
    'Z',
  ].join(' ')
}

const DonutChart: React.FC = () => {
  const font = 'DM Sans,sans-serif'

  // Accumulate start percentages
  let cursor = 0
  const slicesWithStart = donutSlices.map((s) => {
    const start = cursor
    cursor += s.pct / 100
    return { ...s, start, end: cursor }
  })

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-10">
      <svg
        viewBox="0 0 320 320"
        style={{ width: 260, height: 260, flexShrink: 0 }}
        aria-label="Composición de materiales: donut chart"
      >
        {slicesWithStart.map((s, i) => (
          <motion.path
            key={s.label}
            d={donutPath(CX, CY, R_OUTER, R_INNER, s.start, s.end)}
            fill={s.color}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
          />
        ))}

        {/* Center label */}
        <text
          x={CX} y={CY - 10}
          textAnchor="middle" dominantBaseline="middle"
          fontFamily={font} fontSize={30} fontWeight={700} fill="#E1E0CC"
        >80%+</text>
        <text
          x={CX} y={CY + 16}
          textAnchor="middle"
          fontFamily={font} fontSize={11} fill="#888"
        >materiales</text>
        <text
          x={CX} y={CY + 30}
          textAnchor="middle"
          fontFamily={font} fontSize={11} fill="#888"
        >reciclados</text>
      </svg>

      {/* Legend */}
      <div className="space-y-3 flex-1">
        {donutSlices.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
            className="flex items-center gap-3"
          >
            <span
              className="inline-block w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: s.color }}
            />
            <span className="text-sm text-gray-400 flex-1">{s.label}</span>
            <span className="text-sm font-medium tabular-nums" style={{ color: WARM }}>
              {s.pct}%
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/* ── Bar fill (existing, kept unchanged) ── */
const envMetrics = [
  { label: 'Residuos de cuero reutilizados', value: 35 },
  { label: 'Plástico reciclado incorporado', value: 25 },
  { label: 'Biomasa aprovechada',            value: 20 },
  { label: 'Impacto social positivo',        value: 12 },
  { label: 'Reducción de contaminación',     value:  8 },
]

const statCards = [
  { value: 80,  suffix: '%+', label: 'Materiales reciclados o biomasa local' },
  { value: 500, suffix: '',   label: 'Paneles producidos mensualmente'       },
  { value: 0,   suffix: '',   label: 'Adhesivos sintéticos utilizados'       },
]

const BarFill: React.FC<{ pct: number; delay: number }> = ({ pct, delay }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={trackRef}
      className="flex-1 rounded-full overflow-hidden bg-white/[0.06]"
      style={{ height: '8px' }}
    >
      <div
        className="h-full rounded-full bg-primary"
        style={{
          width: triggered ? `${pct}%` : '0%',
          transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        }}
      />
    </div>
  )
}

const Environmental: React.FC = () => {
  return (
    <section id="ambiental" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <motion.span {...fadeUp()} className="section-label block mb-4">
          Impacto Ambiental
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Resultados', className: 'text-[#E1E0CC]' },
            { text: 'esperados.',  className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          {...fadeUp(0.2)}
          className="text-sm sm:text-base text-gray-500 mb-14"
        >
          Más del <strong className="text-[#E1E0CC]">80%</strong> de los materiales
          utilizados provienen de residuos y biomasa local.
        </motion.p>

        {/* ── Donut chart (new) ── */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl p-6 sm:p-8 bg-[#0d0d0d] border border-white/[0.07] mb-14"
        >
          <p className="text-[10px] font-medium uppercase tracking-widest text-gray-600 mb-6">
            Composición de materiales
          </p>
          <DonutChart />
        </motion.div>

        {/* ── Existing bar chart ── */}
        <motion.div
          {...fadeUp(0.05)}
          className="space-y-6 mb-14"
        >
          {envMetrics.map((m, i) => (
            <div key={m.label} className="flex items-center gap-6">
              <div className="w-52 flex-shrink-0">
                <span className="text-sm text-gray-500">{m.label}</span>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <BarFill pct={m.value} delay={i * 0.12} />
                <span className="text-base font-normal w-12 text-right flex-shrink-0 text-[#E1E0CC]">
                  <CountUp to={m.value} suffix="%" delay={i * 0.12} />
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {statCards.map((c, i) => (
            <motion.div
              key={c.label}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl p-6 text-center bg-[#101010] border border-white/[0.08]"
            >
              <p className="text-4xl sm:text-5xl font-normal mb-2 text-[#E1E0CC]">
                <CountUp to={c.value} suffix={c.suffix} delay={i * 0.1} />
              </p>
              <p className="text-sm leading-snug text-gray-500">{c.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Environmental
