import styled, { keyframes } from 'styled-components'
import { TagPill } from '@components/shared/TagPill'
import { TextLinkRoot } from '@components/shared/TextLink'
import { IconButton } from '@components/shared/Button'
import { Card } from '@components/shared/Card'
import { TagList } from '@components/shared/TagList'
import { MetaLabel } from '@components/shared/MetaLabel'


const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const PagesRoot = styled.div`
  display: grid;
  gap: clamp(1.4rem, 3vw, 1.9rem);
`

export const PagesViewport = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 0;
`

export const PageSlide = styled.div<{ $direction: 1 | -1 }>`
  display: grid;
  gap: clamp(1.35rem, 3vw, 1.75rem);
  animation: ${({ $direction }) => ($direction === 1 ? slideInFromRight : slideInFromLeft)} 0.4s ease both;
`

export const CategorySection = styled.section`
  display: grid;
  gap: clamp(0.9rem, 2vw, 1.3rem);
`

export const CategoryDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const DividerLine = styled.span`
  flex: 1;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`

export const CategoryLabel = styled(MetaLabel).attrs({ $variant: 'eyebrow', $tone: 'muted' })``

export const OpenSourceGrid = styled.div`
  display: grid;
  gap: 1.1rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const ProjectCard = styled(Card).attrs({
  as: 'article',
  $variant: 'surface',
  $padding: '1.5rem',
})`
  --card-gap: 0.75rem;
  box-shadow: none;
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

export const ProjectTags = styled(TagList)`
  gap: 0.45rem;
`;

export const ProjectTag = styled(TagPill)`
  padding: 0.35rem 0.85rem;
`;

export const ProjectLink = styled(TextLinkRoot)`
  font-weight: 600;
  font-size: 0.88rem;
`;

export const ProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProductsEmpty = styled.div`
  padding: clamp(1.2rem, 3vw, 1.6rem);
  border-radius: 20px;
  border: 1px dashed ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.1rem;
`;

export const PaginationButton = styled(IconButton).attrs({ $tone: 'muted', $size: 'md', $shape: 'circle' })`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:not(:disabled):hover,
  &:not(:disabled):focus-visible {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`

export const PaginationDots = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
`

export const PaginationDot = styled(IconButton).attrs({ $tone: 'ghost', $size: 'sm', $shape: 'circle' })<{ $active: boolean }>`
  width: 0.6rem;
  height: 0.6rem;
  padding: 0;
  aspect-ratio: 1 / 1;
  background: ${({ $active, theme }) => ($active ? theme.colors.accent : theme.colors.accentOutlineMuted)};
  box-shadow: none;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: scale(1.15);
    background: ${({ theme }) => theme.colors.accent};
  }
`













