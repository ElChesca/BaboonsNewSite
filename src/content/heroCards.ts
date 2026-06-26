export type HeroCard = {
  label: string
  to: string
}

/** Tarjetas de la sección principal — mapean a rutas del sitio. */
export const heroCards: HeroCard[] = [
  { label: 'Gastronomía Integrada', to: '/verticales/gastronomia' },
  { label: 'Gestión de Almacén y Distribución', to: '/verticales/distribucion' },
  { label: 'Planificación de Manufactura', to: '/verticales/manufactura' },
  { label: 'Gestión de Centros de Neumáticos', to: '/verticales/neumar' },
  { label: 'Gestión de Eventos y Clubes', to: '/verticales/club-premium' },
  { label: 'Gestión de Concesionarias de Vehículos', to: '/verticales/concesionarias' },
  { label: 'Gestión de Alquiler de Equipos', to: '/producto' },
  { label: 'Gestión de Maquinaria Agrícola', to: '/verticales/concesionarias' },
  { label: 'Plataforma Baboons ERP', to: '/producto' },
]

export const heroImageSrc = '/images/home/seccion-principal.png'
