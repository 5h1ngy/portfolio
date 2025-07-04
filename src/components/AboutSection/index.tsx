import type { AboutSectionProps } from '@components/AboutSection/types';
import { Section } from '@components/Section';
import {
  HighlightCard,
  HighlightDescription,
  HighlightIcon,
  HighlightTitle,
  HighlightsGrid,
  StatCard,
  StatLabel,
  StatValue,
  StatsList,
} from '@components/AboutSection/style';

export const AboutSection = ({ about }: AboutSectionProps) => (
  <Section id="about" accent="Chi sono" title={about.title} description={about.caption}>
    <div>
      {about.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    {about.highlights.length > 0 && (
      <HighlightsGrid>
        {about.highlights.map((highlight) => (
          <HighlightCard key={highlight.title}>
            {highlight.icon && <HighlightIcon>{highlight.icon}</HighlightIcon>}
            <HighlightTitle>{highlight.title}</HighlightTitle>
            <HighlightDescription>{highlight.description}</HighlightDescription>
          </HighlightCard>
        ))}
      </HighlightsGrid>
    )}
    <StatsList>
      {about.stats.map((stat) => (
        <StatCard key={stat.label}>
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatCard>
      ))}
    </StatsList>
  </Section>
);

