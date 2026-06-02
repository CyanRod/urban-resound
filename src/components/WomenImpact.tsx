import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const roles = ['Clasificación de materiales', 'Operación de maquinaria', 'Prensado', 'Secado', 'Control de calidad']
const outcomes = ['Independencia económica', 'Capacitación técnica', 'Fortalecimiento familiar', 'Reducción de vulnerabilidad económica', 'Liderazgo comunitario']

const phases = [
  { phase: 'Fase piloto', workers: '5 mujeres', detail: 'Inicio de operaciones productivas' },
  { phase: 'Consolidación', workers: '10 a 15 mujeres', detail: 'Primeros contratos permanentes' },
  { phase: 'Producción regional', workers: '25 a 35 empleos directos', detail: 'Expansión de la red productiva' },
]

const WomenImpact: React.FC = () => {
  return (
    <section id="mujeres" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Impacto en las Mujeres
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'No dejar a', className: 'text-[#E1E0CC]' },
            { text: 'nadie atrás.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden mb-14"
        >
          <img
            src={import.meta.env.BASE_URL + 'mujeres.png'}
            alt="Impacto en las mujeres de Quisapincha"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-5 text-gray-400">
              Urban ReSound priorizará la participación de{' '}
              <strong className="text-[#E1E0CC]">mujeres de Quisapincha</strong>,
              especialmente aquellas afectadas por procesos migratorios familiares.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mb-8 text-gray-400">
              La fase piloto iniciará con la incorporación de{' '}
              <strong className="text-primary/80">cinco mujeres</strong> responsables de las
              etapas clave del proceso productivo.
            </p>
            <h4 className="text-sm font-normal mb-4 text-[#E1E0CC]">Roles en la cadena de producción</h4>
            <ul className="space-y-3">
              {roles.map((r) => (
                <li key={r} className="flex items-center gap-4">
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-4">
            {phases.map((item, i) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl p-6 bg-[#101010] border border-white/[0.08]"
              >
                <p className="text-[10px] font-medium uppercase tracking-widest mb-1 text-primary/50">{item.phase}</p>
                <p className="text-xl font-normal text-[#E1E0CC]">{item.workers}</p>
                <p className="text-xs mt-1 text-gray-500">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
        >
          <h3 className="text-xl font-normal text-[#E1E0CC] text-center mb-8">Impacto esperado en las trabajadoras</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((o) => (
              <div
                key={o}
                className="rounded-full px-5 py-2.5 border border-white/[0.1]"
              >
                <span className="text-gray-400 text-sm">{o}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WomenImpact
