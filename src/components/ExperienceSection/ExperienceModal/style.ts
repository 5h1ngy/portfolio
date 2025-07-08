import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 8, 20, 0.82), rgba(4, 8, 20, 0.92));
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 6vw, 4rem);
  z-index: 40;
  overflow-y: auto;
  overscroll-behavior: contain;

  @media (max-width: 720px) {
    padding: 0;
    align-items: stretch;
    justify-content: flex-start;
  }
`

export const ModalCard = styled.div`
  position: relative;
  width: min(760px, 92vw);
  max-height: min(90vh, 720px);
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: ${({ theme }) => theme.shadows.accent};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    max-height: none;
    min-height: 100%;
    border-radius: 0;
  }
`

export const ModalScroll = styled.div`
  flex: 1;
  padding: clamp(1.05rem, 3vw, 1.6rem);
  display: grid;
  gap: clamp(0.7rem, 2vw, 1rem);
  overflow-y: auto;
  min-height: 0;

  @media (max-width: 720px) {
    padding: 0.95rem 0.9rem 1.25rem;
    gap: 0.6rem;
  }
`

export const ModalTopBar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: clamp(0.8rem, 2.4vw, 1.2rem);
  padding-bottom: clamp(0.55rem, 1.8vw, 0.95rem);
  margin-bottom: clamp(0.6rem, 2vw, 0.95rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.accentOutline};

  @media (max-width: 720px) {
    gap: 0.7rem;
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
  border-left: 1px solid ${({ theme }) => theme.colors.accentOutline};

  @media (max-width: 720px) {
    margin-left: auto;
    padding-left: 0.85rem;
  }
`

export const ModalClose = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
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

export const ModalPeriod = styled.span`
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const ModalCompany = styled.span`
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  text-transform: uppercase;
`

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

export const ModalTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.25rem;
`

export const ModalTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.3rem 0.85rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceMuted};

  @media (max-width: 720px) {
    font-size: 0.75rem;
    padding: 0.26rem 0.7rem;
  }
`

export const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
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
