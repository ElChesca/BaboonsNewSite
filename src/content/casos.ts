export type Caso = {
  slug: string
  cliente: string
  /** Slug de la vertical a la que pertenece el caso. */
  vertical: string
  rubro: string
  /** Slugs de módulos que usa el cliente. */
  modulos: string[]
  resultado: string
  testimonio?: { cita: string; autor: string; cargo: string }
  /** En borrador hasta confirmar datos reales con el cliente. */
  borrador?: boolean
}

/**
 * Contenido inicial en borrador. Reemplazar por casos reales confirmados
 * con cada cliente (nombre, métricas y testimonio).
 */
export const casos: Caso[] = [
  {
    slug: 'distribuidora-ejemplo',
    cliente: 'Distribuidora del Centro',
    vertical: 'distribucion',
    rubro: 'Distribución mayorista de alimentos',
    modulos: ['distribuidora', 'inventario', 'cuenta-corriente', 'facturacion'],
    resultado:
      'Redujo el cierre de liquidación diaria de 40 a 5 minutos al integrar reparto, cobranzas y facturación.',
    testimonio: {
      cita: 'Antes cada repartidor volvía con un fajo de papeles. Hoy la liquidación sale sola.',
      autor: 'Nombre Apellido',
      cargo: 'Gerente de operaciones',
    },
    borrador: true,
  },
  {
    slug: 'resto-ejemplo',
    cliente: 'Resto Plaza',
    vertical: 'gastronomia',
    rubro: 'Restaurante de salón',
    modulos: ['pos-resto', 'facturacion', 'inventario'],
    resultado:
      'Unificó salón, cocina y stock: la caja cierra a la primera y la carta refleja el stock real.',
    borrador: true,
  },
  {
    slug: 'concesionaria-ejemplo',
    cliente: 'Concesionaria Regional',
    vertical: 'concesionarias',
    rubro: 'Vehículos y maquinaria agrícola',
    modulos: ['inventario', 'facturacion', 'cuenta-corriente', 'mes'],
    resultado:
      'Trazabilidad por unidad desde la compra hasta la postventa, con repuestos y taller sobre el mismo stock.',
    borrador: true,
  },
]

export function getCasosPorVertical(vertical: string): Caso[] {
  return casos.filter((caso) => caso.vertical === vertical)
}
