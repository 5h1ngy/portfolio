import styled from 'styled-components'
import { Backdrop } from './Backdrop'
import { Card } from './Card'

export const ModalOverlay = styled(Backdrop).attrs({ $tone: 'light', $visible: true })`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 6vw, 4rem);

  @media (max-width: 720px) {
    padding: 0;
    align-items: stretch;
    justify-content: flex-start;
  }
`

export const ModalContainer = styled(Card).attrs({
  $variant: 'surface',
  $padding: '0',
  $radius: '28px',
})`
  width: min(760px, 92vw);
  max-height: min(90vh, 720px);
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.accentOutlineMuted};
  box-shadow: none;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
`

export const ModalScrollArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: clamp(1.05rem, 3vw, 1.6rem);

  @media (max-width: 720px) {
    padding: 0.85rem 0.85rem 1.15rem;
  }
`
