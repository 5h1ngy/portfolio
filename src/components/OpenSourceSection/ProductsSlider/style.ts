import styled from 'styled-components'

export const ProductsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(1.4rem, 3vw, 2rem);
  width: 100%;
`

export const ProductCard = styled.article<{ $direction: 'next' | 'prev' }>`
  position: relative;
  width: min(720px, 92vw);
  padding: clamp(1.8rem, 4vw, 2.8rem);
  border-radius: 32px;
  background: ${({ theme }) =>
    `linear-gradient(135deg, ${theme.colors.surfaceElevated} 0%, ${theme.colors.surfaceMuted} 45%, ${theme.colors.surface} 100%)`};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  color: ${({ theme }) => theme.colors.textPrimary};
  overflow: hidden;
  box-shadow: none;
  animation: ${({ $direction }) => ($direction === 'next' ? 'product-slide-next' : 'product-slide-prev')} 0.45s ease forwards;
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.4rem);
  align-content: start;
  min-height: clamp(340px, 45vw, 420px);

  &::before {
    content: '';
    position: absolute;
    inset: -50% -20%;
    background: radial-gradient(circle at 20% 20%, ${({ theme }) => theme.colors.accentSoft} 0%, transparent 60%);
    opacity: 0.55;
    pointer-events: none;
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

export const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: clamp(1rem, 2.5vw, 1.4rem);
`

export const ProductTag = styled.span`
  padding: 0.36rem 0.92rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
`

export const ProductsNav = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(0.9rem, 2vw, 1.6rem);
`

export const ProductsArrow = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

export const ProductsCounter = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const ProductActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-wrap: wrap;
`

export const ProductActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1.1rem;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 600;
  transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;

  svg {
    width: 15px;
    height: 15px;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`
