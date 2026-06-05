import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const phases = [
  {
    num: '1',
    title: 'Producción piloto',
    items: ['500 paneles mensuales', '5 mujeres operando maquinaria', '48 actores comunitarios vinculados'],
  },
  {
    num: '2',
    title: 'Consolidación',
    items: ['1.500 paneles mensuales', '10 a 15 mujeres incorporadas', 'Primeros contratos permanentes', 'Expansión de recolección de materiales'],
  },
  {
    num: '3',
    title: 'Producción regional',
    items: ['5.000 paneles mensuales', '25 a 35 empleos directos', 'Ampliación de la red de proveedores', 'Expansión nacional'],
  },
  {
    num: '4',
    title: 'Expansión internacional',
    items: ['Replicación del modelo en otros países', 'Materias primas sostenibles locales', 'Comunidades vulnerables de América Latina'],
  },
]

const Scaling: React.FC = () => {
  return (
    <section id="escalabilidad" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Escalabilidad y Crecimiento
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Creciendo', className: 'text-[#E1E0CC]' },
            { text: 'paso a paso.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 max-w-xl mb-14"
        >
          Nuestro modelo de crecimiento progresivo demuestra que la economía circular puede
          convertirse en una herramienta real de desarrollo territorial.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-7 flex flex-col bg-[#101010] border border-white/[0.08]"
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base font-normal mb-5 flex-shrink-0 bg-white/[0.04] border border-white/[0.1] text-[#E1E0CC]">
                {phase.num}
              </div>
              <h3 className="text-base font-normal mb-4 text-[#E1E0CC]">
                Fase {phase.num}<br />{phase.title}
              </h3>
              <ul className="space-y-2 mt-auto">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 text-center bg-[#101010] border border-white/[0.08]"
        >
          <p className="text-lg sm:text-xl font-normal text-[#E1E0CC] max-w-3xl mx-auto leading-snug">
            El objetivo es demostrar que la economía circular puede convertirse en una herramienta
            real de{' '}
            <span className="font-medium text-gray-400">
              desarrollo territorial para comunidades vulnerables de América Latina.
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Scaling
