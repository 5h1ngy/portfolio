import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioExperience } from '../../types/portfolio'
import { getIconComponent } from '../../utils/iconMap'

const Timeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-left: 1.75rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    bottom: 0.3rem;
    width: 2px;
    background: linear-gradient(180deg, rgba(92, 243, 233, 0.4) 0%, rgba(92, 243, 233, 0) 100%);
  }
`

const Entry = styled.article`
  position: relative;
  padding: 1.5rem 1.75rem;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  border: 1px solid rgba(148, 163, 198, 0.12);
  background: rgba(6, 11, 24, 0.8);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 18px 45px rgba(4, 7, 19, 0.35);

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
    border: 3px solid rgba(4, 7, 19, 0.9);
    left: -1.96rem;
    top: 1.6rem;
  }
`

const EntryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.65rem 1.25rem;
`

const Role = styled.h3`
  font-size: 1.1rem;
`

const Company = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.25rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const AchievementList = styled.ul`
  display: grid;
  gap: 0.75rem;
  padding-left: 1.2rem;
  list-style: disc;
  color: ${({ theme }) => theme.colors.textSecondary};
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const Tech = styled.span`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(92, 243, 233, 0.1);
  border: 1px solid rgba(92, 243, 233, 0.2);
  font-size: 0.8rem;
`

const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`

const LinkTag = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 198, 0.18);
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: border 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accentOutline};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

interface ExperienceSectionProps {
  experience: PortfolioExperience
}

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <Section id="experience">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Esperienza</SectionKicker>
        <SectionTitle>{experience.title}</SectionTitle>
        <SectionCaption>{experience.caption}</SectionCaption>
      </SectionHeader>
      <Timeline>
        {experience.timeline.map((item) => (
          <Entry key={`${item.company}-${item.role}-${item.start}`}>
            <EntryHeader>
              <Role>{item.role}</Role>
              <Company>{item.company}</Company>
            </EntryHeader>
            <Meta>
              <span>{item.location}</span>
              <span>
                {item.start} - {item.end}
              </span>
            </Meta>
            <Summary>{item.summary}</Summary>
            <AchievementList>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </AchievementList>
            <TechStack>
              {item.tech.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </TechStack>
            {item.links?.length ? (
              <LinkRow>
                {item.links.map((link) => {
                  const Icon = getIconComponent(link.type ?? 'website')
                  return (
                    <LinkTag key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      <Icon />
                      {link.label}
                    </LinkTag>
                  )
                })}
              </LinkRow>
            ) : null}
          </Entry>
        ))}
      </Timeline>
    </SectionInner>
  </Section>
)


