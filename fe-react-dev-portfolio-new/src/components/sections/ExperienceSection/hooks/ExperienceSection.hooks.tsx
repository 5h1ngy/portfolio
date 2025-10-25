import { useCallback, useMemo, useState } from 'react'

import type { PortfolioExperienceRole } from '@data/portfolio.types'

export const useExperienceTimeline = (roles: PortfolioExperienceRole[]) => {
  const memoizedRoles = useMemo(() => roles, [roles])
  const [activeRole, setActiveRole] = useState<PortfolioExperienceRole | null>(null)

  const openRole = useCallback((role: PortfolioExperienceRole) => {
    setActiveRole(role)
  }, [])

  const closeRole = useCallback(() => {
    setActiveRole(null)
  }, [])

  return {
    roles: memoizedRoles,
    activeRole,
    openRole,
    closeRole,
  }
}

