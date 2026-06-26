export type ModuloStatus = 'activo' | 'proximamente'

export type Modulo = {
  slug: string
  nombre: string
  categoria: string
  resumen: string
  status: ModuloStatus
  features: string[]
}

export const modulos: Modulo[] = [
  {
    slug: 'pos-resto',
    nombre: 'POS & Restó',
    categoria: 'Punto de venta',
    resumen:
      'Sistema de caja completo con gestión de mesas, comandas y Kitchen Display System, integrado con cobro múltiple.',
    status: 'activo',
    features: [
      'Mesas, comandas y cierre de caja',
      'KDS por destino: cocina, barra, salón',
      'Cobro mixto: efectivo, Mercado Pago, cuenta corriente',
      'Carta digital con precios y stock vinculado',
    ],
  },
  {
    slug: 'facturacion',
    nombre: 'Facturación AFIP/ARCA',
    categoria: 'Compliance fiscal',
    resumen:
      'Integración nativa con ARCA para facturas A, B y C con desglose automático de IVA y QR embebido.',
    status: 'activo',
    features: [
      'Factura A con desglose de IVA automático',
      'QR AFIP en tickets de impresora',
      'CAE almacenado para reimpresión offline',
      'Agente local de impresión térmica',
    ],
  },
  {
    slug: 'inventario',
    nombre: 'Inventario & Stock',
    categoria: 'Control de existencias',
    resumen:
      'Stock físico, reservado y disponible en tiempo real con Kardex auditable y ajustes trazables.',
    status: 'activo',
    features: [
      'Stock disponible = físico − comprometido',
      'Inventario móvil por vehículo',
      'Alertas de substock configurables',
      'Kardex completo por producto',
    ],
  },
  {
    slug: 'distribuidora',
    nombre: 'Distribuidora & Logística',
    categoria: 'Reparto y entrega',
    resumen:
      'Hojas de ruta, despacho, entrega en campo y liquidación diaria con conciliación financiera integrada.',
    status: 'activo',
    features: [
      'Flujo: preventa → despacho → entrega',
      'Modo repartidor móvil con cobro integrado',
      'Auto-venta / Van Sales con carga libre',
      'Liquidación de hoja de ruta con resumen financiero',
    ],
  },
  {
    slug: 'cuenta-corriente',
    nombre: 'Cuenta Corriente',
    categoria: 'Cobranzas',
    resumen:
      'Crédito para clientes con debe/haber y límites. Vinculación automática desde ventas de todos los canales.',
    status: 'activo',
    features: [
      'Débito automático al cerrar venta en cuenta corriente',
      'Historial de movimientos por cliente',
      'Compatible con POS, Distribuidora y Auto-venta',
      'Límites de crédito configurables',
    ],
  },
  {
    slug: 'mes',
    nombre: 'MES · Manufactura',
    categoria: 'Ejecución de planta',
    resumen:
      'Sistema de ejecución de planta con trazabilidad completa de lotes, órdenes de producción, BOM y control de calidad.',
    status: 'activo',
    features: [
      'Órdenes de producción con fases secuenciales',
      'BOM: explosión de consumos y recetas por orden',
      'Quality gate obligatorio antes del cierre',
      'Lotes físicos con vencimiento y trazabilidad completa',
    ],
  },
  {
    slug: 'tms',
    nombre: 'TMS',
    categoria: 'Transportation Management',
    resumen:
      'Optimización inteligente de flotas y rutas, desde la planificación hasta el seguimiento en tiempo real.',
    status: 'proximamente',
    features: [
      'Planificación y optimización de rutas',
      'Asignación por capacidad de vehículo',
      'Seguimiento GPS en tiempo real',
      'Rendición automática de valores',
    ],
  },
  {
    slug: 'wms',
    nombre: 'WMS',
    categoria: 'Warehouse Management',
    resumen:
      'Control del depósito: ubicaciones físicas, recepción, picking, packing y movimientos con trazabilidad completa.',
    status: 'proximamente',
    features: [
      'Mapa de depósito con rack/nivel/posición',
      'Recepción con control de calidad',
      'Picking optimizado por hoja de ruta',
      'Multi-depósito y transferencias',
    ],
  },
  {
    slug: 'cedi',
    nombre: 'CEDI',
    categoria: 'Centro de distribución',
    resumen:
      'Hub logístico central que coordina producción, almacenamiento y despacho hacia múltiples canales.',
    status: 'proximamente',
    features: [
      'Recepción desde producción y proveedores',
      'Cross-docking sin almacenamiento',
      'Slotting por rotación de producto',
      'Dashboard operativo en tiempo real',
    ],
  },
]

export function getModulo(slug: string): Modulo | undefined {
  return modulos.find((modulo) => modulo.slug === slug)
}
