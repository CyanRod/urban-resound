import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const initiatives = [
  'Fortalecimiento de escuelas rurales',
  'Capacitación técnica comunitaria',
  'Mejoramiento de viviendas',
  'Adecuación de espacios comunitarios',
  'Protección frente a bajas temperaturas',
]

const partners = ['ONG', 'Fundaciones', 'Universidades', 'Municipios', 'Organismos internacionales']

const Education: React.FC = () => {
  return (
    <section id="educacion" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Educación y Desarrollo Comunitario
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Construyendo', className: 'text-[#E1E0CC]' },
            { text: 'oportunidades.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 max-w-xl mb-8"
        >
          Urban ReSound trabajará junto a ONG, fundaciones y organismos de cooperación
          internacional para amplificar el impacto social generado por el proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-14"
        >
          <img
            src={import.meta.env.BASE_URL + 'educacion.png'}
            alt="Educación y desarrollo comunitario"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-normal mb-6 text-[#E1E0CC]">Áreas de trabajo comunitario</h3>
            <ul className="space-y-3">
              {initiatives.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-center gap-4 rounded-xl px-6 py-4 bg-[#101010] border border-white/[0.08]"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]">
              <p className="text-lg sm:text-xl font-normal mb-6 leading-relaxed text-[#E1E0CC]">
                Cada alianza permitirá amplificar el impacto social generado por el proyecto
                en comunidades vulnerables.
              </p>
              <h4 className="text-[10px] font-medium mb-4 uppercase tracking-widest text-primary/50">
                Alianzas estratégicas buscadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="rounded-full px-4 py-2 text-sm text-gray-400 border border-white/[0.08]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-[#101010] border border-white/[0.08]">
              <p className="text-sm leading-relaxed text-gray-400">
                Nuestros paneles contribuirán a mejorar condiciones de confort interior,
                reducir el impacto del frío y fortalecer espacios donde niños, jóvenes
                y familias desarrollan actividades educativas y sociales.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Education
