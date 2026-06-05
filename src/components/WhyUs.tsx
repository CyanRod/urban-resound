import React from 'react'
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

const benefits = [
  { num: '01', title: 'Absorción de ruido cotidiano', desc: 'Voces, televisores, música y pasos — el cuero reciclado captura las frecuencias que más molestan en el día a día.' },
  { num: '02', title: 'Sueño y descanso real', desc: 'Reducir 10 dB en un dormitorio equivale a percibir el ruido como la mitad. Tu cuerpo por fin descansa de verdad.' },
  { num: '03', title: 'Concentración sin esfuerzo', desc: 'El cerebro gasta energía filtrando ruido de fondo. Elimínalo y tendrás más foco para lo que importa.' },
  { num: '04', title: 'Control de reverberación', desc: 'Reducimos el eco en salas, oficinas y aulas. Las palabras se entienden mejor, las reuniones son más cortas.' },
  { num: '05', title: 'Confort térmico incluido', desc: 'El mismo panel que silencia también aísla del frío y el calor — especialmente en comunidades andinas.' },
  { num: '06', title: 'Sostenible por diseño', desc: 'No hay resinas tóxicas, no hay materiales vírgenes. Solo residuos convertidos en bienestar para personas y planeta.' },
]

const spaces = [
  { icon: '🏠', name: 'Hogares', desc: 'Entre habitaciones, en estudios de trabajo en casa, en cuartos de bebés.' },
  { icon: '🏫', name: 'Escuelas y aulas', desc: 'Para que los niños escuchen al maestro, no el tráfico de la avenida.' },
  { icon: '🏥', name: 'Consultorios', desc: 'Privacidad real entre sala de espera y sala de atención.' },
  { icon: '🏢', name: 'Oficinas', desc: 'Salas de reuniones que realmente aíslan. Espacios abiertos más productivos.' },
  { icon: '🎵', name: 'Estudios y salas de ensayo', desc: 'Control acústico accesible para músicos y creadores independientes.' },
  { icon: '🌄', name: 'Comunidades rurales andinas', desc: 'Espacios comunitarios, aulas rurales y viviendas que por primera vez tienen confort acústico.' },
]

const WhyUs: React.FC = () => {
  return (
    <section id="por-que" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span {...fadeUp(0)} className="section-label block mb-4">
          Por que nuestros paneles
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'El silencio mejora', className: 'text-[#E1E0CC]' },
            { text: 'tu calidad de vida.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          {...fadeUp(0.15)}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mb-14"
          style={{ color: 'rgba(200,145,74,0.75)' }}
        >
          El silencio es un derecho. Nuestros paneles lo hacen posible
          sin costarle nada al planeta.
        </motion.p>

        {/* Frase impacto + imagen */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <motion.p
              {...fadeUp(0)}
              className="text-base sm:text-lg leading-relaxed mb-6 text-gray-400"
            >
              El ruido no solo molesta — <strong className="text-[#E1E0CC]">enferma</strong>.
              La Organización Mundial de la Salud estima que el ruido es la segunda causa
              ambiental de enfermedad en el mundo, solo detrás de la contaminación del aire.
              Y sin embargo, seguimos construyendo espacios como si el sonido no existiera.
            </motion.p>
            <motion.p
              {...fadeUp(0.08)}
              className="text-base sm:text-lg leading-relaxed mb-10 text-gray-400"
            >
              Urban ReSound cambia eso. Con materiales que ya existen — residuos de cuero
              y plástico reciclado — creamos paneles que protegen lo más básico:
              tu derecho a dormir, concentrarte y vivir sin que el ruido decida por ti.
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.num}
                  {...fadeUp(i * 0.07)}
                  className="rounded-xl p-5 bg-[#101010] border border-white/[0.08]"
                >
                  <p className="text-xs font-medium mb-2 tracking-widest uppercase" style={{ color: `${WARM}55` }}>{b.num}</p>
                  <h3 className="text-sm font-medium mb-2 text-[#E1E0CC]">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={import.meta.env.BASE_URL + 'aplicacion.jpg'}
              alt="Panel acústico instalado en espacio interior"
              className="w-full h-full object-cover"
              style={{ minHeight: '480px', maxHeight: '620px' }}
            />
          </motion.div>
        </div>

        {/* Dónde se aplica */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <p className="section-label block mb-3">Donde marcan la diferencia</p>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#E1E0CC] mb-10 max-w-lg">
            Espacios donde el silencio{' '}
            <span className="font-medium text-gray-500">cambia todo</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {spaces.map((s, i) => (
              <motion.div
                key={s.name}
                {...fadeUp(i * 0.07)}
                className="rounded-2xl p-6 flex gap-4 items-start"
                style={{ background: 'rgba(200,145,74,0.04)', border: '1px solid rgba(200,145,74,0.12)' }}
              >
                <span className="text-3xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h4 className="font-medium text-[#E1E0CC] mb-1">{s.name}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cierre */}
        <motion.div
          {...fadeUp(0)}
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ background: 'rgba(200,145,74,0.05)', border: '1px solid rgba(200,145,74,0.2)' }}
        >
          <p className="font-sans font-medium text-xl sm:text-2xl text-[#E8E6D4] max-w-3xl mx-auto leading-snug">
            "Mas que un panel acustico — una solucion que conecta economia circular,
            innovacion ambiental, inclusion social y el derecho humano a vivir en silencio."
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyUs
