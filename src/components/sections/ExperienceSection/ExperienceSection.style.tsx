import styled from "styled-components"
import { Card } from '@components/shared/Card'
import { IconButton } from '@components/shared/Button'
import { MetaLabel } from '@components/shared/MetaLabel'

export const TimelineWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) clamp(32px, 5vw, 48px) minmax(0, 1fr);
  column-gap: clamp(2rem, 6vw, 4rem);
  row-gap: clamp(2.4rem, 6vw, 3.4rem);
  margin-top: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    inset-block: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: ${({ theme }) =>
      `linear-gradient(180deg, ${theme.colors.accent}00, ${theme.colors.accentSoft} 18%, ${theme.colors.accentSoft} 82%, ${theme.colors.accent}00)`};
  }

  @media (max-width: 960px) {
    grid-template-columns: clamp(24px, 8vw, 32px) minmax(0, 1fr);
    column-gap: 1.75rem;

    &::before {
      left: calc(clamp(24px, 8vw, 32px) / 2);
    }
  }
`

export const TimelineRow = styled.div`
  display: contents;
`

export const TimelineSlot = styled.div<{ $side: "left" | "right" }>`
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};
  display: flex;
  justify-content: ${({ $side }) => ($side === "left" ? "flex-end" : "flex-start")};

  @media (max-width: 960px) {
    grid-column: 2;
    justify-content: flex-start;
  }
`

export const TimelinePlaceholder = styled.div<{ $side: "left" | "right" }>`
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};

  @media (max-width: 960px) {
    display: none;
  }
`

export const TimelineMarkerCell = styled.div`
  grid-column: 2;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-height: 100%;
  padding-top: clamp(1.3rem, 3vw, 1.6rem);

  @media (max-width: 960px) {
    grid-column: 1;
  }
`

export const TimelineMarker = styled.span`
  display: inline-block;
  margin-top: 1.4rem;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.accentSoft};

  @media (max-width: 960px) {
    display: none;
  }
`

export const TimelineCard = styled(Card).attrs({
  as: 'article',
  $variant: 'surface',
  $interactive: true,
  $padding: '1.35rem 1.5rem',
})`
  --card-gap: 0.75rem;
  width: clamp(240px, 30vw, 340px);

  @media (max-width: 960px) {
    width: 100%;
    padding: 1.4rem 1.5rem;
  }
`

export const TimelineMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
`

export const TimelinePeriod = styled(MetaLabel).attrs({ $variant: 'eyebrow', $tone: 'muted' })``

export const TimelineCompany = styled(MetaLabel).attrs({ $variant: 'badge', $tone: 'muted', $padding: '0.32rem 0.8rem' })``

export const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const TimelineSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  font-size: 0.9rem;
  min-height: 2.6rem;
`

export const TimelineCTA = styled(IconButton).attrs({ $tone: 'muted', $size: 'md', $shape: 'circle' })`
  width: 42px;
  height: 42px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.accent};
  transition: border-color 0.18s ease, transform 0.18s ease, color 0.18s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.textPrimary};
    transform: translateY(-1px) scale(1.05);
  }
`

export const TimelineCTAIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
`


