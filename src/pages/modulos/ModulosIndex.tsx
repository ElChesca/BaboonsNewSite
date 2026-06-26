import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Seo } from '../../components/ui/Seo'
import { modulos } from '../../content/modulos'

export default function ModulosIndex() {
  const activos = modulos.filter((modulo) => modulo.status === 'activo')
  const proximos = modulos.filter((modulo) => modulo.status === 'proximamente')

  return (
    <>
      <Seo
        title="Módulos — Baboons ERP"
        description="Todos los módulos de Baboons ERP: POS, facturación AFIP, inventario, distribución, cuenta corriente, MES y los nuevos TMS, WMS y CEDI."
      />
      <PageHero
        eyebrow="Módulos"
        title="Los módulos del sistema"
        subtitle="Los módulos en producción y los nuevos que llevan a Baboons al nivel enterprise. Cada negocio activa solo lo que necesita."
      />

      <section className="py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink">Módulos activos</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activos.map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                  {modulo.categoria}
                </span>
                <h3 className="mt-1 font-bold text-ink">{modulo.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{modulo.resumen}</p>
              </Card>
            ))}
          </div>

          <h2 className="mt-14 text-xl font-bold text-ink">Próximamente</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proximos.map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                    {modulo.categoria}
                  </span>
                  <Badge tone="cyan">Próximamente</Badge>
                </div>
                <h3 className="mt-1 font-bold text-ink">{modulo.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{modulo.resumen}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
