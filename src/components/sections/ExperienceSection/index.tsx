import { ExperienceModal } from '@/components/sections/ExperienceSection/ExperienceModal';
import { Section } from '@components/shared/Section';
import type { ExperienceSectionProps } from '@/components/sections/ExperienceSection/types';
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
} from '@/components/sections/ExperienceSection/style';
import { EyeIcon } from '@/components/sections/ExperienceSection/icons';
import { truncateSummary } from '@/components/sections/ExperienceSection/helpers';
import { useExperienceTimeline } from '@/components/sections/ExperienceSection/hooks';

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  const { roles, activeRole, openRole, closeRole } = useExperienceTimeline(experience.roles);

  return (
    <Section id="experience" accent="Esperienza" title={experience.title} description={experience.caption}>
      <TimelineWrapper>
        {roles.map((role, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';

          const card = (
            <TimelineCard role="listitem">
              <TimelineMeta>
                <TimelinePeriod>{role.period}</TimelinePeriod>
                <TimelineCTA type="button" onClick={() => openRole(role)} aria-label={`Apri dettagli ${role.role}`}>
                  <TimelineCTAIcon>
                    <EyeIcon />
                  </TimelineCTAIcon>
                </TimelineCTA>
              </TimelineMeta>
              <TimelineTitle>{role.role}</TimelineTitle>
              {role.company && <TimelineCompany>{role.company}</TimelineCompany>}
              <TimelineSummary>{truncateSummary(role.summary)}</TimelineSummary>
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

      <ExperienceModal role={activeRole} onClose={closeRole} />
    </Section>
  );
};
