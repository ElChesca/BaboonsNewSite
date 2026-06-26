import { Check } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { PageHero } from '../components/ui/PageHero'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'

const planes = [
  {
    nombre: 'Negocio',
    descripcion: 'Para una operación que arranca con lo esencial.',
    incluye: ['POS & Restó o Distribuidora', 'Facturación AFIP/ARCA', 'Inventario & Stock', 'Soporte en horario comercial'],
    destacado: false,
  },
  {
    nombre: 'Operación',
    descripcion: 'Para negocios con varios canales y equipo en la calle.',
    incluye: [
      'Todo lo del plan Negocio',
      'Cuenta Corriente y Auto-venta',
      'Modo repartidor móvil',
      'Implementación presencial',
    ],
    destacado: true,
  },
  {
    nombre: 'Enterprise',
    descripcion: 'Para operaciones logísticas y multi-sucursal.',
    incluye: ['Todo lo del plan Operación', 'MES, TMS, WMS y CEDI', 'Vertical Concesionarias', 'A medida de tu operación'],
    destacado: false,
  },
]

export default function Precios() {
  return (
    <>
      <Seo
        title="Precios — Baboons ERP"
        description="Planes de Baboons ERP por tamaño de operación. Modelo modular: cada negocio activa solo lo que necesita."
      />
      <PageHero
        eyebrow="Precios"
        title="Planes que crecen con tu operación"
        subtitle="Modelo modular: cada negocio activa solo los módulos que necesita. Los valores finales se definen según la operación — escribinos y armamos una propuesta."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {planes.map((plan) => (
              <Card
                key={plan.nombre}
                className={plan.destacado ? 'border-brand ring-1 ring-brand' : ''}
              >
                <h2 className="text-lg font-extrabold text-ink">{plan.nombre}</h2>
                <p className="mt-1 text-sm text-muted">{plan.descripcion}</p>
                <ul className="mt-5 space-y-2.5">
                  {plan.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <Check size={16} className="mt-0.5 shrink-0 text-green" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button
                    to="/contacto"
                    variant={plan.destacado ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Pedir propuesta
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-subtle">
            ¿No sabés qué plan necesitás? Contanos cómo opera tu negocio y te orientamos.
          </p>
        </Container>
      </section>
    </>
  )
}
