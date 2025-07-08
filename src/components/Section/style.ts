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
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  ${({ $subtle, theme }) =>
    $subtle &&
    `
      background: ${theme.colors.surfaceMuted};
      border-radius: 24px;
      padding: 3rem clamp(1.5rem, 5vw, 2.5rem);
      border: 1px solid ${theme.colors.border};
      box-shadow: ${theme.shadows.ambient};
    `}
`;

export const SectionHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SectionAccent = styled.span`
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.45rem, 3vw, 2rem);
  margin: 0;
`;

export const SectionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SectionContent = styled.div`
  display: grid;
  gap: 1.75rem;
`;
