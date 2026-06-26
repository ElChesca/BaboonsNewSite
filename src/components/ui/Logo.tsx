import { Link } from 'react-router-dom'
import logoSrc from '../../assets/logo-baboons.png'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Mostrar el texto "Baboons.Co" junto al isotipo. */
  showText?: boolean
}

const imageSizes = {
  sm: 'h-9 w-9',
  md: 'h-11 w-11',
  lg: 'h-16 w-16',
  xl: 'h-24 w-24',
}

const pixelSizes = {
  sm: 36,
  md: 44,
  lg: 64,
  xl: 96,
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const px = pixelSizes[size]

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Baboons.Co — Inicio"
    >
      <img
        src={logoSrc}
        alt="Baboons.Co"
        className={`${imageSizes[size]} shrink-0 rounded-full object-contain shadow-sm ring-1 ring-line`}
        width={px}
        height={px}
        decoding="async"
      />
      {showText ? (
        <span className="text-lg font-extrabold tracking-tight text-ink">
          Baboons<span className="text-brand">.Co</span>
        </span>
      ) : null}
    </Link>
  )
}
