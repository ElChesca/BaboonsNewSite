import type { ErpCaptura, ErpSeccion } from '../../content/erpShowcases'

type ErpShowcaseProps = {
  titulo: string
  subtitulo: string
  capturas: ErpCaptura[]
  secciones: ErpSeccion[]
}

export function ErpShowcase({ titulo, subtitulo, capturas, secciones }: ErpShowcaseProps) {
  return (
    <div className="space-y-14">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink">{titulo}</h2>
        <p className="mt-2 max-w-3xl text-muted">{subtitulo}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {capturas.map((captura) => (
          <figure
            key={captura.src}
            className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]"
          >
            <div className="border-b border-line bg-bg-soft px-4 py-3">
              <figcaption className="font-bold text-ink">{captura.titulo}</figcaption>
              <p className="mt-1 text-sm text-muted">{captura.descripcion}</p>
            </div>
            <img
              src={captura.src}
              alt={captura.titulo}
              className="w-full object-cover object-top"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold text-ink">Módulos incluidos en el ERP</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Cada sección del menú del ERP agrupa funcionalidades listas para operar desde el día uno.
        </p>
        <div className="mt-8 space-y-8">
          {secciones.map((seccion) => (
            <div key={seccion.titulo}>
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand">
                <span className="h-4 w-1 rounded-full bg-brand" aria-hidden="true" />
                {seccion.titulo}
              </h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {seccion.modulos.map((modulo) => (
                  <li
                    key={modulo}
                    className="rounded-lg border border-line bg-bg px-3 py-2.5 text-sm text-ink-soft"
                  >
                    {modulo}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
