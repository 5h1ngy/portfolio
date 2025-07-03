import styled from "styled-components";

export const ContributionGrid = styled.div`
  display: grid;
  gap: 1.2rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ContributionCard = styled.article`
  display: grid;
  gap: 0.75rem;
  padding: 1.4rem 1.6rem;
  border-radius: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const ContributionTitle = styled.h3`
  margin: 0;
  font-size: 1.15rem;
`;

export const ContributionSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ContributionDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ContributionTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ContributionTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const ContributionLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const ContributionLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  font-size: 0.88rem;
`;
