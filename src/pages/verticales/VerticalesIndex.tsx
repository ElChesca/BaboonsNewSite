import { ArrowRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Seo } from '../../components/ui/Seo'
import { verticales } from '../../content/verticales'

export default function VerticalesIndex() {
  return (
    <>
      <Seo
        title="Verticales — Baboons ERP"
        description="Las verticales de negocio que cubre Baboons ERP: gastronomía, manufactura, distribución, neumáticos, logística, clubes premium y concesionarias."
      />
      <PageHero
        eyebrow="Verticales"
        title="Una plataforma, varios rubros"
        subtitle="Cada vertical configura los módulos del ERP para el negocio de tu cliente — no es un producto distinto, es la misma plataforma."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {verticales.map((vertical) => (
              <Card key={vertical.slug} to={`/verticales/${vertical.slug}`}>
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-bold text-ink">{vertical.nombre}</h2>
                  {vertical.destacada ? <Badge tone="brand">Nuevo</Badge> : null}
                </div>
                <p className="mt-2 text-sm text-muted">{vertical.resumen}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Ver vertical
                  <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
