import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const FutureLines: React.FC = () => {
  return (
    <section id="futuro" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Futuras Líneas de Negocio
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Innovación para construir un', className: 'text-[#E1E0CC]' },
            { text: 'futuro más sostenible.', className: 'text-gray-500' },
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
          La infraestructura, maquinaria y experiencia adquirida en la fabricación de paneles
          acústicos permitirá desarrollar nuevas soluciones basadas en biomateriales y economía circular.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden bg-[#101010] border border-white/[0.08]"
          >
            <div className="p-8 sm:p-10">
              <span className="text-[10px] font-medium uppercase tracking-widest mb-3 block text-primary/50">
                Futura línea de negocio
              </span>
              <h3 className="text-2xl sm:text-3xl font-normal mb-4 text-[#E1E0CC]">Tejas sostenibles</h3>
              <p className="text-sm leading-relaxed mb-6 text-gray-400">
                Fabricadas mediante materiales reciclados y biomateriales, las tejas sostenibles
                ofrecerán una solución para viviendas en comunidades andinas que enfrentan
                condiciones climáticas extremas.
              </p>
              <ul className="space-y-3">
                {[
                  'Aislamiento térmico',
                  'Reducción de pérdidas de calor',
                  'Protección frente a bajas temperaturas',
                  'Aprovechamiento de residuos reciclados',
                  'Construcción sostenible',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]">
              <h3 className="text-xl font-normal text-[#E1E0CC] mb-4">Más allá de Quisapincha</h3>
              <p className="text-sm leading-relaxed mb-5 text-gray-400">
                A largo plazo, Urban ReSound busca beneficiar a comunidades vulnerables de
                Ecuador y otros países andinos que enfrentan desafíos relacionados con:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Bajas temperaturas',
                  'Condiciones precarias de vivienda',
                  'Falta de infraestructura comunitaria',
                  'Limitadas oportunidades sostenibles',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-full px-4 py-2 border border-white/[0.1]"
                  >
                    <span className="text-gray-400 text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]">
              <h3 className="text-base font-normal mb-3 text-[#E1E0CC]">Actualmente: Paneles acústicos sostenibles</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Urban ReSound se consolida primero mediante la fabricación de paneles acústicos,
                construyendo la base tecnológica, comercial y comunitaria para expandir hacia
                nuevas líneas de biomateriales.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default FutureLines
