import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  children: ReactNode
  className?: string
  /** Si se pasa `to`, toda la card es un link y gana estado hover. */
  to?: string
}

const base = 'rounded-xl border border-line bg-surface p-6 shadow-[var(--shadow-card)]'

export function Card({ children, className = '', to }: CardProps) {
  if (to) {
    return (
      <Link
        to={to}
        className={`${base} block transition-all hover:-translate-y-0.5 hover:border-line-strong hover:shadow-[var(--shadow-lift)] ${className}`}
      >
        {children}
      </Link>
    )
  }
  return <div className={`${base} ${className}`}>{children}</div>
}
