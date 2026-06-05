import React, { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Heart, Loader2, Mail, User, ChevronDown, MessageSquare } from 'lucide-react'
import { sendDonation } from '../utils/sendEmail'
import { ECUADOR } from '../data/ecuador'
import type { City } from '../data/ecuador'

const EcuadorMap = lazy(() => import('./EcuadorMap'))

const WARM = '#C8914A'

const EMAIL_DOMAINS = [
  'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com',
  'icloud.com', 'live.com', 'protonmail.com', 'mail.com',
  'yahoo.es', 'hotmail.es', 'live.com.mx', 'yahoo.com.mx',
  'hotmail.ec', 'gmail.ec',
]

function getEmailSuggestions(value: string): string[] {
  if (!value.includes('@')) return []
  const [user, partial] = value.split('@')
  if (!user) return []
  return EMAIL_DOMAINS
    .filter((d) => d.toLowerCase().startsWith((partial || '').toLowerCase()))
    .map((d) => `${user}@${d}`)
    .slice(0, 5)
}

interface Props {
  variant?: 'section' | 'page'
  onCancel?: () => void
}

const DonationForm: React.FC<Props> = ({ variant = 'section', onCancel }) => {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [province, setProvince] = useState('')
  const [cityName, setCityName] = useState('')
  const [message, setMessage]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]   = useState(false)
  const [error, setError]       = useState('')

  // Email suggestions
  const [emailSugs, setEmailSugs]         = useState<string[]>([])
  const [emailFocused, setEmailFocused]   = useState(false)
  const [emailIdx, setEmailIdx]           = useState(-1)

  // Derived: selected city object for the map
  const selectedProvinceData = ECUADOR.find((p) => p.name === province)
  const selectedCity: City | null = selectedProvinceData?.cities.find((c) => c.name === cityName) ?? null

  // Reset city when province changes
  useEffect(() => { setCityName('') }, [province])

  // Email autocomplete
  useEffect(() => {
    setEmailSugs(emailFocused ? getEmailSuggestions(email) : [])
    setEmailIdx(-1)
  }, [email, emailFocused])

  const handleEmailKey = (e: React.KeyboardEvent) => {
    if (!emailSugs.length) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setEmailIdx((i) => Math.min(i + 1, emailSugs.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setEmailIdx((i) => Math.max(i - 1, -1)) }
    if (e.key === 'Enter' && emailIdx >= 0) { e.preventDefault(); setEmail(emailSugs[emailIdx]); setEmailSugs([]) }
    if (e.key === 'Escape') setEmailSugs([])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setSending(true)
    setError('')
    try {
      await sendDonation({
        nombre: name,
        email,
        ...(cityName && province ? { ciudad: `${cityName}, ${province}` } : province ? { ciudad: province } : {}),
        ...(message ? { mensaje: message } : {}),
      })
      setSubmitted(true)
    } catch {
      setError('Hubo un error al enviar. Por favor intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm outline-none bg-black border text-[#E1E0CC] placeholder-gray-700 transition-colors duration-200 appearance-none"
  const inputStyle = { borderColor: 'rgba(200,145,74,0.25)' }
  const onFocusIn  = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'rgba(200,145,74,0.65)')
  const onFocusOut = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = 'rgba(200,145,74,0.25)')

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center py-6"
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ border: `1px solid ${WARM}55` }}>
          <Heart size={22} style={{ color: WARM }} />
        </div>
        <h4 className={`font-sans font-medium text-[#E8E6D4] mb-2 ${variant === 'page' ? 'text-2xl' : 'text-xl'}`}>
          Gracias, {name}.
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed">
          Te hemos enviado un correo de confirmación.<br />
          Pronto nos pondremos en contacto contigo desde {cityName}.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Nombre */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-medium mb-1.5 text-gray-400">
          <User size={11} style={{ color: WARM }} />
          Nombre completo
        </label>
        <input
          type="text" value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Tu nombre" required autoComplete="name"
          className={inputClass} style={inputStyle}
          onFocus={onFocusIn} onBlur={onFocusOut}
        />
      </div>

      {/* Email con autocompletado de dominio */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-medium mb-1.5 text-gray-400">
          <Mail size={11} style={{ color: WARM }} />
          Correo electrónico
        </label>
        <div className="relative">
          <input
            type="text" value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={(e) => { setEmailFocused(true); onFocusIn(e) }}
            onBlur={(e) => { setTimeout(() => setEmailFocused(false), 150); onFocusOut(e) }}
            onKeyDown={handleEmailKey}
            placeholder="tu@correo.com" required autoComplete="email"
            className={inputClass} style={inputStyle}
          />
          <AnimatePresence>
            {emailSugs.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 right-0 top-full mt-1 rounded-xl overflow-hidden z-50 shadow-xl"
                style={{ background: '#111', border: '1px solid rgba(200,145,74,0.25)' }}
              >
                {emailSugs.map((s, i) => (
                  <li key={s}>
                    <button
                      type="button"
                      onMouseDown={() => { setEmail(s); setEmailSugs([]) }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-100"
                      style={{
                        color: i === emailIdx ? '#000' : '#E1E0CC',
                        background: i === emailIdx ? WARM : 'transparent',
                      }}
                    >
                      <span style={{ color: i === emailIdx ? 'rgba(0,0,0,0.6)' : 'rgba(200,200,200,0.5)' }}>{s.split('@')[0]}</span>
                      <span style={{ color: i === emailIdx ? '#000' : WARM }}>@{s.split('@')[1]}</span>
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Provincia */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-medium mb-1.5 text-gray-400">
          <ChevronDown size={11} style={{ color: WARM }} />
          Provincia <span className="text-gray-600 ml-1">(opcional)</span>
        </label>
        <div className="relative">
          <select
            value={province} onChange={(e) => setProvince(e.target.value)}
            className={inputClass + ' pr-8 cursor-pointer'}
            style={{ ...inputStyle, color: province ? '#E1E0CC' : '#4b5563' }}
            onFocus={onFocusIn} onBlur={onFocusOut}
          >
            <option value="" disabled style={{ color: '#4b5563', background: '#000' }}>
              Selecciona tu provincia
            </option>
            {ECUADOR.map((p) => (
              <option key={p.name} value={p.name} style={{ background: '#111', color: '#E1E0CC' }}>
                {p.name}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: WARM }} />
        </div>
      </div>

      {/* Ciudad */}
      <AnimatePresence>
        {province && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <label className="flex items-center gap-1.5 text-xs font-medium mb-1.5 text-gray-400">
              <ChevronDown size={11} style={{ color: WARM }} />
              Ciudad
            </label>
            <div className="relative">
              <select
                value={cityName} onChange={(e) => setCityName(e.target.value)}
                className={inputClass + ' pr-8 cursor-pointer'}
                style={{ ...inputStyle, color: cityName ? '#E1E0CC' : '#4b5563' }}
                onFocus={onFocusIn} onBlur={onFocusOut}
              >
                <option value="" disabled style={{ color: '#4b5563', background: '#000' }}>
                  Selecciona tu ciudad
                </option>
                {selectedProvinceData?.cities.map((c) => (
                  <option key={c.name} value={c.name} style={{ background: '#111', color: '#E1E0CC' }}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: WARM }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mapa interactivo */}
      <AnimatePresence>
        {province && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Suspense fallback={
              <div className="h-64 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(200,145,74,0.05)', border: '1px solid rgba(200,145,74,0.15)' }}>
                <Loader2 size={20} className="animate-spin" style={{ color: WARM }} />
              </div>
            }>
              <EcuadorMap city={selectedCity} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mensaje opcional */}
      <div>
        <label className="flex items-center gap-1.5 text-xs font-medium mb-1.5 text-gray-400">
          <MessageSquare size={11} style={{ color: WARM }} />
          Mensaje <span className="text-gray-600 ml-1">(opcional)</span>
        </label>
        <div className="relative">
          <textarea
            value={message} onChange={(e) => setMessage(e.target.value)}
            placeholder="¿Qué materiales tienes para donar? ¿Algo que quieras contarnos…?"
            rows={3}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none bg-black border text-[#E1E0CC] placeholder-gray-700 transition-colors duration-200 resize-none"
            style={inputStyle}
            onFocus={onFocusIn} onBlur={onFocusOut}
          />
        </div>
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <button
        type="submit" disabled={sending}
        className="w-full rounded-xl py-3.5 text-sm font-medium text-black transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ background: WARM }}
      >
        {sending
          ? <><Loader2 size={14} className="animate-spin" /> Enviando…</>
          : <><ArrowRight size={14} /> Enviar mis datos</>
        }
      </button>

      {onCancel && (
        <button
          type="button" onClick={onCancel}
          className="w-full text-xs text-gray-600 hover:text-gray-400 transition-colors pt-1"
        >
          Cancelar
        </button>
      )}
    </form>
  )
}

export default DonationForm
