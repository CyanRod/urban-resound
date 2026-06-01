import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const b2bClients = ['Constructoras', 'Empresas de acabados arquitectónicos', 'Proyectos de vivienda social', 'Diseñadores de interiores', 'Estudios de arquitectura', 'Hoteles', 'Oficinas corporativas', 'Coworkings', 'Instituciones educativas']
const b2cChannels = ['Página web', 'Redes sociales', 'Comercio electrónico', 'Ferias sostenibles']
const marketing = ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'Página web corporativa']

const B2B: React.FC = () => {
  return (
    <section id="estrategia" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Estrategia B2B
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Cómo venderemos', className: 'text-[#E1E0CC]' },
            { text: 'nuestros paneles.', className: 'text-gray-500' },
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
          Modelo de negocio híbrido enfocado principalmente en el mercado Business to Business,
          permitiendo comercializar grandes volúmenes de paneles acústicos sostenibles.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/[0.1]">
              <span className="text-[10px] font-medium text-primary/70 tracking-widest">B2B</span>
              <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Mercado principal</span>
            </div>
            <h3 className="text-xl font-normal mb-5 text-[#E1E0CC]">Clientes objetivo</h3>
            <div className="grid grid-cols-2 gap-3">
              {b2bClients.map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/[0.03] border border-white/[0.06]">
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-xs text-gray-400">{c}</span>
                </div>
              ))}
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
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 border border-white/[0.1]">
                <span className="text-[10px] font-medium text-primary/70 tracking-widest">B2C</span>
                <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Mercado complementario</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                Propietarios de viviendas, emprendedores, estudios de grabación, oficinas
                pequeñas y negocios locales.
              </p>
              <div className="flex flex-wrap gap-2">
                {b2cChannels.map((ch) => (
                  <span
                    key={ch}
                    className="rounded-full px-4 py-2 text-xs text-gray-400 border border-white/[0.1]"
                  >
                    {ch}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]">
              <h3 className="text-base font-normal mb-3 text-[#E1E0CC]">Marketing digital</h3>
              <p className="text-sm mb-4 leading-relaxed text-gray-400">
                Cada panel cuenta una historia — nuestros clientes no solo adquieren un producto
                acústico, sino que contribuyen a impacto social y ambiental real.
              </p>
              <div className="flex flex-wrap gap-2">
                {marketing.map((m) => (
                  <span
                    key={m}
                    className="rounded-full px-3 py-1.5 text-xs text-gray-500 bg-white/[0.04] border border-white/[0.06]"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
        >
          <h3 className="text-xl font-normal text-[#E1E0CC] text-center mb-6">Marketing de impacto</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Reducción de residuos', 'Empleo femenino', 'Desarrollo comunitario', 'Sostenibilidad ambiental'].map((item) => (
              <div
                key={item}
                className="rounded-full px-5 py-2.5 border border-white/[0.1]"
              >
                <span className="text-gray-400 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default B2B
