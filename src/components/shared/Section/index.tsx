import type { PropsWithChildren } from 'react'
import { SectionContent, SectionDescription, SectionHeader, SectionHeading, SectionWrapper } from './style'

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
  const heading = accent ?? title
  const hasHeader = Boolean(heading || description)

  return (
    <SectionWrapper id={id} $subtle={subtle}>
      {hasHeader && (
        <SectionHeader>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {description && <SectionDescription>{description}</SectionDescription>}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  )
}

