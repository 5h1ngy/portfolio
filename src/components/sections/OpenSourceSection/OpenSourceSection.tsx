import { useCallback, useEffect, useMemo, useState } from "react";

import { ProductsSlider } from "@/components/sections/ProductsSection";
import { Section } from "@components/shared/Section";
import type { PortfolioOpenSourceProject } from "@data/portfolio.types";

import type {
  OpenSourceProductsSectionProps,
  OpenSourceSectionProps,
} from "./OpenSourceSection.types";
import {
  CategoryDivider,
  CategoryLabel,
  CategorySection,
  DividerLine,
  OpenSourceGrid,
  PageSlide,
  PagesRoot,
  PagesViewport,
  PaginationButton,
  PaginationControls,
  PaginationDot,
  PaginationDots,
  ProductsEmpty,
  ProjectCard,
  ProjectDescription,
  ProjectHeader,
  ProjectLink,
  ProjectName,
  ProjectPeriod,
  ProjectTag,
  ProjectTags,
} from "./OpenSourceSection.style";

const isExternal = (href: string) => /^https?:\/\//i.test(href);

const MAX_PROJECTS_PER_PAGE = 6;
const MAX_CATEGORY_DIVIDERS_PER_PAGE = 2;
const DEFAULT_CATEGORY = "Other";

interface PageSection {
  category: string;
  projects: PortfolioOpenSourceProject[];
}

type ProjectPage = PageSection[];

const groupProjectsByCategory = (
  projects: PortfolioOpenSourceProject[]
): PageSection[] => {
  const grouped = new Map<string, PortfolioOpenSourceProject[]>();

  projects.forEach((project) => {
    const category =
      (project.category ?? DEFAULT_CATEGORY).trim() || DEFAULT_CATEGORY;
    if (!grouped.has(category)) {
      grouped.set(category, []);
    }
    grouped.get(category)!.push(project);
  });

  return Array.from(grouped.entries()).map(([category, categoryProjects]) => ({
    category,
    projects: categoryProjects,
  }));
};

const paginateProjects = (
  projects: PortfolioOpenSourceProject[]
): ProjectPage[] => {
  if (projects.length === 0) {
    return [];
  }

  const groups = groupProjectsByCategory(projects);
  const pages: ProjectPage[] = [];
  let currentSections: PageSection[] = [];
  let currentCount = 0;

  const flushPage = () => {
    if (currentSections.length > 0) {
      pages.push(currentSections);
      currentSections = [];
      currentCount = 0;
    }
  };

  groups.forEach(({ category, projects: categoryProjects }) => {
    const remaining = [...categoryProjects];

    while (remaining.length > 0) {
      if (
        currentSections.length === MAX_CATEGORY_DIVIDERS_PER_PAGE ||
        currentCount === MAX_PROJECTS_PER_PAGE
      ) {
        flushPage();
      }

      const availableSlots = MAX_PROJECTS_PER_PAGE - currentCount;

      if (
        availableSlots <= 0 ||
        currentSections.length === MAX_CATEGORY_DIVIDERS_PER_PAGE
      ) {
        flushPage();
      }

      const slots = Math.min(
        MAX_PROJECTS_PER_PAGE - currentCount,
        remaining.length
      );

      const take = Math.max(0, slots);
      if (take === 0) {
        flushPage();
        continue;
      }

      const chunk = remaining.splice(0, take);
      currentSections.push({ category, projects: chunk });
      currentCount += chunk.length;

      if (remaining.length > 0) {
        flushPage();
      }
    }
  });

  flushPage();

  return pages;
};

interface OpenSourceListSectionProps {
  id: string;
  accent: string;
  openSource: OpenSourceSectionProps["openSource"];
}

