import { useEffect, useMemo, useState } from 'react'

export const useActiveSection = (sectionIds: string[]) => {
  const ids = useMemo(() => Array.from(new Set(sectionIds.filter(Boolean))), [sectionIds])
  const [activeSection, setActiveSection] = useState(() => ids[0] ?? '')

  useEffect(() => {
    setActiveSection(ids[0] ?? '')
  }, [ids])

  useEffect(() => {
    if (ids.length === 0 || typeof window === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          .forEach((entry) => {
            setActiveSection(entry.target.id)
          })
      },
      {
        rootMargin: '-48% 0px -52% 0px',
        threshold: 0,
      },
    )

    ids.forEach((id) => {
      const node = document.getElementById(id)
      if (node) {
        observer.observe(node)
      }
    })

    const handleScrollFallback = () => {
      const closest = ids
        .map((id) => {
          const el = document.getElementById(id)
          if (!el) {
            return { id, distance: Number.POSITIVE_INFINITY }
          }
          const rect = el.getBoundingClientRect()
          return { id, distance: Math.abs(rect.top) }
        })
        .sort((a, b) => a.distance - b.distance)[0]
      if (closest && closest.distance !== Number.POSITIVE_INFINITY) {
        setActiveSection(closest.id)
      }
    }

    window.addEventListener('scroll', handleScrollFallback, { passive: true })
    window.addEventListener('resize', handleScrollFallback)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScrollFallback)
      window.removeEventListener('resize', handleScrollFallback)
    }
  }, [ids])

  return activeSection
}
