import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { heroCards } from '../../content/heroCards'

export function HeroPrincipal() {
  return (
    <section className="border-b border-line bg-bg" aria-labelledby="hero-titulo">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            id="hero-titulo"
            className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-5xl sm:leading-tight"
          >
            La plataforma ERP multi-negocio de Argentina
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-ink-soft sm:text-lg">
            Un solo ecosistema para POS, facturación AFIP, logística, distribución y concesionarias.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contacto" size="lg">
              Solicitar demo
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/verticales" variant="secondary" size="lg">
              Explorar verticales
            </Button>
          </div>
        </div>

        <ul
          aria-label="Verticales de Baboons ERP"
          className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scroll-px-5 [scrollbar-width:thin] sm:-mx-8 sm:mt-12 sm:px-8 sm:scroll-px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0 lg:scroll-px-0"
        >
          {heroCards.map((card, index) => (
            <li key={card.nombre} className="w-[min(82vw,20.5rem)] shrink-0 snap-start lg:w-auto">
              <Link
                to={card.to}
                className="group relative block overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ring-1 ring-line transition duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:ring-line-strong"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  width={360}
                  height={214}
                  className="aspect-[360/214] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  decoding="async"
                  fetchPriority={index < 3 ? 'high' : 'auto'}
                />
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-ink from-[54%] to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="block text-base font-bold leading-tight text-white sm:text-lg">
                    {card.nombre}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-white/90">
                    {card.resuelve}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
