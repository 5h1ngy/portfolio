import type { ComponentType, SVGProps } from 'react';

import { HeroOrbit } from './HeroOrbit';
import { isExternal } from '@/components/sections/HeroSection/helpers';
import { useHeroSocialIcons, useTypingHeadline, type HeroIconType } from '@/components/sections/HeroSection/hooks';
import type { HeroSectionProps } from '@/components/sections/HeroSection/types';
import {
  HeroDescription,
  HeroEyebrow,
  HeroIconButton,
  HeroIconLabel,
  HeroIconRow,
  HeroLayout,
  HeroLead,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle,
  HeroTitleGhost,
  HeroTitleText,
} from '@/components/sections/HeroSection/style';

const GitHubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .5C5.649.5.5 5.648.5 12c0 5.086 3.292 9.397 7.868 10.915.575.1.79-.249.79-.556 0-.274-.01-.999-.015-1.961-3.201.695-3.878-1.543-3.878-1.543-.523-1.329-1.277-1.683-1.277-1.683-1.043-.713.079-.699.079-.699 1.152.081 1.758 1.183 1.758 1.183 1.026 1.758 2.693 1.25 3.349.956.104-.744.402-1.25.732-1.538-2.556-.291-5.244-1.278-5.244-5.688 0-1.257.449-2.285 1.183-3.091-.119-.29-.513-1.462.113-3.047 0 0 .967-.31 3.168 1.181a10.99 10.99 0 0 1 5.766 0c2.2-1.49 3.166-1.181 3.166-1.181.627 1.585.234 2.758.115 3.047.736.806 1.183 1.834 1.183 3.091 0 4.42-2.693 5.393-5.258 5.678.413.356.781 1.056.781 2.129 0 1.538-.014 2.778-.014 3.157 0 .309.212.66.797.547C20.213 21.393 23.5 17.083 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554V14.83c0-1.342-.027-3.068-1.869-3.068-1.87 0-2.156 1.46-2.156 2.969v5.721H9.315V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286ZM5.337 7.433a2.064 2.064 0 1 1 .001-4.129 2.064 2.064 0 0 1-.001 4.129Zm1.777 13.019H3.56V9h3.554v11.452Z" />
  </svg>
);

const ICON_COMPONENTS: Record<HeroIconType, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedinIcon,
};

export const HeroSection = ({ hero, socialLinks }: HeroSectionProps) => {
  const { typingSequence, longestTitle, titleRef } = useTypingHeadline(hero);
  const iconLinks = useHeroSocialIcons(hero, socialLinks);

  return (
    <HeroSectionWrapper id="hero">
      <HeroLayout>
        <HeroLead>
          {hero.eyebrow && <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>}
          <HeroTitle aria-live="polite">
            <HeroTitleGhost aria-hidden="true">{longestTitle || typingSequence[0]}</HeroTitleGhost>
            <HeroTitleText ref={titleRef}>{typingSequence[0]}</HeroTitleText>
          </HeroTitle>
          {hero.subtitle && <HeroSubtitle>{hero.subtitle}</HeroSubtitle>}
          <HeroDescription>{hero.description}</HeroDescription>
          {iconLinks.length > 0 && (
            <HeroIconRow>
              {iconLinks.map(({ type, href, label, external }) => {
                const Icon = ICON_COMPONENTS[type];
                const isExternalLink = isExternal(href, external);

                return (
                  <HeroIconButton
                    key={type}
                    href={href}
                    target={isExternalLink ? '_blank' : undefined}
                    rel={isExternalLink ? 'noreferrer' : undefined}
                    aria-label={label}
                  >
                    <Icon aria-hidden="true" />
                    <HeroIconLabel>{label}</HeroIconLabel>
                  </HeroIconButton>
                );
              })}
            </HeroIconRow>
          )}
        </HeroLead>
        <HeroOrbit orbit={hero.orbit} />
      </HeroLayout>
    </HeroSectionWrapper>
  );
};
