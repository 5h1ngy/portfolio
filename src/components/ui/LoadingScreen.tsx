import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 20% 20%, rgba(93, 243, 232, 0.08) 0%, transparent 55%),
    radial-gradient(circle at 80% 0%, rgba(141, 124, 255, 0.08) 0%, transparent 55%);
`

const Loader = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.accent};
  box-shadow: ${({ theme }) => theme.shadows.accent};
  animation: ${pulse} 2.6s ease-in-out infinite;
`

export const LoadingScreen = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
)
