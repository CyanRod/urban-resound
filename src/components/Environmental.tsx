import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import CountUp from './animations/CountUp'

const envMetrics = [
  { label: 'Residuos de cuero reutilizados', value: 35 },
  { label: 'Plástico reciclado incorporado', value: 25 },
  { label: 'Biomasa aprovechada', value: 20 },
  { label: 'Impacto social positivo', value: 12 },
  { label: 'Reducción de contaminación', value: 8 },
]

const statCards = [
  { value: 80, suffix: '%+', label: 'Materiales reciclados o biomasa local' },
  { value: 500, suffix: '', label: 'Paneles producidos mensualmente' },
  { value: 0, suffix: '', label: 'Adhesivos sintéticos utilizados' },
]

const BarFill: React.FC<{ pct: number; delay: number }> = ({ pct, delay }) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={trackRef}
      className="flex-1 rounded-full overflow-hidden bg-white/[0.06]"
      style={{ height: '8px' }}
    >
      <div
        className="h-full rounded-full bg-primary"
        style={{
          width: triggered ? `${pct}%` : '0%',
          transition: `width 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
        }}
      />
    </div>
  )
}

const Environmental: React.FC = () => {
  return (
    <section id="ambiental" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Impacto Ambiental
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Resultados', className: 'text-[#E1E0CC]' },
            { text: 'esperados.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 mb-14"
        >
          Más del <strong className="text-[#E1E0CC]">80%</strong> de los materiales
          utilizados provienen de residuos y biomasa local.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 mb-14"
        >
          {envMetrics.map((m, i) => (
            <div key={m.label} className="flex items-center gap-6">
              <div className="w-52 flex-shrink-0">
                <span className="text-sm text-gray-500">{m.label}</span>
              </div>
              <div className="flex-1 flex items-center gap-4">
                <BarFill pct={m.value} delay={i * 0.12} />
                <span className="text-base font-normal w-12 text-right flex-shrink-0 text-[#E1E0CC]">
                  <CountUp to={m.value} suffix="%" delay={i * 0.12} />
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5">
          {statCards.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center bg-[#101010] border border-white/[0.08]"
            >
              <p className="text-4xl sm:text-5xl font-normal mb-2 text-[#E1E0CC]">
                <CountUp to={c.value} suffix={c.suffix} delay={i * 0.1} />
              </p>
              <p className="text-sm leading-snug text-gray-500">{c.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Environmental
