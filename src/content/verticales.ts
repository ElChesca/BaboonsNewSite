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
    nombre: 'Gastronomía · Restó',
    resumen:
      'Restaurantes y locales gastronómicos: portal de reservas white-label, salón virtual, KDS, carta digital, propina con QR y gamificación.',
    problema:
      'El salón usa un sistema, la cocina otro, las reservas van por WhatsApp y la carta no refleja el stock. Sin integración, la caja nunca cierra a la primera.',
    modulos: ['pos-resto', 'reservas-eventos', 'facturacion', 'inventario', 'cuenta-corriente', 'listas-precios', 'crm'],
    funcionalidades: [
      {
        titulo: 'Portal de reservas por negocio',
        detalle:
          'Estilo white-label por local (ej. Vita Club): comensales, momento de visita, horarios con cupos y preferencias alimentarias.',
      },
      {
        titulo: 'Horarios y cupos inteligentes',
        detalle:
          'Disponibilidad en tiempo real por franja horaria, con bloqueo automático cuando no hay cupo.',
      },
      {
        titulo: 'Confirmación y reconfirmación',
        detalle:
          'Email automático al reservar, recordatorios y flujo de identificación del comensal antes de confirmar.',
      },
      {
        titulo: 'Salón virtual',
        detalle:
          'Mapa de mesas por sector, estado en vivo (libre, ocupada, en cobro), mozo asignado y tiempos por mesa.',
      },
      {
        titulo: 'POS Mozos y comandas',
        detalle:
          'Toma de pedido por mesa, envío a cocina/barra, cambio de mozo, división de cuenta y propina digital.',
      },
      {
        titulo: 'KDS por destino',
        detalle:
          'Kitchen Display en cocina, barra y salón con alertas por tiempo en mesa y flujo de comandas.',
      },
      {
        titulo: 'Propina digital con QR',
        detalle:
          'Generación de QR dinámico según el porcentaje del consumo, con sugerencia interactiva en el POS.',
      },
      {
        titulo: 'Carta virtual programada',
        detalle:
          'Activación y pausa por categoría y horario, múltiples listas de precios por salón y sincronización con inventario.',
      },
      {
        titulo: 'Gamificación y puntos',
        detalle:
          'Puntaje por visitas, reservas y consumos. Club de puntos y fidelización integrados al CRM.',
      },
    ],
  },
  {
    slug: 'manufactura',
    nombre: 'Manufactura',
    resumen:
      'Plantas de producción: órdenes de producción, BOM, packaging, control de calidad y solicitud de mercadería desde sucursales.',
    problema:
      'La planta produce a ciegas: las sucursales piden por WhatsApp, el stock de materia prima no se descuenta automáticamente y no hay trazabilidad de lotes.',
    modulos: ['mes', 'inventario', 'remitos', 'compras', 'facturacion'],
    funcionalidades: [
      { titulo: 'Órdenes de producción', detalle: 'Fases secuenciales con explosión de BOM y consumos por orden.' },
      { titulo: 'Solicitud → OP automática', detalle: 'Las sucursales solicitan mercadería y el sistema genera la Orden de Producción.' },
      { titulo: 'Packaging y envases', detalle: 'Control de envases, etiquetado y lotes con vencimiento.' },
      { titulo: 'Quality gate', detalle: 'Control de calidad obligatorio antes del cierre de cada lote de producción.' },
      { titulo: 'Trazabilidad completa', detalle: 'Desde materia prima hasta producto terminado en sucursal.' },
    ],
  },
  {
    slug: 'distribucion',
    nombre: 'Distribución',
    resumen:
      'Distribuidoras y reparto: hojas de ruta con mapa, apps móviles, liquidación de reparto, ventas, facturación y gestión administrativa completa.',
    problema:
      'Los repartidores cobran en papel, el stock del camión no se controla y la liquidación del día se hace a mano al volver del reparto.',
    modulos: ['distribuidora', 'inventario', 'remitos', 'cuenta-corriente', 'facturacion', 'listas-precios', 'compras'],
    funcionalidades: [
      { titulo: 'Centro de operaciones', detalle: 'Panel con hojas de ruta, flota, mapa de clientes, pedidos y apps móviles de vendedores y repartidores.' },
      { titulo: 'Hoja de ruta con mapa', detalle: 'Rutas visuales con visitas, carga auto-venta, rendición del chofer y liquidación al cierre del día.' },
      { titulo: 'Historial de ventas', detalle: 'Tablero con ingresos, ticket promedio, gráficos por forma de pago y exportación a Excel.' },
      { titulo: 'Liquidación de reparto', detalle: 'Resumen contable, mercadería entregada, retornos físicos, mermas y cobros por responsable.' },
      { titulo: 'Gestión administrativa', detalle: 'Compras, proveedores, catálogo, listas de precios, caja y transferencias de stock internas.' },
      { titulo: 'Reportes y auditoría', detalle: 'Kardex, historial de ventas, presupuestos, pagos a proveedores e ingresos de mercadería.' },
    ],
  },
  {
    slug: 'neumar',
    nombre: 'Neumar · Neumáticos',
    resumen:
      'Distribuidora de neumáticos: portal de ventas, van sales, auto-venta a bordo e integración Baboons ↔ Odoo.',
    problema:
      'La distribuidora opera con dos sistemas desconectados: el ERP para back-office y planillas para el reparto en van. Sin integración, el stock del camión nunca coincide con la liquidación.',
    modulos: ['distribuidora', 'inventario', 'remitos', 'cuenta-corriente', 'facturacion', 'listas-precios'],
    funcionalidades: [
      { titulo: 'Portal de ventas', detalle: 'SPA pública para que clientes consulten stock y hagan pedidos online.' },
      { titulo: 'Van Sales', detalle: 'Auto-venta y venta a bordo con carga libre y cobro en campo.' },
      { titulo: 'Integración Odoo', detalle: 'Sincronización desacoplada con ERP externo para contabilidad y compras.' },
      { titulo: 'Logística de reparto', detalle: 'Hojas de ruta optimizadas con liquidación automática al cierre del día.' },
      { titulo: 'Stock por vehículo', detalle: 'Inventario móvil por van con trazabilidad de neumáticos por medida y marca.' },
    ],
  },
  {
    slug: 'logistica',
    nombre: 'Logística',
    resumen:
      'Operaciones de depósito y centros de distribución: remitos, transferencias, WMS, CEDI y TMS sobre el motor central.',
    problema:
      'El depósito crece pero se sigue manejando con planillas: ubicaciones, picking, despacho y transferencias entre sucursales sin trazabilidad.',
    modulos: ['wms', 'cedi', 'tms', 'inventario', 'remitos'],
    funcionalidades: [
      { titulo: 'Remitos y transferencias', detalle: 'Módulo genérico de transferencias de stock para cualquier negocio o cadena.' },
      { titulo: 'Mapa de depósito', detalle: 'Ubicaciones físicas por rack, nivel y posición con inventario móvil.' },
      { titulo: 'Picking y packing', detalle: 'Picking optimizado por hoja de ruta y remitos automáticos de salida.' },
      { titulo: 'Cross-docking', detalle: 'Coordinación multi-canal desde el CEDI en tiempo real sin almacenamiento intermedio.' },
      { titulo: 'Plataforma WMS+TMS', detalle: 'Producto modular agnóstico de ERP, pensado para medianas y grandes empresas.' },
    ],
  },
  {
    slug: 'club-premium',
    nombre: 'Clubes & Eventos',
    resumen:
      'Clubes premium y locales de eventos: reservas, calendario, propinas, gamificación y seguridad integrados.',
    problema:
      'Las reservas se gestionan por teléfono, los eventos en planillas y las propinas se pierden entre mozos y caja. Sin un portal unificado, el club no fideliza ni controla la operación.',
    destacada: true,
    modulos: ['reservas-eventos', 'pos-resto', 'crm', 'cuenta-corriente', 'facturacion'],
    funcionalidades: [
      { titulo: 'Portal de reservas', detalle: 'Reservas online con identidad de marca y disponibilidad en tiempo real.' },
      { titulo: 'Calendario de eventos', detalle: 'Vistas Mes / Semana / Día / Agenda con presupuestos integrados.' },
      { titulo: 'Propinas 2.0', detalle: 'Propina digital con sugerencia interactiva y distribución transparente.' },
      { titulo: 'Gamificación', detalle: 'Club de puntos, fidelización y recompensas para socios recurrentes.' },
      { titulo: 'Seguridad de eventos', detalle: 'Control de acceso, listas de invitados y módulo de seguridad por evento.' },
    ],
  },
  {
    slug: 'concesionarias',
    nombre: 'Concesionarias',
    resumen:
      'Concesionarias de vehículos y maquinaria: showroom, portal B2C, venta de alto ticket, postventa y repuestos.',
    destacada: true,
    problema:
      'La concesionaria usa un sistema para ventas, otro para el taller, planillas para repuestos y otra cosa para facturar. Datos duplicados, sin trazabilidad por unidad ni portal online para captar leads.',
    modulos: ['inventario', 'facturacion', 'cuenta-corriente', 'crm', 'mes', 'wms'],
    funcionalidades: [
      {
        titulo: 'Stock de unidades',
        detalle:
          'Ficha por unidad con VIN, chasis, motor, dominio, km y estado (0 km / usado / reservado / vendido).',
      },
      {
        titulo: 'Portal B2C Premium',
        detalle:
          'Sitio web dark automotive con catálogo, captura de leads y CRM integrado. Implementado en Cuyo Automotores (Mendoza).',
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
        titulo: 'Centros de costo',
        detalle: 'Cada unidad es un bien único con centro de costos individual y trazabilidad completa.',
      },
    ],
  },
]

export function getVertical(slug: string): Vertical | undefined {
  return verticales.find((vertical) => vertical.slug === slug)
}
