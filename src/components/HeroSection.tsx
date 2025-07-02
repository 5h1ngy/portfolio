import type { PortfolioHero, PortfolioProfileLink } from '../types/portfolio'
import { useMemo, type CSSProperties } from 'react'

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
    <section id="hero" className="section section--hero">
      <div className="hero-layout">
        <div className="hero-lead">
          {hero.eyebrow && <span className="hero-lead__eyebrow">{hero.eyebrow}</span>}
          <h1 className="hero-lead__title">{hero.title}</h1>
          {hero.subtitle && <p className="hero-lead__subtitle">{hero.subtitle}</p>}
          <p className="hero-lead__description">{hero.description}</p>
          {primaryLinks.length > 0 && (
            <div className="hero-lead__links">
              <span className="hero-lead__links-label">Connect</span>
              <div className="hero-lead__links-list">
                {primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    className="hero-lead__link"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="hero-lead__actions">
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
          </div>
        </div>
        <div className="hero-orbit">
          <div className="hero-orbit__rings" aria-hidden="true">
            <span className="hero-orbit__ring hero-orbit__ring--1" />
            <span className="hero-orbit__ring hero-orbit__ring--2" />
            <span className="hero-orbit__ring hero-orbit__ring--3" />
          </div>
          <div className="hero-orbit__center">
            <img src={hero.orbit.center} alt="" />
          </div>
          {hero.orbit.items.map((item, index) => {
            const style = {
              '--orbit-radius': `${item.radius}px`,
              '--orbit-size': `${item.size}px`,
              '--orbit-duration': `${item.speed}s`,
              '--orbit-delay': `${index * 0.6}s`,
            }

            return (
              <div
                key={item.label}
                className="hero-orbit__item"
                style={style as CSSProperties}
                aria-label={item.label}
              >
                <span className="hero-orbit__icon">
                  <img src={item.icon} alt={item.label} />
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
