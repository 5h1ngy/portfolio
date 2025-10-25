import styled from 'styled-components'

export const MenuSurface = styled.div<{ $open: boolean; $minWidth?: string }>`
  position: absolute;
  top: calc(100% + 0.65rem);
  right: 0;
  display: grid;
  gap: 0.5rem;
  min-width: ${({ $minWidth }) => $minWidth ?? '200px'};
  padding: 0.75rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.ambient};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: opacity 0.18s ease, transform 0.18s ease;
  z-index: 12;
`
