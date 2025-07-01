import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem ${({ theme }) => theme.layout.gutter};
  text-align: center;
  gap: 1.5rem;
`

const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
`

const Message = styled.p`
  max-width: 480px;
`

const RetryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.gradients.accent};
  color: #040713;
  padding: 0.65rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-1px);
  }
`

interface ErrorStateProps {
  message: string
}

export const ErrorState = ({ message }: ErrorStateProps) => (
  <Wrapper>
    <Title>Ops! Qualcosa e andato storto</Title>
    <Message>Non riesco a caricare i contenuti del portfolio: {message}</Message>
    <RetryButton type="button" onClick={() => window.location.reload()}>
      Riprova
    </RetryButton>
  </Wrapper>
)
