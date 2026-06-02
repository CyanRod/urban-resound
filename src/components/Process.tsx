import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const steps = [
  { num: '01', title: 'Recolección', desc: 'Recolección de residuos de cuero y plástico reciclado de talleres y comunidades de Quisapincha.', img: import.meta.env.BASE_URL + 'proceso1.png' },
  { num: '02', title: 'Clasificación y limpieza', desc: 'Clasificación y limpieza minuciosa de los materiales para garantizar calidad y consistencia en el producto final.', img: import.meta.env.BASE_URL + 'proceso2.png' },
  { num: '03', title: 'Trituración y procesamiento', desc: 'Trituración y procesamiento mecánico de los residuos hasta obtener la granulometría óptima para los paneles.', img: import.meta.env.BASE_URL + 'proceso3.png' },
  { num: '04', title: 'Incorporación de bioadhesivos', desc: 'Mezcla homogénea de materiales con bioadhesivos sostenibles de origen vegetal, 100% naturales y libres de compuestos tóxicos.', img: import.meta.env.BASE_URL + 'proceso4.png' },
  { num: '05', title: 'Prensado y secado', desc: 'Prensado en moldes estándar y secado controlado para consolidar la estructura y resistencia del panel.', img: import.meta.env.BASE_URL + 'proceso5.png' },
  { num: '06', title: 'Producción de paneles acústicos', desc: 'Paneles listos para distribución con control de calidad integral.', img: import.meta.env.BASE_URL + 'proceso6.png' },
  { num: '07', title: 'Comercialización', desc: 'Distribución B2B y B2C a constructoras, diseñadores y consumidores finales.', img: import.meta.env.BASE_URL + 'proceso7.png' },
  { num: '08', title: 'Impacto económico, social y ambiental', desc: 'Generación de empleo, reducción de residuos y beneficio comunitario medible.', img: import.meta.env.BASE_URL + 'proceso8.png' },
]

const Process: React.FC = () => {
  return (
    <section id="proceso" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-4"
        >
          Cómo Funciona
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'De residuos a', className: 'text-[#E1E0CC]' },
            { text: 'soluciones acústicas.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-500 max-w-lg mb-16"
        >
          Un proceso circular que convierte lo que antes era descarte en valor real para
          la comunidad y el medioambiente.
        </motion.p>

        <div className="space-y-14">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}
              >
                <img
                  src={step.img}
                  alt={`Paso ${step.num}: ${step.title}`}
                  className="w-full object-cover"
                  style={{ height: '300px' }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={i % 2 === 1 ? 'lg:col-start-1' : ''}
              >
                <div className="inline-flex items-center gap-3 rounded-full px-4 py-1.5 mb-5 bg-[#101010] border border-white/[0.08]">
                  <span className="text-[10px] font-medium text-primary/60 tracking-widest">{step.num}</span>
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">Paso {step.num}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-normal mb-4 text-[#E1E0CC]">{step.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-400">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Process
