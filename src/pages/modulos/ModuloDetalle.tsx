import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { PageHero } from '../../components/ui/PageHero'
import { Button } from '../../components/ui/Button'
import { Badge } from '../../components/ui/Badge'
import { Seo } from '../../components/ui/Seo'
import { getModulo } from '../../content/modulos'

export default function ModuloDetalle() {
  const { slug } = useParams<{ slug: string }>()
  const modulo = slug ? getModulo(slug) : undefined

  if (!modulo) {
    return (
      <Container className="py-24 text-center">
        <Seo title="Módulo no encontrado — Baboons ERP" />
        <h1 className="text-2xl font-extrabold text-ink">Módulo no encontrado</h1>
        <p className="mt-2 text-muted">El módulo que buscás no existe o cambió de nombre.</p>
        <div className="mt-6 flex justify-center">
          <Button to="/modulos" variant="secondary">
            Ver todos los módulos
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <>
      <Seo title={`${modulo.nombre} — Baboons ERP`} description={modulo.resumen} />
      <PageHero eyebrow={modulo.categoria} title={modulo.nombre} subtitle={modulo.resumen}>
        {modulo.status === 'proximamente' ? <Badge tone="cyan">Próximamente</Badge> : null}
      </PageHero>

      <section className="py-16">
        <Container>
          <h2 className="text-xl font-bold text-ink">Capacidades</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {modulo.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
              >
                <Check size={18} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                <span className="text-sm text-ink-soft">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button to="/contacto">
              Solicitar demo
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Link
              to="/modulos"
              className="inline-flex items-center text-sm font-semibold text-muted hover:text-brand"
            >
              ← Volver a módulos
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}
