import type { PortfolioExperience, PortfolioExperienceItem } from "@data/portfolio.types";

export const buildItemId = (item: PortfolioExperienceItem) =>
  `${item.company}-${item.role}-${item.start}`.toLowerCase().replace(/\s+/g, '-');

export const extractYearOrLabel = (value: string) => {
  const match = value.match(/\d{4}/);
  return match ? match[0] : value;
};

export const formatPeriod = (start: string, end: string) => {
  const startLabel = extractYearOrLabel(start);
  const endLabel = extractYearOrLabel(end);

  if (!endLabel || startLabel === endLabel) {
    return startLabel;
  }

  return `${startLabel} → ${endLabel}`;
};

export const isExternal = (href: string, external?: boolean) => external || /^https?:\/\//i.test(href);

export const getDefaultTimelineId = (experience: PortfolioExperience) =>
  experience.timeline.length > 0 ? buildItemId(experience.timeline[0]) : null;
