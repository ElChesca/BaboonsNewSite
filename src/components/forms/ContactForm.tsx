import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '../ui/Button'

const rubros = [
  { value: 'gastronomia', label: 'Gastronomía' },
  { value: 'distribucion', label: 'Distribución' },
  { value: 'logistica', label: 'Logística' },
  { value: 'concesionarias', label: 'Concesionaria — Vehículos / Maquinaria' },
  { value: 'otro', label: 'Otro' },
]

const tamanos = [
  { value: '1-5', label: '1 a 5 personas' },
  { value: '6-20', label: '6 a 20 personas' },
  { value: '21-50', label: '21 a 50 personas' },
  { value: '50+', label: 'Más de 50 personas' },
]

type Estado = 'idle' | 'enviando' | 'ok' | 'error'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

const inputClass =
  'w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-subtle focus:border-brand'

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string
  name: string
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-sm text-brand">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function ContactForm() {
  const [estado, setEstado] = useState<Estado>('idle')
  const [errores, setErrores] = useState<Record<string, string>>({})
  const [mensajeError, setMensajeError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEstado('enviando')
    setErrores({})
    setMensajeError('')

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          quiere_demo: data.quiere_demo === 'on',
          pagina_origen: window.location.pathname,
        }),
      })

      if (response.ok) {
        setEstado('ok')
        form.reset()
        return
      }

      if (response.status === 422) {
        const body = await response.json()
        setErrores(body.errores ?? {})
        setMensajeError('Revisá los campos marcados.')
      } else if (response.status === 429) {
        setMensajeError('Demasiados envíos. Esperá unos minutos e intentá de nuevo.')
      } else {
        setMensajeError('No pudimos enviar el formulario. Probá de nuevo en un momento.')
      }
      setEstado('error')
    } catch {
      setMensajeError('No pudimos conectar con el servidor. Revisá tu conexión.')
      setEstado('error')
    }
  }

  if (estado === 'ok') {
    return (
      <div role="status" className="rounded-xl border border-line bg-surface p-8 text-center">
        <h2 className="text-lg font-bold text-ink">¡Gracias! Recibimos tu mensaje.</h2>
        <p className="mt-2 text-sm text-muted">
          Te respondemos dentro de las próximas 24 horas hábiles.
        </p>
        <button
          type="button"
          onClick={() => setEstado('idle')}
          className="mt-4 text-sm font-semibold text-brand"
        >
          Enviar otro mensaje
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" name="nombre" error={errores.nombre}>
          <input id="nombre" name="nombre" type="text" required className={inputClass} />
        </Field>
        <Field label="Empresa" name="empresa" error={errores.empresa}>
          <input id="empresa" name="empresa" type="text" required className={inputClass} />
        </Field>
        <Field label="Email" name="email" error={errores.email}>
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
        <Field label="Teléfono" name="telefono" error={errores.telefono}>
          <input id="telefono" name="telefono" type="tel" required className={inputClass} />
        </Field>
        <Field label="Rubro" name="rubro" error={errores.rubro}>
          <select id="rubro" name="rubro" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Elegí un rubro
            </option>
            {rubros.map((rubro) => (
              <option key={rubro.value} value={rubro.value}>
                {rubro.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Tamaño del equipo" name="tamano" error={errores.tamano}>
          <select id="tamano" name="tamano" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Elegí una opción
            </option>
            {tamanos.map((tamano) => (
              <option key={tamano.value} value={tamano.value}>
                {tamano.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="¿Cómo opera tu negocio?" name="mensaje" error={errores.mensaje}>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          className={inputClass}
          placeholder="Contanos qué necesitás resolver."
        />
      </Field>

      <label className="flex items-center gap-2.5 text-sm text-ink-soft">
        <input name="quiere_demo" type="checkbox" className="h-4 w-4 rounded border-line" />
        Quiero coordinar una demo
      </label>

      {/* Honeypot anti-spam: invisible para personas, tentador para bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 overflow-hidden">
        <label htmlFor="website">No completar este campo</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {mensajeError ? (
        <p role="alert" className="text-sm text-brand">
          {mensajeError}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={estado === 'enviando'} className="w-full sm:w-auto">
        {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
      </Button>

      <p className="text-xs text-subtle">
        Te respondemos en 24 h hábiles. Validamos y procesamos el formulario con un backend
        Python/Flask.
      </p>
    </form>
  )
}
