import styled from "styled-components";

export const HighlightsGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const HighlightCard = styled.div`
  display: grid;
  gap: 0.65rem;
  padding: 1.35rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const HighlightIcon = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HighlightTitle = styled.h3`
  margin: 0;
  font-size: 1.15rem;
`;

export const HighlightDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StatsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StatCard = styled.div`
  flex: 1 1 160px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  padding: 1rem 1.2rem;
  display: grid;
  gap: 0.35rem;
`;

export const StatValue = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;

export const StatLabel = styled.span`
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textMuted};
`;
