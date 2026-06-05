import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASE },
})

const odsItems = [
  {
    num: '11',
    color: '#FD9D24',
    title: 'Ciudades y comunidades sostenibles',
    desc: 'Promovemos soluciones para construcción sostenible, reducción de contaminación y fortalecimiento de comunidades más resilientes.',
    points: ['Bienestar acústico en viviendas', 'Espacios comunitarios saludables', 'Materiales de construcción responsables'],
    alignment: 95,
  },
  {
    num: '12',
    color: '#BF8B2E',
    title: 'Producción y consumo responsables',
    desc: 'Transformamos residuos industriales y urbanos en productos de valor agregado mediante economía circular.',
    points: ['Reutilización de residuos de cuero', 'Producción sin desechos tóxicos', 'Cadena de valor circular'],
    alignment: 90,
  },
  {
    num: '5',
    color: '#FF3A21',
    title: 'Igualdad de género',
    desc: 'Promovemos oportunidades económicas para mujeres con participación activa en toda la cadena de valor.',
    points: ['Empleo femenino prioritario', 'Capacitación técnica para mujeres', 'Reducción de vulnerabilidad económica'],
    alignment: 82,
  },
  {
    num: '9',
    color: '#FD6925',
    title: 'Industria, innovación e infraestructura',
    desc: 'Impulsamos innovación en biomateriales sostenibles aplicados a la construcción desde una comunidad rural ecuatoriana.',
    points: ['Innovación en biomateriales', 'Procesos productivos responsables', 'Transferencia de tecnología comunitaria'],
    alignment: 87,
  },
  {
    num: '13',
    color: '#3F7E44',
    title: 'Acción por el clima',
    desc: 'Reducimos residuos y fomentamos el aprovechamiento de materiales reciclados con menor impacto ambiental.',
    points: ['Reducción de residuos industriales', 'Menor huella de carbono', 'Bioadhesivos sin emisiones tóxicas'],
    alignment: 88,
  },
]

// ── SVG Circular progress ring ─────────────────────────────────────
const Ring: React.FC<{ pct: number; color: string; num: string; active: boolean }> = ({ pct, color, num, active }) => {
  const R = 30
  const circ = 2 * Math.PI * R
  const offset = circ * (1 - (active ? pct / 100 : 0))
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" className="flex-shrink-0">
      {/* track */}
      <circle cx={40} cy={40} r={R} fill="none" stroke="#1a1a1a" strokeWidth={5} />
      {/* progress */}
      <circle
        cx={40} cy={40} r={R}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 40 40)"
        style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1) 0.2s' }}
        opacity={0.9}
      />
      {/* center number */}
      <text
        x={40} y={40}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily="DM Sans,sans-serif" fontSize={18} fontWeight={700}
        fill={color}
      >{num}</text>
    </svg>
  )
}

