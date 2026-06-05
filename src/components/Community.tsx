import React from 'react'
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

const impacts = [
  'Educación',
  'Transporte',
  'Alimentación',
  'Capacitación',
  'Reducción de migración',
  'Fortalecimiento comunitario',
]

const stats = [
  { prefix: '$', value: 8100, suffix: '', label: 'Beneficio comunitario mensual', sub: 'fase piloto',         thousands: true  },
  { prefix: '',  value: 30,   suffix: '', label: 'Familias beneficiadas',          sub: 'directamente',        thousands: false },
  { prefix: '$', value: 270,  suffix: '', label: 'Ingreso promedio',               sub: 'por familia al mes',  thousands: false },
]

/* ── spoke node data ── */
interface SpokeNode {
  label: string[]   // up to 2 tspan lines
  angleDeg: number
}

const spokeNodes: SpokeNode[] = [
  { label: ['Talleres de', 'cuero'],          angleDeg: 270 },
  { label: ['Recicladores'],                  angleDeg: 330 },
  { label: ['Productores', 'agrícolas'],       angleDeg: 30  },
  { label: ['Transportistas'],                angleDeg: 90  },
  { label: ['Mujeres', 'emprendedoras'],       angleDeg: 150 },
  { label: ['Jóvenes de la', 'comunidad'],     angleDeg: 210 },
]

const CX = 280
const CY = 220
const SPOKE_R = 155
const NODE_R  = 48
const HUB_R   = 54
const SPOKE_LEN = SPOKE_R

function toRad(deg: number) { return (deg * Math.PI) / 180 }

/* ── Hub-and-spoke SVG diagram ── */
const HubSpoke: React.FC = () => {
  const font = 'DM Sans,sans-serif'

  return (
    <svg
      viewBox="0 0 560 440"
      className="w-full"
      aria-label="Diagrama de economía circular comunitaria"
    >
      <style>{`
        @keyframes drawSpoke {
          from { stroke-dashoffset: ${SPOKE_LEN}; }
          to   { stroke-dashoffset: 0; }
        }
        .spoke-line { stroke-dasharray: ${SPOKE_LEN}; stroke-dashoffset: ${SPOKE_LEN}; }
      `}</style>

      {/* spoke lines */}
      {spokeNodes.map((n, i) => {
        const rad = toRad(n.angleDeg)
        const x1  = CX + HUB_R  * Math.cos(rad)
        const y1  = CY + HUB_R  * Math.sin(rad)
        const x2e = CX + (SPOKE_R - NODE_R) * Math.cos(rad)
        const y2e = CY + (SPOKE_R - NODE_R) * Math.sin(rad)
        return (
          <line
            key={n.angleDeg}
            className="spoke-line"
            x1={x1} y1={y1} x2={x2e} y2={y2e}
            stroke={WARM} strokeWidth={1.5} strokeOpacity={0.3}
            style={{
              animation: `drawSpoke 0.8s cubic-bezier(0.22,1,0.36,1) ${i * 0.1 + 0.3}s forwards`,
            }}
          />
        )
      })}

      {/* outer nodes */}
      {spokeNodes.map((n) => {
        const rad = toRad(n.angleDeg)
        const nx  = CX + SPOKE_R * Math.cos(rad)
        const ny  = CY + SPOKE_R * Math.sin(rad)
        return (
          <g key={n.angleDeg}>
            <circle
              cx={nx} cy={ny} r={NODE_R}
              fill="#101010"
              stroke={WARM} strokeWidth={1.2} strokeOpacity={0.55}
            />
            {n.label.length === 1 ? (
              <text
                x={nx} y={ny}
                textAnchor="middle" dominantBaseline="middle"
                fontFamily={font} fontSize={10} fill="#ccc"
              >{n.label[0]}</text>
            ) : (
              <>
                <text
                  x={nx} y={ny - 7}
                  textAnchor="middle" dominantBaseline="middle"
                  fontFamily={font} fontSize={10} fill="#ccc"
                >{n.label[0]}</text>
                <text
                  x={nx} y={ny + 7}
                  textAnchor="middle" dominantBaseline="middle"
                  fontFamily={font} fontSize={10} fill="#ccc"
                >{n.label[1]}</text>
              </>
            )}
          </g>
        )
      })}

      {/* center node */}
      <circle
        cx={CX} cy={CY} r={HUB_R}
        fill="#0d0d0d"
        stroke={WARM} strokeWidth={2}
      />
      <text
        x={CX} y={CY - 9}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily={font} fontSize={13} fontWeight={600} fill={WARM}
      >Urban</text>
      <text
        x={CX} y={CY + 9}
        textAnchor="middle" dominantBaseline="middle"
        fontFamily={font} fontSize={13} fontWeight={600} fill={WARM}
      >ReSound</text>
    </svg>
  )
}

const Community: React.FC = () => {
  return (
    <section id="comunidad" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span {...fadeUp()} className="section-label block mb-4">
          Impacto Comunitario
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Cómo ayudamos a', className: 'text-[#E1E0CC]' },
            { text: 'Quisapincha.',    className: 'text-gray-500'  },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          {...fadeUp(0.15)}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-14"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          No sólo producimos paneles. Producimos futuros.
          Cada panel fabricado sostiene a una familia real en los Andes.
        </motion.p>

        {/* Two-column: image + diagram */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={import.meta.env.BASE_URL + 'economia-circular.png'}
              alt="Diagrama de economía circular comunitaria"
              className="w-full object-cover"
              style={{ maxHeight: '440px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-400">
              Nuestro modelo funciona mediante{' '}
              <strong className="text-[#E1E0CC]">economía circular comunitaria</strong>,
              integrando a todos los actores locales dentro de la cadena de valor de Urban ReSound.
            </p>

            {/* Hub-and-spoke diagram replaces bullet list */}
            <HubSpoke />
          </motion.div>
        </div>

        {/* Stat cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl p-8 text-center bg-[#101010] border border-white/[0.08]"
            >
              <p className="text-4xl sm:text-5xl font-normal mb-2" style={{ color: WARM }}>
                <CountUp
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  thousands={s.thousands}
                  delay={i * 0.1}
                />
              </p>
              <p className="text-sm font-medium text-gray-400">{s.label}</p>
              <p className="text-xs mt-1 text-gray-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          {...fadeUp(0.1)}
          className="rounded-2xl p-8 sm:p-10"
          style={{ background: 'rgba(200,145,74,0.05)', border: '1px solid rgba(200,145,74,0.2)' }}
        >
          <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#E8E6D4] text-center mb-8">
            "El beneficio comunitario llega hasta donde más se necesita."
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {impacts.map((imp) => (
              <div
                key={imp}
                className="rounded-full px-5 py-2.5"
                style={{ border: '1px solid rgba(200,145,74,0.25)' }}
              >
                <span className="text-gray-400 text-sm">{imp}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Community
