import { useCallback, useEffect, useId } from 'react'
import type { MouseEvent } from 'react'

import type { PortfolioExperienceRole } from '@data/portfolio.types'

interface UseExperienceModalOptions {
  role: PortfolioExperienceRole | null
  onClose: () => void
}

export const useExperienceModal = ({ role, onClose }: UseExperienceModalOptions) => {
  const titleId = useId()

  useEffect(() => {
    if (!role) {
      return
    }

    const { body, documentElement } = document
    const previousOverflow = body.style.overflow
    const previousHtmlOverflow = documentElement.style.overflow
    body.style.overflow = 'hidden'
    documentElement.style.overflow = 'hidden'

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKey)

    return () => {
      body.style.overflow = previousOverflow
      documentElement.style.overflow = previousHtmlOverflow
      window.removeEventListener('keydown', handleKey)
    }
  }, [role, onClose])

  const handleOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose()
      }
    },
    [onClose],
  )

  return { titleId, handleOverlayClick }
}

