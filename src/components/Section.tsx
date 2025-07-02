import type { PropsWithChildren } from 'react'
import {
  SectionAccent,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  SectionWrapper,
} from './Section.style'

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

  return (
    <SectionWrapper id={id} $subtle={subtle}>
      {hasHeader && (
        <SectionHeader>
          {accent && <SectionAccent>{accent}</SectionAccent>}
          {title && <SectionTitle>{title}</SectionTitle>}
          {description && <SectionDescription>{description}</SectionDescription>}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  )
}