// ── SVG Pentagon radar chart ───────────────────────────────────────
const PentagonRadar: React.FC<{ active: boolean }> = ({ active }) => {
  const CX = 220, CY = 220, R = 150, R_INNER = 30
  const font = 'DM Sans,sans-serif'

  // Angles: start top, clockwise, 5 equally spaced
  const angles = [270, 342, 54, 126, 198]
  const toRad = (d: number) => (d * Math.PI) / 180

  const pt = (angle: number, r: number) => ({
    x: CX + r * Math.cos(toRad(angle)),
    y: CY + r * Math.sin(toRad(angle)),
  })

  // Outer pentagon (reference)
  const outerPts = angles.map(a => pt(a, R))
  // Coverage polygon
  const coverPts = angles.map((a, i) => pt(a, R * (active ? odsItems[i].alignment / 100 : 0)))

  const toPolyPath = (pts: { x: number; y: number }[]) =>
    pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + 'Z'

  // Grid rings at 25%, 50%, 75%, 100%
  const gridRings = [0.25, 0.5, 0.75, 1]

  return (
    <svg viewBox="0 0 440 440" className="w-full max-w-sm mx-auto" aria-label="Alineación con los ODS">
      {/* grid rings */}
      {gridRings.map((f) => (
        <polygon
          key={f}
          points={angles.map(a => {
            const p = pt(a, R * f)
            return `${p.x.toFixed(1)},${p.y.toFixed(1)}`
          }).join(' ')}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={1}
        />
      ))}

      {/* axis lines from center */}
      {angles.map((a, i) => {
        const p = pt(a, R)
        return (
          <line key={i}
            x1={CX} y1={CY} x2={p.x} y2={p.y}
            stroke="rgba(255,255,255,0.05)" strokeWidth={1}
          />
        )
      })}

      {/* coverage fill */}
      <path
        d={toPolyPath(coverPts)}
        fill="rgba(200,145,74,0.12)"
        stroke="rgba(200,145,74,0.5)"
        strokeWidth={1.5}
        style={{ transition: 'd 1.4s cubic-bezier(0.22,1,0.36,1)' }}
      />

      {/* outer reference pentagon */}
      <path
        d={toPolyPath(outerPts)}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={1}
        strokeDasharray="4 3"
      />

      {/* spokes with node circles */}
      {angles.map((a, i) => {
        const np = pt(a, R + 36)
        const item = odsItems[i]
        const coverage = active ? item.alignment / 100 : 0
        const rr = 26
        const circ = 2 * Math.PI * rr
        return (
          <g key={i}>
            {/* ring track */}
            <circle cx={np.x} cy={np.y} r={rr} fill="#111" stroke="#1a1a1a" strokeWidth={4} />
            {/* ring progress */}
            <circle
              cx={np.x} cy={np.y} r={rr}
              fill="none"
              stroke={item.color}
              strokeWidth={4}
              strokeDasharray={circ}
              strokeDashoffset={circ * (1 - coverage)}
              strokeLinecap="round"
              transform={`rotate(-90 ${np.x} ${np.y})`}
              style={{ transition: `stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s` }}
            />
            {/* number */}
            <text
              x={np.x} y={np.y}
              textAnchor="middle" dominantBaseline="middle"
              fontFamily={font} fontSize={14} fontWeight={700}
              fill={item.color}
            >{item.num}</text>
          </g>
        )
      })}

      {/* center label */}
      <circle cx={CX} cy={CY} r={R_INNER} fill="#0d0d0d" stroke="rgba(200,145,74,0.4)" strokeWidth={1.5} />
      <text x={CX} y={CY - 7} textAnchor="middle" dominantBaseline="middle"
        fontFamily={font} fontSize={9} fontWeight={600} fill="rgba(200,145,74,0.8)">Urban</text>
      <text x={CX} y={CY + 7} textAnchor="middle" dominantBaseline="middle"
        fontFamily={font} fontSize={9} fontWeight={600} fill="rgba(200,145,74,0.8)">ReSound</text>
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────────────
const ODS: React.FC = () => {
  const radarRef  = useRef<HTMLDivElement>(null)
  const cardsRef  = useRef<HTMLDivElement>(null)
  const [radarOn, setRadarOn]  = useState(false)
  const [cardsOn, setCardsOn]  = useState(false)

  useEffect(() => {
    const observe = (el: HTMLElement | null, cb: () => void) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { cb(); obs.disconnect() } },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return () => obs.disconnect()
    }
    observe(radarRef.current, () => setRadarOn(true))
    observe(cardsRef.current, () => setCardsOn(true))
  }, [])

  return (
    <section id="ods" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.span {...fadeUp(0)} className="section-label block mb-4">
          Objetivos de Desarrollo Sostenible
        </motion.span>
        <WordsPullUpMultiStyle
          segments={[
            { text: 'Comprometidos con', className: 'text-[#E1E0CC]' },
            { text: 'los ODS.',           className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />
        <motion.p {...fadeUp(0.15)} className="text-sm sm:text-base text-gray-500 max-w-lg mb-16">
          Urban ReSound alinea su misión con la Agenda 2030 de las Naciones Unidas
          para el desarrollo sostenible.
        </motion.p>

        {/* Pentagon + intro */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

          <motion.div
            ref={radarRef}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <PentagonRadar active={radarOn} />
            <p className="text-center text-xs text-gray-700 mt-3 tracking-widest uppercase">
              Nivel de alineación por objetivo
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-400">
              Nuestro proyecto no persigue un solo objetivo — construye un modelo donde
              <strong className="text-[#E1E0CC]"> cinco ODS convergen</strong> en una sola solución:
              residuos transformados, comunidades fortalecidas y ciudades más silenciosas.
            </p>
            <div className="space-y-3">
              {odsItems.map((o) => (
                <div key={o.num} className="flex items-center gap-3">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background: o.color }}
                  >{o.num}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs text-gray-400">{o.title}</span>
                      <span className="text-xs font-medium" style={{ color: o.color }}>{o.alignment}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#1a1a1a] overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          background: o.color,
                          width: radarOn ? `${o.alignment}%` : '0%',
                          transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${odsItems.indexOf(o) * 0.1}s`,
                          opacity: 0.85,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ODS Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {odsItems.map((ods, i) => (
            <motion.div
              key={ods.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl bg-[#0f0f0f] border border-white/[0.07] overflow-hidden"
            >
              {/* Card header */}
              <div className="p-5 flex items-center gap-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <Ring pct={ods.alignment} color={ods.color} num={ods.num} active={cardsOn} />
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase mb-1" style={{ color: `${ods.color}88` }}>
                    ODS {ods.num}
                  </p>
                  <h3 className="text-sm font-medium text-[#E1E0CC] leading-snug">{ods.title}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-xs leading-relaxed mb-4 text-gray-500">{ods.desc}</p>
                <ul className="space-y-2">
                  {ods.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" className="flex-shrink-0 mt-0.5">
                        <circle cx={6} cy={6} r={5} fill="none" stroke={ods.color} strokeWidth={1.2} opacity={0.5} />
                        <circle cx={6} cy={6} r={2} fill={ods.color} opacity={0.7} />
                      </svg>
                      <span className="text-xs text-gray-500 leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* alignment bar at bottom */}
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] text-gray-700 uppercase tracking-widest">Alineación</span>
                    <span className="text-[10px] font-medium" style={{ color: ods.color }}>{ods.alignment}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: ods.color,
                        width: cardsOn ? `${ods.alignment}%` : '0%',
                        transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ODS
