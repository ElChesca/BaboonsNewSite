import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '../ui/Logo'

const links = [
  { to: '/producto', label: 'Producto' },
  { to: '/modulos', label: 'Módulos' },
  { to: '/verticales', label: 'Verticales' },
  { to: '/casos-de-exito', label: 'Casos de éxito' },
  { to: '/precios', label: 'Precios' },
  { to: '/nosotros', label: 'Nosotros' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Solicitar demo
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </Container>

      {open ? (
        <nav aria-label="Navegación principal" className="border-t border-line bg-surface lg:hidden">
          <Container className="flex flex-col py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm font-medium ${isActive ? 'text-brand' : 'text-muted'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Solicitar demo
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
