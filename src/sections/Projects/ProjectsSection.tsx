import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioProject, PortfolioProjects } from '../../types/portfolio'
import { getIconComponent } from '../../utils/iconMap'

const FeaturedGrid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ProjectCard = styled.article`
  position: relative;
  padding: 1.75rem;
  border-radius: ${({ theme }) => theme.layout.radiusLg};
  border: 1px solid rgba(148, 163, 198, 0.12);
  background: rgba(8, 13, 28, 0.78);
  backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  transition: transform 0.3s ease, border 0.3s ease;

  &:hover,
  &:focus-within {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accentOutline};
  }
`

const ProjectBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.typography.fonts.mono};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  background: rgba(92, 243, 233, 0.1);
  color: ${({ theme }) => theme.colors.accent};
`

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`

const MetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
`

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`

const Tech = styled.span`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(140, 109, 255, 0.12);
  font-size: 0.8rem;
`

const LinkBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
`

const LinkItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 198, 0.18);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  transition: border 0.3s ease, color 0.3s ease;

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accentOutline};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

const SecondaryList = styled.div`
  margin-top: clamp(2.5rem, 6vw, 3.5rem);
  display: grid;
  gap: 1.25rem;
`

const SecondaryItem = styled.article`
  padding: 1.2rem 1.4rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  border: 1px solid rgba(148, 163, 198, 0.12);
  background: rgba(6, 11, 24, 0.7);
  display: grid;
  gap: 0.35rem;
`

const SecondaryTitle = styled.h4`
  font-size: 1.05rem;
`

const SectionDivider = styled.hr`
  margin: clamp(3rem, 7vw, 4rem) 0;
  border: none;
  border-top: 1px solid rgba(148, 163, 198, 0.12);
`

interface ProjectsSectionProps {
  projects: PortfolioProjects
  openSource: PortfolioProjects
}

const ProjectShowcase = ({ title, caption, featured, others }: PortfolioProjects) => (
  <>
    <SectionHeader>
      <SectionKicker>{title}</SectionKicker>
      <SectionTitle>{caption}</SectionTitle>
      <SectionCaption>Soluzioni modulari, rapide da integrare e facili da mantenere.</SectionCaption>
    </SectionHeader>
    <FeaturedGrid>
      {featured.map((project) => (
        <ProjectCard key={project.name}>
          {project.badge && <ProjectBadge>{project.badge}</ProjectBadge>}
          <ProjectTitle>{project.name}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <MetaRow>
            <span>{project.period}</span>
            <span>{project.headline}</span>
          </MetaRow>
          <TechList>
            {project.tech.map((tech) => (
              <Tech key={tech}>{tech}</Tech>
            ))}
          </TechList>
          <LinkBar>
            {project.links.map((link) => {
              const Icon = getIconComponent(link.type)
              return (
                <LinkItem key={`${project.name}-${link.label}`} href={link.url} target="_blank" rel="noreferrer">
                  <Icon />
                  {link.label}
                </LinkItem>
              )
            })}
          </LinkBar>
        </ProjectCard>
      ))}
    </FeaturedGrid>
    {others.length > 0 && (
      <SecondaryList>
        {others.map((project: PortfolioProject) => (
          <SecondaryItem key={project.name}>
            <SecondaryTitle>{project.name}</SecondaryTitle>
            <p>{project.highlight}</p>
            <TechList>
              {project.tech.map((tech) => (
                <Tech key={tech}>{tech}</Tech>
              ))}
            </TechList>
            <LinkBar>
              {project.links.map((link) => {
                const Icon = getIconComponent(link.type)
                return (
                  <LinkItem key={`${project.name}-${link.label}`} href={link.url} target="_blank" rel="noreferrer">
                    <Icon />
                    {link.label}
                  </LinkItem>
                )
              })}
            </LinkBar>
          </SecondaryItem>
        ))}
      </SecondaryList>
    )}
  </>
)

export const ProjectsSection = ({ projects, openSource }: ProjectsSectionProps) => (
  <Section id="projects">
    <SectionInner>
      <ProjectShowcase {...projects} />
      <SectionDivider />
      <ProjectShowcase {...openSource} />
    </SectionInner>
  </Section>
)
