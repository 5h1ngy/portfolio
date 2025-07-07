import styled from "styled-components";

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
    background: linear-gradient(
      180deg,
      rgba(92, 243, 233, 0),
      rgba(92, 243, 233, 0.4) 18%,
      rgba(92, 243, 233, 0.4) 82%,
      rgba(92, 243, 233, 0)
    );
  }

  @media (max-width: 960px) {
    grid-template-columns: clamp(24px, 8vw, 32px) minmax(0, 1fr);
    column-gap: 1.75rem;

    &::before {
      left: calc(clamp(24px, 8vw, 32px) / 2);
    }
  }
`;

export const TimelineRow = styled.div`
  display: contents;
`;

export const TimelineSlot = styled.div<{ $side: "left" | "right" }>`
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};
  display: flex;
  justify-content: ${({ $side }) =>
    $side === "left" ? "flex-end" : "flex-start"};

  @media (max-width: 960px) {
    grid-column: 2;
    justify-content: flex-start;
  }
`;

export const TimelinePlaceholder = styled.div<{ $side: "left" | "right" }>`
  grid-column: ${({ $side }) => ($side === "left" ? 1 : 3)};

  @media (max-width: 960px) {
    display: none;
  }
`;

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
`;

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
`;

export const TimelineCard = styled.div`
  position: relative;
  display: grid;
  gap: 0.85rem;
  width: clamp(260px, 32vw, 360px);
  padding: 1.6rem 1.8rem;
  border-radius: 22px;
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  box-shadow: ${({ theme }) => theme.shadows.ambient};

  @media (max-width: 960px) {
    width: 100%;
    padding: 1.5rem 1.6rem;
  }
`;

export const TimelineMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const TimelinePeriod = styled.span``;

export const TimelineCompany = styled.span`
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  letter-spacing: 0.08em;
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TimelineSummary = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

export const TimelineHighlights = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TimelineTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const TimelineTag = styled.span`
  display: inline-flex;
  align-items: center;
  align-items: flex-start;
  justify-content: center;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  padding: 0.35rem 0.9rem;
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const TimelineLink = styled.a`
  justify-self: start;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;
