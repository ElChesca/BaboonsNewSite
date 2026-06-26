import { ArrowRight, Boxes, MapPin, RefreshCw, Smartphone } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Seo } from '../components/ui/Seo'
import { verticales } from '../content/verticales'

const metricas = [
  { valor: '9+', label: 'Módulos integrados' },
  { valor: '5', label: 'Verticales de negocio' },
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
      'POS, logística, almacenes y distribución comparten base de datos, clientes, inventario y caja.',
  },
  {
    icon: Smartphone,
    titulo: 'Mobile-first',
    detalle:
      'Interfaz PWA optimizada para trabajo en campo: repartidores en tablet, admins en desktop.',
  },
  {
    icon: RefreshCw,
    titulo: 'Tiempo real',
    detalle:
      'Stock disponible al instante, estado de entregas en vivo y caja sincronizada sin refresh manual.',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Baboons ERP — Plataforma ERP multi-negocio"
        description="Un solo ecosistema para POS, facturación AFIP, logística, distribución y concesionarias. Tecnología local, respaldo presencial. Desde San Luis, Argentina."
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-20 text-center sm:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-line-strong bg-bg px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
            Plataforma ERP multi-negocio · Argentina
          </div>
          <h1 className="mx-auto mt-7 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-6xl">
            El ERP que escala con tu <span className="text-brand">operación</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Baboons unifica POS, facturación AFIP, inventario, logística y distribución. Ahora suma
            una vertical para concesionarias de vehículos y maquinaria.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/contacto" size="lg">
              Solicitar demo
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button to="/producto" variant="secondary" size="lg">
              Ver el producto
            </Button>
          </div>
        </Container>
      </section>

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
            subtitle="Cada negocio activa solo lo que necesita. Un restaurante, una distribuidora y una concesionaria pueden operar sobre la misma plataforma."
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

      {/* Propuesta de valor */}
      <section className="border-y border-line bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Por qué Baboons" title="Pensado para el mercado argentino" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
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

      {/* CTA */}
      <section className="bg-brand py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Agendá una demo de Baboons ERP
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Contanos cómo opera tu negocio y te armamos una demo a medida.
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
