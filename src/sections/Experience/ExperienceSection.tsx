import { KeyboardEvent, useState } from 'react'
import styled, { css } from 'styled-components'
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
  gap: clamp(2.2rem, 6vw, 3.75rem);
  padding: clamp(1rem, 4vw, 2.25rem) 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(180deg, rgba(92, 243, 233, 0.5) 0%, rgba(92, 243, 233, 0) 100%);
    opacity: 0.22;
    pointer-events: none;
    display: none;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      display: block;
    }
  }
`

type TimelinePosition = 'left' | 'right'

const TimelineRow = styled.div<{ $position: TimelinePosition }>`
  position: relative;
  display: grid;
  gap: 1.35rem;
  align-items: stretch;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) 120px minmax(0, 1fr);
    gap: clamp(1.75rem, 5vw, 2.85rem);
    min-height: 260px;

    &[data-active='true'] {
      min-height: 360px;
    }
  }
`

const TimelineMarker = styled.div<{ $position: TimelinePosition; $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  justify-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-column: 2;
    justify-self: center;
    align-items: center;
    align-content: center;
    text-align: center;
    gap: 0.5rem;
  }
`

const MarkerDot = styled.span<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '18px' : '16px')};
  height: ${({ $active }) => ($active ? '18px' : '16px')};
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.accent};
  border: 3px solid rgba(4, 7, 19, 0.95);
  box-shadow: ${({ theme, $active }) =>
    $active
      ? `0 0 0 6px ${theme.colors.accentSoft}, 0 0 36px rgba(92, 243, 233, 0.45)`
      : `0 0 0 4px ${theme.colors.accentSoft}, 0 0 24px rgba(92, 243, 233, 0.24)`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: ${({ $active }) => ($active ? '15px' : '12px')};
    height: ${({ $active }) => ($active ? '15px' : '12px')};
  }
`

const TimelineLabel = styled.span`
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(92, 243, 233, 0.08);
  border: 1px solid rgba(92, 243, 233, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0.75rem;
  }
`

const Entry = styled.article<{ $position: TimelinePosition; $active: boolean }>`
  position: relative;
  padding: clamp(1.5rem, 3vw, 1.9rem);
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  background: linear-gradient(155deg, rgba(8, 13, 28, 0.92) 0%, rgba(8, 13, 28, 0.72) 100%);
  border: 1px solid
    ${({ theme, $active }) => ($active ? theme.colors.accentOutline : 'rgba(148, 163, 198, 0.14)')};
  box-shadow: ${({ $active }) =>
    $active ? '0 26px 60px rgba(92, 243, 233, 0.22)' : '0 24px 48px rgba(4, 7, 19, 0.4)'};
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top ${({ $position }) => ($position === 'left' ? 'left' : 'right')},
      rgba(92, 243, 233, 0.18),
      transparent 60%
    );
    opacity: ${({ $active }) => ($active ? 0.55 : 0.35)};
    pointer-events: none;
    transition: opacity 0.35s ease;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-4px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-column: ${({ $position, $active }) =>
      $active ? '1 / -1' : $position === 'left' ? '1 / 2' : '3 / 4'};
    margin-inline: ${({ $position, $active }) =>
      $active ? '0' : $position === 'left' ? '0 1.75rem 0 0' : '0 0 0 1.75rem'};
    justify-self: stretch;
  }
`

const EntryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.65rem 1.25rem;
`

const Role = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin: 0;
`

const Company = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(92, 243, 233, 0.08);
  border: 1px solid rgba(92, 243, 233, 0.18);
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`

const EntrySummary = styled.p<{ $active: boolean }>`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0;

  ${({ $active }) =>
    !$active &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`

const ToggleHint = styled.span<{ $active: boolean }>`
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.textMuted)};
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: ${({ $active }) => ($active ? 'rotate(-135deg)' : 'rotate(45deg)')};
    transition: transform 0.35s ease;
  }
`

const Details = styled.div<{ $active: boolean }>`
  max-height: ${({ $active }) => ($active ? '780px' : '0')};
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.45s ease, opacity 0.3s ease;
`

const DetailsInner = styled.div`
  display: grid;
  gap: 1.1rem;
  padding-top: 1.15rem;
  border-top: 1px solid rgba(148, 163, 198, 0.12);
`

const AchievementList = styled.ul`
  display: grid;
  gap: 0.75rem;
  padding-left: 1.2rem;
  list-style: disc;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
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

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <Section id="experience">
      <SectionInner>
        <SectionHeader>
          <SectionKicker>Esperienza</SectionKicker>
          <SectionTitle>{experience.title}</SectionTitle>
          <SectionCaption>{experience.caption}</SectionCaption>
        </SectionHeader>
        <Timeline>
          {experience.timeline.map((item, index) => {
            const position: TimelinePosition = index % 2 === 0 ? 'left' : 'right'
            const isActive = activeIndex === index
            const period = item.end ? `${item.start} - ${item.end}` : `${item.start} - Presente`

            return (
              <TimelineRow
                key={`${item.company}-${item.role}-${item.start}`}
                $position={position}
                data-active={isActive}
              >
                <TimelineMarker $position={position} $active={isActive}>
                  <MarkerDot $active={isActive} />
                  <TimelineLabel>{period}</TimelineLabel>
                </TimelineMarker>
                <Entry
                  $position={position}
                  $active={isActive}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isActive}
                  aria-controls={`experience-details-${index}`}
                  onClick={() => handleToggle(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <EntryHeader>
                    <Role>{item.role}</Role>
                    <Company>{item.company}</Company>
                  </EntryHeader>
                  <Meta>
                    <MetaChip>{item.location}</MetaChip>
                    {item.client ? <MetaChip>Cliente: {item.client}</MetaChip> : null}
                  </Meta>
                  <EntrySummary $active={isActive}>{item.summary}</EntrySummary>
                  <ToggleHint $active={isActive}>
                    {isActive ? 'Chiudi dettagli' : 'Espandi dettagli'}
                  </ToggleHint>
                  <Details id={`experience-details-${index}`} $active={isActive}>
                    <DetailsInner>
                      {item.achievements.length > 0 ? (
                        <AchievementList>
                          {item.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </AchievementList>
                      ) : null}
                      {item.tech.length > 0 ? (
                        <TechStack>
                          {item.tech.map((tech) => (
                            <Tech key={tech}>{tech}</Tech>
                          ))}
                        </TechStack>
                      ) : null}
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
                    </DetailsInner>
                  </Details>
                </Entry>
              </TimelineRow>
            )
          })}
        </Timeline>
      </SectionInner>
    </Section>
  )
}
