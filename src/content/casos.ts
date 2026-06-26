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

export const casos: Caso[] = [
  {
    slug: 'bossio-manufactura',
    cliente: 'Bossio · Fábrica de Pastas',
    vertical: 'manufactura',
    rubro: 'Manufactura de alimentos · Cadena de sucursales',
    modulos: ['mes', 'inventario', 'remitos', 'compras', 'facturacion'],
    resultado:
      'Unificó producción en planta, transferencias a sucursales y solicitud de mercadería con generación automática de Órdenes de Producción.',
  },
  {
    slug: 'vitaclub-eventos',
    cliente: 'Vita Club',
    vertical: 'club-premium',
    rubro: 'Club premium · Eventos y gastronomía',
    modulos: ['reservas-eventos', 'pos-resto', 'crm', 'cuenta-corriente'],
    resultado:
      'Portal de reservas, calendario de eventos, propinas digitales y gamificación de puntos en una sola plataforma.',
  },
  {
    slug: 'neumar-distribucion',
    cliente: 'Neumar',
    vertical: 'neumar',
    rubro: 'Distribuidora de neumáticos',
    modulos: ['distribuidora', 'inventario', 'remitos', 'facturacion', 'listas-precios'],
    resultado:
      'Portal de ventas B2B, van sales con auto-venta a bordo e integración desacoplada con Odoo para contabilidad.',
  },
  {
    slug: 'cuyo-automotores',
    cliente: 'Cuyo Automotores',
    vertical: 'concesionarias',
    rubro: 'Concesionaria de vehículos · Mendoza',
    modulos: ['inventario', 'facturacion', 'crm', 'cuenta-corriente'],
    resultado:
      'Portal B2C premium con captura de leads, CRM integrado y trazabilidad por unidad desde showroom hasta postventa.',
  },
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
]

export function getCasosPorVertical(vertical: string): Caso[] {
  return casos.filter((caso) => caso.vertical === vertical)
}
