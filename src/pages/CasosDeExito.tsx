import { useState } from 'react'
import { Quote } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'
import { casos } from '../content/casos'
import { verticales } from '../content/verticales'

const filtros = [{ slug: 'todas', nombre: 'Todas' }, ...verticales.map((v) => ({ slug: v.slug, nombre: v.nombre }))]

export default function CasosDeExito() {
  const [filtro, setFiltro] = useState('todas')
  const visibles = filtro === 'todas' ? casos : casos.filter((caso) => caso.vertical === filtro)

  return (
    <>
      <Seo
        title="Clientes y casos de éxito — Baboons ERP"
        description="Negocios reales que ya operan con Baboons ERP: Bossio, Vita Club, Neumar, Cuyo Automotores y más."
      />
      <PageHero
        eyebrow="Clientes"
        title="Negocios reales que ya operan con Baboons"
        subtitle="Cómo distribuidoras, restaurantes y concesionarias unifican su operación sobre una sola plataforma."
      />

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap gap-2">
            {filtros.map((opcion) => (
              <button
                key={opcion.slug}
                type="button"
                onClick={() => setFiltro(opcion.slug)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  filtro === opcion.slug
                    ? 'bg-brand text-white'
                    : 'border border-line bg-surface text-muted hover:border-brand hover:text-brand'
                }`}
              >
                {opcion.nombre}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibles.map((caso) => (
              <Card key={caso.slug}>
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-bold text-ink">{caso.cliente}</h2>
                  {caso.borrador ? <Badge tone="neutral">Borrador</Badge> : null}
                </div>
                <p className="mt-1 text-xs text-subtle">{caso.rubro}</p>
                <p className="mt-3 text-sm text-muted">{caso.resultado}</p>
                {caso.testimonio ? (
                  <figure className="mt-4 border-t border-line pt-4">
                    <Quote size={16} className="text-brand" aria-hidden="true" />
                    <blockquote className="mt-1 text-sm italic text-ink-soft">
                      {caso.testimonio.cita}
                    </blockquote>
                    <figcaption className="mt-2 text-xs text-subtle">
                      {caso.testimonio.autor} · {caso.testimonio.cargo}
                    </figcaption>
                  </figure>
                ) : null}
              </Card>
            ))}
          </div>

          {visibles.length === 0 ? (
            <p className="mt-8 text-muted">Todavía no hay casos publicados para esta vertical.</p>
          ) : null}

          <div className="mt-14 rounded-xl border border-line bg-surface p-8 text-center">
            <h2 className="text-xl font-extrabold text-ink">
              Sumate a los negocios que ya escalan con Baboons
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
              Los casos marcados como borrador se completan con datos reales y testimonios de cada
              cliente antes de publicarse.
            </p>
            <div className="mt-6 flex justify-center">
              <Button to="/contacto">Quiero ser el próximo caso</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
