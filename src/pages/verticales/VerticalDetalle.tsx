import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Card } from '../../components/ui/Card'
import { Seo } from '../../components/ui/Seo'
import { getVertical } from '../../content/verticales'
import { getModulo } from '../../content/modulos'
import { getCasosPorVertical } from '../../content/casos'
import { getErpShowcase } from '../../content/erpShowcases'
import { ErpShowcase } from '../../components/ui/ErpShowcase'

export default function VerticalDetalle() {
  const { slug } = useParams<{ slug: string }>()
  const vertical = slug ? getVertical(slug) : undefined

  if (!vertical) {
    return (
      <Container className="py-24 text-center">
        <Seo title="Vertical no encontrada — Baboons ERP" />
        <h1 className="text-2xl font-extrabold text-ink">Vertical no encontrada</h1>
        <p className="mt-2 text-muted">La vertical que buscás no existe o cambió de nombre.</p>
        <div className="mt-6 flex justify-center">
          <Button to="/verticales" variant="secondary">
            Ver todas las verticales
          </Button>
        </div>
      </Container>
    )
  }

  const modulosVinculados = vertical.modulos
    .map((moduloSlug) => getModulo(moduloSlug))
    .filter((modulo) => modulo !== undefined)
  const casos = getCasosPorVertical(vertical.slug)
  const erpShowcase = getErpShowcase(vertical.slug)

  return (
    <>
      <Seo title={`${vertical.nombre} — Baboons ERP`} description={vertical.resumen} />
      <PageHero eyebrow="Vertical" title={vertical.nombre} subtitle={vertical.resumen}>
        {vertical.destacada ? <Badge tone="brand">Nueva vertical</Badge> : null}
      </PageHero>

      <section className="py-16">
        <Container>
          <div className="rounded-xl border border-line bg-bg-soft p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-subtle">
              El problema
            </h2>
            <p className="mt-2 text-ink-soft">{vertical.problema}</p>
          </div>

          <h2 className="mt-14 text-xl font-bold text-ink">Qué resuelve</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vertical.funcionalidades.map((funcionalidad) => (
              <Card key={funcionalidad.titulo}>
                <h3 className="font-bold text-ink">{funcionalidad.titulo}</h3>
                <p className="mt-1.5 text-sm text-muted">{funcionalidad.detalle}</p>
              </Card>
            ))}
          </div>

          <h2 className="mt-14 text-xl font-bold text-ink">Módulos que activa</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {modulosVinculados.map((modulo) => (
              <li key={modulo.slug}>
                <Link
                  to={`/modulos/${modulo.slug}`}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-brand"
                >
                  <Check size={18} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold text-ink">{modulo.nombre}</span>
                    <span className="block text-sm text-muted">{modulo.resumen}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {erpShowcase ? (
            <div className="mt-14 border-t border-line pt-14">
              <ErpShowcase
                titulo={erpShowcase.titulo}
                subtitulo={erpShowcase.subtitulo}
                capturas={erpShowcase.capturasDestacadas}
                secciones={erpShowcase.secciones}
              />
            </div>
          ) : null}

          {casos.length > 0 ? (
            <>
              <h2 className="mt-14 text-xl font-bold text-ink">Casos en esta vertical</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {casos.map((caso) => (
                  <Card key={caso.slug}>
                    <h3 className="font-bold text-ink">{caso.cliente}</h3>
                    <p className="mt-1 text-xs text-subtle">{caso.rubro}</p>
                    <p className="mt-2 text-sm text-muted">{caso.resultado}</p>
                  </Card>
                ))}
              </div>
            </>
          ) : null}

          <div className="mt-14 flex flex-wrap gap-3">
            <Button to="/contacto">
              Solicitar demo
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Link
              to="/verticales"
              className="inline-flex items-center text-sm font-semibold text-muted hover:text-brand"
            >
              ← Volver a verticales
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
