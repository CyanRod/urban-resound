import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const odsItems = [
  {
    num: '11',
    color: '#FD9D24',
    title: 'Ciudades y comunidades sostenibles',
    desc: 'Promovemos soluciones para construcción sostenible, reducción de contaminación y fortalecimiento de comunidades más resilientes.',
    points: ['Mejora del bienestar acústico en viviendas', 'Espacios comunitarios más saludables', 'Materiales de construcción responsables'],
  },
  {
    num: '12',
    color: '#BF8B2E',
    title: 'Producción y consumo responsables',
    desc: 'Transformamos residuos industriales y urbanos en productos de valor agregado mediante economía circular.',
    points: ['Reutilización de residuos de cuero e industriales', 'Proceso de producción sin desechos tóxicos', 'Cadena de valor circular y comunitaria'],
  },
  {
    num: '5',
    color: '#FF3A21',
    title: 'Igualdad de género',
    desc: 'Promovemos oportunidades económicas para mujeres mediante participación activa dentro de la cadena de valor del proyecto.',
    points: ['Empleo femenino prioritario en producción', 'Capacitación técnica para mujeres', 'Reducción de vulnerabilidad económica femenina'],
  },
  {
    num: '9',
    color: '#FD6925',
    title: 'Industria, innovación e infraestructura',
    desc: 'Impulsamos innovación en biomateriales sostenibles aplicados a la construcción, desde una comunidad rural del Ecuador.',
    points: ['Innovación en biomateriales sostenibles', 'Procesos productivos responsables', 'Transferencia de tecnología comunitaria'],
  },
  {
    num: '13',
    color: '#3F7E44',
    title: 'Acción por el clima',
    desc: 'Contribuimos a reducir residuos y fomentar el aprovechamiento de materiales reciclados con menor impacto ambiental.',
    points: ['Reducción de residuos industriales', 'Materiales reciclados con menor huella de carbono', 'Bioadhesivos sin emisiones tóxicas'],
  },
]

const ODS: React.FC = () => {
  return (
    <section id="ods" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Objetivos de Desarrollo Sostenible
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Comprometidos con', className: 'text-[#E1E0CC]' },
            { text: 'los ODS.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 max-w-lg mb-10"
        >
          Urban ReSound alinea su misión con la Agenda 2030 de las Naciones Unidas para
          el desarrollo sostenible.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {odsItems.map((ods, i) => (
            <motion.div
              key={ods.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.08 }}
              className="rounded-2xl overflow-hidden bg-[#101010] border border-white/[0.08] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div
                className="px-7 py-5 flex items-center gap-4"
                style={{ backgroundColor: ods.color }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 bg-black/20">
                  {ods.num}
                </div>
                <div>
                  <p className="text-[10px] font-medium text-white/70 mb-1 tracking-widest uppercase">ODS {ods.num}</p>
                  <p className="text-sm font-semibold text-white leading-tight">{ods.title}</p>
                </div>
              </div>
              <div className="p-7">
                <p className="text-sm leading-relaxed mb-5 text-gray-500">{ods.desc}</p>
                <ul className="space-y-3">
                  {ods.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: ods.color }}
                      />
                      <span className="text-xs text-gray-500">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ODS
