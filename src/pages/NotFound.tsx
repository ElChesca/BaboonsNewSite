import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Seo } from '../components/ui/Seo'

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <Seo title="Página no encontrada — Baboons ERP" />
      <span className="text-sm font-semibold uppercase tracking-wider text-brand">Error 404</span>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        No encontramos esta página
      </h1>
      <p className="mx-auto mt-3 max-w-md text-muted">
        Puede que el enlace haya cambiado o que la página ya no exista.
      </p>
      <div className="mt-7 flex justify-center gap-3">
        <Button to="/">Volver al inicio</Button>
        <Button to="/contacto" variant="secondary">
          Contacto
        </Button>
      </div>
    </Container>
  )
}
