import styled from "styled-components";

export const CategoryGrid = styled.div`
  display: grid;
  gap: 1.1rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CategoryCard = styled.article`
  display: grid;
  gap: 0.75rem;
  padding: 1.4rem 1.6rem;
  border-radius: 22px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const CategoryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const CategorySubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CategoryList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;
