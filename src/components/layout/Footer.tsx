import { Link } from 'react-router-dom'
import { Container } from './Container'

const columnas = [
  {
    titulo: 'Producto',
    links: [
      { to: '/producto', label: 'Visión general' },
      { to: '/modulos', label: 'Módulos' },
      { to: '/verticales', label: 'Verticales' },
      { to: '/precios', label: 'Precios' },
    ],
  },
  {
    titulo: 'Verticales',
    links: [
      { to: '/verticales/gastronomia', label: 'Gastronomía' },
      { to: '/verticales/distribucion', label: 'Distribución' },
      { to: '/verticales/logistica', label: 'Logística' },
      { to: '/verticales/concesionarias', label: 'Concesionarias' },
    ],
  },
  {
    titulo: 'Empresa',
    links: [
      { to: '/nosotros', label: 'Nosotros' },
      { to: '/casos-de-exito', label: 'Casos de éxito' },
      { to: '/contacto', label: 'Contacto' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-extrabold tracking-tight text-ink">
              Baboons<span className="text-brand">.Co</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Plataforma ERP multi-negocio. Tecnología local, respaldo presencial.
            </p>
            <p className="mt-4 text-sm text-subtle">San Luis · Argentina</p>
          </div>

          {columnas.map((columna) => (
            <nav key={columna.titulo} aria-label={columna.titulo}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-subtle">
                {columna.titulo}
              </h2>
              <ul className="mt-4 space-y-2">
                {columna.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Baboons.Co · Con el apoyo de Logica</span>
          <span className="flex gap-4">
            <Link to="/legal/privacidad" className="hover:text-brand">
              Privacidad
            </Link>
            <Link to="/legal/terminos" className="hover:text-brand">
              Términos
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  )
}
