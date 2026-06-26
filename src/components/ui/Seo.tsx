type SeoProps = {
  title: string
  description?: string
}

/**
 * SEO por página. React 19 sube de forma nativa <title> y <meta> al <head>,
 * así que no hace falta react-helmet ni librerías extra.
 */
export function Seo({ title, description }: SeoProps) {
  const fullTitle = title.includes('Baboons') ? title : `${title} · Baboons ERP`
  return (
    <>
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
    </>
  )
}
