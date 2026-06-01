import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const benefits = [
  { num: '01', title: 'Reducción de ruido', desc: 'Disminuye la transmisión de ruido entre departamentos y espacios, mejorando la privacidad.' },
  { num: '02', title: 'Mejor calidad de vida', desc: 'Ambientes más silenciosos favorecen la concentración, el descanso y el bienestar general.' },
  { num: '03', title: 'Control de reverberación', desc: 'Reducimos el eco en espacios interiores, mejorando la acústica de salas, oficinas y hogares.' },
  { num: '04', title: 'Confort térmico', desc: 'Nuestros paneles contribuyen al aislamiento térmico, reduciendo pérdidas de calor en edificaciones.' },
  { num: '05', title: 'Materiales sostenibles', desc: 'A diferencia de los paneles convencionales, incorporamos residuos reciclados y bioadhesivos vegetales.' },
  { num: '06', title: 'Alternativa innovadora', desc: 'Aprovechamos residuos que normalmente contaminarían el ambiente, dándoles nuevo valor productivo.' },
]

const WhyUs: React.FC = () => {
  return (
    <section id="por-que" className="bg-black py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          ¿Por qué nuestros paneles?
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Construcción sostenible y', className: 'text-[#E1E0CC]' },
            { text: 'bienestar urbano.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-14"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg leading-relaxed mb-6 text-gray-400"
            >
              El crecimiento urbano genera cada vez más viviendas y departamentos donde uno
              de los problemas más frecuentes es el ruido entre espacios interiores.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-xl p-5 mb-8 bg-[#101010] border border-white/[0.08]"
            >
              <p className="font-medium text-[#E1E0CC]">Ruido excesivo entre espacios interiores</p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  className="rounded-xl p-5 bg-[#101010] border border-white/[0.08]"
                >
                  <p className="text-[10px] font-medium mb-2 text-primary/50 tracking-widest uppercase">{b.num}</p>
                  <h3 className="text-sm font-normal mb-1 text-[#E1E0CC]">{b.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/aplicacion.jpg"
              alt="Panel acústico instalado en departamento moderno"
              className="w-full h-full object-cover"
              style={{ minHeight: '480px', maxHeight: '620px' }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl p-8 sm:p-10 text-center bg-[#101010] border border-white/[0.08]"
        >
          <p className="text-lg sm:text-xl font-normal text-[#E1E0CC] max-w-3xl mx-auto leading-snug">
            Más que un panel acústico — una solución integral que conecta{' '}
            <em className="font-serif italic text-gray-400">
              economía circular, innovación ambiental, inclusión social y desarrollo comunitario.
            </em>
          </p>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyUs
