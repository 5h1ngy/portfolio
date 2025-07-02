import { useMemo, useState } from 'react'

import { Section } from './Section'
import type { PortfolioExperience } from '../types/portfolio'

interface ExperienceSectionProps {
  experience: PortfolioExperience
}

const isExternal = (href: string, external?: boolean) => external || /^https?:\/\//i.test(href)

export const ExperienceSection = ({ experience }: ExperienceSectionProps) => (
  <InteractiveTimeline experience={experience} />
)

const InteractiveTimeline = ({ experience }: ExperienceSectionProps) => {
  const defaultId = useMemo(
    () => (experience.timeline.length > 0 ? buildItemId(experience.timeline[0]) : null),
    [experience.timeline],
  )
  const [activeId, setActiveId] = useState<string | null>(defaultId)

  const toggle = (id: string) => {
    setActiveId((current) => (current === id ? null : id))
  }

  return (
    <Section
      id="experience"
      accent="Esperienza"
      title={experience.title}
      description={experience.caption}
    >
      <div className="timeline timeline--interactive" role="list">
        {experience.timeline.map((item, index) => {
          const id = buildItemId(item)
          const expanded = activeId === id
          const periodLabel = formatPeriod(item.start, item.end)
          const markerLabel = extractYearOrLabel(item.start)
          const side = index % 2 === 0 ? 'left' : 'right'

          return (
            <article
              key={id}
              className={`timeline-card timeline-card--${side}${expanded ? ' timeline-card--expanded' : ''}`}
              role="listitem"
            >
              <span className="timeline-card__marker">
                {markerLabel}
              </span>
              <div className={`timeline-card__body${expanded ? ' timeline-card__body--expanded' : ''}`}>
                <header className="timeline-card__header">
                  <div className="timeline-card__header-top">
                    {expanded && <span className="timeline-card__period">{periodLabel}</span>}
                    <button
                      type="button"
                      className="timeline-card__toggle"
                      onClick={() => toggle(id)}
                      aria-expanded={expanded}
                      aria-controls={`${id}-content`}
                    >
                      {expanded ? 'Chiudi focus' : 'Esplora dettagli'}
                    </button>
                  </div>
                  <div className="timeline-card__heading">
                    <h3 className="timeline-card__title">{item.role}</h3>
                    {expanded && (
                      <p className="timeline-card__subtitle">
                        {item.company}
                        {item.client ? ` - Client: ${item.client}` : ''}
                      </p>
                    )}
                  </div>
                  {expanded && (
                    <div className="timeline-card__badges">
                      <span className="badge badge--location">{item.location}</span>
                      <span className="badge badge--scope">{item.tech.length} core tech</span>
                      <span className="badge badge--impact">{item.achievements.length} key wins</span>
                    </div>
                  )}
                </header>

                {expanded && (
                  <div className="timeline-card__summary">
                    <p className="timeline-card__summary-text timeline-card__summary-text--expanded">{item.summary}</p>
                  </div>
                )}

                <div
                  id={`${id}-content`}
                  className={`timeline-card__content${expanded ? ' timeline-card__content--visible' : ''}`}
                  hidden={!expanded}
                >
                  {expanded && (
                    <>
                      <div className="timeline-card__grid">
                        <div>
                          <h4>Risultati principali</h4>
                          <ul className="timeline-card__highlights">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4>Stack &amp; responsabilita</h4>
                          <div className="tag-cloud">
                            {item.tech.map((tech) => (
                              <span key={tech} className="pill">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {item.links.length > 0 && (
                        <div className="timeline-card__links">
                          <h4>Approfondimenti</h4>
                          <div className="link-list">
                            {item.links.map((link) => (
                              <a
                                key={link.label}
                                className="link"
                                href={link.href}
                                target={isExternal(link.href, link.external) ? '_blank' : undefined}
                                rel={isExternal(link.href, link.external) ? 'noreferrer' : undefined}
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

const buildItemId = (item: PortfolioExperience['timeline'][number]) =>
  `${item.company}-${item.role}-${item.start}`.toLowerCase().replace(/\s+/g, '-')

const formatPeriod = (start: string, end: string) => {
  const startLabel = extractYearOrLabel(start)
  const endLabel = extractYearOrLabel(end)

  if (!endLabel || startLabel === endLabel) {
    return startLabel
  }

  return `${startLabel} → ${endLabel}`
}

const extractYearOrLabel = (value: string) => {
  const match = value.match(/\d{4}/)
  return match ? match[0] : value
}
