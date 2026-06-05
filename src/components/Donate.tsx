import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Leaf } from 'lucide-react'
import CountUp from './animations/CountUp'
import DonationForm from './DonationForm'

const WARM = '#C8914A'

const transformations = [
  {
    emoji: '🍶',
    material: 'Tus botellas PET',
    arrow: 'se convierten en',
    outcome: 'el panel que aísla el aula donde una niña aprende a leer en los Andes.',
  },
  {
    emoji: '🧶',
    material: 'Tus residuos de cuero',
    arrow: 'se transforman en',
    outcome: 'la barrera que protege a una familia entera del frío de -10°C.',
  },
  {
    emoji: '🪡',
    material: 'Tus retazos industriales',
    arrow: 'se convierten en',
    outcome: 'el muro silencioso que da dignidad a un centro comunitario.',
  },
]

const stats = [
  { to: 320, suffix: '+', label: 'Familias impactadas' },
  { to: 8, suffix: '', label: 'Escuelas rurales' },
  { to: 3, suffix: '', label: 'Comunidades andinas' },
]

const cycleSteps = [
  { n: '01', title: 'Tú donas', sub: 'Un material que ya no necesitas' },
  { n: '02', title: 'Transformamos', sub: 'Lo convertimos en paneles acústicos' },
  { n: '03', title: 'Ellos reciben', sub: 'Gratis, las comunidades que más lo necesitan' },
  { n: '04', title: 'Todos ganamos', sub: 'Planeta, personas y futuro' },
]

const EASE = [0.16, 1, 0.3, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: EASE },
})

