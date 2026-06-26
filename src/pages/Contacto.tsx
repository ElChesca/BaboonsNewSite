import { Mail, MapPin, Clock } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { Seo } from '../components/ui/Seo'
import { ContactForm } from '../components/forms/ContactForm'

const datos = [
  { icon: Mail, label: 'Email', valor: 'ventas@baboons.co' },
  { icon: MapPin, label: 'Ubicación', valor: 'San Luis · Argentina' },
  { icon: Clock, label: 'Respuesta', valor: 'Dentro de 24 h hábiles' },
]

export default function Contacto() {
  return (
    <>
      <Seo
        title="Contacto — Baboons ERP"
        description="Solicitá una demo de Baboons ERP. Contanos cómo opera tu negocio y te armamos una propuesta a medida."
      />
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu operación"
        subtitle="Completá el formulario y te contactamos para coordinar una demo a medida de tu negocio."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <ContactForm />

            <aside className="space-y-4">
              {datos.map((dato) => {
                const Icon = dato.icon
                return (
                  <div
                    key={dato.label}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-bg-soft text-brand">
                      <Icon size={17} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-subtle">
                        {dato.label}
                      </div>
                      <div className="mt-0.5 text-sm text-ink">{dato.valor}</div>
                    </div>
                  </div>
                )
              })}
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
