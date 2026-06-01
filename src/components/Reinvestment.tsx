import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import CountUp from './animations/CountUp'

const distribution = [
  { pct: 40, label: 'Reinversión productiva', desc: 'Compra de maquinaria e incremento de producción' },
  { pct: 20, label: 'Investigación y desarrollo', desc: 'Investigación de nuevos biomateriales' },
  { pct: 15, label: 'Marketing y expansión', desc: 'Expansión comercial y nuevos mercados' },
  { pct: 15, label: 'Fondo social comunitario', desc: 'Capacitación y fortalecimiento comunitario' },
  { pct: 10, label: 'Reserva financiera', desc: 'Estabilidad y resiliencia operativa' },
]

const outcomes = [
  'Compra de maquinaria', 'Incremento de producción', 'Capacitación comunitaria',
  'Investigación de nuevos biomateriales', 'Fortalecimiento del impacto social',
  'Expansión comercial', 'Creación de nuevos productos sostenibles',
]

const BarFill: React.FC<{ pct: number; delay: number }> = ({ pct, delay }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const inView = useInView(trackRef, { once: true, amount: 0 })

  return (
    <div
      ref={trackRef}
      className="w-full rounded-full overflow-hidden bg-white/[0.06]"
      style={{ height: '8px' }}
    >
      <motion.div
        className="h-full rounded-full bg-primary"
        style={{ width: `${pct}%`, transformOrigin: 'left' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}

const Reinvestment: React.FC = () => {
  return (
    <section id="reinversion" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Reinversión de Utilidades
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Reinvirtiendo para', className: 'text-[#E1E0CC]' },
            { text: 'generar mayor impacto.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-gray-500 mb-14"
        >
          Utilidad mensual estimada: <strong className="text-[#E1E0CC]">USD 3.750</strong>
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {distribution.map((d, i) => (
              <div key={d.label}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{d.label}</span>
                  <span className="text-base font-normal text-[#E1E0CC]">
                    <CountUp to={d.pct} suffix="%" delay={i * 0.12} />
                  </span>
                </div>
                <BarFill pct={d.pct} delay={i * 0.12} />
                <p className="text-xs mt-1 text-gray-600">{d.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-7 bg-[#101010] border border-white/[0.08]"
          >
            <h3 className="text-xl font-normal mb-6 text-[#E1E0CC]">¿Qué permitirá esta reinversión?</h3>
            <ul className="space-y-4">
              {outcomes.map((o) => (
                <li key={o} className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{o}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Reinvestment
