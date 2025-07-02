import { Section } from './Section'
import type { PortfolioProjects } from '../types/portfolio'

interface ProjectsSectionProps {
  id: string
  accent: string
  projects: PortfolioProjects
}

const isExternal = (href: string) => /^https?:\/\//i.test(href)

export const ProjectsSection = ({ id, accent, projects }: ProjectsSectionProps) => (
  <Section id={id} accent={accent} title={projects.title} description={projects.caption}>
    {projects.featured.length > 0 && (
      <div className="card-grid">
        {projects.featured.map((project) => (
          <article key={project.name} className="card">
            <header>
              <h3 className="card__title">{project.name}</h3>
              <p className="card__subtitle">{project.period}</p>
            </header>
            <p>{project.description}</p>
            {project.tech.length > 0 && (
              <div className="card__tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.links.length > 0 && (
              <div className="link-list">
                {project.links.map((link) => (
                  <a
                    key={`${project.name}-${link.label}`}
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
            {project.highlight && <p className="card__subtitle">{project.highlight}</p>}
          </article>
        ))}
      </div>
    )}
    {projects.others.length > 0 && (
      <div className="card-grid card-grid--two">
        {projects.others.map((project) => (
          <article key={project.name} className="card">
            <h4 className="card__title">{project.name}</h4>
            <p className="card__subtitle">{project.period}</p>
            <p>{project.description}</p>
            {project.tech.length > 0 && (
              <div className="card__tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.links.length > 0 && (
              <div className="link-list">
                {project.links.map((link) => (
                  <a
                    key={`${project.name}-${link.label}`}
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
    )}
  </Section>
)
