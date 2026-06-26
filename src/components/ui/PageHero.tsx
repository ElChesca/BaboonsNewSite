import type { ReactNode } from 'react'
import { Container } from '../layout/Container'

type PageHeroProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 sm:py-20">
        {eyebrow ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="mt-2 max-w-3xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p> : null}
        {children ? <div className="mt-7 flex flex-wrap gap-3">{children}</div> : null}
      </Container>
    </section>
  )
}
