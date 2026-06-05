import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const WA_URL = 'https://wa.me/+593962559001?text=Hola%2C%20me%20interesa%20donar%20materiales%20a%20Urban%20ReSound%20%F0%9F%8C%BF'

const WhatsAppButton: React.FC = () => {
  const [tooltip, setTooltip] = useState(true)

  const openWhatsApp = () => {
    setTooltip(false)
    window.open(WA_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-black shadow-lg"
            style={{ background: '#C8914A', maxWidth: '220px' }}
          >
            <span>¡Hola! Cuéntanos cómo quieres ayudar</span>
            <button
              onClick={(e) => { e.stopPropagation(); setTooltip(false) }}
              className="ml-1 opacity-60 hover:opacity-100 transition-opacity flex-shrink-0"
              aria-label="Cerrar"
            >
              <X size={13} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={openWhatsApp}
        aria-label="Contactar por WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.5 }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl cursor-pointer"
        style={{ background: '#25D366' }}
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.49.651 4.83 1.789 6.863L2 30l7.352-1.768A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.45 11.45 0 01-5.844-1.6l-.418-.249-4.363 1.05 1.086-4.25-.273-.435A11.451 11.451 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.617c-.344-.172-2.037-1.004-2.352-1.118-.316-.115-.547-.172-.777.172-.23.344-.892 1.118-1.094 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.713-2.039-1.913-2.383-.2-.344-.021-.53.15-.701.155-.154.344-.402.516-.603.172-.2.23-.344.344-.573.115-.23.058-.431-.029-.603-.086-.172-.777-1.875-1.065-2.566-.28-.673-.565-.582-.777-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.869s1.234 3.328 1.406 3.558c.172.23 2.428 3.707 5.882 5.197.822.355 1.463.567 1.963.726.824.263 1.574.226 2.168.137.66-.099 2.037-.832 2.322-1.635.287-.803.287-1.492.201-1.635-.086-.143-.316-.23-.66-.402z" />
        </svg>
      </motion.button>

    </div>
  )
}

export default WhatsAppButton
