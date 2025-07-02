import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioProjects } from '../../types/portfolio'
import { ProjectListing } from './ProjectsSection'

interface OpenSourceSectionProps {
  openSource: PortfolioProjects
}

export const OpenSourceSection = ({ openSource }: OpenSourceSectionProps) => (
  <Section id="open-source">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Open Source</SectionKicker>
        <SectionTitle>{openSource.title}</SectionTitle>
        <SectionCaption>{openSource.caption}</SectionCaption>
      </SectionHeader>
      <ProjectListing featured={openSource.featured} others={openSource.others} />
    </SectionInner>
  </Section>
)
