export type HeroCard = {
  nombre: string
  /** Una línea de qué resuelve la vertical. */
  resuelve: string
  alt: string
  image: string
  to: string
}

/**
 * Verticales de la sección principal.
 * Las fotos salen de la grilla original; el nombre va en HTML
 * porque el texto quemado en la imagen está mal generado.
 */
export const heroCards: HeroCard[] = [
  {
    nombre: 'Gastronomía',
    resuelve: 'Reservas, salón, cocina y caja integrados.',
    alt: 'Cocinero en una cocina profesional con la pantalla de gastronomía de Baboons ERP',
    image: '/images/home/verticales/gastronomia.png',
    to: '/verticales/gastronomia',
  },
  {
    nombre: 'Almacén y Distribución',
    resuelve: 'Rutas, stock y liquidación de reparto.',
    alt: 'Depósito con estanterías y la pantalla de almacén y distribución de Baboons ERP',
    image: '/images/home/verticales/almacen-distribucion.png',
    to: '/verticales/distribucion',
  },
  {
    nombre: 'Manufactura',
    resuelve: 'Recetas, producción y control de calidad.',
    alt: 'Línea de manufactura con brazos robóticos y la planificación de Baboons ERP',
    image: '/images/home/verticales/manufactura.png',
    to: '/verticales/manufactura',
  },
  {
    nombre: 'Neumáticos',
    resuelve: 'Portal de ventas y stock por vehículo.',
    alt: 'Operario en un taller de neumáticos usando la gestión de Baboons ERP',
    image: '/images/home/verticales/neumaticos.png',
    to: '/verticales/neumar',
  },
  {
    nombre: 'Eventos y Clubes',
    resuelve: 'Reservas, eventos y fidelización de socios.',
    alt: 'Ingreso de un club con el panel de eventos de Baboons ERP',
    image: '/images/home/verticales/eventos-clubes.png',
    to: '/verticales/club-premium',
  },
  {
    nombre: 'Concesionarias',
    resuelve: 'Showroom, alto ticket y postventa.',
    alt: 'Showroom de una concesionaria con la gestión comercial de Baboons ERP',
    image: '/images/home/verticales/concesionarias.png',
    to: '/verticales/concesionarias',
  },
  {
    nombre: 'Alquiler de Equipos',
    resuelve: 'Disponibilidad y control de equipos.',
    alt: 'Local de alquiler de equipos con la pantalla de gestión de Baboons ERP',
    image: '/images/home/verticales/alquiler-equipos.png',
    to: '/producto',
  },
  {
    nombre: 'Maquinaria Agrícola',
    resuelve: 'Venta y postventa de maquinaria.',
    alt: 'Tractor en un campo con la gestión de maquinaria agrícola de Baboons ERP',
    image: '/images/home/verticales/maquinaria-agricola.png',
    to: '/verticales/concesionarias',
  },
  {
    nombre: 'Core System',
    resuelve: 'Datos, usuarios y caja compartidos.',
    alt: 'Panel del sistema central de Baboons ERP con el engranaje de la marca',
    image: '/images/home/verticales/core-system.png',
    to: '/producto',
  },
]
