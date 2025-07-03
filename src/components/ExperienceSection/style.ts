import styled from "styled-components";

export const TimelineList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.5rem 5rem;
  align-items: start;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(180deg, rgba(92, 243, 233, 0.2), rgba(92, 243, 233, 0.05));
  }

  @media (max-width: 960px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.75rem;
    padding-inline: 0.5rem;

    &::before {
      inset-inline-start: 1rem;
    }
  }
`;

export const TimelineItem = styled.article<{ $side: 'left' | 'right'; $expanded: boolean }>`
  position: relative;
  display: flex;
  width: 100%;
  justify-self: ${({ $side }) => ($side === 'left' ? 'end' : 'start')};

  @media (max-width: 960px) {
    justify-self: stretch;
  }
`;

export const TimelineMarker = styled.span<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.colors.surfaceElevated};
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-shadow: 0 12px 28px rgba(6, 26, 44, 0.45);
  white-space: nowrap;
  ${({ $side }) => ($side === 'left' ? 'right: -3rem;' : 'left: -3rem;')}

  @media (max-width: 960px) {
    left: -2.6rem;
    right: auto;
  }
`;

export const TimelineBody = styled.div<{ $side: 'left' | 'right'; $expanded: boolean }>`
  position: relative;
  width: clamp(280px, 36vw, 420px);
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceElevated};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  padding: ${({ $expanded }) => ($expanded ? '1.8rem 2.2rem' : '1.35rem 1.6rem')};
  display: grid;
  gap: 1.4rem;
  transition: transform 260ms ease, box-shadow 260ms ease, border-color 200ms ease, background 200ms ease;
  margin-inline: ${({ $side, $expanded }) =>
    $side === 'left'
      ? $expanded
        ? '0 clamp(-2rem, -3vw, -1rem)'
        : '0 clamp(-1.25rem, -2vw, -0.75rem)'
      : $expanded
        ? 'clamp(-2rem, -3vw, -1rem) 0'
        : 'clamp(-1.75rem, -2.5vw, -1rem) 0'};

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.accentOutline};
  }

  ${({ $expanded, theme }) =>
    $expanded &&
    `
      border-color: ${theme.colors.accentOutline};
      background: ${theme.colors.surface};
      box-shadow: ${theme.shadows.accent};
    `}

  @media (max-width: 960px) {
    margin-inline: 0;
    max-width: 100%;
  }
`;

export const TimelineHeader = styled.header`
  display: grid;
  gap: 0.85rem;
`;

export const TimelineHeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TimelinePeriod = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const TimelineToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background ${({ theme }) => theme.mode === 'dark' ? '160ms' : '140ms'} ease,
    color var(--app-transition), border-color var(--app-transition), transform var(--app-transition);

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.colors.textPrimary};
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme }) => theme.colors.accentSoft};
    transform: translateY(-1px);
  }
`;

export const TimelineHeading = styled.div`
  display: grid;
  gap: 0.4rem;
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

export const TimelineSubtitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const TimelineBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutline};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const TimelineSummary = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const TimelineSummaryText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.55;
`;

export const TimelineContent = styled.div<{ $visible: boolean }>`
  display: ${({ $visible }) => ($visible ? 'grid' : 'none')};
  gap: 1.5rem;
`;

export const TimelineGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const HighlightsList = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
  color: ${({ theme }) => theme.colors.textSecondary};
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

export const LinkGroup = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  font-size: 0.88rem;
`;
