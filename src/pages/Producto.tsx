import { ArrowRight } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Seo } from '../components/ui/Seo'
import { modulos } from '../content/modulos'
import { verticales } from '../content/verticales'

const flujo = [
  { paso: 'MES', detalle: 'Producción' },
  { paso: 'CEDI', detalle: 'Hub central' },
  { paso: 'WMS', detalle: 'Almacén' },
  { paso: 'TMS', detalle: 'Despacho' },
  { paso: 'Cliente', detalle: 'Entrega + factura' },
]

export default function Producto() {
  return (
    <>
      <Seo
        title="Producto — Baboons ERP"
        description="La visión completa de Baboons ERP: un motor central compartido con módulos de POS, facturación, inventario, logística y distribución."
      />
      <PageHero
        eyebrow="El producto"
        title="Un motor central, todos los módulos conectados"
        subtitle="Todos los módulos comparten base de datos, usuarios, clientes y caja — sin silos ni duplicación de información."
      >
        <Button to="/contacto">
          Solicitar demo
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
        <Button to="/modulos" variant="secondary">
          Ver módulos
        </Button>
      </PageHero>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            Flujo de integración logística
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            De la planta al cliente final, cada etapa comparte la misma información.
          </p>
          <div className="mt-8 flex flex-wrap items-stretch gap-3">
            {flujo.map((etapa, index) => (
              <div key={etapa.paso} className="flex items-center gap-3">
                <div className="rounded-xl border border-line bg-surface px-5 py-4 text-center shadow-[var(--shadow-card)]">
                  <div className="font-bold text-ink">{etapa.paso}</div>
                  <div className="mt-1 text-xs text-muted">{etapa.detalle}</div>
                </div>
                {index < flujo.length - 1 ? (
                  <ArrowRight size={18} className="text-subtle" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Módulos del sistema</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modulos.map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <h3 className="font-bold text-ink">{modulo.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{modulo.resumen}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Verticales cubiertas</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {verticales.map((vertical) => (
              <Card key={vertical.slug} to={`/verticales/${vertical.slug}`}>
                <h3 className="font-bold text-ink">{vertical.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{vertical.resumen}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
