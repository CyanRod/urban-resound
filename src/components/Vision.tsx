import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const visionPoints = [
  'Reducir contaminación industrial y residuos',
  'Impulsar economía circular comunitaria',
  'Generar empleo sostenible local',
  'Fortalecer comunidades rurales',
  'Promover innovación sostenible en biomateriales',
  'Expandir el modelo a Latinoamérica',
]

const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Visión 2030
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Líderes latinoamericanos en', className: 'text-[#E1E0CC]' },
                { text: 'biomateriales sostenibles.', className: 'text-gray-500' },
              ]}
              containerClassName="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] mb-6"
            />
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-400">
              Para el año 2030, Urban ReSound busca convertirse en la empresa líder del
              Ecuador y una de las{' '}
              <strong className="text-[#E1E0CC]">10 principales iniciativas latinoamericanas</strong>{' '}
              en biomateriales sostenibles para construcción.
            </p>
            <ul className="space-y-4">
              {visionPoints.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-label block mb-6">Nuestra Misión</span>
            <div
              className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
            >
              <blockquote className="text-lg sm:text-xl font-normal text-[#E1E0CC] leading-relaxed mb-8">
                "Transformamos residuos de cuero, plástico reciclado y bioadhesivos sostenibles
                de origen vegetal en paneles acústicos sostenibles mediante procesos innovadores
                y responsables, promoviendo{' '}
                <em className="font-serif italic text-gray-400">
                  economía circular, bienestar comunitario, inclusión social y construcción sostenible.
                </em>
                "
              </blockquote>

              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-4">
                {[
                  { value: '2030', label: 'Meta año' },
                  { value: 'Top 10', label: 'Latam' },
                  { value: '500+', label: 'Paneles/mes' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-xl font-normal text-[#E1E0CC]">{s.value}</p>
                    <p className="text-xs mt-1 text-gray-600">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Vision
