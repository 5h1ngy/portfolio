import type { PortfolioSkills } from '@data/portfolio.types';
import { Section } from '@components/Section';
import {
  Block,
  BlockTitle,
  CategoryCard,
  CategoryGrid,
  CategoryList,
  CategorySubtitle,
  CategoryTitle,
  ProductsGrid,
  ProductCard,
  ProductDescription,
  ProductLink,
  ProductName,
  ProductTag,
  ProductTags,
  Tag,
  TagCloud,
} from '@components/SkillsSection/style';

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

    {skills.products.length > 0 && (
      <Block>
        <BlockTitle>Prodotti open source</BlockTitle>
        <ProductsGrid>
          {skills.products.map((product) => (
            <ProductCard key={product.name}>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              {product.tags.length > 0 && (
                <ProductTags>
                  {product.tags.map((tag) => (
                    <ProductTag key={tag}>{tag}</ProductTag>
                  ))}
                </ProductTags>
              )}
              {product.link && (
                <ProductLink
                  href={product.link.href}
                  target={product.link.external ? '_blank' : undefined}
                  rel={product.link.external ? 'noreferrer' : undefined}
                >
                  {product.link.label}
                </ProductLink>
              )}
            </ProductCard>
          ))}
        </ProductsGrid>
      </Block>
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
