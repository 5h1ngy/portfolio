import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react"
import gsap from "gsap"
import { Badge, Flex, Text } from "@chakra-ui/react"
import { CiFolderOff } from "react-icons/ci"
import { Repository } from "@/store/protfolio/types"
import { EmptyState } from "react-goblin-system/components/Factory/Chakra/empty-state"
import getRandomColor from "@/components/SuperCard/utils"
import SuperCard from "@/components/SuperCard"

interface CardsSliderProps {
  cards: Repository[]
  title: string
  fullWidth?: boolean
}

function useAlignedHeights(length: number, deps: any[] = []) {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const [maxHeight, setMaxHeight] = useState(0)
  if (cardRefs.current.length !== length) {
    cardRefs.current = Array(length).fill(null).map((_, i) => cardRefs.current[i] || null)
  }
  const measureHeights = useCallback(() => {
    let localMax = 0
    cardRefs.current.forEach((el) => {
      if (el) {
        const h = el.offsetHeight
        if (h > localMax) localMax = h
      }
    })
    setMaxHeight(localMax)
  }, [])
  useLayoutEffect(() => {
    measureHeights()
  }, [measureHeights, ...deps])
  return { cardRefs, maxHeight }
}

const topicColorMap = new Map<string, string>()
function getStableColorForTopic(topic: string): string {
  if (topicColorMap.has(topic)) return topicColorMap.get(topic)!
  const color = getRandomColor()
  topicColorMap.set(topic, color)
  return color
}

const CardsSlider: React.FC<CardsSliderProps> = ({ title, cards, fullWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOverflow, setIsOverflow] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const { cardRefs, maxHeight } = useAlignedHeights(cards.length, [cards, currentIndex])
  const checkOverflow = useCallback(() => {
    if (!containerRef.current) return
    setIsOverflow(containerRef.current.scrollWidth > containerRef.current.clientWidth)
  }, [])
  useEffect(() => {
    checkOverflow()
    window.addEventListener("resize", checkOverflow)
    return () => window.removeEventListener("resize", checkOverflow)
  }, [checkOverflow])
  const goToRef = useCallback((refIndex: number) => {
    if (!containerRef.current) {
      setCurrentIndex(refIndex)
      return
    }
    const tl = gsap.timeline()
    tl.to(containerRef.current, {
      scale: 0.9,
      duration: 0.2,
      ease: "power1.in",
      onComplete: () => setCurrentIndex(refIndex),
    })
    tl.to(containerRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "bounce.out",
    })
  }, [])
  const getDesktopCards = useCallback(() => {
    const displayedCount = 3
    return cards.map((card, index) => {
      const inExtendedRange = index >= currentIndex && index < currentIndex + displayedCount
      const nearRangeLeft = index >= currentIndex - 3 && index < currentIndex
      const nearRangeRight = index >= currentIndex + displayedCount && index < currentIndex + displayedCount + 3
      const inCompactRange = nearRangeLeft || nearRangeRight
      const localRef = (el: HTMLDivElement | null) => {
        cardRefs.current[index] = el
      }
      if (inExtendedRange) {
        return (
          <Flex key={card.id || index} ref={localRef} height={maxHeight > 0 ? `${maxHeight}px` : "auto"}>
            <SuperCard
              orientation="vertical"
              title={card.name}
              subTitle={card.license?.name ?? ""}
              description={card.description ?? ""}
              topics={card.topics}
              onCardClick={() => window.open(card.url, "_blank")}
              size="md"
              variant="subtle"
              minWidth="14rem"
              maxWidth="14rem"
            />
          </Flex>
        )
      } else if (inCompactRange) {
        return (
          <Flex key={card.id || index} ref={localRef} height={maxHeight > 0 ? `${maxHeight}px` : "auto"}>
            <SuperCard compact title={card.name} onCardClick={() => goToRef(index)} minWidth="4rem" maxWidth="4rem" />
          </Flex>
        )
      }
      return null
    })
  }, [cards, cardRefs, currentIndex, maxHeight, goToRef])
  const getMobileCards = useCallback(() => {
    return cards.map((card, index) => {
      const localRef = (el: HTMLDivElement | null) => {}
      return (
        <Flex key={card.id || index} ref={localRef} width="100%">
          <SuperCard
            orientation="vertical"
            title={card.name}
            subTitle={card.license?.name ?? ""}
            description={card.description ?? ""}
            topics={card.topics}
            onCardClick={() => window.open(card.url, "_blank")}
            size="sm"
            variant="outline"
            width="100%"
          />
        </Flex>
      )
    })
  }, [cards])
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      })
      tl.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      })
    }, cardRef)
    return () => ctx.revert()
  }, [])
  return (
    <Flex ref={cardRef} direction="column" gap="1rem" width={fullWidth ? "100%" : "100%"}>
      <Text>
        <Badge colorPalette={getRandomColor()} size="lg">
          {title}
        </Badge>
      </Text>
      {isOverflow ? (
        <Flex ref={containerRef} direction="column" gap="1rem" width="100%">
          {getMobileCards()}
        </Flex>
      ) : (
        <Flex
          ref={containerRef}
          direction="row"
          position="relative"
          gap="1rem"
          width={fullWidth ? "100%" : "100%"}
          overflowX="auto"
          justifyContent="start"
          alignItems="start"
        >
          {getDesktopCards()}
        </Flex>
      )}
      {cards.length === 0 && (
        <EmptyState
          icon={<CiFolderOff />}
          title={`No ${title} Found`}
          description="Please go to Github/5h1ngy to see more projects"
        />
      )}
    </Flex>
  )
}

export default CardsSlider
