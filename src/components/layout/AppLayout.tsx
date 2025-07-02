import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { usePortfolio } from '../../context/PortfolioContext'
import { BackgroundDecorations } from './BackgroundDecorations'
import { Footer } from './Footer'
import { Header } from './Header'
import { ErrorState } from '../ui/ErrorState'
import { LoadingScreen } from '../ui/LoadingScreen'

const LayoutShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`

const Main = styled.main`
  flex: 1;
`

export const AppLayout = () => {
  const { isLoading, error } = usePortfolio()

  if (isLoading) {
    return <LoadingScreen />
  }

  if (error) {
    return <ErrorState message={error} />
  }

  return (
    <LayoutShell>
      <BackgroundDecorations />
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutShell>
  )
}
