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

export const Block = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const BlockTitle = styled.h3`
  margin: 0;
  font-size: 1.05rem;
`;

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
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

export const ProductsGrid = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProductCard = styled.article`
  display: grid;
  gap: 0.65rem;
  padding: 1.3rem 1.5rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const ProductName = styled.h4`
  margin: 0;
  font-size: 1.05rem;
`;

export const ProductDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const ProductTag = styled.span`
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.3rem 0.8rem;
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProductLink = styled.a`
  font-weight: 600;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.accent};
`;
