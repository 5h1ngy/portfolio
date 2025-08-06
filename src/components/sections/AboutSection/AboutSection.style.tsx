import styled from "styled-components";

export const Summary = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FocusGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const FocusCard = styled.article`
  display: grid;
  gap: 0.65rem;
  padding: 1.35rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }
`;

export const FocusTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

export const FocusDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const QuickFacts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const FactCard = styled.div`
  flex: 1 1 160px;
  padding: 1rem 1.2rem;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  display: grid;
  gap: 0.35rem;
  box-shadow: none;
`;
export const FactLabel = styled.span`
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const FactValue = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;



