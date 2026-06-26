import { Handshake, MapPin, Zap } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'

const pilares = [
  {
    icon: Handshake,
    titulo: 'Presencialidad',
    detalle: 'Acompañamos cada implementación en sitio, no por ticket.',
  },
  {
    icon: MapPin,
    titulo: 'Contexto local real',
    detalle: 'Somos puntanos: conocemos el mercado y el tejido productivo de San Luis.',
  },
  {
    icon: Zap,
    titulo: 'Respuesta inmediata',
    detalle: 'Sin esperas ni intermediarios cuando algo necesita atención.',
  },
]

export default function Nosotros() {
  return (
    <>
      <Seo
        title="Nosotros — Baboons ERP"
        description="Baboons.Co, con el apoyo de Logica. Empresas puntanas que desarrollan tecnología para el tejido productivo de San Luis, Argentina."
      />
      <PageHero
        eyebrow="Nosotros"
        title="Tecnología local, respaldo presencial"
        subtitle="Somos empresas puntanas que trabajan para el tejido productivo de San Luis. Nuestra principal diferencia no es solo el software — es que estamos ahí."
      />

      <section className="py-16">
        <Container>
          <div className="max-w-2xl space-y-4 text-ink-soft">
            <p>
              Baboons.Co desarrolla Baboons ERP con el apoyo de Logica. Acompañamos cada
              implementación en persona, conocemos el contexto local y eliminamos las fallas que
              surgen cuando el equipo de soporte está a cientos de kilómetros y solo atiende por
              ticket.
            </p>
            <p>
              Construimos para operar en Argentina desde el día uno: facturación ARCA/AFIP nativa,
              cuenta corriente y una arquitectura modular donde cada negocio activa solo lo que
              necesita.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {pilares.map((pilar) => {
              const Icon = pilar.icon
              return (
                <div
                  key={pilar.titulo}
                  className="rounded-xl border border-line bg-surface p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-soft text-brand">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-bold text-ink">{pilar.titulo}</h2>
                  <p className="mt-1 text-sm text-muted">{pilar.detalle}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
