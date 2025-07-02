import styled from "styled-components";

export const ProjectsGrid = styled.div<{ $columns?: number }>`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: ${({ $columns = 1 }) => `repeat(${$columns}, minmax(0, 1fr))`};

  @media (max-width: 720px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProjectCard = styled.article`
  display: grid;
  gap: 0.85rem;
  padding: 1.45rem;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const ProjectHeader = styled.header`
  display: grid;
  gap: 0.25rem;
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const ProjectSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const ProjectTag = styled.span`
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

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  font-size: 0.9rem;
`;
