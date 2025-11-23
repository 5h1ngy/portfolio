import styled from 'styled-components'
import { Card } from '@components/shared/Card'
import { TagPill } from '@components/shared/TagPill'
import { ActionLink } from '@components/shared/ActionLink'
import { IconButton } from '@components/shared/Button'
import { TagList } from '@components/shared/TagList'
import { MetaLabel } from '@components/shared/MetaLabel'


export const ProductsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.4rem, 3vw, 2rem);
  width: 100%;
`

export const ProductCard = styled(Card).attrs<{ $direction: 'next' | 'prev' }>({
  $variant: 'gradient',
  $interactive: true,
  $padding: 'clamp(1.8rem, 4vw, 2.8rem)',
})`
  --card-gap: clamp(1rem, 2.5vw, 1.4rem);
  width: min(720px, 92vw);
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  overflow: hidden;
  display: grid;
  align-content: start;
  min-height: clamp(340px, 45vw, 420px);\n  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;\n  box-shadow: none;
  animation: ${({ $direction }) => ($direction === 'next' ? 'product-slide-next' : 'product-slide-prev')} 0.45s ease forwards;

  &::before {
    content: '';
    position: absolute;
    inset: -50% -20%;
    background: radial-gradient(circle at 20% 20%, ${({ theme }) => theme.colors.accentSoft} 0%, transparent 60%);
    opacity: 0.55;
    pointer-events: none;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: ${({ theme }) => theme.shadows.accent};
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, 0.04);
    pointer-events: none;
  }

  @keyframes product-slide-next {
    from {
      opacity: 0;
      transform: translateX(18px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes product-slide-prev {
    from {
      opacity: 0;
      transform: translateX(-18px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
`

export const ProductMeta = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.6rem, 3.6vw, 2.2rem);
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ProductSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: clamp(0.95rem, 2.2vw, 1rem);
`

export const ProductTags = styled(TagList)`
  gap: 0.5rem;
  margin-top: clamp(1rem, 2.5vw, 1.4rem);
`

export const ProductTag = styled(TagPill)`
  padding: 0.36rem 0.92rem;
`

export const ProductsNav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.9rem, 2vw, 1.6rem);
`

export const ProductsArrow = styled(IconButton).attrs({ $tone: 'muted', $size: 'lg', $shape: 'rounded' })`
  color: ${({ theme }) => theme.colors.accent};
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    transform: none;
  }
`

export const ProductsCounter = styled(MetaLabel).attrs({ $variant: 'counter', $tone: 'muted' })``

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
`

export const ProductActionButton = styled(ActionLink)`
  padding: 0.5rem 1.1rem;
  border-radius: 14px;
`










