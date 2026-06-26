import { ArrowRight, Check } from 'lucide-react'
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

const capacidades = [
  {
    titulo: 'Arquitectura multi-negocio',
    detalle:
      'Un motor central con módulos activables por vertical. Cada negocio configura solo lo que necesita sin duplicar datos ni usuarios.',
  },
  {
    titulo: 'Usuarios, roles y permisos',
    detalle:
      'Sistema de identidad de 3 capas con perfiles diferenciados: mozos, cocineros, repartidores, administradores y gerentes.',
  },
  {
    titulo: 'CRM & Cerebro Comercial',
    detalle:
      'Pipeline de leads, integración Instagram/Facebook, auto-respondedor Meta y seguimiento de oportunidades comerciales.',
  },
  {
    titulo: 'Compliance fiscal nativo',
    detalle:
      'Facturación ARCA/AFIP con WSAA, consulta de padrón, CAE offline y motores de impresión térmica y PDF.',
  },
  {
    titulo: 'Inventario en tiempo real',
    detalle:
      'Stock físico, reservado y disponible. Transferencias entre depósitos, inventario móvil y Kardex auditable.',
  },
  {
    titulo: 'Plataforma WMS+TMS',
    detalle:
      'Producto logístico modular en gestación, agnóstico de ERP, con integración desacoplada a Odoo y otros sistemas.',
  },
]

export default function Producto() {
  const activos = modulos.filter((m) => m.status === 'activo')

  return (
    <>
      <Seo
        title="Producto — Baboons ERP"
        description="La visión completa de Baboons ERP: un motor central compartido con módulos de POS, manufactura, facturación, CRM, inventario, logística y distribución."
      />
      <PageHero
        eyebrow="El producto"
        title="Un motor central, todos los módulos conectados"
        subtitle="Todos los módulos comparten base de datos, usuarios, clientes y caja — sin silos ni duplicación de información. Cada vertical activa solo lo que necesita."
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
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Capacidades del sistema</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Más allá de los módulos individuales, Baboons ofrece capacidades transversales que
            atraviesan toda la operación.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capacidades.map((cap) => (
              <Card key={cap.titulo}>
                <h3 className="font-bold text-ink">{cap.titulo}</h3>
                <p className="mt-1.5 text-sm text-muted">{cap.detalle}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            Flujo de integración logística
          </h2>
          <p className="mt-2 max-w-2xl text-muted">
            De la planta al cliente final, cada etapa comparte la misma información. La plataforma
            WMS+TMS extiende este flujo como producto independiente.
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

      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">
            Módulos activos ({activos.length})
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activos.map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <h3 className="font-bold text-ink">{modulo.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{modulo.resumen}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Verticales cubiertas</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Cada vertical configura los módulos del ERP para el negocio de tu cliente — no es un
            producto distinto, es la misma plataforma.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {verticales.map((vertical) => (
              <Card key={vertical.slug} to={`/verticales/${vertical.slug}`}>
                <h3 className="font-bold text-ink">{vertical.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{vertical.resumen}</p>
                <ul className="mt-3 space-y-1">
                  {vertical.funcionalidades.slice(0, 3).map((f) => (
                    <li key={f.titulo} className="flex items-start gap-2 text-xs text-muted">
                      <Check size={14} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                      {f.titulo}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
