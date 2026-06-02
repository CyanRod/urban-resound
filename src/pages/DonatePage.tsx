import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { WordsPullUpMultiStyle } from '../components/animations/WordsPullUpMultiStyle'

const donationItems = ['Botellas plásticas', 'Residuos de cuero', 'Retazos industriales', 'Materiales reutilizables']
const communityUses = ['Escuelas rurales', 'Centros comunitarios', 'Espacios educativos', 'Infraestructura social', 'Comunidades andinas afectadas por frío']

const DonatePage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}donacion.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.78)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label block mb-4"
        >
          Dona y sé parte del cambio
        </motion.span>

        <WordsPullUpMultiStyle
          segments={[
            { text: 'Dona residuos y construye un', className: 'text-[#E1E0CC]' },
            { text: 'futuro sostenible.', className: 'text-gray-500' },
          ]}
          containerClassName="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] mb-5"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-400 max-w-xl mb-16 leading-relaxed"
        >
          Si vives en Ecuador puedes apoyar a Urban ReSound mediante la donación de
          materiales reciclables. Cada material donado será transformado en nuevos
          paneles acústicos sostenibles mediante nuestro modelo de economía circular.
        </motion.p>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-3 text-primary/50">Materiales aceptados</h4>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {donationItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl p-4 bg-white/[0.05] border border-white/[0.1]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <h4 className="text-[10px] font-medium uppercase tracking-widest mb-3 text-primary/50">Destino de los paneles</h4>
            <div className="flex flex-wrap gap-2">
              {communityUses.map((u) => (
                <span
                  key={u}
                  className="rounded-full px-4 py-2 text-xs text-gray-400 border border-white/[0.12] bg-white/[0.03]"
                >
                  {u}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-8 sm:p-10 bg-black/60 border border-white/[0.1] backdrop-blur-sm"
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
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 bg-black/60 border border-white/[0.1] text-[#E1E0CC] placeholder-gray-700 focus:border-primary/40"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-gray-400">Ciudad (opcional)</label>
                    <input
                      type="text"
                      placeholder="Tu ciudad en Ecuador"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 bg-black/60 border border-white/[0.1] text-[#E1E0CC] placeholder-gray-700 focus:border-primary/40"
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
    </div>
  )
}

export default DonatePage
