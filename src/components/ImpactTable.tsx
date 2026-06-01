import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import CountUp from './animations/CountUp'

const metrics = [
  { label: 'Producción mensual piloto', value: '500 paneles', highlight: false },
  { label: 'Precio por panel', value: 'USD 30', highlight: false },
  { label: 'Costo de producción por panel', value: 'USD 22,50', highlight: false },
  { label: 'Utilidad por panel', value: 'USD 7,50', highlight: false },
  { label: 'Ingresos mensuales totales', value: 'USD 15.000', highlight: true },
  { label: 'Utilidad mensual estimada', value: 'USD 3.750', highlight: false },
  { label: 'Beneficio comunitario mensual', value: 'USD 8.100', highlight: true },
  { label: 'Familias beneficiadas', value: '30 familias', highlight: false },
  { label: 'Ingreso promedio mensual por familia', value: 'USD 270', highlight: false },
  { label: 'Ingreso promedio anual por familia', value: 'USD 3.240', highlight: true },
]

const cards = [
  { prefix: '$', value: 15000, suffix: '', label: 'Ingresos mensuales', sub: 'fase piloto', thousands: true },
  { prefix: '$', value: 8100, suffix: '', label: 'Beneficio comunitario', sub: 'mensual', thousands: true },
  { prefix: '', value: 30, suffix: '', label: 'Familias beneficiadas', sub: 'familias directas', thousands: false },
]

const ImpactTable: React.FC = () => {
  return (
    <section id="impacto" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Impacto Económico
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Economía circular con', className: 'text-[#E1E0CC]' },
            { text: 'resultados reales.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-500 mb-12"
        >
          Proyecciones de la fase piloto: 500 paneles mensuales
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden border border-white/[0.08] mb-8"
        >
          <div style={{ overflowX: 'auto' }}>
            <table className="w-full">
              <thead>
                <tr className="bg-[#101010]">
                  <th className="text-left px-6 py-4 text-xs font-medium text-[#E1E0CC] tracking-widest uppercase">Indicador</th>
                  <th className="text-right px-6 py-4 text-xs font-medium text-[#E1E0CC] tracking-widest uppercase">Valor</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((m, i) => (
                  <tr
                    key={m.label}
                    className={m.highlight ? 'bg-white/[0.03]' : i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.015]'}
                  >
                    <td className="px-6 py-4 text-sm text-gray-500 border-b border-white/[0.05]">
                      {m.highlight && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 mb-0.5 bg-primary/50" />
                      )}
                      {m.label}
                    </td>
                    <td className={`px-6 py-4 text-sm font-medium text-right border-b border-white/[0.05] ${m.highlight ? 'text-[#E1E0CC]' : 'text-gray-400'}`}>
                      {m.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center bg-[#101010] border border-white/[0.08]"
            >
              <p className="text-[10px] font-medium mb-2 uppercase tracking-widest text-primary/50">{card.label}</p>
              <p className="text-3xl sm:text-4xl font-normal text-[#E1E0CC]">
                <CountUp
                  to={card.value}
                  prefix={card.prefix}
                  suffix={card.suffix}
                  thousands={card.thousands}
                  delay={i * 0.1}
                />
              </p>
              <p className="text-xs mt-1 text-gray-600">{card.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ImpactTable
