import React from 'react'
import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Problema', href: '#problema' },
  { label: 'Solución', href: '#solucion' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Mujeres', href: '#mujeres' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'ODS', href: '#ods' },
  { label: 'Visión 2030', href: '#vision' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contacto', href: '#contacto' },
]

const badges = ['Economía circular', 'Biomateriales sostenibles', 'Inclusión social', 'ODS 11 y 12', 'ODS 5, 9 y 13']

const Footer: React.FC = () => {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-black border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="py-16 grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-medium mb-3" style={{ color: '#E1E0CC' }}>
              Urban Re<span style={{ opacity: 0.45 }}>Sound</span>
            </h3>
            <p className="font-sans font-medium text-sm leading-relaxed mb-4" style={{ color: 'rgba(200,145,74,0.7)' }}>
              "Transformando residuos en ciudades sostenibles."
            </p>
            <p className="text-sm leading-relaxed mb-6 text-gray-600">
              Construyendo oportunidades mediante innovación, sostenibilidad y desarrollo comunitario.
            </p>
            <p className="text-xs text-gray-600">Urcuquí · Imbabura · Ecuador</p>
            <p className="text-xs text-gray-600 mt-1">Impacto en Quisapincha · Tungurahua</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-6" style={{ color: 'rgba(200,145,74,0.6)' }}>
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs text-gray-500 hover:text-[#C8914A] transition-colors duration-150 focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-6" style={{ color: 'rgba(200,145,74,0.6)' }}>
              Compromisos
            </h4>
            <div className="space-y-3">
              {badges.map((b) => (
                <div key={b} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'rgba(200,145,74,0.5)' }} />
                  <span className="text-xs text-gray-500">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-white/[0.05]">
          <p className="text-[11px] text-gray-700">© 2026 Urban ReSound · Yachay Tech University · Ecuador</p>
          <p className="text-[11px] text-gray-700">Hecho para un Ecuador sostenible</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
