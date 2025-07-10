import { useCallback } from 'react'

import { Nav, NavLink } from '@/components/Header/style'
import type { HeaderNavigationItem } from '@/components/Header/types'

interface HeaderNavigationProps {
  navigation: HeaderNavigationItem[]
  isMobile: boolean
  isOpen: boolean
  onItemSelect: () => void
  ariaLabel: string
}

export const HeaderNavigation = ({ navigation, isMobile, isOpen, onItemSelect, ariaLabel }: HeaderNavigationProps) => {
  const handleNavLinkClick = useCallback(() => {
    if (!isMobile) {
      return
    }
    onItemSelect()
  }, [isMobile, onItemSelect])

  return (
    <Nav id="primary-navigation" aria-label={ariaLabel} $isOpen={isMobile ? isOpen : true}>
      {navigation.map(({ targetId, label }) => (
        <NavLink key={targetId} href={`#${targetId}`} onClick={handleNavLinkClick}>
          {label}
        </NavLink>
      ))}
    </Nav>
  )
}
