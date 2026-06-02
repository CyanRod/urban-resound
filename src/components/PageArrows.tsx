import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const pages = [
  '/',
  '/problema',
  '/solucion',
  '/proceso',
  '/impacto',
  '/ods',
  '/equipo',
  '/contacto',
  '/dona',
]

const PageArrows: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const current = pages.indexOf(pathname)
  if (current === -1) return null

  const prev = current > 0 ? pages[current - 1] : null
  const next = current < pages.length - 1 ? pages[current + 1] : null

  const btnClass =
    'flex items-center justify-center w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white/60 hover:text-white hover:bg-black/80 hover:border-white/30 backdrop-blur-sm transition-all duration-200 active:scale-95'

  return (
    <>
      {prev && (
        <button
          onClick={() => { navigate(prev); window.scrollTo({ top: 0 }) }}
          className={`fixed left-3 sm:left-5 top-1/2 -translate-y-1/2 z-40 ${btnClass}`}
          aria-label="Página anterior"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {next && (
        <button
          onClick={() => { navigate(next); window.scrollTo({ top: 0 }) }}
          className={`fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 ${btnClass}`}
          aria-label="Página siguiente"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </>
  )
}

export default PageArrows
