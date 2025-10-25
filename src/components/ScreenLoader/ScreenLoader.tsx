import { useTranslation } from 'react-i18next'

import {
  LoaderContent,
  LoaderCore,
  LoaderHalo,
  LoaderLabel,
  LoaderMeta,
  LoaderOrbit,
  LoaderOverlay,
  LoaderPercent,
  LoaderProgress,
  LoaderProgressFill,
  LoaderPulse,
  LoaderOrb,
} from './ScreenLoader.style'

interface ScreenLoaderProps {
  progress: number
  accentColor: string
  isVisible: boolean
}

const clampProgress = (value: number) => {
  if (Number.isNaN(value)) {
    return 0
  }
  return Math.min(Math.max(value, 0), 1)
}

export const ScreenLoader = ({ progress, accentColor, isVisible }: ScreenLoaderProps) => {
  const normalized = clampProgress(progress)
  const percent = Math.round(normalized * 100)
  const { t } = useTranslation()
  const label = t('loader.label')
  const progressAria = t('loader.progressAria')
  const percentLabel = t('loader.percent', { value: percent })

  return (
    <LoaderOverlay $visible={isVisible} aria-hidden={!isVisible}>
      <LoaderContent>
        <LoaderCore>
          <LoaderHalo $accent={accentColor} />
          <LoaderPulse $accent={accentColor} />
          <LoaderOrbit $accent={accentColor} />
          <LoaderOrb $accent={accentColor} />
        </LoaderCore>
        <LoaderMeta>
          <LoaderLabel>{label}</LoaderLabel>
          <LoaderProgress aria-label={progressAria}>
            <LoaderProgressFill $accent={accentColor} style={{ width: `${percent}%` }} />
          </LoaderProgress>
          <LoaderPercent>{percentLabel}</LoaderPercent>
        </LoaderMeta>
      </LoaderContent>
    </LoaderOverlay>
  )
}
