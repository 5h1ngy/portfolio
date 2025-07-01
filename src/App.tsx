import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { PortfolioPage } from './pages/PortfolioPage'

const App = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route index element={<PortfolioPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  </Routes>
)

export default App