const Donate: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <section
      id="dona"
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}donacion.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Heavy dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(5,4,3,0.91)' }} />

      <div className="relative z-10">

        {/* ── 1. EMOTIONAL OPENER ───────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
          <motion.span {...fadeUp(0)} className="section-label block mb-6">
            Dona y sé parte del cambio
          </motion.span>

          <motion.h2
            {...fadeUp(0.1)}
            className="font-sans font-medium leading-[1.1] mb-7"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: '#E8E6D4',
            }}
          >
            Lo que tú descartas,<br />
            <span style={{ color: WARM }}>para ellos es calor.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comunidades en los Andes ecuatorianos soportan inviernos de hasta <strong className="text-gray-300">-10°C</strong> sin
            ningún tipo de aislamiento. Tus materiales donados se transforman en paneles que protegen
            lo que más importa: <span style={{ color: WARM }}>las personas.</span>
          </motion.p>
        </div>

        {/* ── 2. TRANSFORMATION CARDS ───────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <motion.p {...fadeUp(0)} className="text-[10px] uppercase tracking-widest text-center mb-8"
            style={{ color: `${WARM}88` }}>
            Tu material · Su historia
          </motion.p>
          <div className="grid md:grid-cols-3 gap-5">
            {transformations.map((t, i) => (
              <motion.div
                key={t.material}
                {...fadeUp(i * 0.1)}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(200,145,74,0.18)`,
                }}
              >
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <p className="text-sm font-medium text-[#E1E0CC] mb-1">{t.material}</p>
                  <p className="text-xs uppercase tracking-wider mb-2" style={{ color: `${WARM}80` }}>
                    {t.arrow}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium font-sans">
                    "{t.outcome}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3. COMMUNITY IMAGE + STATS ────────────────────── */}
        <div
          className="py-20"
          style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <motion.div {...fadeUp(0)} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={`${import.meta.env.BASE_URL}comunidad.png`}
                alt="Comunidad beneficiada"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(200,145,74,0.15) 0%, rgba(0,0,0,0.5) 100%)' }}
              />
              <div
                className="absolute bottom-4 left-4 right-4 rounded-xl px-4 py-3"
                style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)' }}
              >
                <p className="text-xs text-gray-400 leading-relaxed">
                  Comunidades de Quisapincha, Tungurahua — donde cada panel marca la diferencia.
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.15)}>
              <p className="text-[10px] uppercase tracking-widest mb-6" style={{ color: `${WARM}88` }}>
                El impacto es real
              </p>
              <div className="space-y-7 mb-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-baseline gap-4">
                    <span
                      className="font-sans text-4xl sm:text-5xl leading-none tabular-nums"
                      style={{ color: WARM }}
                    >
                      <CountUp to={s.to} suffix={s.suffix} duration={1.6} delay={i * 0.15} />
                    </span>
                    <div>
                      <p className="text-sm text-gray-300">{s.label}</p>
                      <div className="h-px w-12 mt-1" style={{ background: `${WARM}40` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Cada donación genera un impacto real y medible. No es una promesa —
                es lo que ya estamos construyendo juntos.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ── 4. WOMEN / HUMAN FACE + PULL QUOTE ───────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          <motion.div {...fadeUp(0.05)}>
            <p className="text-[10px] uppercase tracking-widest mb-6" style={{ color: `${WARM}88` }}>
              Las personas detrás del cambio
            </p>
            <blockquote
              className="font-sans font-medium leading-relaxed mb-6"
              style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)', color: '#E8E6D4' }}
            >
              "Un residuo. Un retazo. Un poco de cuero.
              Eso es todo lo que necesitamos para devolverle
              a alguien el derecho a vivir con calor."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-px flex-1" style={{ background: `${WARM}30` }} />
              <Heart size={12} style={{ color: WARM }} />
              <div className="h-px flex-1" style={{ background: `${WARM}30` }} />
            </div>
            <p className="text-xs text-gray-600 text-center mt-3 uppercase tracking-widest">
              Urban ReSound · Ecuador
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={`${import.meta.env.BASE_URL}mujeres.png`}
              alt="Mujeres de la comunidad"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(5,4,3,0.6) 0%, transparent 60%)' }}
            />
          </motion.div>
        </div>

        {/* ── 5. CYCLE "ASÍ NACE EL CAMBIO" ───────────────── */}
        <div
          className="py-16"
          style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.p
              {...fadeUp(0)}
              className="text-[10px] uppercase tracking-widest text-center mb-10"
              style={{ color: `${WARM}88` }}
            >
              Así nace el cambio
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cycleSteps.map((step, i) => (
                <motion.div
                  key={step.n}
                  {...fadeUp(i * 0.1)}
                  className="flex flex-col items-center text-center relative"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ border: `1px solid ${WARM}50` }}
                  >
                    <span className="text-xs font-medium" style={{ color: WARM }}>{step.n}</span>
                  </div>
                  <p className="text-sm font-medium text-[#E1E0CC] mb-1">{step.title}</p>
                  <p className="text-xs text-gray-600 leading-snug">{step.sub}</p>
                  {i < cycleSteps.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="absolute -right-3 top-4 hidden md:block"
                      style={{ color: `${WARM}30` }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 6. CTA ────────────────────────────────────────── */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
          <motion.div {...fadeUp(0)}>
            <Leaf size={20} className="mx-auto mb-6" style={{ color: `${WARM}70` }} />
            <h3
              className="font-sans font-medium leading-tight mb-5"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#E8E6D4' }}
            >
              ¿Listo para cambiar<br />una vida?
            </h3>
            <p className="text-sm text-gray-500 mb-10 leading-relaxed">
              No hace falta mucho. Solo lo que ya no usas.
              Tu donación empieza aquí.
            </p>

            {!showForm && (
              <>
                <motion.button
                  onClick={() => setShowForm(true)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-medium text-black"
                  style={{ background: WARM }}
                >
                  Quiero donar
                  <ArrowRight size={14} />
                </motion.button>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-700 mt-8">
                  Tu donas residuos · Nosotros los transformamos en oportunidades
                </p>
              </>
            )}

            {showForm && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-8 text-left"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(200,145,74,0.2)` }}
              >
                <h4 className="text-lg font-medium mb-1 text-[#E1E0CC]">Quiero donar</h4>
                <p className="text-sm mb-6 text-gray-500">Déjanos tus datos y te contactamos para coordinar tu donación.</p>
                <DonationForm onCancel={() => setShowForm(false)} />
              </motion.div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Donate
