export type ErpCaptura = {
  src: string
  titulo: string
  descripcion: string
}

export type ErpSeccion = {
  titulo: string
  modulos: string[]
}

export type ErpShowcase = {
  verticalSlug: string
  titulo: string
  subtitulo: string
  capturasDestacadas: ErpCaptura[]
  secciones: ErpSeccion[]
}

export const erpShowcases: ErpShowcase[] = [
  {
    verticalSlug: 'distribucion',
    titulo: 'Así se ve Baboons ERP para distribuidoras',
    subtitulo:
      'Centro de operaciones logísticas, ventas en campo, gestión administrativa y liquidación de reparto — todo en una sola plataforma web.',
    capturasDestacadas: [
      {
        src: '/images/erp/distribuidora/centro-operaciones-logisticas.png',
        titulo: 'Centro de Operaciones Logísticas',
        descripcion:
          'Panel central con acceso a hojas de ruta, repartidores, mapa de clientes, flota, pedidos y apps móviles.',
      },
      {
        src: '/images/erp/distribuidora/hoja-de-ruta.png',
        titulo: 'Hoja de Ruta con mapa',
        descripcion:
          'Planificación visual de rutas con mapa interactivo, control de visitas, carga auto-venta y rendición del chofer.',
      },
      {
        src: '/images/erp/distribuidora/historial-ventas.png',
        titulo: 'Historial de Ventas',
        descripcion:
          'Tablero con ingresos, ticket promedio, gráficos por forma de pago y facturación, con exportación a Excel.',
      },
      {
        src: '/images/erp/distribuidora/liquidacion-reparto.png',
        titulo: 'Liquidación de Reparto',
        descripcion:
          'Cierre de hoja de ruta con resumen contable, mercadería entregada, retornos físicos, mermas y cobros.',
      },
    ],
    secciones: [
      {
        titulo: 'Logística y Distribución',
        modulos: [
          'Hojas de Ruta',
          'Repartidores / Vendedores',
          'Mapa de Clientes',
          'Gestión de Flota',
          'Solicitud de Pedido',
          'Gestión de Pedidos',
          'App Vendedores (Mobile)',
          'Liquidación de Comisiones',
          'Cobranza Venta Móvil',
        ],
      },
      {
        titulo: 'Operaciones Generales',
        modulos: ['App Repartidores (Mobile)'],
      },
      {
        titulo: 'Ventas y Facturación',
        modulos: [
          'Nueva Venta',
          'Generar Presupuesto',
          'Remitos a Clientes',
          'Facturación Electrónica',
          'Cuentas Corrientes',
        ],
      },
      {
        titulo: 'Gestión Administrativa',
        modulos: [
          'Ingreso Mercadería',
          'Gestión Proveedores',
          'Órdenes de Compra',
          'Catálogo Productos',
          'Listas de Precios',
          'Ajustes Manuales',
          'Transferencias de Stock (internas)',
          'Control de Caja',
          'Movimientos Caja',
          'Caja Administrativa',
          'Gestión de Clientes',
          'Gestión de Empleados',
          'Gestión de Gastos',
          'Tickets de Soporte',
          'Etiquetas Globales',
        ],
      },
      {
        titulo: 'Contabilidad y Finanzas',
        modulos: [
          'Costos Fijos Mensuales',
          'Gestión de Bancos',
          'Contabilidad General',
          'Conciliación Bancaria',
        ],
      },
      {
        titulo: 'Reportes y Auditoría',
        modulos: [
          'Tablero de Control',
          'Historial Ventas',
          'Kardex Inventario',
          'Historial Presupuestos',
          'Historial Ajustes',
          'Historial Pagos Proveedores',
          'Historial Ingresos',
        ],
      },
    ],
  },
  {
    verticalSlug: 'manufactura',
    titulo: 'Así se ve Baboons ERP para plantas de producción',
    subtitulo:
      'Órdenes de producción, recetas BOM, control de calidad y dashboard de planta — desde la fábrica de pastas Bossio hasta cualquier planta alimenticia o industrial.',
    capturasDestacadas: [
      {
        src: '/images/erp/manufactura/gestion-manufactura-planta.png',
        titulo: 'Gestión de Manufactura (Planta)',
        descripcion:
          'Acceso directo a órdenes de producción, recetas BOM, control de calidad y dashboard de planta.',
      },
      {
        src: '/images/erp/manufactura/ordenes-produccion-kanban.png',
        titulo: 'Órdenes de Producción — Kanban',
        descripcion:
          'Tablero Kanban con lotes en borrador, planificadas, en proceso, control de calidad y finalizadas.',
      },
      {
        src: '/images/erp/manufactura/formulas-recetas-bom.png',
        titulo: 'Fórmulas / Recetas (BOM)',
        descripcion:
          'Estructuras de materiales con materias primas, insumos y packaging. Clonado, explosión e impresión.',
      },
      {
        src: '/images/erp/manufactura/dashboard-planta.png',
        titulo: 'Dashboard de Control de Planta',
        descripcion:
          'KPIs de órdenes activas, aprobación de calidad, fórmulas activas y alertas de materia prima.',
      },
      {
        src: '/images/erp/manufactura/control-calidad.png',
        titulo: 'Estación de Control de Calidad',
        descripcion:
          'Inspecciones de lote, bitácoras de conformidad y criterios dinámicos por producto.',
      },
      {
        src: '/images/erp/manufactura/estructura-bom.png',
        titulo: 'Estructura de Manufactura (BOM)',
        descripcion:
          'Explosión de componentes, fases de manufactura y reporte imprimible generado desde el ERP.',
      },
    ],
    secciones: [
      {
        titulo: 'Gestión de Manufactura (Planta)',
        modulos: [
          'Órdenes de Producción',
          'Recetas / BOM',
          'Control de Calidad',
          'Dashboard Planta',
        ],
      },
      {
        titulo: 'Producción y trazabilidad',
        modulos: [
          'Tablero Kanban de OPs',
          'Inventario de Lotes & Trazabilidad',
          'Parte Diario de Planta',
          'Reserva de materia prima',
          'Quality gate obligatorio',
          'Packaging y envases',
        ],
      },
      {
        titulo: 'Recetas y formulación',
        modulos: [
          'Fórmulas / Recetas (BOM)',
          'Explosión de componentes',
          'Fases de manufactura',
          'Clonado de recetas',
          'Impresión de estructura BOM',
          'Rendimiento base por receta',
        ],
      },
      {
        titulo: 'Control de calidad',
        modulos: [
          'Estación QC en planta',
          'Criterios dinámicos por producto',
          'Bitácora de ensayos',
          'Historial de inspecciones',
          'Dictamen Aprobado / Rechazado',
          'Muestreo estadístico (AQL)',
        ],
      },
    ],
  },
  {
    verticalSlug: 'gastronomia',
    titulo: 'Así se ve Baboons ERP para restaurantes y restós',
    subtitulo:
      'Portal de reservas con identidad de marca, salón virtual, POS mozos, KDS, carta digital programada y propina con QR — desde Vita Club hasta cadenas con múltiples salones.',
    capturasDestacadas: [
      {
        src: '/images/erp/resto/portal-reservas-horarios.png',
        titulo: 'Portal de Reservas — Horarios y cupos',
        descripcion:
          'Cupos inteligentes por franja horaria con estilo personalizado por negocio. Ejemplo: Vita Club.',
      },
      {
        src: '/images/erp/resto/reservas-mesas-dashboard.png',
        titulo: 'Dashboard de Reservas',
        descripcion:
          'Estadísticas de reservas, comensales, tasa de confirmación, no-show, origen y demanda por horario.',
      },
      {
        src: '/images/erp/resto/salon-virtual.png',
        titulo: 'Salón Virtual',
        descripcion:
          'Estado de mesas por sector en tiempo real: libres, ocupadas y en cobro, con mozo y tiempos.',
      },
      {
        src: '/images/erp/resto/pos-mozo.png',
        titulo: 'POS Mozos',
        descripcion:
          'Toma de pedido, envío a cocina, propina digital, cambio de mozo y división de cuenta.',
      },
      {
        src: '/images/erp/resto/gestion-carta.png',
        titulo: 'Gestión de Carta',
        descripcion:
          'Carta sincronizada con inventario: categorías, precios por menú/salón, pausado y programador horario.',
      },
      {
        src: '/images/erp/resto/portal-reservas-identificacion.png',
        titulo: 'Portal — Confirmación del comensal',
        descripcion:
          'Flujo de identificación, resumen de la reserva y confirmación con email automático.',
      },
    ],
    secciones: [
      {
        titulo: 'Portal de Reservas (white-label)',
        modulos: [
          'Estilo por negocio / marca',
          'Selección de comensales',
          'Momento de visita (desayuno, almuerzo, cena)',
          'Horarios y cupos inteligentes',
          'Preferencias y restricciones alimentarias',
          'Identificación y confirmación',
          'Compartir link del portal',
          'Exportar reservas a Excel',
        ],
      },
      {
        titulo: 'Reservas y fidelización',
        modulos: [
          'Dashboard de estadísticas',
          'Confirmación automática por email',
          'Reconfirmación de reserva',
          'Tasa de no-show y confirmación',
          'Origen: portal web vs. manual',
          'Gamificación y puntos por visitas',
          'Puntos por reservas y consumos',
          'Líderes y ranking de mozos',
        ],
      },
      {
        titulo: 'Salón y operación',
        modulos: [
          'Salón Virtual por sectores',
          'Estado de mesa: libre / ocupada / en cobro',
          'Asignación de mozo por mesa',
          'Tiempos de permanencia',
          'POS Mozos con comandas',
          'Cambio de mozo',
          'Dividir mesa y cuenta',
          'Pre-cuenta y cierre de caja',
        ],
      },
      {
        titulo: 'Cocina, carta y cobros',
        modulos: [
          'KDS Cocina',
          'KDS Barra',
          'KDS Salón',
          'Alertas por tiempo en mesa',
          'Carta virtual con QR',
          'Activación por categoría y horario',
          'Múltiples menús por salón',
          'Propina digital con QR dinámico',
          'Sugerencia de % según consumo',
        ],
      },
      {
        titulo: 'Gestión de carta',
        modulos: [
          'Catálogo de platos con imágenes',
          'Categorías y guarniciones',
          'Precios por menú (Dolce, Bodegón, etc.)',
          'Sincronización con inventario',
          'Pausar platos y bajo stock',
          'Programador de carta',
          'Bitácora de cambios',
          'Exportar / importar carta',
        ],
      },
    ],
  },
]

export function getErpShowcase(verticalSlug: string): ErpShowcase | undefined {
  return erpShowcases.find((showcase) => showcase.verticalSlug === verticalSlug)
}
