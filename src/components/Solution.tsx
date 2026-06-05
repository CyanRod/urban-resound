import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import { SoundThroughWall, SoundAbsorbedByPanel } from './AcousticDiagrams'

const WARM = '#C8914A'
const EASE = [0.16, 1, 0.3, 1] as const

const IconBaby = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx={14} cy={10} r={7} stroke={WARM} strokeWidth={1.4} strokeOpacity={0.8} fill="none" />
    <circle cx={11} cy={9} r={1.2} fill={WARM} fillOpacity={0.75} />
    <circle cx={17} cy={9} r={1.2} fill={WARM} fillOpacity={0.75} />
    {/* smile */}
    <path d="M11,12 Q14,15.5 17,12" fill="none" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.75} strokeLinecap="round" />
    {/* blanket/body wrap */}
    <path d="M6,17 Q6,26 14,26 Q22,26 22,17 Z" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.5} fill={`${WARM}10`} />
    {/* small arms */}
    <path d="M6,19 Q4,21 5,23" stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} fill="none" strokeLinecap="round" />
    <path d="M22,19 Q24,21 23,23" stroke={WARM} strokeWidth={1.2} strokeOpacity={0.4} fill="none" strokeLinecap="round" />
  </svg>
)

const IconLaptop = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x={3} y={5} width={22} height={15} rx={2} stroke={WARM} strokeWidth={1.4} strokeOpacity={0.8} fill="none" />
    <rect x={6} y={8} width={16} height={9} rx={1} fill={WARM} fillOpacity={0.1} stroke={WARM} strokeWidth={0.7} strokeOpacity={0.3} />
    {/* screen content lines */}
    <line x1={8} y1={10.5} x2={16} y2={10.5} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.4} strokeLinecap="round" />
    <line x1={8} y1={13} x2={13} y2={13} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.3} strokeLinecap="round" />
    {/* base */}
    <path d="M1,22 L27,22" stroke={WARM} strokeWidth={1.4} strokeOpacity={0.55} strokeLinecap="round" />
    <path d="M10,20 L9,22 H19 L18,20 Z" fill={WARM} fillOpacity={0.15} />
  </svg>
)

const IconBook = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* left page */}
    <path d="M14,6 Q9,4 4,6 L4,23 Q9,21 14,23 Z" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} fill={`${WARM}08`} />
    {/* right page */}
    <path d="M14,6 Q19,4 24,6 L24,23 Q19,21 14,23 Z" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.7} fill={`${WARM}08`} />
    {/* spine */}
    <line x1={14} y1={6} x2={14} y2={23} stroke={WARM} strokeWidth={1.4} strokeOpacity={0.6} />
    {/* text lines left */}
    <line x1={7} y1={11} x2={12} y2={11} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
    <line x1={7} y1={14} x2={12} y2={14} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
    <line x1={7} y1={17} x2={12} y2={17} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
    {/* text lines right */}
    <line x1={16} y1={11} x2={21} y2={11} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
    <line x1={16} y1={14} x2={21} y2={14} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
    <line x1={16} y1={17} x2={21} y2={17} stroke={WARM} strokeWidth={0.9} strokeOpacity={0.35} strokeLinecap="round" />
  </svg>
)

const IconMedical = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    {/* building */}
    <rect x={4} y={8} width={20} height={18} rx={2} stroke={WARM} strokeWidth={1.4} strokeOpacity={0.7} fill="none" />
    {/* roof */}
    <path d="M2,9 L14,3 L26,9" stroke={WARM} strokeWidth={1.3} strokeOpacity={0.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    {/* cross */}
    <line x1={14} y1={13} x2={14} y2={21} stroke={WARM} strokeWidth={2} strokeOpacity={0.85} strokeLinecap="round" />
    <line x1={10} y1={17} x2={18} y2={17} stroke={WARM} strokeWidth={2} strokeOpacity={0.85} strokeLinecap="round" />
  </svg>
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: EASE },
})

const howItWorks = [
  {
    step: '01',
    title: 'El sonido entra al panel',
    desc: 'Las ondas de sonido penetran la superficie porosa del cuero reciclado en lugar de rebotar.',
  },
  {
    step: '02',
    title: 'La energía se disipa',
    desc: 'La estructura fibrosa del cuero convierte la energía sonora en calor mínimo, absorbiendo el ruido.',
  },
  {
    step: '03',
    title: 'El plástico bloquea el resto',
    desc: 'La capa de plástico reciclado actúa como barrera densa que impide que el sonido residual atraviese el panel.',
  },
  {
    step: '04',
    title: 'Tu espacio respira',
    desc: 'El resultado es un ambiente hasta 12 dB más silencioso — la diferencia entre un café ruidoso y una biblioteca.',
  },
]

const scenarios: { before: string; after: string; icon: React.ReactNode }[] = [
  {
    before: 'El bebé se despierta cada vez que alguien camina en el piso de arriba.',
    after: 'Los pasos ya no se escuchan. El bebé duerme toda la noche.',
    icon: <IconBaby />,
  },
  {
    before: 'Trabajar desde casa se hace imposible con el ruido del vecino.',
    after: 'Tu oficina en casa es finalmente tuya. Cierras la puerta y el mundo espera.',
    icon: <IconLaptop />,
  },
  {
    before: 'Los niños no pueden concentrarse en el aula cerca de la avenida.',
    after: 'La clase se escucha con claridad. Los niños aprenden sin esfuerzo extra.',
    icon: <IconBook />,
  },
  {
    before: 'En el consultorio, los pacientes escuchan conversaciones privadas de la sala contigua.',
    after: 'La confidencialidad está garantizada. Los pacientes confían más.',
    icon: <IconMedical />,
  },
]

