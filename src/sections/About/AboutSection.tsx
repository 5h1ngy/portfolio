import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioAbout } from '../../types/portfolio'
import { getHighlightIcon } from '../../utils/iconMap'

const Content = styled.div`
  display: grid;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1.3fr 1fr;
    align-items: start;
  }
`

const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const HighlightGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const HighlightCard = styled.article`
  padding: 1.3rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px solid rgba(148, 163, 198, 0.12);
  background: rgba(8, 12, 28, 0.7);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: transform 0.3s ease, border 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accentOutline};
  }
`

const HighlightIcon = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(92, 243, 233, 0.1);
  color: ${({ theme }) => theme.colors.accent};
`

const HighlightTitle = styled.h3`
  font-size: 1.05rem;
`

const StatStrip = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`

const Stat = styled.div`
  padding: 1rem 1.1rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px solid rgba(92, 243, 233, 0.18);
  background: rgba(92, 243, 233, 0.06);
  min-width: min(160px, 100%);
`

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`

const StatLabel = styled.div`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`

interface AboutSectionProps {
  about: PortfolioAbout
}

export const AboutSection = ({ about }: AboutSectionProps) => (
  <Section id="about">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Chi sono</SectionKicker>
        <SectionTitle>{about.title}</SectionTitle>
        <SectionCaption>{about.caption}</SectionCaption>
      </SectionHeader>
      <Content>
        <Introduction>
          {about.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <StatStrip>
            {about.stats.map((stat) => (
              <Stat key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </Stat>
            ))}
          </StatStrip>
        </Introduction>
        <HighlightGrid>
          {about.highlights.map((highlight) => {
            const Icon = getHighlightIcon(highlight.icon)
            return (
              <HighlightCard key={highlight.title}>
                <HighlightIcon>
                  <Icon size={18} />
                </HighlightIcon>
                <HighlightTitle>{highlight.title}</HighlightTitle>
                <p>{highlight.description}</p>
              </HighlightCard>
            )
          })}
        </HighlightGrid>
      </Content>
    </SectionInner>
  </Section>
)
