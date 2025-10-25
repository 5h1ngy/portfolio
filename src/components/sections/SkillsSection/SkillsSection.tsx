import type { PortfolioSkills } from '@data/portfolio.types';
import { Section } from '@components/shared/Section';
import {
  CategoryCard,
  CategoryGrid,
  CategoryList,
  CategorySubtitle,
  CategoryTitle,
} from './SkillsSection.style';

interface SkillsSectionProps {
  skills: PortfolioSkills;
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <Section id="skills" accent="Competenze" title={skills.title} description={skills.caption}>
    {skills.categories.length > 0 && (
      <CategoryGrid>
        {skills.categories.map((category) => (
          <CategoryCard key={category.title}>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategorySubtitle>{category.summary}</CategorySubtitle>
            <CategoryList>
              {category.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </CategoryList>
          </CategoryCard>
        ))}
      </CategoryGrid>
    )}
  </Section>
);
