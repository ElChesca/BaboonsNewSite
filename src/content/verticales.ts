export type Vertical = {
  slug: string
  nombre: string
  resumen: string
  /** Destacada = se muestra con badge "Nuevo". */
  destacada?: boolean
  problema: string
  /** Slugs de módulos del ERP en los que se apoya esta vertical. */
  modulos: string[]
  funcionalidades: { titulo: string; detalle: string }[]
}

export const verticales: Vertical[] = [
  {
    slug: 'gastronomia',
    nombre: 'Gastronomía',
    resumen:
      'Restaurantes y locales gastronómicos: caja, salón, cocina y stock en un solo sistema.',
    problema:
      'El salón usa un sistema, la cocina otro y el stock se controla en planillas. Sin integración, la caja nunca cierra a la primera.',
    modulos: ['pos-resto', 'facturacion', 'inventario', 'cuenta-corriente'],
    funcionalidades: [
      { titulo: 'Salón y mesas', detalle: 'Gestión de mesas, comandas y cierre de caja por turno.' },
      { titulo: 'Kitchen Display', detalle: 'KDS por destino: cocina, barra y salón.' },
      { titulo: 'Stock vinculado', detalle: 'La carta descuenta del inventario en tiempo real.' },
    ],
  },
  {
    slug: 'distribucion',
    nombre: 'Distribución',
    resumen:
      'Distribuidoras y reparto: preventa, hojas de ruta, entrega en campo y liquidación diaria.',
    problema:
      'Los repartidores cobran en papel, el stock del camión no se controla y la liquidación del día se hace a mano.',
    modulos: ['distribuidora', 'inventario', 'cuenta-corriente', 'facturacion'],
    funcionalidades: [
      { titulo: 'Preventa y despacho', detalle: 'Flujo completo de preventa → despacho → entrega.' },
      { titulo: 'Modo repartidor', detalle: 'App móvil con cobro integrado y stock por vehículo.' },
      { titulo: 'Liquidación diaria', detalle: 'Conciliación financiera de cada hoja de ruta.' },
    ],
  },
  {
    slug: 'logistica',
    nombre: 'Logística',
    resumen:
      'Operaciones de depósito y centros de distribución: WMS, CEDI y TMS sobre el motor central.',
    problema:
      'El depósito crece pero se sigue manejando con planillas: ubicaciones, picking y despacho sin trazabilidad.',
    modulos: ['wms', 'cedi', 'tms', 'inventario'],
    funcionalidades: [
      { titulo: 'Mapa de depósito', detalle: 'Ubicaciones físicas por rack, nivel y posición.' },
      { titulo: 'Picking y packing', detalle: 'Picking optimizado por hoja de ruta y remitos automáticos.' },
      { titulo: 'Cross-docking', detalle: 'Coordinación multi-canal desde el CEDI en tiempo real.' },
    ],
  },
  {
    slug: 'concesionarias',
    nombre: 'Concesionarias',
    resumen:
      'Concesionarias de vehículos y maquinaria: showroom, venta de alto ticket, postventa y repuestos.',
    destacada: true,
    problema:
      'La concesionaria usa un sistema para ventas, otro para el taller, planillas para repuestos y otra cosa para facturar. Datos duplicados, sin trazabilidad por unidad.',
    modulos: ['inventario', 'facturacion', 'cuenta-corriente', 'mes', 'wms'],
    funcionalidades: [
      {
        titulo: 'Stock de unidades',
        detalle:
          'Ficha por unidad con VIN, chasis, motor, dominio, km y estado (0 km / usado / reservado / vendido).',
      },
      {
        titulo: 'Venta de alto ticket',
        detalle:
          'Presupuesto → reserva con seña → orden de venta → entrega, con toma de usado como parte de pago.',
      },
      {
        titulo: 'Financiación y planes',
        detalle: 'Operaciones con financiera, banco o plan de ahorro: cuotas y comisiones.',
      },
      {
        titulo: 'Postventa y taller',
        detalle: 'Órdenes de reparación, turnos, mano de obra, garantías e historial por unidad.',
      },
      {
        titulo: 'Repuestos',
        detalle: 'Depósito de repuestos con stock, ubicaciones, picking para el taller y venta de mostrador.',
      },
      {
        titulo: 'Patentamiento y facturación',
        detalle: 'Seguimiento del trámite y factura con compliance ARCA de la unidad, el service y los repuestos.',
      },
    ],
  },
]

export function getVertical(slug: string): Vertical | undefined {
  return verticales.find((vertical) => vertical.slug === slug)
}
