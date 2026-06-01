import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'
import CountUp from './animations/CountUp'

const actors = ['Talleres proveedores de cuero', 'Recicladores locales', 'Productores agrícolas', 'Transportistas', 'Mujeres emprendedoras', 'Jóvenes de la comunidad']
const impacts = ['Educación', 'Transporte', 'Alimentación', 'Capacitación', 'Reducción de migración', 'Fortalecimiento comunitario']

const stats = [
  { prefix: '$', value: 8100, suffix: '', label: 'Beneficio comunitario mensual', sub: 'fase piloto', thousands: true },
  { prefix: '', value: 30, suffix: '', label: 'Familias beneficiadas', sub: 'directamente', thousands: false },
  { prefix: '$', value: 270, suffix: '', label: 'Ingreso promedio', sub: 'por familia al mes', thousands: false },
]

const Community: React.FC = () => {
  return (
    <section id="comunidad" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Impacto Comunitario
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Cómo ayudamos a', className: 'text-[#E1E0CC]' },
            { text: 'Quisapincha.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/economia-circular.png"
              alt="Diagrama de economía circular comunitaria"
              className="w-full object-cover"
              style={{ maxHeight: '440px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-gray-400">
              Nuestro modelo funciona mediante{' '}
              <strong className="text-[#E1E0CC]">economía circular comunitaria</strong>,
              integrando a todos los actores locales dentro de la cadena de valor de Urban ReSound.
            </p>
            <ul className="space-y-3">
              {actors.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-4 rounded-xl px-5 py-3 bg-[#101010] border border-white/[0.08]"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl p-8 text-center bg-[#101010] border border-white/[0.08]"
            >
              <p className="text-4xl sm:text-5xl font-normal mb-2 text-[#E1E0CC]">
                <CountUp
                  to={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  thousands={s.thousands}
                  delay={i * 0.1}
                />
              </p>
              <p className="text-sm font-medium text-gray-400">{s.label}</p>
              <p className="text-xs mt-1 text-gray-600">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
        >
          <h3 className="text-xl font-normal text-[#E1E0CC] text-center mb-8">El beneficio comunitario apoya directamente:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {impacts.map((imp) => (
              <div
                key={imp}
                className="rounded-full px-5 py-2.5 border border-white/[0.1]"
              >
                <span className="text-gray-400 text-sm">{imp}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Community
