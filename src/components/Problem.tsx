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

// ── SVG: dB Noise scale meter ──────────────────────────────────────
const NoiseMeter: React.FC<{ active: boolean }> = ({ active }) => {
  const font = 'DM Sans,sans-serif'
  const W = 560, H = 130
  const PAD = 24
  const BAR_Y = 52, BAR_H = 18
  const scaleW = W - PAD * 2

  const xOf = (db: number) => PAD + (db / 120) * scaleW

  const zones = [
    { from: 0,  to: 40,  color: '#2a6b3a', label: 'Zona segura' },
    { from: 40, to: 70,  color: '#8b6914', label: 'Precaución'  },
    { from: 70, to: 100, color: '#8b2a14', label: 'Peligroso'   },
    { from: 100,to: 120, color: '#5a0f0f', label: 'Daño inmediato' },
  ]

  const markers = [
    { db: 30,  label: 'Biblioteca', sub: '30 dB' },
    { db: 40,  label: 'Límite OMS', sub: '40 dB', highlight: true },
    { db: 65,  label: 'Ciudad normal', sub: '65 dB' },
    { db: 85,  label: 'Daño auditivo', sub: '85 dB' },
  ]

  const cityDb = 65
  const cityX = xOf(cityDb)

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ overflow: 'visible' }}>
      <defs>
        <clipPath id="barClip">
          <rect x={PAD} y={BAR_Y} width={scaleW} height={BAR_H} rx={BAR_H / 2} />
        </clipPath>
      </defs>

      {/* Background bar */}
      <rect x={PAD} y={BAR_Y} width={scaleW} height={BAR_H} rx={BAR_H / 2} fill="#111" />

      {/* Colored zones — clipped to pill shape so only the outer ends are rounded */}
      {zones.map((z, i) => {
        const x1 = xOf(z.from), x2 = xOf(z.to)
        const w = active ? (x2 - x1) : 0
        return (
          <rect key={z.from}
            x={x1} y={BAR_Y} width={w} height={BAR_H}
            clipPath="url(#barClip)"
            style={{
              transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.15}s`,
            }}
            fill={z.color}
            opacity={0.85}
          />
        )
      })}

      {/* Tick marks + labels */}
      {[0, 20, 40, 60, 80, 100, 120].map(db => (
        <g key={db}>
          <line x1={xOf(db)} y1={BAR_Y + BAR_H} x2={xOf(db)} y2={BAR_Y + BAR_H + 5}
            stroke="#333" strokeWidth={1} />
          <text x={xOf(db)} y={BAR_Y + BAR_H + 15}
            textAnchor="middle" fontFamily={font} fontSize={9} fill="#444">{db}</text>
        </g>
      ))}
      <text x={W / 2} y={BAR_Y + BAR_H + 28}
        textAnchor="middle" fontFamily={font} fontSize={8} fill="#333" letterSpacing={2}>
        DECIBELES (dB)
      </text>

      {/* Key markers */}
      {markers.map(m => {
        const mx = xOf(m.db)
        return (
          <g key={m.db}>
            <line x1={mx} y1={BAR_Y - 4} x2={mx} y2={BAR_Y}
              stroke={m.highlight ? WARM : '#555'} strokeWidth={m.highlight ? 1.5 : 1} />
            <text x={mx} y={BAR_Y - 8}
              textAnchor="middle" fontFamily={font} fontSize={9}
              fill={m.highlight ? WARM : '#666'}
              fontWeight={m.highlight ? 600 : 400}
            >{m.sub}</text>
            <text x={mx} y={BAR_Y - 19}
              textAnchor="middle" fontFamily={font} fontSize={8}
              fill={m.highlight ? `${WARM}bb` : '#444'}
            >{m.label}</text>
          </g>
        )
      })}

      {/* City noise pointer */}
      {active && (
        <g style={{ transition: 'opacity 0.5s ease 0.9s', opacity: active ? 1 : 0 }}>
          <polygon points={`${cityX},${BAR_Y + BAR_H + 2} ${cityX - 5},${BAR_Y + BAR_H + 11} ${cityX + 5},${BAR_Y + BAR_H + 11}`}
            fill="rgba(220,80,60,0.8)" />
        </g>
      )}
    </svg>
  )
}

// ── SVG Icons for problem cards ────────────────────────────────────
const IconEnv = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx={18} cy={18} r={17} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} />
    {/* factory */}
    <rect x={8} y={20} width={8} height={8} rx={1} stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} />
    <rect x={20} y={16} width={8} height={12} rx={1} stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} />
    {/* smoke */}
    <path d="M10 19 Q10 15 12 13 Q14 11 12 9" stroke={WARM} strokeWidth={1.2} strokeOpacity={0.5} fill="none" strokeLinecap="round" />
    <path d="M22 15 Q22 11 24 9 Q26 7 24 5" stroke={WARM} strokeWidth={1.2} strokeOpacity={0.5} fill="none" strokeLinecap="round" />
    <path d="M26 15 Q27 12 28 10" stroke={WARM} strokeWidth={1} strokeOpacity={0.35} fill="none" strokeLinecap="round" />
  </svg>
)

const IconSocial = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx={18} cy={18} r={17} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} />
    {/* house */}
    <path d="M9 20 L18 11 L27 20" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} strokeLinecap="round" strokeLinejoin="round" />
    <rect x={12} y={20} width={12} height={8} rx={1} stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} />
    {/* arrow leaving */}
    <path d="M26 15 L31 15 M29 13 L31 15 L29 17" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.8} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconAcoustic = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx={18} cy={18} r={17} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} />
    {/* speaker */}
    <rect x={7} y={14} width={5} height={8} rx={1} fill={WARM} fillOpacity={0.6} />
    <path d="M12 13 L17 9 L17 27 L12 23 Z" fill={WARM} fillOpacity={0.4} />
    {/* waves */}
    <path d="M20 13 Q24 18 20 23" stroke={WARM} strokeWidth={1.4} strokeOpacity={0.7} fill="none" strokeLinecap="round" />
    <path d="M23 11 Q29 18 23 25" stroke={WARM} strokeWidth={1.2} strokeOpacity={0.5} fill="none" strokeLinecap="round" />
    {/* X = danger */}
    <line x1={26} y1={8} x2={30} y2={12} stroke="rgba(220,80,60,0.7)" strokeWidth={1.5} strokeLinecap="round" />
    <line x1={30} y1={8} x2={26} y2={12} stroke="rgba(220,80,60,0.7)" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
)

// ── SVG Icons for noise effects ────────────────────────────────────
const IconBrain = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx={20} cy={20} r={18} fill={`${WARM}12`} stroke={`${WARM}30`} strokeWidth={1} />
    {/* brain outline simplified */}
    <path d="M14 22 Q10 20 11 16 Q12 12 16 12 Q17 9 20 9 Q24 9 25 12 Q29 12 29 17 Q30 21 26 23 Q26 27 22 28 Q18 28 18 25 Q14 26 14 22Z"
      stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} fill="none" strokeLinejoin="round" />
    {/* stress lines */}
    <line x1={20} y1={5} x2={20} y2={8} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.5} strokeLinecap="round" />
    <line x1={25} y1={6} x2={23} y2={9} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} strokeLinecap="round" />
    <line x1={15} y1={6} x2={17} y2={9} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} strokeLinecap="round" />
  </svg>
)

const IconMoon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx={20} cy={20} r={18} fill={`${WARM}12`} stroke={`${WARM}30`} strokeWidth={1} />
    {/* moon */}
    <path d="M24 13 Q17 15 17 20 Q17 27 24 28 Q18 30 14 26 Q10 22 12 17 Q14 12 20 11 Q22 11 24 13Z"
      stroke={WARM} strokeWidth={1.3} strokeOpacity={0.75} fill="none" />
    {/* broken wave = disturbed sleep */}
    <path d="M10 33 L13 30 L16 33 L19 28 L22 33 L25 29 L28 33" stroke="rgba(220,80,60,0.6)" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconTarget = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx={20} cy={20} r={18} fill={`${WARM}12`} stroke={`${WARM}30`} strokeWidth={1} />
    <circle cx={20} cy={20} r={11} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.5} fill="none" />
    <circle cx={20} cy={20} r={6} stroke={WARM} strokeWidth={1.2} strokeOpacity={0.65} fill="none" />
    <circle cx={20} cy={20} r={2} fill={WARM} fillOpacity={0.8} />
    {/* interference wave */}
    <path d="M28 12 Q32 17 29 22" stroke="rgba(220,80,60,0.65)" strokeWidth={1.4} fill="none" strokeLinecap="round" />
    <path d="M31 10 Q36 16 33 23" stroke="rgba(220,80,60,0.4)" strokeWidth={1.2} fill="none" strokeLinecap="round" />
  </svg>
)

const IconHeart = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx={20} cy={20} r={18} fill={`${WARM}12`} stroke={`${WARM}30`} strokeWidth={1} />
    {/* heart */}
    <path d="M20 28 Q13 22 12 17 Q11 12 16 12 Q18 12 20 15 Q22 12 24 12 Q29 12 28 17 Q27 22 20 28Z"
      stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} fill="none" />
    {/* irregular heartbeat */}
    <path d="M8 22 L11 22 L13 18 L15 26 L17 20 L19 22 L21 22 L23 16 L25 28 L27 22 L32 22"
      stroke="rgba(220,80,60,0.7)" strokeWidth={1.3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ── Main component ─────────────────────────────────────────────────
const Problem: React.FC = () => {
  const meterRef = useRef<HTMLDivElement>(null)
  const [meterOn, setMeterOn] = useState(false)

  useEffect(() => {
    const el = meterRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setMeterOn(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const problems = [
    {
      icon: <IconEnv />,
      title: 'Problema ambiental',
      img: import.meta.env.BASE_URL + 'problema-residuos.png',
      alt: 'Residuos del taller de cuero en Quisapincha',
      color: '#BF8B2E',
      severity: 82,
      desc: 'Cada año grandes cantidades de residuos industriales se eliminan sin reutilización.',
      items: ['Retazos de cuero', 'Residuos de corte', 'Polvo de lijado', 'Plástico industrial'],
    },
    {
      icon: <IconSocial />,
      title: 'Problema social',
      img: import.meta.env.BASE_URL + 'comunidad.png',
      alt: 'Familia de Quisapincha',
      color: '#FD6925',
      severity: 74,
      desc: 'Quisapincha pierde jóvenes y adultos económicamente activos.',
      items: ['Falta de oportunidades sostenibles', 'Limitadas fuentes de ingreso', 'Dependencia económica tradicional', 'Escasas oportunidades de innovación'],
    },
    {
      icon: <IconAcoustic />,
      title: 'Problema acústico',
      img: import.meta.env.BASE_URL + 'ruido-urbano.png',
      alt: 'Contaminación acústica urbana',
      color: '#c0392b',
      severity: 90,
      desc: 'El ruido urbano supera los límites saludables en ciudades de toda Latinoamérica.',
      items: ['1.000M+ personas viven con ruido dañino (OMS)', 'Segunda causa ambiental de enfermedad', 'Las ciudades crecen y sus decibeles también', 'Sin soluciones acústicas accesibles'],
    },
  ]

  const noiseEffects = [
    { icon: <IconBrain />,  title: 'Estrés crónico',       desc: 'La exposición continua al ruido eleva el cortisol y mantiene al cuerpo en alerta permanente.' },
    { icon: <IconMoon />,   title: 'Sueño fragmentado',    desc: 'El ruido nocturno sobre 40 dB interrumpe el sueño profundo aunque no despierte a la persona.' },
    { icon: <IconTarget />, title: 'Menos concentración',  desc: 'Estudiantes en entornos ruidosos obtienen hasta un 20% peores resultados en comprensión lectora.' },
    { icon: <IconHeart />,  title: 'Riesgo cardiovascular', desc: 'La OMS relaciona el ruido crónico con mayor incidencia de hipertensión e infartos.' },
  ]

  return (
    <section id="problema" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.span {...fadeUp(0)} className="section-label block mb-4">El Problema</motion.span>
        <WordsPullUpMultiStyle
          segments={[
            { text: 'El problema que queremos', className: 'text-[#E1E0CC]' },
            { text: 'transformar.',             className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />
        <motion.p {...fadeUp(0.15)}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-14"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          Toneladas de residuos, comunidades sin oportunidades,
          y ciudades que no saben vivir en silencio.
        </motion.p>

        {/* Video + intro */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE }}
            className="rounded-2xl overflow-hidden"
          >
            <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ maxHeight: '420px' }}>
              <source src={import.meta.env.BASE_URL + 'problema.mp4'} type="video/mp4" />
            </video>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-5 text-gray-400">
              La parroquia de <strong className="text-[#E1E0CC]">Quisapincha</strong>, en Tungurahua,
              es reconocida a nivel nacional por la manufactura de cuero. Pero ese crecimiento
              productivo esconde tres problemas que Urban ReSound decidió enfrentar juntos.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400">
              Residuos que contaminan, comunidades que emigran,
              y un mundo que vive con más ruido del que el cuerpo puede tolerar.
            </p>
          </motion.div>
        </div>

        {/* Three problem cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={p.title} {...fadeUp(i * 0.1)}
              className="rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07] flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover" style={{ opacity: 0.75 }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0f0f0f 0%, transparent 60%)' }} />
                {/* Icon badge */}
                <div className="absolute top-4 left-4">{p.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-base font-medium mb-2 text-[#E1E0CC]">{p.title}</h3>
                <p className="text-xs leading-relaxed mb-4 text-gray-500">{p.desc}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: p.color }} />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Severity bar */}
                <div>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[10px] text-gray-700 uppercase tracking-widest">Severidad</span>
                    <span className="text-[10px] font-medium" style={{ color: p.color }}>{p.severity}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#1a1a1a] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.severity}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.15 + 0.3, ease: EASE }}
                      style={{ background: p.color, opacity: 0.8 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* dB Scale visualizer */}
        <motion.div
          ref={meterRef}
          {...fadeUp(0)}
          className="rounded-2xl p-6 sm:p-8 mb-14"
          style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="section-label block mb-6">Escala de contaminación acústica</p>
          <NoiseMeter active={meterOn} />
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 justify-center">
            {[
              { color: '#2a6b3a', label: 'Zona segura (0–40 dB)' },
              { color: '#8b6914', label: 'Precaución (40–70 dB)' },
              { color: '#8b2a14', label: 'Peligroso (70–100 dB)' },
              { color: '#5a0f0f', label: 'Daño inmediato (100+ dB)' },
            ].map(z => (
              <div key={z.label} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: z.color }} />
                <span className="text-xs text-gray-600">{z.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Noise effects */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label block mb-6">Lo que el ruido le hace a tu vida</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {noiseEffects.map((e, i) => (
              <motion.div
                key={e.title} {...fadeUp(i * 0.08)}
                className="rounded-2xl p-6"
                style={{ background: 'rgba(200,145,74,0.04)', border: '1px solid rgba(200,145,74,0.12)' }}
              >
                <div className="mb-4">{e.icon}</div>
                <h4 className="font-medium text-[#E1E0CC] mb-2 text-sm">{e.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key stats */}
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl p-8 sm:p-10"
          style={{ background: 'rgba(200,145,74,0.05)', border: '1px solid rgba(200,145,74,0.2)' }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: 1000, suffix: 'M+', label: 'personas viven con niveles de ruido que dañan la salud (OMS)', prefix: '' },
              { value: 40,   suffix: ' dB', label: 'máximo recomendado por la OMS para dormir — las ciudades lo duplican', prefix: '' },
              { value: 20,   suffix: '%',  label: 'bajan los resultados académicos en entornos ruidosos', prefix: '' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fadeUp(i * 0.1)}>
                <p className="text-4xl sm:text-5xl font-normal mb-3" style={{ color: WARM }}>
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} thousands={s.value >= 1000} delay={i * 0.15} />
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem
