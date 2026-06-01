import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle'

const donationItems = ['Botellas plásticas', 'Residuos de cuero', 'Retazos industriales', 'Materiales reutilizables']
const communityUses = ['Escuelas rurales', 'Centros comunitarios', 'Espacios educativos', 'Infraestructura social', 'Comunidades andinas afectadas por frío']

const Donate: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) setSubmitted(true)
  }

  return (
    <section id="dona" className="bg-[#080808] py-20 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(222,219,200,0.03) 0%, transparent 60%)' }}
      />
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label block mb-4"
            >
              Dona y sé parte del cambio
            </motion.span>
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Dona residuos y construye un', className: 'text-[#E1E0CC]' },
                { text: 'futuro sostenible.', className: 'text-gray-500' },
              ]}
              containerClassName="text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.15] mb-6"
            />
            <p className="text-sm sm:text-base mb-8 leading-relaxed text-gray-400">
              Si vives en Ecuador puedes apoyar a Urban ReSound mediante la donación de
              materiales reciclables. Cada material donado será transformado en nuevos
              paneles acústicos sostenibles mediante nuestro modelo de economía circular.
            </p>

            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-3 text-primary/50">Materiales aceptados</h4>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {donationItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl p-3 bg-white/[0.04] border border-white/[0.08]"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-3 text-primary/50">Destino de los paneles desarrollados</h4>
            <div className="flex flex-wrap gap-2">
              {communityUses.map((u) => (
                <span
                  key={u}
                  className="rounded-full px-3 py-1.5 text-xs text-gray-500 border border-white/[0.1]"
                >
                  {u}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-8 sm:p-10 bg-[#101010] border border-white/[0.08]"
          >
            {!submitted ? (
              <>
                <h3 className="text-2xl font-normal mb-2 text-[#E1E0CC]">Quiero donar</h3>
                <p className="text-sm mb-6 text-gray-500">Déjanos tus datos y nos contactaremos contigo.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: 'Nombre completo', key: 'name', type: 'text', placeholder: 'Tu nombre', value: name, setter: setName },
                    { label: 'Correo electrónico', key: 'email', type: 'email', placeholder: 'tu@correo.com', value: email, setter: setEmail },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-xs font-medium mb-1.5 text-gray-400">{field.label}</label>
                      <input
                        type={field.type}
                        value={field.value}
                        onChange={(e) => field.setter(e.target.value)}
                        placeholder={field.placeholder}
                        required
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 bg-black border border-white/[0.1] text-[#E1E0CC] placeholder-gray-700 focus:border-primary/40"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-400">Ciudad (opcional)</label>
                    <input
                      type="text"
                      placeholder="Tu ciudad en Ecuador"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 bg-black border border-white/[0.1] text-[#E1E0CC] placeholder-gray-700 focus:border-primary/40"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl py-3.5 text-sm font-medium text-black transition-all duration-200 hover:opacity-90 active:scale-95 bg-primary"
                  >
                    Enviar mis datos
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-normal mb-3 text-[#E1E0CC]">Gracias, {name}</h3>
                <p className="text-sm text-gray-500">Nos pondremos en contacto contigo pronto para coordinar tu donación.</p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Donate
