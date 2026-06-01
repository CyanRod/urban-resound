import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const features = [
  { label: 'Material reciclado', conventional: false },
  { label: 'Impacto comunitario', conventional: false },
  { label: 'Empleo femenino', conventional: false },
  { label: 'Economía circular', conventional: false },
  { label: 'Reducción de residuos', conventional: false },
  { label: 'Aislamiento térmico', conventional: false },
  { label: 'Aislamiento acústico', conventional: true },
  { label: 'Huella ambiental reducida', conventional: false },
]

const differentials = [
  'Sostenibilidad integral en todo el proceso',
  'Inclusión social y empleo femenino',
  'Impacto ambiental medible',
  'Generación de empleo comunitario',
  'Fortalecimiento de comunidades rurales',
  'Construcción sostenible',
]

const Competition: React.FC = () => {
  return (
    <section id="competencia" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Comparación con la Competencia
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: '¿Por qué elegir', className: 'text-[#E1E0CC]' },
            { text: 'Urban ReSound?', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-12"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] mb-10"
        >
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-[#101010]">
                  <th className="text-left px-6 py-5 text-xs font-medium text-[#E1E0CC] tracking-widest uppercase">Característica</th>
                  <th className="text-center px-6 py-5 text-xs font-medium text-gray-500 tracking-widest uppercase">Panel convencional</th>
                  <th className="text-center px-6 py-5 text-xs font-medium text-primary/70 tracking-widest uppercase">Urban ReSound</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={f.label}
                    className={i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'}
                  >
                    <td className="px-6 py-4 text-sm text-gray-500 border-b border-white/[0.05]">{f.label}</td>
                    <td className={`px-6 py-4 text-center text-sm font-medium border-b border-white/[0.05] ${f.conventional ? 'text-gray-400' : 'text-gray-700'}`}>
                      {f.conventional ? 'Si' : 'No'}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium border-b border-white/[0.05] text-[#E1E0CC] bg-white/[0.02]">
                      Si
                    </td>
                  </tr>
                ))}
                <tr className="bg-white/[0.02]">
                  <td className="px-6 py-4 text-sm font-medium text-[#E1E0CC] border-b border-white/[0.05]">Precio por m²</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-500 border-b border-white/[0.05]">USD 20–60/m²</td>
                  <td className="px-6 py-4 text-center text-sm font-medium text-[#E1E0CC] border-b border-white/[0.05] bg-white/[0.03]">USD 30/m²</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
        >
          <p className="text-lg sm:text-xl font-normal mb-6 text-center text-[#E1E0CC]">
            Urban ReSound integra simultáneamente:
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {differentials.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0 mt-2" />
                <span className="text-sm text-gray-400">{d}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}

export default Competition
