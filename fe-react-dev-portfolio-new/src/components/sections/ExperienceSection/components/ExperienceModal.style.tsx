import styled from "styled-components"
import { TagPill } from '@components/shared/TagPill'
import { IconButton } from '@components/shared/Button'
import { ModalOverlay as ModalOverlaySurface, ModalContainer as ModalContainerSurface, ModalScrollArea } from '@components/shared/Modal'
import { TagList } from '@components/shared/TagList'
import { MetaLabel } from '@components/shared/MetaLabel'

export const ModalOverlay = styled(ModalOverlaySurface)`
  overflow-y: auto;
  overscroll-behavior: contain;
`

export const ModalCard = styled(ModalContainerSurface)`
  @media (max-width: 720px) {
    min-height: 100%;
  }
`

export const ModalScroll = styled(ModalScrollArea)`
  display: block;
`

export const ModalBody = styled.div`
  display: grid;
  gap: clamp(0.7rem, 2.2vw, 1rem);

  @media (max-width: 720px) {
    gap: 0.55rem;
  }
`

export const ModalTopBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(0.8rem, 2.4vw, 1.2rem);
  padding-bottom: clamp(0.55rem, 1.8vw, 0.95rem);
  margin-bottom: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};

  @media (max-width: 720px) {
    gap: 0.65rem;
    padding-bottom: 0.55rem;
  }
`

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
`

export const ModalCloseSlot = styled.div`
  display: flex;
  align-items: center;
  padding-left: clamp(1rem, 2.5vw, 1.4rem);
  margin-left: clamp(0.75rem, 2vw, 1.1rem);
  border-left: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};

  @media (max-width: 720px) {
    margin-left: auto;
    padding-left: 0.85rem;
  }
`

export const ModalClose = styled(IconButton).attrs({ $tone: 'muted', $size: 'md', $shape: 'circle' })`
  width: 36px;
  height: 36px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: border-color 0.18s ease, transform 0.18s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

export const ModalPeriod = styled(MetaLabel).attrs({ $variant: 'eyebrow', $tone: 'muted' })``

export const ModalCompany = styled(MetaLabel).attrs({ $variant: 'badge', $tone: 'muted', $padding: '0.4rem 0.85rem' })``

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ModalSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.55;
  font-size: 0.93rem;

  @media (max-width: 720px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`

export const ModalHighlights = styled.ul`
  margin: 0;
  padding-left: 1.15rem;
  display: grid;
  gap: 0.45rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  li {
    line-height: 1.45;
  }
`

export const ModalTags = styled(TagList)`
  gap: 0.45rem;
  margin-top: 0.25rem;

  @media (max-width: 720px) {
    gap: 0.35rem;
    margin-top: 0.15rem;
  }
`

export const ModalTag = styled(TagPill)`
  font-size: 0.8rem;
  padding: 0.3rem 0.85rem;

  @media (max-width: 720px) {
    font-size: 0.74rem;
    padding: 0.24rem 0.68rem;
    line-height: 1.15;
  }
`

export const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  padding: 0.48rem 1.05rem;
  font-weight: 600;
  font-size: 0.84rem;
  color: ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  margin-top: clamp(1.1rem, 3vw, 1.6rem);

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 720px) {
    align-self: flex-start;
    font-size: 0.78rem;
    padding: 0.38rem 0.82rem;
  }
`


