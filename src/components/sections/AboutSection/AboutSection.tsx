import type { AboutSectionProps } from '@/components/sections/AboutSection/AboutSection.types';
import { Section } from '@components/shared/Section';
import {
  FactCard,
  FactLabel,
  FactValue,
  FocusCard,
  FocusDescription,
  FocusGrid,
  FocusTitle,
  QuickFacts,
  Summary,
} from './AboutSection.style';

export const AboutSection = ({ about }: AboutSectionProps) => (
  <Section id="about" accent="Profilo" title={about.title} description={about.caption}>
    <Summary>
      {about.summary.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Summary>
    {about.focus.length > 0 && (
      <FocusGrid>
        {about.focus.map((item) => (
          <FocusCard key={item.title}>
            <FocusTitle>{item.title}</FocusTitle>
            <FocusDescription>{item.description}</FocusDescription>
          </FocusCard>
        ))}
      </FocusGrid>
    )}
    {about.quickFacts.length > 0 && (
      <QuickFacts>
        {about.quickFacts.map((fact) => (
          <FactCard key={fact.label}>
            <FactLabel>{fact.label}</FactLabel>
            <FactValue>{fact.value}</FactValue>
          </FactCard>
        ))}
      </QuickFacts>
    )}
  </Section>
);
