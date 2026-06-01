import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const areas = ['Desarrollo comunitario', 'Emprendimiento femenino', 'Economía circular', 'Sostenibilidad ambiental', 'Resiliencia climática']
const orgs = ['CARE', 'World Vision', 'Practical Action', 'Fundación Avina', 'The Nature Conservancy']

const Cooperation: React.FC = () => {
  return (
    <section id="cooperacion" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Cooperación Internacional
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Construyendo alianzas para', className: 'text-[#E1E0CC]' },
            { text: 'transformar comunidades.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-400">
              Urban ReSound buscará establecer alianzas con organizaciones que trabajan en
              las siguientes áreas, dado que el proyecto presenta alta afinidad con sus iniciativas.
            </p>
            <ul className="space-y-3">
              {areas.map((a, i) => (
                <motion.li
                  key={a}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-center gap-4 rounded-xl px-6 py-4 bg-[#101010] border border-white/[0.08]"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{a}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
          >
            <h3 className="text-xl font-normal text-[#E1E0CC] mb-4">Afinidad con organizaciones líderes</h3>
            <p className="text-sm mb-8 leading-relaxed text-gray-400">
              Estas futuras alianzas permitirán ampliar el impacto de Urban ReSound en
              comunidades vulnerables de Ecuador y América Latina.
            </p>
            <div className="flex flex-wrap gap-3">
              {orgs.map((o) => (
                <span
                  key={o}
                  className="rounded-full px-5 py-2.5 text-sm text-gray-400 border border-white/[0.1]"
                >
                  {o}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Cooperation
