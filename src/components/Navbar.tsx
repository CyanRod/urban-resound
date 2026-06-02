import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Inicio',    href: '/' },
  { label: 'Problema',  href: '/problema' },
  { label: 'Solución',  href: '/solucion' },
  { label: 'Proceso',   href: '/proceso' },
  { label: 'Impacto',   href: '/impacto' },
  { label: 'ODS',       href: '/ods' },
  { label: 'Equipo',    href: '/equipo' },
  { label: 'Contacto',  href: '/contacto' },
]

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (href: string) => {
    setMenuOpen(false)
    navigate(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  return (
    <>
      {/* Floating pill — always visible */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center">
        <div className="bg-black border-x border-b border-white/[0.1] rounded-b-2xl md:rounded-b-3xl px-5 md:px-8 py-2.5 flex items-center gap-3 sm:gap-6 lg:gap-10">

          {/* Logo */}
          <button
            onClick={() => handleNav('/')}
            className="text-sm font-medium flex-shrink-0 focus:outline-none"
            style={{ color: '#E1E0CC', fontFamily: 'Almarai, sans-serif' }}
          >
            Urban Re<span style={{ opacity: 0.55 }}>Sound</span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="text-[11px] sm:text-xs transition-colors duration-150 focus:outline-none"
                style={{
                  color: isActive(item.href) ? '#E1E0CC' : 'rgba(225,224,204,0.45)',
                  letterSpacing: '0.01em',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Dona CTA */}
          <button
            onClick={() => handleNav('/dona')}
            className="hidden sm:block text-[11px] font-medium px-4 py-1.5 rounded-full bg-primary hover:opacity-90 transition-opacity duration-200 flex-shrink-0"
            style={{ color: '#000' }}
          >
            Dona
          </button>

          {/* Hamburger */}
          <button
            className="lg:hidden p-1 focus:outline-none flex-shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            style={{ color: '#E1E0CC' }}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-40 lg:hidden transition-transform duration-300"
        style={{
          width: 'min(85%, 320px)',
          backgroundColor: '#0a0a0a',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          paddingTop: '5rem',
        }}
      >
        <ul className="px-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNav(item.href)}
                className="w-full text-left py-3 text-sm transition-colors duration-150 focus:outline-none"
                style={{ color: isActive(item.href) ? '#E1E0CC' : 'rgba(225,224,204,0.45)' }}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li className="pt-4">
            <button
              onClick={() => handleNav('/dona')}
              className="w-full py-3 text-sm font-medium rounded-full bg-primary hover:opacity-90 transition-opacity duration-200"
              style={{ color: '#000' }}
            >
              Dona
            </button>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar
