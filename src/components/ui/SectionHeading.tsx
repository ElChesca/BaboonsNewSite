type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  /** Id del h2, para aria-labelledby de la sección. */
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  titleId,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</span>
      ) : null}
      <h2 id={titleId} className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base text-muted">{subtitle}</p> : null}
    </div>
  )
}
