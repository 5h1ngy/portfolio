import { Section } from './Section'
import type { PortfolioAbout } from '../types/portfolio'

interface AboutSectionProps {
  about: PortfolioAbout
}

export const AboutSection = ({ about }: AboutSectionProps) => (
  <Section id="about" accent="Chi sono" title={about.title} description={about.caption}>
    <div>
      {about.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    {about.highlights.length > 0 && (
      <div className="card-grid card-grid--two">
        {about.highlights.map((highlight) => (
          <div key={highlight.title} className="card">
            {highlight.icon && <span className="pill">{highlight.icon}</span>}
            <h3 className="card__title">{highlight.title}</h3>
            <p className="card__subtitle">{highlight.description}</p>
          </div>
        ))}
      </div>
    )}
    <div className="stat-list">
      {about.stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <span className="stat-card__value">{stat.value}</span>
          <span className="stat-card__label">{stat.label}</span>
        </div>
      ))}
    </div>
  </Section>
)
