import { useEffect, useMemo, useState } from 'react'

import type { PortfolioHero } from '@data/portfolio.types'
import { resolveOrbitAsset } from '@components/sections/HeroSection/helpers/HeroOrbit.helpers'

export const useHeroAssetsPreloader = (hero?: PortfolioHero | null) => {
  /**
   * Deriva e deduplica tutti gli asset orbitali, così da conoscere in anticipo
   * quante risorse vanno precaricate e poter calcolare una progress bar coerente.
   */
  const assets = useMemo(() => {
    if (!hero) {
      return []
    }

    const assetSet = new Set<string>()
    if (hero.orbit.center) {
      assetSet.add(resolveOrbitAsset(hero.orbit.center))
    }

    hero.orbit.rings.forEach((ring) => {
      ring.icons.forEach((icon) => {
        if (icon.icon) {
          assetSet.add(resolveOrbitAsset(icon.icon))
        }
      })
    })

    return Array.from(assetSet)
  }, [hero])

  /**
   * Stato interno che tiene traccia di quante immagini sono già pronte
   * e se l'intero batch è stato completato.
   */
  const [loaded, setLoaded] = useState(0)
  const [complete, setComplete] = useState(false)

  /**
   * Effettua la vera e propria prefetch delle immagini tramite oggetti Image,
   * garantendo cleanup in caso di smontaggio e copertura dei fallback server-side.
   */
  useEffect(() => {
    let isMounted = true
    setLoaded(0)
    setComplete(false)

    if (typeof window === 'undefined') {
      setLoaded(assets.length)
      setComplete(true)
      return () => {
        isMounted = false
      }
    }

    if (assets.length === 0) {
      setLoaded(0)
      setComplete(true)
      return () => {
        isMounted = false
      }
    }

    const disposers = assets.map((src) => {
      const image = new Image()

      const finalize = () => {
        if (!isMounted) {
          return
        }
        setLoaded((value) => {
          const next = value + 1
          if (next >= assets.length) {
            setComplete(true)
          }
          return next
        })
      }

      image.onload = finalize
      image.onerror = finalize
      image.src = src

      return () => {
        image.onload = null
        image.onerror = null
      }
    })

    return () => {
      isMounted = false
      disposers.forEach((dispose) => dispose())
    }
  }, [assets])

  /**
   * Espone lo stato calcolato del preload, normalizzando il progresso e fornendo
   * metadati utili per UI (percentuale, conteggio totale, ecc.).
   */
  const total = assets.length
  const progress = total === 0 ? 1 : Math.min(loaded / total, 1)
  const isReady = total === 0 ? true : complete

  return {
    isReady,
    progress,
    total,
    loaded,
  }
}
