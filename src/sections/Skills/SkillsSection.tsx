import styled from 'styled-components'
import {
  Section,
  SectionCaption,
  SectionHeader,
  SectionInner,
  SectionKicker,
  SectionTitle,
} from '../../components/layout/Section'
import type { PortfolioSkills } from '../../types/portfolio'

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const SkillCard = styled.article`
  padding: 1.4rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  background: rgba(7, 11, 26, 0.72);
  border: 1px solid rgba(148, 163, 198, 0.12);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 1.1rem;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

const BulletList = styled.ul`
  display: grid;
  gap: 0.4rem;
  padding-left: 1rem;
  list-style: disc;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`

const TagsGroup = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: clamp(2rem, 4vw, 3rem);
`

const TagGroupTitle = styled.h4`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
`

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(92, 243, 233, 0.1);
  border: 1px solid rgba(92, 243, 233, 0.22);
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`

interface SkillsSectionProps {
  skills: PortfolioSkills
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <Section id="skills">
    <SectionInner>
      <SectionHeader>
        <SectionKicker>Competenze</SectionKicker>
        <SectionTitle>{skills.title}</SectionTitle>
        <SectionCaption>{skills.caption}</SectionCaption>
      </SectionHeader>
      <SkillsGrid>
        {skills.categories.map((category) => (
          <SkillCard key={category.title}>
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <BulletList>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </BulletList>
          </SkillCard>
        ))}
      </SkillsGrid>
      <TagsGroup>
        <div>
          <TagGroupTitle>Toolbelt</TagGroupTitle>
          <TagList>
            {skills.toolbelt.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </TagList>
        </div>
        <div>
          <TagGroupTitle>Workflows</TagGroupTitle>
          <TagList>
            {skills.workflows.map((workflow) => (
              <Tag key={workflow}>{workflow}</Tag>
            ))}
          </TagList>
        </div>
      </TagsGroup>
    </SectionInner>
  </Section>
)