const materials = [
  {
    name: 'Cuero reciclado',
    role: 'Absorción acústica',
    desc: 'Sus fibras irregulares atrapan las ondas sonoras de alta frecuencia — voces, música, ruido de oficina.',
    color: 'rgba(200,145,74,0.12)',
    border: 'rgba(200,145,74,0.3)',
  },
  {
    name: 'Plástico reciclado',
    role: 'Barrera y estructura',
    desc: 'Su densidad bloquea sonidos de baja frecuencia — golpes, bass, maquinaria, tráfico pesado.',
    color: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.08)',
  },
  {
    name: 'Bioadhesivo vegetal',
    role: 'Cohesión sin tóxicos',
    desc: 'Une los materiales sin resinas sintéticas. El panel es seguro dentro de tu hogar, escuela o consultorio.',
    color: 'rgba(255,255,255,0.03)',
    border: 'rgba(255,255,255,0.08)',
  },
]

const Solution: React.FC = () => {
  return (
    <section id="solucion" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span {...fadeUp(0)} className="section-label block mb-4">
          Nuestra Solución
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Paneles acústicos', className: 'text-[#E1E0CC]' },
            { text: 'sostenibles.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          {...fadeUp(0.15)}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-14"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          Fabricados con lo que otros descartan, diseñados para
          silenciar el ruido y devolver el bienestar que el ruido roba.
        </motion.p>

        {/* Panel + descripción principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={import.meta.env.BASE_URL + 'Paneles acusticos sostenibles.png'}
              alt="Panel acústico sostenible Urban ReSound"
              className="w-full h-full object-cover"
              style={{ maxHeight: '480px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <h3 className="text-2xl sm:text-3xl font-normal mb-5 text-[#E1E0CC]">
              El silencio también{' '}
              <span className="font-medium text-gray-400">se puede fabricar</span>
            </h3>
            <p className="text-base leading-relaxed mb-6 text-gray-400">
              Nuestros paneles no solo absorben el ruido — transforman residuos industriales
              de Quisapincha en una solución que mejora la vida cotidiana de familias,
              estudiantes, profesionales y comunidades enteras.
            </p>
            <p className="text-base leading-relaxed mb-8 text-gray-400">
              Cada panel combina tres materiales con funciones acústicas complementarias:
              el cuero absorbe, el plástico bloquea, y el bioadhesivo vegetal los une
              de forma segura y sin tóxicos.
            </p>

            <div className="space-y-4">
              {materials.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl px-5 py-4 flex items-start gap-4"
                  style={{ background: m.color, border: `1px solid ${m.border}` }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-sm font-medium text-[#E1E0CC]">{m.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${WARM}20`, color: WARM }}>{m.role}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Diagramas acústicos */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="section-label block mb-3">La diferencia visual</p>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mb-3 max-w-lg">
            Por qué una pared común{' '}
            <span className="font-medium text-gray-500">no es suficiente</span>
          </h3>
          <p className="text-sm text-gray-500 mb-8 max-w-xl leading-relaxed">
            El sonido no respeta las paredes. Nuestros paneles sí lo detienen —
            absorbiendo la energía sonora antes de que cruce al otro lado.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            <SoundThroughWall />
            <SoundAbsorbedByPanel />
          </div>
        </motion.div>

        {/* Cómo funciona */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <p className="section-label block mb-3">Cómo funciona</p>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mb-10 max-w-lg">
            De la onda de ruido al{' '}
            <span className="font-medium text-gray-500">silencio que necesitas</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map((s, i) => (
              <motion.div
                key={s.step}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl p-6 relative"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p className="text-xs font-medium mb-4 tracking-widest" style={{ color: `${WARM}70` }}>{s.step}</p>
                <h4 className="font-medium text-[#E1E0CC] mb-3 leading-snug">{s.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Antes y después */}
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="section-label block mb-3">La diferencia en tu vida</p>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mb-10 max-w-lg">
            Lo que cambia cuando el ruido{' '}
            <span className="font-medium text-gray-500">deja de mandarte</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {scenarios.map((s, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.08)}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="p-6" style={{ background: 'rgba(255,50,50,0.04)' }}>
                  <p className="text-xs uppercase tracking-widest text-red-500/50 mb-3">Antes</p>
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 mt-0.5">{s.icon}</div>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.before}</p>
                  </div>
                </div>
                <div className="p-6 flex-1" style={{ background: 'rgba(200,145,74,0.05)', borderTop: '1px solid rgba(200,145,74,0.1)' }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: `${WARM}70` }}>Con Urban ReSound</p>
                  <p className="text-sm text-[#E1E0CC] leading-relaxed font-medium">{s.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagen de materiales */}
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl overflow-hidden relative"
        >
          <img
            src={import.meta.env.BASE_URL + 'materiales.png'}
            alt="Los tres materiales: cuero, plástico reciclado y bioadhesivos vegetales"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0 flex items-end"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
          >
            <div className="p-8 w-full">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Residuos de cuero triturado',
                  'Plástico reciclado como refuerzo estructural',
                  'Bioadhesivos sostenibles de origen vegetal',
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full px-4 py-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="text-[#E1E0CC] text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Solution
