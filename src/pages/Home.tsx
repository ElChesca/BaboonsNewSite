import { ArrowRight, Boxes, MapPin, RefreshCw, Shield, Smartphone, Users } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Seo } from '../components/ui/Seo'
import { HeroPrincipal } from '../components/home/HeroPrincipal'
import { verticales } from '../content/verticales'
import { modulos } from '../content/modulos'
import { casos } from '../content/casos'
import { ERP_TOTAL_MODULOS } from '../content/erpStats'

const metricas = [
  { valor: ERP_TOTAL_MODULOS, label: 'Módulos integrados' },
  { valor: '7', label: 'Verticales de negocio' },
  { valor: '100%', label: 'Compliance ARCA/AFIP' },
  { valor: 'PWA', label: 'Web · Mobile · Desktop' },
]

const valores = [
  {
    icon: MapPin,
    titulo: 'Tecnología local, respaldo presencial',
    detalle:
      'Somos empresas puntanas. Acompañamos cada implementación en persona, sin depender de soporte remoto.',
  },
  {
    icon: Boxes,
    titulo: 'Un solo ecosistema',
    detalle:
      'POS, manufactura, logística, CRM y distribución comparten base de datos, clientes, inventario y caja.',
  },
  {
    icon: Smartphone,
    titulo: 'Mobile-first',
    detalle:
      'Interfaz PWA optimizada para trabajo en campo: repartidores en tablet, mozos en celular, admins en desktop.',
  },
  {
    icon: RefreshCw,
    titulo: 'Tiempo real',
    detalle:
      'Stock disponible al instante, estado de entregas en vivo y caja sincronizada sin refresh manual.',
  },
  {
    icon: Shield,
    titulo: 'Roles y permisos',
    detalle:
      'Arquitectura de 3 capas con self-healing y perfiles diferenciados por tipo de negocio y rol operativo.',
  },
  {
    icon: Users,
    titulo: 'CRM integrado',
    detalle:
      'Cerebro comercial con leads, Instagram/Facebook, auto-respondedor y pipeline de oportunidades.',
  },
]

const integraciones = [
  'ARCA / AFIP — facturación electrónica nativa',
  'Instagram & Facebook — CRM Meta con DMs y comentarios',
  'Odoo — integración desacoplada para contabilidad',
  'Resend — notificaciones de leads por email',
  'Mercado Pago — cobro en POS y campo',
]

export default function Home() {
  const modulosActivos = modulos.filter((m) => m.status === 'activo')
  const casosReales = casos.filter((c) => !c.borrador)

  return (
    <>
      <Seo
        title="Baboons ERP — Plataforma ERP multi-negocio"
        description="Un solo ecosistema para POS, manufactura, facturación AFIP, logística, CRM, distribución y concesionarias. Tecnología local, respaldo presencial. Desde San Luis, Argentina."
      />

      <HeroPrincipal />

      {/* Métricas */}
      <section className="border-b border-line bg-bg">
        <Container className="grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {metricas.map((metrica) => (
            <div key={metrica.label} className="text-center">
              <div className="text-3xl font-extrabold text-ink">{metrica.valor}</div>
              <div className="mt-1 text-sm text-muted">{metrica.label}</div>
            </div>
          ))}
        </Container>
      </section>

      {/* Verticales */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Verticales de negocio"
            title="Un ecosistema, múltiples verticales"
            subtitle="Cada negocio activa solo lo que necesita. Una fábrica de pastas, un club premium, una distribuidora de neumáticos y una concesionaria operan sobre la misma plataforma."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {verticales.map((vertical) => (
              <Card key={vertical.slug} to={`/verticales/${vertical.slug}`}>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-ink">{vertical.nombre}</h3>
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

      {/* Módulos destacados */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="Módulos"
            title="Todo conectado, nada duplicado"
            subtitle={`Más de ${ERP_TOTAL_MODULOS} módulos que comparten base de datos, usuarios y caja. Desde el POS del mozo hasta la orden de producción en planta.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modulosActivos.slice(0, 6).map((modulo) => (
              <Card key={modulo.slug} to={`/modulos/${modulo.slug}`}>
                <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                  {modulo.categoria}
                </span>
                <h3 className="mt-1 font-bold text-ink">{modulo.nombre}</h3>
                <p className="mt-1.5 text-sm text-muted">{modulo.resumen}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/modulos" variant="secondary">
              Ver módulos destacados
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Clientes reales */}
      {casosReales.length > 0 ? (
        <section className="py-20">
          <Container>
            <SectionHeading
              eyebrow="Clientes"
              title="Negocios reales que ya operan con Baboons"
              subtitle="Desde la fábrica de pastas Bossio hasta Cuyo Automotores en Mendoza."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {casosReales.map((caso) => (
                <Card key={caso.slug}>
                  <h3 className="font-bold text-ink">{caso.cliente}</h3>
                  <p className="mt-1 text-xs text-subtle">{caso.rubro}</p>
                  <p className="mt-2 text-sm text-muted">{caso.resultado}</p>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button to="/casos-de-exito" variant="secondary">
                Ver todos los casos
              </Button>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Propuesta de valor */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Por qué Baboons" title="Pensado para el mercado argentino" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => {
              const Icon = valor.icon
              return (
                <div key={valor.titulo} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-bg-soft text-brand">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{valor.titulo}</h3>
                    <p className="mt-1 text-sm text-muted">{valor.detalle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Integraciones */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="Integraciones"
            title="Conectado con el ecosistema que ya usás"
            subtitle="Facturación fiscal, redes sociales, ERPs externos y medios de pago — sin duplicar datos."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {integraciones.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 text-sm text-ink-soft"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Vista previa ERP — Manufactura */}
      <section className="border-t border-line bg-surface py-20">
        <Container>
          <SectionHeading
            eyebrow="El ERP en acción"
            title="Manufactura: de la receta al lote finalizado"
            subtitle="Órdenes de producción en Kanban, recetas BOM, control de calidad y dashboard de planta — implementado en la Fábrica de Pastas Bossio."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-card)]">
            <img
              src="/images/erp/manufactura/ordenes-produccion-kanban.png"
              alt="Órdenes de Producción en tablero Kanban — Baboons ERP Manufactura"
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/verticales/manufactura">
              Ver vertical Manufactura
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button to="/contacto" variant="secondary">
              Solicitar demo
            </Button>
          </div>
        </Container>
      </section>

      {/* Vista previa ERP — Distribuidora */}
      <section className="py-20">
        <Container>
          <SectionHeading
            eyebrow="El ERP en acción"
            title="Distribuidoras que operan con Baboons"
            subtitle="Hojas de ruta con mapa, liquidación de reparto, historial de ventas y más de 40 módulos integrados para distribución mayorista."
          />
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]">
            <img
              src="/images/erp/distribuidora/centro-operaciones-logisticas.png"
              alt="Centro de Operaciones Logísticas de Baboons ERP para distribuidoras"
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/verticales/distribucion">
              Ver vertical Distribución
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button to="/contacto" variant="secondary">
              Solicitar demo
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Agendá una demo de Baboons ERP
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Contanos cómo opera tu negocio y te armamos una demo a medida con los módulos de tu
            vertical.
          </p>
          <div className="mt-7">
            <Button to="/contacto" variant="secondary" size="lg">
              Solicitar demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
