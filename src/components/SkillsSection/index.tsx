import type { PortfolioSkills } from "../../types/portfolio";
import { Section } from "../Section";
import {
  Block,
  BlockTitle,
  CategoryCard,
  CategoryGrid,
  CategoryList,
  CategorySubtitle,
  CategoryTitle,
  Tag,
  TagCloud,
} from "./style";

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
    {skills.toolbelt.length > 0 && (
      <Block>
        <BlockTitle>Toolbelt</BlockTitle>
        <TagCloud>
          {skills.toolbelt.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </TagCloud>
      </Block>
    )}
    {skills.workflows.length > 0 && (
      <Block>
        <BlockTitle>Workflows</BlockTitle>
        <CategoryList>
          {skills.workflows.map((workflow, idx) => (
            <li key={idx}>{workflow}</li>
          ))}
        </CategoryList>
      </Block>
    )}
  </Section>
);
