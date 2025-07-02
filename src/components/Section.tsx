import type { PropsWithChildren } from 'react'

interface SectionProps {
  id: string
  accent?: string
  title?: string
  description?: string
  subtle?: boolean
}

export const Section = ({
  id,
  accent,
  title,
  description,
  subtle,
  children,
}: PropsWithChildren<SectionProps>) => {
  const hasHeader = Boolean(accent || title || description)
  const className = subtle ? 'section section--subtle' : 'section'

  return (
    <section id={id} className={className}>
      {hasHeader && (
        <header className="section-header">
          {accent && <span className="section-accent">{accent}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {description && <p className="section-description">{description}</p>}
        </header>
      )}
      <div className="section-content">{children}</div>
    </section>
  )
}
