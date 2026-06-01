import React from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="bg-black py-24 sm:py-32 lg:py-40 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label block mb-6"
        >
          Contacto
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: '¿Quieres construir un futuro más', className: 'text-[#E1E0CC]' },
            { text: 'sostenible?', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] justify-center mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 text-gray-400"
        >
          Urban ReSound transforma residuos en soluciones acústicas sostenibles para
          ciudades más responsables y comunidades con mayores oportunidades.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="mailto:urbanresound@yachaytech.edu.ec"
            className="inline-flex items-center justify-center gap-2 bg-primary rounded-full px-10 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:opacity-90 active:scale-95"
          >
            Contáctanos
          </a>
          <button
            onClick={() => document.querySelector('#dona')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm font-medium transition-all duration-200 hover:border-primary/40 active:scale-95 border border-white/20 text-[#E1E0CC]"
          >
            Quiero donar
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            'Urcuquí – Imbabura – Ecuador',
            'Impacto social en Quisapincha – Tungurahua',
            '+593 96 255 9001',
            'Yachay Tech University',
          ].map((tag) => (
            <div key={tag} className="text-xs text-gray-600">{tag}</div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
