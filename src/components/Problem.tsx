import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const envItems = ['Retazos de cuero', 'Residuos de corte', 'Polvo de lijado', 'Plástico industrial', 'Desperdicios industriales']
const socialItems = ['Falta de oportunidades sostenibles', 'Limitadas fuentes de ingreso', 'Dependencia económica tradicional', 'Escasas oportunidades de innovación']

const Problem: React.FC = () => {
  return (
    <section id="problema" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          El Problema
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'El problema que queremos', className: 'text-[#E1E0CC]' },
            { text: 'transformar.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden"
          >
            <video
              autoPlay muted loop playsInline
              className="w-full h-full object-cover"
              style={{ maxHeight: '420px' }}
            >
              <source src={import.meta.env.BASE_URL + 'problema.mp4'} type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-base sm:text-lg leading-relaxed mb-5 text-gray-400">
              La provincia de Tungurahua constituye uno de los principales centros manufactureros
              relacionados con cuero en Ecuador. La parroquia rural de{' '}
              <strong className="text-[#E1E0CC]">Quisapincha</strong> es reconocida
              nacionalmente por la elaboración de chompas, bolsos, cinturones, calzado y
              diversos productos derivados del cuero.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-400">
              Sin embargo, este crecimiento productivo genera dos problemáticas importantes que
              Urban ReSound busca transformar en oportunidad.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            {
              title: 'Problema ambiental',
              img: import.meta.env.BASE_URL + 'problema-residuos.png',
              alt: 'Residuos del taller de cuero en Quisapincha',
              desc: 'Cada año grandes cantidades de residuos industriales son eliminados sin procesos adecuados de reutilización:',
              items: envItems,
            },
            {
              title: 'Problema social',
              img: import.meta.env.BASE_URL + 'comunidad.png',
              alt: 'Familia de Quisapincha',
              desc: 'Quisapincha presenta un fuerte fenómeno de migración de jóvenes y adultos económicamente activos debido a:',
              items: socialItems,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-[#101010] border border-white/[0.08]"
            >
              <img
                src={card.img}
                alt={card.alt}
                className="w-full object-cover"
                style={{ height: '200px' }}
              />
              <div className="p-7">
                <h3 className="text-xl font-normal mb-3 text-[#E1E0CC]">{card.title}</h3>
                <p className="text-sm mb-4 leading-relaxed text-gray-500">{card.desc}</p>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 text-center bg-[#101010] border border-white/[0.08]"
        >
          <p className="text-lg sm:text-xl font-normal text-[#E1E0CC] max-w-3xl mx-auto leading-snug">
            Urban ReSound nace para transformar esta problemática en una oportunidad de
            innovación sostenible, fortalecimiento comunitario y desarrollo económico local.
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default Problem
