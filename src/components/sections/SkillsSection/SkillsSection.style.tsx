import styled from "styled-components";

export const CategoryGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(0.85rem, 2.5vw, 1.2rem);
`;

export const CategoryCard = styled.article`
  display: grid;
  align-content: start;
  gap: 0.55rem;
  padding: 1.1rem 1.3rem;
  width: clamp(220px, 28vw, 280px);
  min-height: 260px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: none;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1.12rem;
  line-height: 1.25;
`;

export const CategorySubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.45;
`;

export const CategoryList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  display: grid;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`;
