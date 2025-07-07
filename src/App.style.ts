import styled from 'styled-components'

export const AppShell = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.gradients.background};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow-x: hidden;
`

export const AppMain = styled.main`
  flex: 1;
  width: min(${({ theme }) => theme.layout.maxWidth}, calc(100% - 2.5rem));
  margin: 0 auto;
  padding: 5rem 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 0;

  @media (max-width: 720px) {
    width: calc(100% - 1.5rem);
    padding-top: 4rem;
  }
`
