import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Leaf } from 'lucide-react'
import CountUp from '../components/animations/CountUp'
import DonationForm from '../components/DonationForm'

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
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
})

const DonatePage: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}donacion.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(5,4,3,0.92)' }} />

      <div className="relative z-10">

        {/* ── 1. HERO OPENER ────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center">
          <motion.span {...fadeUp(0)} className="section-label block mb-6">
            Dona y sé parte del cambio
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-sans font-medium leading-[1.05] mb-8"
            style={{
              fontSize: 'clamp(2.4rem, 6vw, 5rem)',
              color: '#E8E6D4',
            }}
          >
            Lo que tú descartas,<br />
            <span style={{ color: WARM }}>para ellos es calor.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Comunidades en los Andes ecuatorianos soportan inviernos de hasta{' '}
            <strong className="text-gray-300">-10°C</strong> sin ningún tipo de aislamiento.
            Tus materiales donados se transforman en paneles que protegen lo que más importa:{' '}
            <span style={{ color: WARM }}>las personas.</span>
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex items-center justify-center gap-4 mt-10">
            <div className="h-px w-16" style={{ background: `${WARM}30` }} />
            <Heart size={14} style={{ color: `${WARM}80` }} />
            <div className="h-px w-16" style={{ background: `${WARM}30` }} />
          </motion.div>
        </div>

        {/* ── 2. TRANSFORMATION CARDS ───────────────────────── */}
        <div
          className="py-20"
          style={{ background: 'rgba(255,255,255,0.025)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.p
              {...fadeUp(0)}
              className="text-[10px] uppercase tracking-widest text-center mb-10"
              style={{ color: `${WARM}88` }}
            >
              Tu material · Su historia
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6">
              {transformations.map((t, i) => (
                <motion.div
                  key={t.material}
                  {...fadeUp(i * 0.1)}
                  className="rounded-2xl p-7 flex flex-col gap-5"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid rgba(200,145,74,0.2)`,
                  }}
                >
                  <span className="text-4xl">{t.emoji}</span>
                  <div>
                    <p className="text-base font-medium text-[#E1E0CC] mb-1">{t.material}</p>
                    <p className="text-xs uppercase tracking-wider mb-3" style={{ color: `${WARM}70` }}>
                      {t.arrow}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans font-medium">
                      "{t.outcome}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3. COMMUNITY IMAGE + STATS ────────────────────── */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-14 items-center">

          <motion.div {...fadeUp(0)} className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src={`${import.meta.env.BASE_URL}comunidad.png`}
              alt="Comunidad beneficiada"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(200,145,74,0.12) 0%, rgba(0,0,0,0.55) 100%)' }}
            />
            <div
              className="absolute bottom-5 left-5 right-5 rounded-xl px-5 py-4"
              style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(10px)' }}
            >
              <p className="text-xs text-gray-400 leading-relaxed">
                Comunidades de Quisapincha, Tungurahua — donde cada panel marca la diferencia.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.15)}>
            <p className="text-[10px] uppercase tracking-widest mb-8" style={{ color: `${WARM}88` }}>
              El impacto es real
            </p>
            <div className="space-y-8 mb-10">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-baseline gap-5">
                  <span
                    className="font-sans text-5xl sm:text-6xl leading-none tabular-nums"
                    style={{ color: WARM }}
                  >
                    <CountUp to={s.to} suffix={s.suffix} duration={1.8} delay={i * 0.15} />
                  </span>
                  <div>
                    <p className="text-sm text-gray-300 font-medium">{s.label}</p>
                    <div className="h-px w-14 mt-1.5" style={{ background: `${WARM}35` }} />
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

        {/* ── 4. HUMAN FACE + PULL QUOTE ────────────────────── */}
        <div
          className="py-24"
          style={{ background: 'rgba(255,255,255,0.025)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-center">

            <motion.div {...fadeUp(0.05)} className="order-2 md:order-1">
              <p className="text-[10px] uppercase tracking-widest mb-7" style={{ color: `${WARM}88` }}>
                Las personas detrás del cambio
              </p>
              <blockquote
                className="font-sans font-medium leading-relaxed mb-8"
                style={{ fontSize: 'clamp(1.25rem, 2.8vw, 1.75rem)', color: '#E8E6D4' }}
              >
                "Un residuo. Un retazo. Un poco de cuero.
                Eso es todo lo que necesitamos para devolverle
                a alguien el derecho a vivir con calor."
              </blockquote>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px flex-1" style={{ background: `${WARM}25` }} />
                <Heart size={12} style={{ color: WARM }} />
                <div className="h-px flex-1" style={{ background: `${WARM}25` }} />
              </div>
              <p className="text-xs text-gray-700 text-center uppercase tracking-widest">
                Urban ReSound · Ecuador
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="order-1 md:order-2 relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={`${import.meta.env.BASE_URL}frase-donacion.png`}
                alt="Frase Urban ReSound"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(5,4,3,0.65) 0%, transparent 55%)' }}
              />
            </motion.div>
          </div>
        </div>

        {/* ── 5. CYCLE ─────────────────────────────────────── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24">
          <motion.p
            {...fadeUp(0)}
            className="text-[10px] uppercase tracking-widest text-center mb-12"
            style={{ color: `${WARM}88` }}
          >
            Así nace el cambio
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {cycleSteps.map((step, i) => (
              <motion.div
                key={step.n}
                {...fadeUp(i * 0.1)}
                className="flex flex-col items-center text-center relative"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ border: `1px solid ${WARM}45` }}
                >
                  <span className="text-sm font-medium" style={{ color: WARM }}>{step.n}</span>
                </div>
                <p className="text-sm font-medium text-[#E1E0CC] mb-1.5">{step.title}</p>
                <p className="text-xs text-gray-600 leading-snug">{step.sub}</p>
                {i < cycleSteps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="absolute -right-4 top-5 hidden md:block"
                    style={{ color: `${WARM}25` }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 6. CTA ────────────────────────────────────────── */}
        <div
          className="py-28"
          style={{ background: 'rgba(255,255,255,0.025)', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeUp(0)}>
              <Leaf size={22} className="mx-auto mb-7" style={{ color: `${WARM}65` }} />
              <h2
                className="font-sans font-medium leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3.2rem)', color: '#E8E6D4' }}
              >
                ¿Listo para cambiar<br />una vida?
              </h2>
              <p className="text-sm text-gray-500 mb-12 leading-relaxed max-w-sm mx-auto">
                No hace falta mucho. Solo lo que ya no usas.
                Tu donación empieza aquí.
              </p>

              {!showForm && (
                <>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button
                      onClick={() => setShowForm(true)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-4 text-base font-medium text-black"
                      style={{ background: WARM }}
                    >
                      Quiero donar
                      <ArrowRight size={15} />
                    </motion.button>
                    <motion.button
                      onClick={() => window.open('https://wa.me/+593962559001?text=Hola%2C%20me%20interesa%20donar%20materiales%20a%20Urban%20ReSound', '_blank', 'noopener,noreferrer')}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-medium text-white"
                      style={{ background: '#25D366' }}
                    >
                      <svg viewBox="0 0 32 32" width="18" height="18" fill="white">
                        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.83 1.789 6.863L2 30l7.352-1.768A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 18.883c-.344-.172-2.037-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.892 1.118-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.713-2.039-1.913-2.383-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.431-.029-.603-.086-.172-.777-1.875-1.065-2.566-.28-.673-.565-.582-.777-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.869s1.234 3.328 1.406 3.558c.172.23 2.428 3.707 5.882 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.168.137.66-.099 2.037-.832 2.322-1.635.287-.803.287-1.492.201-1.635-.086-.143-.316-.23-.66-.402z" />
                      </svg>
                      Escribir al WhatsApp
                    </motion.button>
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-700 mt-10">
                    Tu donas residuos · Nosotros los transformamos en oportunidades
                  </p>
                </>
              )}

              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl p-8 sm:p-10 text-left"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(200,145,74,0.22)` }}
                >
                  <h4 className="text-xl font-medium mb-1 text-[#E1E0CC]">Quiero donar</h4>
                  <p className="text-sm mb-7 text-gray-500">Déjanos tus datos y te contactamos para coordinar tu donación.</p>
                  <DonationForm variant="page" onCancel={() => setShowForm(false)} />
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DonatePage
