import type { ReactNode } from 'react'

type BadgeProps = {
  children: ReactNode
  tone?: 'brand' | 'neutral' | 'cyan'
}

const tones = {
  brand: 'bg-brand text-white',
  neutral: 'bg-bg-soft text-muted',
  cyan: 'bg-cyan text-white',
}

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
