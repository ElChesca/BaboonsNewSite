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
      'Sistema de caja completo con gestión de mesas, comandas, KDS y flujo mozo → cocina → caja, integrado con cobro múltiple.',
    status: 'activo',
    features: [
      'Mesas, comandas y cierre de caja por turno',
      'KDS por destino: cocina, barra, salón con alertas por tiempo',
      'Cobro mixto: efectivo, Mercado Pago, cuenta corriente',
      'Carta premium con precios programados y stock vinculado',
      'Propina digital con sugerencia interactiva en POS mozos',
      'Flujo centralizado de pre-cuenta y caja',
    ],
  },
  {
    slug: 'facturacion',
    nombre: 'Facturación AFIP/ARCA',
    categoria: 'Compliance fiscal',
    resumen:
      'Integración nativa con ARCA (ex AFIP) para facturas A, B y C con desglose automático de IVA, consulta de padrón y QR embebido.',
    status: 'activo',
    features: [
      'Factura A con desglose de IVA automático',
      'Autenticación WSAA y consulta de padrón ARCA',
      'QR AFIP en tickets de impresora térmica',
      'CAE almacenado para reimpresión offline',
      'Agente local de impresión y motores PDF configurables',
    ],
  },
  {
    slug: 'inventario',
    nombre: 'Inventario & Stock',
    categoria: 'Control de existencias',
    resumen:
      'Stock físico, reservado y disponible en tiempo real con Kardex auditable, inventario móvil y transferencias entre depósitos.',
    status: 'activo',
    features: [
      'Stock disponible = físico − comprometido',
      'Inventario móvil por vehículo o sucursal',
      'Transferencias de stock genéricas y por cadena',
      'Alertas de substock configurables',
      'Kardex completo por producto con trazabilidad',
    ],
  },
  {
    slug: 'distribuidora',
    nombre: 'Distribuidora & Logística',
    categoria: 'Reparto y entrega',
    resumen:
      'Hojas de ruta, despacho, entrega en campo, van sales y liquidación diaria con conciliación financiera integrada.',
    status: 'activo',
    features: [
      'Flujo: preventa → despacho → entrega',
      'Modo repartidor móvil con cobro integrado',
      'Auto-venta / Van Sales con carga libre a bordo',
      'Liquidación de hoja de ruta con resumen financiero',
      'Portal de ventas público para clientes B2B',
    ],
  },
  {
    slug: 'remitos',
    nombre: 'Remitos & Transferencias',
    categoria: 'Trazabilidad logística',
    resumen:
      'Módulo de remitos y transferencias de stock entre depósitos, sucursales y centros de distribución con trazabilidad completa.',
    status: 'activo',
    features: [
      'Remitos de salida y recepción con confirmación',
      'Transferencias Casa Central → sucursales',
      'Retorno de mercadería en liquidación de HR',
      'Trazabilidad por lote y por unidad',
      'Integración con inventario y distribución',
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
      'Historial de ventas consolidado por canal',
    ],
  },
  {
    slug: 'compras',
    nombre: 'Compras & Finanzas',
    categoria: 'Adquisiciones',
    resumen:
      'Gestión de compras a proveedores, deuda pendiente, órdenes de compra y conciliación con inventario y facturación.',
    status: 'activo',
    features: [
      'Órdenes de compra y recepción de mercadería',
      'Deuda con proveedores y vencimientos',
      'Gestión administrativa de compras',
      'Vinculación automática con stock y costos',
      'Historial de compras por proveedor',
    ],
  },
  {
    slug: 'listas-precios',
    nombre: 'Listas de Precios',
    categoria: 'Pricing',
    resumen:
      'Automatización de precios, ofertas por volumen, descuentos por cliente y programador de precios para múltiples canales.',
    status: 'activo',
    features: [
      'Listas de precios por canal y por cliente',
      'Ofertas por volumen y descuentos escalonados',
      'Programador de precios con vigencia programada',
      'Sincronización con POS, distribuidora y portal B2B',
      'Historial de cambios de precio auditable',
    ],
  },
  {
    slug: 'mes',
    nombre: 'MES · Manufactura',
    categoria: 'Ejecución de planta',
    resumen:
      'Sistema de ejecución de planta con trazabilidad de lotes, órdenes de producción, BOM, packaging y control de calidad.',
    status: 'activo',
    features: [
      'Órdenes de producción con fases secuenciales',
      'BOM: explosión de consumos y recetas por orden',
      'Solicitud de mercadería desde sucursales → OP automática',
      'Módulo de packaging y envases',
      'Quality gate obligatorio antes del cierre de lote',
      'Lotes físicos con vencimiento y trazabilidad completa',
    ],
  },
  {
    slug: 'crm',
    nombre: 'CRM & Cerebro Comercial',
    categoria: 'Relación con clientes',
    resumen:
      'CRM completo con seguimiento de leads, integración Instagram/Facebook, auto-respondedor y pipeline comercial.',
    status: 'activo',
    features: [
      'Pipeline de leads y oportunidades comerciales',
      'Integración Instagram → Baboons CRM',
      'Auto-respondedor Facebook e Instagram (Meta)',
      'DMs bidireccionales y respuesta a comentarios',
      'Cerebro comercial con seguimiento de publicaciones',
    ],
  },
  {
    slug: 'reservas-eventos',
    nombre: 'Reservas & Eventos',
    categoria: 'Hospitalidad premium',
    resumen:
      'Gestión de reservas, calendario de eventos, presupuestos, propinas y gamificación para clubes y locales premium.',
    status: 'activo',
    features: [
      'Portal de reservas con identidad de marca',
      'Calendario transversal: Mes / Semana / Día / Agenda',
      'Módulo de eventos con presupuestos integrados',
      'Propinas 2.0 y gamificación de puntos',
      'Seguridad y control de acceso por evento',
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
      'Handoff WMS ⇄ TMS desacoplado de ERP',
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
      'Plataforma agnóstica de ERP con integración Odoo',
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
      'Coordinación multi-canal desde un solo hub',
    ],
  },
]

export function getModulo(slug: string): Modulo | undefined {
  return modulos.find((modulo) => modulo.slug === slug)
}
