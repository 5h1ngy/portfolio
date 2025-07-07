import { Section } from '@components/Section';
import type { ExperienceSectionProps } from '@components/ExperienceSection/types';
import {
  TimelineCard,
  TimelineCompany,
  TimelineHighlights,
  TimelineLink,
  TimelineMarker,
  TimelineMarkerCell,
  TimelineMeta,
  TimelinePeriod,
  TimelinePlaceholder,
  TimelineRow,
  TimelineSlot,
  TimelineSummary,
  TimelineTag,
  TimelineTags,
  TimelineTitle,
  TimelineWrapper,
} from '@components/ExperienceSection/style';

const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <Section id="experience" accent="Esperienza" title={experience.title} description={experience.caption}>
    <TimelineWrapper>
      {experience.roles.map((role, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        const external = role.link && (role.link.external || isExternalLink(role.link.href));

        return (
          <TimelineRow key={`${role.company}-${role.period}`}>
            {side === 'left' ? (
              <TimelineSlot $side="left">
                <TimelineCard role="listitem">
                  <TimelineMeta>
                    <TimelinePeriod>{role.period}</TimelinePeriod>
                    {role.company && <TimelineCompany>{role.company}</TimelineCompany>}
                  </TimelineMeta>
                  <TimelineTitle>{role.role}</TimelineTitle>
                  <TimelineSummary>{role.summary}</TimelineSummary>
                  {role.highlights.length > 0 && (
                    <TimelineHighlights>
                      {role.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </TimelineHighlights>
                  )}
                  {role.tags.length > 0 && (
                    <TimelineTags>
                      {role.tags.map((tag) => (
                        <TimelineTag key={tag}>{tag}</TimelineTag>
                      ))}
                    </TimelineTags>
                  )}
                  {role.link && (
                    <TimelineLink
                      href={role.link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                    >
                      {role.link.label}
                    </TimelineLink>
                  )}
                </TimelineCard>
              </TimelineSlot>
            ) : (
              <TimelinePlaceholder $side="left" />
            )}
            <TimelineMarkerCell>
              <TimelineMarker aria-hidden="true" />
            </TimelineMarkerCell>
            {side === 'right' ? (
              <TimelineSlot $side="right">
                <TimelineCard role="listitem">
                  <TimelineMeta>
                    <TimelinePeriod>{role.period}</TimelinePeriod>
                    {role.company && <TimelineCompany>{role.company}</TimelineCompany>}
                  </TimelineMeta>
                  <TimelineTitle>{role.role}</TimelineTitle>
                  <TimelineSummary>{role.summary}</TimelineSummary>
                  {role.highlights.length > 0 && (
                    <TimelineHighlights>
                      {role.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </TimelineHighlights>
                  )}
                  {role.tags.length > 0 && (
                    <TimelineTags>
                      {role.tags.map((tag) => (
                        <TimelineTag key={tag}>{tag}</TimelineTag>
                      ))}
                    </TimelineTags>
                  )}
                  {role.link && (
                    <TimelineLink
                      href={role.link.href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noreferrer' : undefined}
                    >
                      {role.link.label}
                    </TimelineLink>
                  )}
                </TimelineCard>
              </TimelineSlot>
            ) : (
              <TimelinePlaceholder $side="right" />
            )}
          </TimelineRow>
        );
      })}
    </TimelineWrapper>
  </Section>
);
