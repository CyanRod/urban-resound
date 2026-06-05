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
          containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] justify-center mb-4"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="font-sans font-medium text-base sm:text-lg max-w-xl mx-auto mb-5"
          style={{ color: 'rgba(200,145,74,0.8)' }}
        >
          Cada conversación es el primer paso de un cambio real.
          Cuéntanos tu historia.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
            href="mailto:dannytapia196@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-sm font-medium text-black transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#C8914A' }}
          >
            Contáctanos
          </a>
          <button
            onClick={() => window.open('https://wa.me/+593962559001?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Urban%20ReSound', '_blank', 'noopener,noreferrer')}
            className="inline-flex items-center justify-center gap-2 rounded-full px-10 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#25D366' }}
          >
            <svg viewBox="0 0 32 32" width="16" height="16" fill="white">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.83 1.789 6.863L2 30l7.352-1.768A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 18.883c-.344-.172-2.037-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.892 1.118-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.713-2.039-1.913-2.383-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.431-.029-.603-.086-.172-.777-1.875-1.065-2.566-.28-.673-.565-.582-.777-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.869s1.234 3.328 1.406 3.558c.172.23 2.428 3.707 5.882 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.168.137.66-.099 2.037-.832 2.322-1.635.287-.803.287-1.492.201-1.635-.086-.143-.316-.23-.66-.402z" />
            </svg>
            WhatsApp
          </button>
          <button
            onClick={() => document.querySelector('#dona')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm font-medium transition-all duration-200 active:scale-95 border text-[#E1E0CC]"
            style={{ borderColor: 'rgba(200,145,74,0.4)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(200,145,74,0.7)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(200,145,74,0.4)')}
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
            'Yachay Tech University',
          ].map((tag) => (
            <div key={tag} className="text-xs text-gray-600">{tag}</div>
          ))}
          <a
            href="https://wa.me/593962559001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors duration-150 flex items-center gap-1.5"
            style={{ color: 'rgba(200,145,74,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C8914A')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(200,145,74,0.7)')}
          >
            <svg viewBox="0 0 32 32" width="12" height="12" fill="currentColor">
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.83 1.789 6.863L2 30l7.352-1.768A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm6.29 18.883c-.344-.172-2.037-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.892 1.118-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.713-2.039-1.913-2.383-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.431-.029-.603-.086-.172-.777-1.875-1.065-2.566-.28-.673-.565-.582-.777-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.869s1.234 3.328 1.406 3.558c.172.23 2.428 3.707 5.882 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.168.137.66-.099 2.037-.832 2.322-1.635.287-.803.287-1.492.201-1.635-.086-.143-.316-.23-.66-.402z" />
            </svg>
            +593 96 255 9001 · WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact
