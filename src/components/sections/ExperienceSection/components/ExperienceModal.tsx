import { useTranslation } from 'react-i18next'

import {
  ModalBody,
  ModalCard,
  ModalClose,
  ModalCloseSlot,
  ModalCompany,
  ModalHeader,
  ModalHighlights,
  ModalLink,
  ModalOverlay,
  ModalPeriod,
  ModalScroll,
  ModalSummary,
  ModalTag,
  ModalTags,
  ModalTitle,
  ModalTopBar,
} from './ExperienceModal.style'
import type { PortfolioExperienceRole } from '@data/portfolio.types'
import { useExperienceModal } from '../hooks/ExperienceModal.hooks'
import { isExternalLink } from '../helpers/ExperienceModal.helpers'
import { CloseIcon } from '@styles/icons'

interface ExperienceModalProps {
  role: PortfolioExperienceRole | null
  onClose: () => void
}

export const ExperienceModal = ({ role, onClose }: ExperienceModalProps) => {
  const { t } = useTranslation()
  const { titleId, handleOverlayClick } = useExperienceModal({ role, onClose })

  if (!role) {
    return null
  }

  const external = Boolean(role.link && (role.link.external || isExternalLink(role.link.href)))

  return (
    <ModalOverlay role="dialog" aria-modal="true" aria-labelledby={titleId} onClick={handleOverlayClick}>
      <ModalCard onClick={(event) => event.stopPropagation()}>
        <ModalScroll>
          <ModalBody>
            <ModalTopBar>
              <ModalHeader>
                <ModalPeriod>{role.period}</ModalPeriod>
                {role.company && <ModalCompany>{role.company}</ModalCompany>}
              </ModalHeader>
              <ModalCloseSlot>
                <ModalClose type="button" onClick={onClose} aria-label={t('experience.closeModal')}>
                  <CloseIcon />
                </ModalClose>
              </ModalCloseSlot>
            </ModalTopBar>

            <ModalTitle id={titleId}>{role.role}</ModalTitle>
            <ModalSummary>{role.summary}</ModalSummary>
            {role.highlights.length > 0 && (
              <ModalHighlights>
                {role.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ModalHighlights>
            )}
            {role.tags.length > 0 && (
              <ModalTags>
                {role.tags.map((tag) => (
                  <ModalTag key={tag}>{tag}</ModalTag>
                ))}
              </ModalTags>
            )}
            {role.link && (
              <ModalLink href={role.link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                {role.link.label}
              </ModalLink>
            )}
          </ModalBody>
        </ModalScroll>
      </ModalCard>
    </ModalOverlay>
  )
}
