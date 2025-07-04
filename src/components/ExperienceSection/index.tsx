import { Section } from '@components/Section';
import type { ExperienceSectionProps } from '@components/ExperienceSection/types';
import {
  HighlightsList,
  RolesList,
  RoleCard,
  RoleCompany,
  RoleHeader,
  RoleLink,
  RoleMeta,
  RoleSummary,
  RoleTitle,
  Tag,
  TagCloud,
} from '@components/ExperienceSection/style';

const isExternalLink = (href: string) => /^https?:\/\//i.test(href);

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <Section id="experience" accent="Esperienza" title={experience.title} description={experience.caption}>
    <RolesList>
      {experience.roles.map((role) => (
        <RoleCard key={`${role.company}-${role.period}`}>
          <RoleHeader>
            <div>
              <RoleTitle>{role.role}</RoleTitle>
              <RoleCompany>{role.company}</RoleCompany>
            </div>
            <RoleMeta>
              <span>{role.period}</span>
            </RoleMeta>
          </RoleHeader>
          <RoleSummary>{role.summary}</RoleSummary>
          {role.highlights.length > 0 && (
            <HighlightsList>
              {role.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </HighlightsList>
          )}
          {role.tags.length > 0 && (
            <TagCloud>
              {role.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagCloud>
          )}
          {role.link && (
            <RoleLink
              href={role.link.href}
              target={role.link.external || isExternalLink(role.link.href) ? '_blank' : undefined}
              rel={role.link.external || isExternalLink(role.link.href) ? 'noreferrer' : undefined}
            >
              {role.link.label}
            </RoleLink>
          )}
        </RoleCard>
      ))}
    </RolesList>
  </Section>
);
