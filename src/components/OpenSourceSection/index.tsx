import { Section } from '@components/Section';
import type { OpenSourceSectionProps } from '@components/OpenSourceSection/types';
import {
  OpenSourceGrid,
  ProjectCard,
  ProjectDescription,
  ProjectHeader,
  ProjectLink,
  ProjectName,
  ProjectPeriod,
  ProjectTag,
  ProjectTags,
} from '@components/OpenSourceSection/style';

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export const OpenSourceSection = ({ openSource }: OpenSourceSectionProps) => (
  <Section id="open-source" accent="Open source" title={openSource.title} description={openSource.caption}>
    <OpenSourceGrid>
      {openSource.projects.map((project) => (
        <ProjectCard key={project.name}>
          <ProjectHeader>
            <ProjectName>{project.name}</ProjectName>
            <ProjectPeriod>{project.period}</ProjectPeriod>
          </ProjectHeader>
          <ProjectDescription>{project.description}</ProjectDescription>
          {project.tags.length > 0 && (
            <ProjectTags>
              {project.tags.map((tag) => (
                <ProjectTag key={tag}>{tag}</ProjectTag>
              ))}
            </ProjectTags>
          )}
          {project.link && (
            <ProjectLink
              href={project.link.href}
              target={project.link.external || isExternal(project.link.href) ? '_blank' : undefined}
              rel={project.link.external || isExternal(project.link.href) ? 'noreferrer' : undefined}
            >
              {project.link.label}
            </ProjectLink>
          )}
        </ProjectCard>
      ))}
    </OpenSourceGrid>
  </Section>
);
