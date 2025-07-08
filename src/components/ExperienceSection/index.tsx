import { useCallback, useMemo, useState } from 'react';

import { ExperienceModal } from '@components/ExperienceSection/ExperienceModal';
import { Section } from '@components/Section';
import type { ExperienceSectionProps } from '@components/ExperienceSection/types';
import {
  TimelineCTA,
  TimelineCTAIcon,
  TimelineCard,
  TimelineCompany,
  TimelineMarker,
  TimelineMarkerCell,
  TimelineMeta,
  TimelinePeriod,
  TimelinePlaceholder,
  TimelineRow,
  TimelineSlot,
  TimelineSummary,
  TimelineTitle,
  TimelineWrapper,
} from '@components/ExperienceSection/style';
import type { PortfolioExperienceRole } from '@data/portfolio.types';

const SUMMARY_TRUNCATE_LENGTH = 140;
const ELLIPSIS = '\u2026';

const truncate = (value: string, length: number) =>
  value.length > length ? `${value.slice(0, length).trim()}${ELLIPSIS}` : value;

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 5c-4.5 0-8.21 2.94-9.82 7 1.61 4.06 5.32 7 9.82 7s8.21-2.94 9.82-7C20.21 7.94 16.5 5 12 5Zm0 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const [activeRole, setActiveRole] = useState<PortfolioExperienceRole | null>(null);

  const roles = useMemo(() => experience.roles, [experience.roles]);

  const handleOpen = useCallback((role: PortfolioExperienceRole) => {
    setActiveRole(role);
  }, []);

  const handleClose = useCallback(() => {
    setActiveRole(null);
  }, []);

  return (
    <Section id="experience" accent="Esperienza" title={experience.title} description={experience.caption}>
      <TimelineWrapper>
        {roles.map((role, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';

          const card = (
            <TimelineCard role="listitem">
              <TimelineMeta>
                <TimelinePeriod>{role.period}</TimelinePeriod>
                <TimelineCTA type="button" onClick={() => handleOpen(role)} aria-label={`Apri dettagli ${role.role}`}>
                  <TimelineCTAIcon>
                    <EyeIcon />
                  </TimelineCTAIcon>
                </TimelineCTA>
              </TimelineMeta>
              <TimelineTitle>{role.role}</TimelineTitle>
              {role.company && <TimelineCompany>{role.company}</TimelineCompany>}
              <TimelineSummary>{truncate(role.summary, SUMMARY_TRUNCATE_LENGTH)}</TimelineSummary>
            </TimelineCard>
          );

          return (
            <TimelineRow key={`${role.company}-${role.period}`}>
              {side === 'left' ? <TimelineSlot $side="left">{card}</TimelineSlot> : <TimelinePlaceholder $side="left" />}
              <TimelineMarkerCell>
                <TimelineMarker aria-hidden="true" />
              </TimelineMarkerCell>
              {side === 'right' ? <TimelineSlot $side="right">{card}</TimelineSlot> : <TimelinePlaceholder $side="right" />}
            </TimelineRow>
          );
        })}
      </TimelineWrapper>

      <ExperienceModal role={activeRole} onClose={handleClose} />
    </Section>
  );
};
