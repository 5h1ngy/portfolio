import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioContributions } from '../../types/portfolio'

const ContributionsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ContributionCard = styled.article`
  padding: 1.4rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px solid rgba(148, 163, 198, 0.12);
  background: rgba(8, 13, 28, 0.75);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 20% 20%, rgba(92, 243, 233, 0.08) 0%, transparent 65%);
    pointer-events: none;
  }
`

const ContributionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  h3 {
    font-size: 1.05rem;
    margin: 0;
  }

  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const SkillTag = styled.span`
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid rgba(92, 243, 233, 0.22);
  background: rgba(92, 243, 233, 0.08);
  font-size: 0.75rem;
`

interface ContributionsSectionProps {
  contributions: PortfolioContributions
}

export const ContributionsSection = ({ contributions }: ContributionsSectionProps) => (
  <Section id="contributions">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Contributi</SectionKicker>
        <SectionTitle>{contributions.title}</SectionTitle>
        <SectionCaption>{contributions.caption}</SectionCaption>
      </SectionHeader>
      <ContributionsGrid>
        {contributions.items.map((item) => (
          <ContributionCard key={`${item.name}-${item.period}`}>
            <ContributionHeader>
              <h3>{item.name}</h3>
              <span>
                {item.role} - {item.period}
              </span>
            </ContributionHeader>
            <Summary>{item.description}</Summary>
            <SkillList>
              {item.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillList>
          </ContributionCard>
        ))}
      </ContributionsGrid>
    </SectionInner>
  </Section>
)

