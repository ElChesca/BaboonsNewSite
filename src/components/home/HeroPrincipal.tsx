import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { heroCards, heroImageSrc } from '../../content/heroCards'

export function HeroPrincipal() {
  return (
    <section className="border-b border-line bg-bg">
      <h1 className="sr-only">Baboons ERP — Plataforma ERP multi-negocio para Argentina</h1>
      <Container className="py-6 sm:py-10">
        <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-lift)] ring-1 ring-line">
          <img
            src={heroImageSrc}
            alt="Baboons ERP — soluciones por industria: gastronomía, distribución, manufactura, neumáticos, eventos, concesionarias y más"
            className="block w-full"
            width={1600}
            height={900}
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
                className="group relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                aria-label={card.label}
              >
                <span className="sr-only">{card.label}</span>
                <span
                  className="absolute inset-0 bg-brand/0 transition-colors duration-200 group-hover:bg-brand/10 group-focus-visible:bg-brand/10"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
