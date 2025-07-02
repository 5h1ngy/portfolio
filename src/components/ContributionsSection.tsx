import { Section } from './Section'
import type { PortfolioContributions } from '../types/portfolio'

interface ContributionsSectionProps {
  contributions: PortfolioContributions
}

const isExternal = (href: string) => /^https?:\/\//i.test(href)

export const ContributionsSection = ({ contributions }: ContributionsSectionProps) => (
  <Section
    id="contributions"
    accent="Iniziative"
    title={contributions.title}
    description={contributions.caption}
  >
    <div className="card-grid card-grid--two">
      {contributions.items.map((item) => (
        <article key={`${item.name}-${item.period}`} className="card">
          <h3 className="card__title">{item.name}</h3>
          <p className="card__subtitle">
            {item.period} · {item.role}
          </p>
          <p>{item.description}</p>
          {item.skills.length > 0 && (
            <div className="card__tags">
              {item.skills.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          )}
          {item.links.length > 0 && (
            <div className="link-list">
              {item.links.map((link) => (
                <a
                  key={`${item.name}-${link.label}`}
                  className="link"
                  href={link.url}
                  target={isExternal(link.url) ? '_blank' : undefined}
                  rel={isExternal(link.url) ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  </Section>
)
