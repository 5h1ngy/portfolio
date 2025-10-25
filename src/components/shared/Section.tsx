import type { PropsWithChildren } from "react";
import styled from "styled-components";

export const SectionWrapper = styled.section<{ $subtle?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: clamp(3.5rem, 7vw, 5rem) 0;
  scroll-margin-top: 6rem;

  &:first-of-type {
    padding-top: clamp(2.5rem, 6vw, 3rem);
  }

  &:last-of-type {
    padding-bottom: 0;
  }

  &:not(:first-of-type) {
    border-top: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  }

  ${({ $subtle, theme }) =>
    $subtle &&
    `
      background: ${theme.colors.surfaceMuted};
      border-radius: 24px;
      padding: 3rem clamp(1.5rem, 5vw, 2.5rem);
      border: 1px solid ${theme.colors.accentOutlineMuted};
      box-shadow: ${theme.shadows.ambient};
    `}
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const SectionHeading = styled.h2`
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`;

export const SectionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SectionContent = styled.div`
  display: grid;
  gap: 1.75rem;
`;

interface SectionProps {
  id: string;
  accent?: string;
  title?: string;
  description?: string;
  subtle?: boolean;
}

export const Section = ({
  id,
  accent,
  title,
  description,
  subtle,
  children,
}: PropsWithChildren<SectionProps>) => {
  const heading = accent ?? title;
  const hasHeader = Boolean(heading || description);

  return (
    <SectionWrapper id={id} $subtle={subtle}>
      {hasHeader && (
        <SectionHeader>
          {heading && <SectionHeading>{heading}</SectionHeading>}
          {description && (
            <SectionDescription>{description}</SectionDescription>
          )}
        </SectionHeader>
      )}
      <SectionContent>{children}</SectionContent>
    </SectionWrapper>
  );
};