const OpenSourceListSection = ({
  id,
  accent,
  openSource,
}: OpenSourceListSectionProps) => {
  const pages = useMemo(
    () => paginateProjects(openSource.projects),
    [openSource.projects]
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    if (pageIndex >= pages.length && pages.length > 0) {
      setPageIndex(0);
      setDirection(1);
    }
  }, [pageIndex, pages.length]);

  const handlePageChange = useCallback(
    (nextIndex: number) => {
      if (
        nextIndex === pageIndex ||
        nextIndex < 0 ||
        nextIndex >= pages.length
      ) {
        return;
      }
      setDirection(nextIndex > pageIndex ? 1 : -1);
      setPageIndex(nextIndex);
    },
    [pageIndex, pages.length]
  );

  const handlePrev = useCallback(() => {
    handlePageChange(pageIndex - 1);
  }, [handlePageChange, pageIndex]);

  const handleNext = useCallback(() => {
    handlePageChange(pageIndex + 1);
  }, [handlePageChange, pageIndex]);

  const currentPage = pages[pageIndex] ?? [];
  const hasPagination = pages.length > 1;

  return (
    <Section
      id={id}
      accent={accent}
      title={openSource.title}
      description={openSource.caption}
    >
      {pages.length === 0 ? (
        <OpenSourceGrid />
      ) : (
        <PagesRoot>
          {hasPagination && (
            <PaginationControls aria-label="Open source projects pagination">
              <PaginationButton
                type="button"
                onClick={handlePrev}
                disabled={pageIndex === 0}
                aria-label="Previous open source projects"
              >
                {"<"}
              </PaginationButton>
              <PaginationDots role="tablist">
                {pages.map((_, index) => (
                  <PaginationDot
                    key={index}
                    type="button"
                    onClick={() => handlePageChange(index)}
                    $active={index === pageIndex}
                    aria-label={`Go to open source page ${index + 1}`}
                    aria-current={index === pageIndex ? "page" : undefined}
                  />
                ))}
              </PaginationDots>
              <PaginationButton
                type="button"
                onClick={handleNext}
                disabled={pageIndex === pages.length - 1}
                aria-label="Next open source projects"
              >
                {">"}
              </PaginationButton>
            </PaginationControls>
          )}
          <PagesViewport>
            <PageSlide
              key={`${pageIndex}-${pages.length}`}
              $direction={direction}
            >
              {currentPage.map((section) => (
                <CategorySection
                  key={`${section.category}-${
                    section.projects[0]?.name ?? "group"
                  }`}
                >
                  <CategoryDivider>
                    <DividerLine />
                    <CategoryLabel>{section.category}</CategoryLabel>
                  </CategoryDivider>
                  <OpenSourceGrid>
                    {section.projects.map((project) => (
                      <ProjectCard key={project.name}>
                        <ProjectHeader>
                          <ProjectName>{project.name}</ProjectName>
                          <ProjectPeriod>{project.period}</ProjectPeriod>
                        </ProjectHeader>
                        <ProjectDescription>
                          {project.description}
                        </ProjectDescription>
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
                            target={
                              project.link.external ||
                              isExternal(project.link.href)
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              project.link.external ||
                              isExternal(project.link.href)
                                ? "noreferrer"
                                : undefined
                            }
                          >
                            {project.link.label}
                          </ProjectLink>
                        )}
                      </ProjectCard>
                    ))}
                  </OpenSourceGrid>
                </CategorySection>
              ))}
            </PageSlide>
          </PagesViewport>
        </PagesRoot>
      )}
    </Section>
  );
};

export const OpenSourceSection = ({ openSource }: OpenSourceSectionProps) => (
  <OpenSourceListSection
    id="open-source"
    accent="Open source"
    openSource={openSource}
  />
);

export const OpenSourceProductsSection = ({
  products,
}: OpenSourceProductsSectionProps) => (
  <Section
    id="open-source-products"
    accent="Prodotti"
    title={products.title}
    description={products.caption}
  >
    {products.projects.length === 0 ? (
      <ProductsEmpty>
        Nessun prodotto open source pubblicato al momento.
      </ProductsEmpty>
    ) : (
      <ProductsSlider products={products} />
    )}
  </Section>
);
