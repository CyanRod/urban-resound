import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const benefits = [
  'Mejorar la calidad acústica de espacios interiores',
  'Reducir residuos contaminantes',
  'Disminuir la huella de carbono en construcción',
  'Generar ingresos comunitarios sostenibles',
  'Fortalecer modelos de economía circular',
  'Contribuir al aislamiento térmico de edificaciones',
]

const Solution: React.FC = () => {
  return (
    <section id="solucion" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Nuestra Solución
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Paneles acústicos', className: 'text-[#E1E0CC]' },
            { text: 'sostenibles.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/panel.png"
              alt="Panel acústico sostenible Urban ReSound"
              className="w-full h-full object-cover"
              style={{ maxHeight: '480px' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-2xl sm:text-3xl font-normal mb-5 text-[#E1E0CC]">
              Fabricados con{' '}
              <em className="font-serif italic text-gray-400">lo que otros descartan</em>
            </h3>
            <p className="text-base leading-relaxed mb-8 text-gray-400">
              Urban ReSound desarrolla paneles acústicos sostenibles utilizando materiales
              reciclados y bioadhesivos de origen vegetal, producidos en el corazón de la
              comunidad de Quisapincha.
            </p>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  </span>
                  <span className="text-sm text-gray-400">{b}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden relative"
        >
          <img
            src="/materiales.png"
            alt="Los tres materiales: cuero, plástico reciclado y bioadhesivos vegetales"
            className="w-full object-cover"
            style={{ maxHeight: '380px', objectPosition: 'center' }}
          />
          <div
            className="absolute inset-0 flex items-end"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)' }}
          >
            <div className="p-8 w-full">
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  'Residuos de cuero triturado',
                  'Plástico reciclado como refuerzo estructural',
                  'Bioadhesivos sostenibles de origen vegetal',
                ].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-full px-4 py-2"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="text-[#E1E0CC] text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Solution
