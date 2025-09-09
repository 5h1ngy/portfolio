import { useCallback, useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface ScrollControls {
  containerRef: RefObject<HTMLDivElement | null>
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

const SCROLL_OFFSET = 320

export const useHorizontalScrollControls = (): ScrollControls => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const node = containerRef.current
    if (!node) {
      setCanScrollPrev(false)
      setCanScrollNext(false)
      return
    }

    const { scrollLeft, scrollWidth, clientWidth } = node
    setCanScrollPrev(scrollLeft > 6)
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 6)
  }, [])

  useEffect(() => {
    const node = containerRef.current
    if (!node) {
      return
    }

    updateScrollState()

    const handleScroll = () => updateScrollState()
    node.addEventListener('scroll', handleScroll, { passive: true })

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => updateScrollState()) : null
    resizeObserver?.observe(node)

    return () => {
      node.removeEventListener('scroll', handleScroll)
      resizeObserver?.disconnect()
    }
  }, [updateScrollState])

  const scrollBy = useCallback((direction: 1 | -1) => {
    const node = containerRef.current
    if (!node) {
      return
    }

    const viewport = node.clientWidth
    const firstChild = node.firstElementChild as HTMLElement | null
    const itemWidth = firstChild ? firstChild.getBoundingClientRect().width : 0
    const style = window.getComputedStyle(node)
    const gap = Number.parseFloat(style.columnGap || style.gap || '0') || 0
    const step = itemWidth + gap
    const offset = direction * Math.max(step, viewport * 0.75, SCROLL_OFFSET)
    node.scrollTo({ left: node.scrollLeft + offset, behavior: 'smooth' })
  }, [])

  const scrollPrev = useCallback(() => scrollBy(-1), [scrollBy])
  const scrollNext = useCallback(() => scrollBy(1), [scrollBy])

  return { containerRef, canScrollPrev, canScrollNext, scrollPrev, scrollNext }
}
