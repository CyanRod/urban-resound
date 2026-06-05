import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const WARM = '#C8914A'
const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASE },
})

const outcomes = [
  'Independencia económica',
  'Capacitación técnica',
  'Fortalecimiento familiar',
  'Reducción de vulnerabilidad económica',
  'Liderazgo comunitario',
]

/* ── A) SVG Production Pipeline ── */
interface PipelineNode { num: string; label: string }

const pipelineNodes: PipelineNode[] = [
  { num: '01', label: 'Clasificación' },
  { num: '02', label: 'Maquinaria'    },
  { num: '03', label: 'Prensado'      },
  { num: '04', label: 'Secado'        },
  { num: '05', label: 'Control'       },
]

const NODE_XS = [54, 161, 270, 379, 486]
const NODE_Y  = 58
const NODE_R  = 28
const LABEL_Y = 100
const PIPELINE_TOTAL_W = 540

const PipelineSVG: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null)
  const [triggered, setTriggered] = useState(false)
  const font = 'DM Sans,sans-serif'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${PIPELINE_TOTAL_W} 130`}
      className="w-full"
      style={{ overflow: 'visible' }}
      aria-label="Pipeline de producción: 5 etapas"
    >
      {/* connecting lines between circles */}
      {NODE_XS.slice(0, -1).map((x, i) => {
        const lineLen = NODE_XS[i + 1] - x - NODE_R * 2
        return (
          <line
            key={i}
            x1={x + NODE_R} y1={NODE_Y}
            x2={NODE_XS[i + 1] - NODE_R} y2={NODE_Y}
            stroke={WARM} strokeWidth={1.5} strokeOpacity={0.35}
            strokeDasharray={lineLen}
            strokeDashoffset={triggered ? 0 : lineLen}
            style={{ transition: `stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.12 + 0.2}s` }}
          />
        )
      })}

      {/* nodes */}
      {pipelineNodes.map((n, i) => {
        const cx = NODE_XS[i]
        return (
          <g key={n.num}>
            <circle
              cx={cx} cy={NODE_Y} r={NODE_R}
              fill="#101010"
              stroke={WARM} strokeWidth={1.5}
            />
            <text
              x={cx} y={NODE_Y}
              textAnchor="middle" dominantBaseline="middle"
              fontFamily={font} fontSize={14} fontWeight={600} fill={WARM}
            >{n.num}</text>
            <text
              x={cx} y={LABEL_Y}
              textAnchor="middle"
              fontFamily={font} fontSize={11} fill="#888"
            >{n.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

/* ── B) SVG Growth Bar Chart ── */
interface GrowthBar { x: number; barH: number; workers: string; phase: string; topValue: string }

const growthBars: GrowthBar[] = [
  { x: 70,  barH: 30,  workers: '5 empleos',  phase: 'Piloto',        topValue: '5'  },
  { x: 180, barH: 88,  workers: '15 empleos', phase: 'Consolidación', topValue: '15' },
  { x: 290, barH: 175, workers: '30 empleos', phase: 'Expansión',     topValue: '30' },
]

const CHART_H   = 260
const BAR_W     = 60
const BASE_Y    = 210  // y where bars sit (bottom)

const GrowthChart: React.FC = () => {
  const ref = useRef<SVGSVGElement>(null)
  const [triggered, setTriggered] = useState(false)
  const font = 'DM Sans,sans-serif'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <svg
      ref={ref}
      viewBox={`0 0 380 ${CHART_H}`}
      className="w-full"
      style={{ overflow: 'visible' }}
      aria-label="Crecimiento de empleo por fase"
    >
      <style>{`
        @keyframes growBar { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .bar-rect { transform-origin: bottom; transform-box: fill-box; transform: scaleY(0); }
      `}</style>

      {growthBars.map((b, i) => {
        const barTop = BASE_Y - b.barH
        return (
          <g key={b.phase}>
            {/* dotted horizontal reference line */}
            <line
              x1={14} y1={barTop}
              x2={b.x - 4} y2={barTop}
              stroke="#333" strokeWidth={1} strokeDasharray="3 3"
            />
            {/* value label at top-left of line */}
            <text
              x={12} y={barTop - 2}
              textAnchor="end"
              fontFamily={font} fontSize={9} fill="#555"
            >{b.topValue}</text>

            {/* bar */}
            <rect
              className="bar-rect"
              x={b.x - BAR_W / 2} y={barTop}
              width={BAR_W} height={b.barH}
              rx={5} ry={5}
              fill={WARM}
              fillOpacity={0.85}
              style={triggered
                ? { animation: `growBar 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s forwards` }
                : {}}
            />

            {/* workers label always above bar */}
            <text
              x={b.x} y={barTop - 8}
              textAnchor="middle"
              fontFamily={font} fontSize={11} fontWeight={600}
              fill="#E1E0CC"
            >{b.workers}</text>

            {/* phase label below */}
            <text
              x={b.x} y={BASE_Y + 14}
              textAnchor="middle"
              fontFamily={font} fontSize={11} fill="#666"
            >{b.phase}</text>
          </g>
        )
      })}

      {/* baseline */}
      <line x1={14} y1={BASE_Y} x2={366} y2={BASE_Y}
        stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
    </svg>
  )
}

const WomenImpact: React.FC = () => {
  return (
    <section id="mujeres" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span {...fadeUp()} className="section-label block mb-4">
          Impacto en las Mujeres
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'No dejar a',    className: 'text-[#E1E0CC]' },
            { text: 'nadie atrás.',  className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          {...fadeUp(0.15)}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-8"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          Detrás de cada panel hay manos de mujer. Manos que antes no tenían
          trabajo, y hoy construyen el futuro de sus familias.
        </motion.p>

        {/* Hero image */}
        <motion.div
          {...fadeUp(0.2)}
          className="rounded-2xl overflow-hidden mb-14"
        >
          <img
            src={import.meta.env.BASE_URL + 'mujeres.png'}
            alt="Impacto en las mujeres de Quisapincha"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
          />
        </motion.div>

        {/* Two-column: text+pipeline | growth chart */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">

          {/* Left: opening text + SVG pipeline */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-5 text-gray-400">
              Urban ReSound priorizará la participación de{' '}
              <strong className="text-[#E1E0CC]">mujeres de Quisapincha</strong>,
              especialmente aquellas afectadas por procesos migratorios familiares.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-400">
              La fase piloto iniciará con la incorporación de{' '}
              <strong className="text-primary/80">cinco mujeres</strong> responsables de las
              etapas clave del proceso productivo.
            </p>

            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-600 mb-5">
              Cadena de producción
            </p>
            <div className="rounded-2xl p-5 bg-[#0d0d0d] border border-white/[0.07]">
              <PipelineSVG />
            </div>
          </motion.div>

          {/* Right: SVG growth chart */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-600 mb-5">
              Crecimiento de empleo por fase
            </p>
            <div className="rounded-2xl p-5 bg-[#0d0d0d] border border-white/[0.07]">
              <GrowthChart />
            </div>
          </motion.div>
        </div>

        {/* Outcomes tags */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl p-8 sm:p-10"
          style={{ background: 'rgba(200,145,74,0.05)', border: '1px solid rgba(200,145,74,0.2)' }}
        >
          <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#E8E6D4] text-center mb-8">
            "Lo que cada trabajadora gana va mucho más allá del salario."
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-full px-5 py-2.5"
                style={{ border: '1px solid rgba(200,145,74,0.25)' }}
              >
                <span className="text-gray-400 text-sm">{o}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WomenImpact
