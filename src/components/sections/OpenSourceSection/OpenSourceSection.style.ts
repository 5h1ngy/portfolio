import styled from 'styled-components';
import { TagPill } from '@components/shared/TagPill';

export const OpenSourceGrid = styled.div`
  display: grid;
  gap: 1.1rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProjectCard = styled.article`
  display: grid;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
`;

export const ProjectHeader = styled.header`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.75rem;
`;

export const ProjectName = styled.h3`
  margin: 0;
  font-size: 1.15rem;
`;

export const ProjectPeriod = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const ProjectTag = styled(TagPill)`
  padding: 0.35rem 0.85rem;
`;

export const ProjectLink = styled.a`
  font-weight: 600;
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ProductsEmpty = styled.div`
  padding: clamp(1.2rem, 3vw, 1.6rem);
  border-radius: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

