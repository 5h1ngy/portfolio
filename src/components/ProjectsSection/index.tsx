import type { PortfolioProjects } from '../../data/portfolio.types';
import { Section } from '../Section';
import {
  ProjectCard,
  ProjectDescription,
  ProjectHeader,
  ProjectLink,
  ProjectLinks,
  ProjectSubtitle,
  ProjectTag,
  ProjectTags,
  ProjectTitle,
  ProjectsGrid,
} from './style';

interface ProjectsSectionProps {
  id: string;
  accent: string;
  projects: PortfolioProjects;
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export const ProjectsSection = ({ id, accent, projects }: ProjectsSectionProps) => (
  <Section id={id} accent={accent} title={projects.title} description={projects.caption}>
    {projects.featured.length > 0 && (
      <ProjectsGrid>
        {projects.featured.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectHeader>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectSubtitle>{project.period}</ProjectSubtitle>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.tech.length > 0 && (
              <ProjectTags>
                {project.tech.map((tech) => (
                  <ProjectTag key={tech}>{tech}</ProjectTag>
                ))}
              </ProjectTags>
            )}
            {project.links.length > 0 && (
              <ProjectLinks>
                {project.links.map((link) => (
                  <ProjectLink
                    key={`${project.name}-${link.label}`}
                    href={link.url}
                    target={isExternal(link.url) ? '_blank' : undefined}
                    rel={isExternal(link.url) ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </ProjectLink>
                ))}
              </ProjectLinks>
            )}
            {project.highlight && <ProjectSubtitle>{project.highlight}</ProjectSubtitle>}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    )}
    {projects.others.length > 0 && (
      <ProjectsGrid $columns={2}>
        {projects.others.map((project) => (
          <ProjectCard key={project.name}>
            <ProjectTitle as="h4">{project.name}</ProjectTitle>
            <ProjectSubtitle>{project.period}</ProjectSubtitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            {project.tech.length > 0 && (
              <ProjectTags>
                {project.tech.map((tech) => (
                  <ProjectTag key={tech}>{tech}</ProjectTag>
                ))}
              </ProjectTags>
            )}
            {project.links.length > 0 && (
              <ProjectLinks>
                {project.links.map((link) => (
                  <ProjectLink
                    key={`${project.name}-${link.label}`}
                    href={link.url}
                    target={isExternal(link.url) ? '_blank' : undefined}
                    rel={isExternal(link.url) ? 'noreferrer' : undefined}
                  >
                    {link.label}
                  </ProjectLink>
                ))}
              </ProjectLinks>
            )}
          </ProjectCard>
        ))}
      </ProjectsGrid>
    )}
  </Section>
);
