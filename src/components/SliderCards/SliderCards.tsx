import React, { useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import SuperCard from "@/components/SuperCard";
import { SliderCardsProps } from "./SliderCards.types";

const SliderCards: React.FC<SliderCardsProps> = ({
  items,
  isCircular = true,
}) => {
  if (!items || items.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex === 0) {
      if (isCircular) setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === items.length - 1) {
      if (isCircular) setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Calcolo degli indici per le card di sinistra e destra
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  // I pulsanti vengono disabilitati se non si tratta di un componente circolare
  const disablePrev = !isCircular && currentIndex === 0;
  const disableNext = !isCircular && currentIndex === items.length - 1;

  // Estrazione delle card: TUTTE in modalità compact
  const mainCard = items[currentIndex];
  const leftCard = items.length > 1 ? items[prevIndex] : undefined;
  const rightCard = items.length > 1 ? items[nextIndex] : undefined;

  return (
    <Flex direction="column" align="center" justify="center" gap={4}>

      {/* Container delle card, che si adatta fluidamente */}
      <Flex direction="row" align="center" justify="center" gap={4} wrap="wrap">
        {leftCard && <SuperCard {...leftCard} display={{ base: "none", xs: "none", lg: "flex", } as any} compact orientation={"horizontal"} />}
        <SuperCard {...mainCard} orientation={"horizontal"} />
        {rightCard && <SuperCard {...rightCard} display={{ base: "none", xs: "none", lg: "flex", } as any} compact orientation={"horizontal"} />}
      </Flex>

      {/* Container dei pulsanti: in una riga, sotto le card */}
      <Flex direction="row" align="center" justify="center" gap={2}>
        <IconButton
          aria-label="Previous" variant={"ghost"}
          onClick={goToPrevious} disabled={disablePrev}
        >
          <SlArrowLeft />
        </IconButton>

        <IconButton
          aria-label="Next" variant={"ghost"}
          onClick={goToNext} disabled={disableNext}
        >
          <SlArrowRight />
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default SliderCards;
