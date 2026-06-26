import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { heroCards, heroImageSrc } from '../../content/heroCards'

export function HeroPrincipal() {
  return (
    <section className="border-b border-line bg-bg">
      <h1 className="sr-only">Baboons ERP — Plataforma ERP multi-negocio para Argentina</h1>
      <Container className="py-5 sm:py-8">
        <figure className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-xl shadow-[var(--shadow-lift)] ring-1 ring-line sm:rounded-2xl">
          <img
            src={heroImageSrc}
            alt="Baboons ERP — soluciones por industria: gastronomía, distribución, manufactura, neumáticos, eventos, concesionarias y más"
            className="block h-auto w-full"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
          />

          {/* Capa interactiva: cada celda del grid 3×3 enlaza a su vertical */}
          <div
            className="absolute inset-0 grid grid-cols-3 grid-rows-3"
            aria-label="Verticales de Baboons ERP"
          >
            {heroCards.map((card) => (
              <Link
                key={card.label}
                to={card.to}
                className="group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
                aria-label={card.label}
              >
                <span className="sr-only">{card.label}</span>
                <span
                  className="absolute inset-0 bg-brand/0 transition-colors duration-200 group-hover:bg-brand/15 group-focus-visible:bg-brand/15"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </figure>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
          <Button to="/contacto" size="lg">
            Solicitar demo
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button to="/verticales" variant="secondary" size="lg">
            Explorar verticales
          </Button>
        </div>
      </Container>
    </section>
  )
}
