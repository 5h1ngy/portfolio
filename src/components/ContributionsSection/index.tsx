import type { ContributionsSectionProps } from './types';
import { Section } from '../Section';
import { isExternal } from './helpers';
import {
  ContributionCard,
  ContributionDescription,
  ContributionGrid,
  ContributionLink,
  ContributionLinks,
  ContributionSubtitle,
  ContributionTag,
  ContributionTags,
  ContributionTitle,
} from './style';

export const ContributionsSection = ({ contributions }: ContributionsSectionProps) => (
  <Section
    id="contributions"
    accent="Iniziative"
    title={contributions.title}
    description={contributions.caption}
  >
    <ContributionGrid>
      {contributions.items.map((item) => (
        <ContributionCard key={`${item.name}-${item.period}`}>
          <ContributionTitle>{item.name}</ContributionTitle>
          <ContributionSubtitle>
            {item.period} · {item.role}
          </ContributionSubtitle>
          <ContributionDescription>{item.description}</ContributionDescription>
          {item.skills.length > 0 && (
            <ContributionTags>
              {item.skills.map((skill) => (
                <ContributionTag key={skill}>{skill}</ContributionTag>
              ))}
            </ContributionTags>
          )}
          {item.links.length > 0 && (
            <ContributionLinks>
              {item.links.map((link) => (
                <ContributionLink
                  key={`${item.name}-${link.label}`}
                  href={link.url}
                  target={isExternal(link.url) ? '_blank' : undefined}
                  rel={isExternal(link.url) ? 'noreferrer' : undefined}
                >
                  {link.label}
                </ContributionLink>
              ))}
            </ContributionLinks>
          )}
        </ContributionCard>
      ))}
    </ContributionGrid>
  </Section>
);
