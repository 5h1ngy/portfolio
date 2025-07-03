import { Section } from '../Section'
import type { ExperienceSectionProps } from './types'
import { useActiveTimeline } from './hooks'
import { buildItemId, extractYearOrLabel, formatPeriod, isExternal } from './helpers'
import {
  Badge,
  HighlightsList,
  LinkGroup,
  LinkItem,
  LinkList,
  Tag,
  TagCloud,
  TimelineBadges,
  TimelineBody,
  TimelineContent,
  TimelineGrid,
  TimelineHeader,
  TimelineHeaderTop,
  TimelineHeading,
  TimelineItem,
  TimelineList,
  TimelineMarker,
  TimelinePeriod,
  TimelineSummary,
  TimelineSummaryText,
  TimelineTitle,
  TimelineSubtitle,
  TimelineToggle,
} from './style'

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <InteractiveTimeline experience={experience} />
)

const InteractiveTimeline = ({ experience }: ExperienceSectionProps) => {
  const { activeId, toggle } = useActiveTimeline(experience)

  return (
    <Section
      id="experience"
      accent="Esperienza"
      title={experience.title}
      description={experience.caption}
    >
      <TimelineList role="list">
        {experience.timeline.map((item, index) => {
          const id = buildItemId(item)
          const expanded = activeId === id
          const periodLabel = formatPeriod(item.start, item.end)
          const markerLabel = extractYearOrLabel(item.start)
          const side = index % 2 === 0 ? 'left' : 'right'

          return (
            <TimelineItem key={id} role="listitem" $side={side} $expanded={expanded}>
              <TimelineMarker $side={side}>{markerLabel}</TimelineMarker>
              <TimelineBody $side={side} $expanded={expanded}>
                <TimelineHeader>
                  <TimelineHeaderTop>
                    {expanded && <TimelinePeriod>{periodLabel}</TimelinePeriod>}
                    <TimelineToggle
                      type="button"
                      onClick={() => toggle(id)}
                      aria-expanded={expanded}
                      aria-controls={`${id}-content`}
                    >
                      {expanded ? 'Chiudi focus' : 'Esplora dettagli'}
                    </TimelineToggle>
                  </TimelineHeaderTop>
                  <TimelineHeading>
                    <TimelineTitle>{item.role}</TimelineTitle>
                    {expanded && (
                      <TimelineSubtitle>
                        {item.company}
                        {item.client ? ` - Client: ${item.client}` : ''}
                      </TimelineSubtitle>
                    )}
                  </TimelineHeading>
                  {expanded && (
                    <TimelineBadges>
                      <Badge>{item.location}</Badge>
                      <Badge>{item.tech.length} core tech</Badge>
                      <Badge>{item.achievements.length} key wins</Badge>
                    </TimelineBadges>
                  )}
                </TimelineHeader>

                {expanded && (
                  <TimelineSummary>
                    <TimelineSummaryText>{item.summary}</TimelineSummaryText>
                  </TimelineSummary>
                )}

                <TimelineContent id={`${id}-content`} $visible={expanded}>
                  <TimelineGrid>
                    <div>
                      <h4>Risultati principali</h4>
                      <HighlightsList>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </HighlightsList>
                    </div>
                    <div>
                      <h4>Stack & responsabilità</h4>
                      <TagCloud>
                        {item.tech.map((tech) => (
                          <Tag key={tech}>{tech}</Tag>
                        ))}
                      </TagCloud>
                    </div>
                  </TimelineGrid>
                  {item.links.length > 0 && (
                    <LinkGroup>
                      <h4>Approfondimenti</h4>
                      <LinkList>
                        {item.links.map((link) => (
                          <LinkItem
                            key={link.label}
                            href={link.href}
                            target={isExternal(link.href, link.external) ? '_blank' : undefined}
                            rel={isExternal(link.href, link.external) ? 'noreferrer' : undefined}
                          >
                            {link.label}
                          </LinkItem>
                        ))}
                      </LinkList>
                    </LinkGroup>
                  )}
                </TimelineContent>
              </TimelineBody>
            </TimelineItem>
          )
        })}
      </TimelineList>
    </Section>
  )
}
