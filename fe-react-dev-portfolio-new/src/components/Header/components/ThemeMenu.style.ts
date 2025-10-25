import styled from 'styled-components'
import { IconButton, SurfaceButton } from '@components/shared/Button'
import { MenuSurface } from '@components/shared/Menu'

export const ThemeMenu = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`

export const ThemeMenuButton = styled(IconButton).attrs({ $tone: 'surface', $size: 'md' })`
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  transition: transform 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.surfaceMuted};
  }
`

export const ThemeMenuSummary = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`

export const ThemeTriggerIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};

  svg {
    width: 14px;
    height: 14px;
    display: block;
  }
`

export const ThemeMenuContent = styled(MenuSurface)`
  top: calc(100% + 0.75rem);
  display: grid;
  align-items: start;
  justify-items: stretch;
  gap: 1.1rem;
  padding: 1.4rem 1.65rem;
  min-width: 220px;
  right: 0;
  z-index: 8;

  @media (max-width: 834px) {
    min-width: 210px;
    width: min(252px, 90vw);
  }
`

export const ThemeMenuLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: left;
`

export const ThemeSwitch = styled(SurfaceButton).attrs({ as: 'button', $tone: 'muted', $padding: '0 10px' })<{
  $mode: 'light' | 'dark'
}>`
  position: relative;
  width: 70px;
  height: 32px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 160ms ease, background 160ms ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

export const ThemeSwitchThumb = styled.span<{ $mode: 'light' | 'dark' }>`
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: 4px;
  width: 26px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow: ${({ theme }) => theme.shadows.accent};
  transform: translateX(${({ $mode }) => ($mode === 'dark' ? '32px' : '0')});
  transition: transform 0.2s ease;
`

export const ThemeSwitchIcon = styled.span<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${({ theme, $active }) => ($active ? theme.colors.textPrimary : theme.colors.textMuted)};
  opacity: ${({ $active }) => ($active ? 1 : 0.45)};
  transition: opacity 0.2s ease, color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`

export const AccentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: flex-start;
`

export const AccentSwatch = styled(IconButton).attrs({ $tone: 'ghost', $size: 'sm', $shape: 'circle' })<{
  $active: boolean
  $color: string
}>`
  border: 2px solid transparent;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  background-color: ${({ $color }) => $color};

  &:hover,
  &:focus-visible {
    transform: translateY(-1px) scale(1.05);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.3);
  }

  ${({ $active, theme }) =>
    $active &&
    `
      border-color: ${theme.colors.textPrimary};
      box-shadow: 0 0 0 3px ${theme.colors.accentSoft};
    `}
`

