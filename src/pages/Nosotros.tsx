import {
  ArrowUpRight,
  ClipboardList,
  Handshake,
  MapPin,
  RefreshCw,
  Workflow,
  Zap,
} from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Seo } from '../components/ui/Seo'

const beneficiosAlianza = [
  {
    icon: ClipboardList,
    titulo: 'Diagnóstico primero',
    detalle:
      'Lógica identifica la fricción que frena la pyme y define por dónde empezar, antes de implementar de más.',
  },
  {
    icon: Workflow,
    titulo: 'Diseño en el sistema',
    detalle:
      'El proceso operativo pasa a flujos, roles y datos de Baboons ERP, no a un documento que se archiva.',
  },
  {
    icon: RefreshCw,
    titulo: 'Operación sostenida',
    detalle:
      'El ERP acompaña el día a día para que el orden no se pierda cuando el proyecto de consultoría cierra.',
  },
]

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
                <div key={pilar.titulo} className="rounded-xl border border-line bg-surface p-6">
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

      <section
        className="border-t border-line bg-surface py-16 sm:py-20"
        aria-labelledby="alianza-logica-titulo"
      >
        <Container>
          <SectionHeading
            eyebrow="Alianza estratégica"
            title="Baboons + Lógica"
            align="left"
            titleId="alianza-logica-titulo"
          />

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink shadow-[var(--shadow-card)] ring-2 ring-ink/20 sm:h-16 sm:w-16">
                <img
                  src="/images/logo-baboons.png"
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
                  width={56}
                  height={56}
                  decoding="async"
                />
              </span>
              <span className="text-base font-extrabold tracking-tight text-ink sm:text-lg">
                Baboons<span className="text-brand">.Co</span>
              </span>
            </div>
            <span className="text-xl font-light text-subtle sm:text-2xl" aria-hidden="true">
              +
            </span>
            <img
              src="/images/logo-logica.svg"
              alt="Lógica"
              className="h-7 w-auto sm:h-9"
              width={168}
              height={45}
              decoding="async"
            />
          </div>

          <p className="mt-6 max-w-2xl text-ink-soft">
            Lógica diagnostica y diseña los procesos operativos de la pyme: transforma el caos en
            procesos escalables, con diagnóstico, diseño operativo e implementación tech. Baboons
            ERP toma ese diseño, lo implementa y lo sostiene en el sistema.
          </p>

          <ul className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-3">
            {beneficiosAlianza.map((beneficio) => {
              const Icon = beneficio.icon
              return (
                <li key={beneficio.titulo} className="rounded-xl border border-line bg-bg p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-brand">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-bold text-ink">{beneficio.titulo}</h3>
                  <p className="mt-1 text-sm text-muted">{beneficio.detalle}</p>
                </li>
              )
            })}
          </ul>

          <a
            href="https://www.somoslogica.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            Conocé Lógica
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </Container>
      </section>
    </>
  )
}
