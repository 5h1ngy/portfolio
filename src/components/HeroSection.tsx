import { useMemo } from 'react'
import type { PortfolioHero, PortfolioProfileLink } from '../types/portfolio'
import {
  HeroActions,
  HeroDescription,
  HeroEyebrow,
  HeroLayout,
  HeroLead,
  HeroLinks,
  HeroLinksLabel,
  HeroLinksList,
  HeroLink,
  HeroSectionWrapper,
  HeroSubtitle,
  HeroTitle,
} from './HeroSection.style'
import { HeroOrbitDisplay } from './HeroOrbit'

interface HeroSectionProps {
  hero: PortfolioHero
  socialLinks: PortfolioProfileLink[]
}

const isExternal = (href: string, external?: boolean) => external || /^https?:\/\//i.test(href)

export const HeroSection = ({ hero, socialLinks }: HeroSectionProps) => {
  const primaryLinks = useMemo(
    () => socialLinks.filter((link) => link.type === 'linkedin' || link.type === 'github').slice(0, 2),
    [socialLinks],
  )

  return (
    <HeroSectionWrapper id="hero">
      <HeroLayout>
        <HeroLead>
          {hero.eyebrow && <HeroEyebrow>{hero.eyebrow}</HeroEyebrow>}
          <HeroTitle>{hero.title}</HeroTitle>
          {hero.subtitle && <HeroSubtitle>{hero.subtitle}</HeroSubtitle>}
          <HeroDescription>{hero.description}</HeroDescription>
          {primaryLinks.length > 0 && (
            <HeroLinks>
              <HeroLinksLabel>Connect</HeroLinksLabel>
              <HeroLinksList>
                {primaryLinks.map((link) => (
                  <HeroLink
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </HeroLink>
                ))}
              </HeroLinksList>
            </HeroLinks>
          )}
          <HeroActions>
            <a
              className="button button--primary"
              href={hero.primaryAction.href}
              target={isExternal(hero.primaryAction.href, hero.primaryAction.external) ? '_blank' : undefined}
              rel={isExternal(hero.primaryAction.href, hero.primaryAction.external) ? 'noreferrer' : undefined}
            >
              {hero.primaryAction.label}
            </a>
            {hero.secondaryAction?.href && (
              <a
                className="button button--secondary"
                href={hero.secondaryAction.href}
                target={isExternal(hero.secondaryAction.href, hero.secondaryAction.external) ? '_blank' : undefined}
                rel={isExternal(hero.secondaryAction.href, hero.secondaryAction.external) ? 'noreferrer' : undefined}
              >
                {hero.secondaryAction.label}
              </a>
            )}
          </HeroActions>
        </HeroLead>
        <HeroOrbitDisplay orbit={hero.orbit} />
      </HeroLayout>
    </HeroSectionWrapper>
  )
}
