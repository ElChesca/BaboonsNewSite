import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Card } from '../../components/ui/Card'
import { Badge } from '../../components/ui/Badge'
import { Seo } from '../../components/ui/Seo'
import { modulos } from '../../content/modulos'
import { ERP_TOTAL_MODULOS } from '../../content/erpStats'

export default function ModulosIndex() {
  const activos = modulos.filter((modulo) => modulo.status === 'activo')
  const proximos = modulos.filter((modulo) => modulo.status === 'proximamente')

  return (
    <>
      <Seo
        title="M?dulos ? Baboons ERP"
        description={`Baboons ERP incluye m?s de ${ERP_TOTAL_MODULOS} m?dulos: POS, manufactura, facturaci?n AFIP, CRM, inventario, compras, distribuci?n, remitos y m?s.`}
      />
      <PageHero
        eyebrow="M?dulos"
        title="Los m?dulos del sistema"
        subtitle={`Baboons incluye m?s de ${ERP_TOTAL_MODULOS} m?dulos en producci?n. Ac? mostramos los principales agrupados por capacidad ? cada negocio activa solo lo que necesita.`}
      />

      <section className="py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink">M?dulos destacados</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Estas son las capacidades principales del ERP. El inventario completo supera los{' '}
            {ERP_TOTAL_MODULOS} m?dulos seg?n el tipo de negocio configurado.
          </p>
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

          <h2 className="mt-14 text-xl font-bold text-ink">Pr?ximamente</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proximos.map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                    {modulo.categoria}
                  </span>
                  <Badge tone="cyan">Pr?ximamente</Badge>
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
