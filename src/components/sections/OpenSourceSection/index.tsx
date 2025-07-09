import { Section } from '@components/shared/Section';
import type { OpenSourceProductsSectionProps, OpenSourceSectionProps } from '@/components/sections/OpenSourceSection/types';
import { ProductsSlider } from '@/components/sections/ProductsSection';
import {
  OpenSourceGrid,
  ProductsEmpty,
  ProjectCard,
  ProjectDescription,
  ProjectHeader,
  ProjectLink,
  ProjectName,
  ProjectPeriod,
  ProjectTag,
  ProjectTags,
} from '@/components/sections/OpenSourceSection/style';

const isExternal = (href: string) => /^https?:\/\//i.test(href);

interface OpenSourceListSectionProps {
  id: string;
  accent: string;
  openSource: OpenSourceSectionProps['openSource'];
}

const OpenSourceListSection = ({ id, accent, openSource }: OpenSourceListSectionProps) => (
  <Section id={id} accent={accent} title={openSource.title} description={openSource.caption}>
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

export const OpenSourceSection = ({ openSource }: OpenSourceSectionProps) => (
  <OpenSourceListSection id="open-source" accent="Open source" openSource={openSource} />
);

export const OpenSourceProductsSection = ({ products }: OpenSourceProductsSectionProps) => {
  return (
    <Section id="open-source-products" accent="Prodotti" title={products.title} description={products.caption}>
      {products.projects.length === 0 ? (
        <ProductsEmpty>Nessun prodotto open source pubblicato al momento.</ProductsEmpty>
      ) : (
        <ProductsSlider products={products} />
      )}
    </Section>
  );
};
