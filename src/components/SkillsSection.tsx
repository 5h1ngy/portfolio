import { Section } from './Section'
import type { PortfolioSkills } from '../types/portfolio'

interface SkillsSectionProps {
  skills: PortfolioSkills
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <Section id="skills" accent="Competenze" title={skills.title} description={skills.caption}>
    {skills.categories.length > 0 && (
      <div className="card-grid card-grid--three">
        {skills.categories.map((category) => (
          <article key={category.title} className="card">
            <h3 className="card__title">{category.title}</h3>
            <p className="card__subtitle">{category.summary}</p>
            <ul className="timeline-item__achievements">
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    )}
    {skills.toolbelt.length > 0 && (
      <div>
        <h3 className="card__title">Toolbelt</h3>
        <div className="tag-cloud">
          {skills.toolbelt.map((item) => (
            <span key={item} className="pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    )}
    {skills.workflows.length > 0 && (
      <div>
        <h3 className="card__title">Workflows</h3>
        <ul className="timeline-item__achievements">
          {skills.workflows.map((workflow, idx) => (
            <li key={idx}>{workflow}</li>
          ))}
        </ul>
      </div>
    )}
  </Section>
)
