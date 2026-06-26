import { Link } from 'react-router-dom'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-14 w-14',
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Baboons.Co — Inicio">
      <img
        src="/images/logo-baboons.png"
        alt="Logo Baboons.Co"
        className={`${sizes[size]} shrink-0 rounded-full object-cover`}
        width={size === 'lg' ? 56 : size === 'md' ? 40 : 32}
        height={size === 'lg' ? 56 : size === 'md' ? 40 : 32}
      />
      <span className="text-lg font-extrabold tracking-tight text-ink">
        Baboons<span className="text-brand">.Co</span>
      </span>
    </Link>
  )
}
