import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import type { PortfolioHero, PortfolioProfileLink } from '@data/portfolio.types';

gsap.registerPlugin(TextPlugin);

const TYPING_BASE_SPEED = 0.08;
const TYPING_MIN_DURATION = 1.2;

export type HeroIconType = 'github' | 'linkedin';

export interface HeroIconLink {
  type: HeroIconType;
  href: string;
  label: string;
  external?: boolean;
}

const ICON_TYPES: HeroIconType[] = ['github', 'linkedin'];

const isIconType = (value?: string): value is HeroIconType => Boolean(value && ICON_TYPES.includes(value as HeroIconType));

export const useTypingHeadline = (hero: PortfolioHero) => {
  const typingSequence = useMemo(
    () => (hero.typingTitles && hero.typingTitles.length > 0 ? hero.typingTitles : [hero.title]),
    [hero.typingTitles, hero.title],
  );

  const longestTitle = useMemo(
    () => typingSequence.reduce((longest, current) => (current.length > longest.length ? current : longest), ''),
    [typingSequence],
  );

  const titleRef = useRef<HTMLSpanElement>(null);
  const sequenceKey = useMemo(() => typingSequence.join('|'), [typingSequence]);

  useEffect(() => {
    if (!titleRef.current) {
      return;
    }

    const node = titleRef.current;
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.9, defaults: { ease: 'none' } });

    timeline.set(node, { text: '' });

    typingSequence.forEach((word) => {
      const duration = Math.max(word.length * TYPING_BASE_SPEED, TYPING_MIN_DURATION);

      timeline
        .to(node, { duration, text: word })
        .to(node, { duration: 0.6, text: word })
        .to(node, { duration: Math.min(duration * 0.45, 1.1), text: '' });
    });

    return () => {
      timeline.kill();
    };
  }, [sequenceKey, typingSequence]);

  return { typingSequence, longestTitle, titleRef };
};

export const useHeroSocialIcons = (hero: PortfolioHero, socialLinks: PortfolioProfileLink[]) => {
  return useMemo<HeroIconLink[]>(() => {
    const entries = new Map<HeroIconType, HeroIconLink>();

    const register = (type?: string, href?: string, label?: string, external?: boolean) => {
      if (!isIconType(type) || !href) {
        return;
      }

      entries.set(type, {
        type,
        href,
        label: label ?? type,
        external,
      });
    };

    register(hero.primaryAction?.type, hero.primaryAction?.href, hero.primaryAction?.label, hero.primaryAction?.external);
    register(
      hero.secondaryAction?.type,
      hero.secondaryAction?.href,
      hero.secondaryAction?.label,
      hero.secondaryAction?.external,
    );

    socialLinks.forEach((link) => {
      register(link.type, link.url, link.label, true);
    });

    return Array.from(entries.values());
  }, [hero.primaryAction, hero.secondaryAction, socialLinks]);
};
