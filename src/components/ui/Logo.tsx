import { Link } from 'react-router-dom'
import logoSrc from '../../assets/logo-baboons.png'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Mostrar el texto "Baboons.Co" junto al isotipo. */
  showText?: boolean
}

const imageSizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
  xl: 'h-20 w-20',
}

const shellSizes = {
  sm: 'h-10 w-10',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-[5.5rem] w-[5.5rem]',
}

const pixelSizes = {
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const px = pixelSizes[size]

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Baboons.Co — Inicio"
    >
      {/* Fondo oscuro: el isotipo es blanco sobre negro y desaparece en fondos claros */}
      <span
        className={`${shellSizes[size]} inline-flex shrink-0 items-center justify-center rounded-full bg-ink shadow-[var(--shadow-card)] ring-2 ring-ink/20`}
      >
        <img
          src={logoSrc}
          alt=""
          aria-hidden="true"
          className={`${imageSizes[size]} rounded-full object-cover`}
          width={px}
          height={px}
          decoding="async"
        />
      </span>
      {showText ? (
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Baboons<span className="text-brand">.Co</span>
        </span>
      ) : null}
    </Link>
  )
}
