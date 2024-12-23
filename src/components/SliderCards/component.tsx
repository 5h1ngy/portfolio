import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";

import { Repository } from "@/services/github.types";
import Card from "@/components/Card"
import CardCompact from "@/components/CardCompact"

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number;
}

const Component: React.FC<CardsSliderProps> = ({ cards, centerCount }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    function goToRef(ref: number) {
        setCurrentIndex(ref)
    }

    return (
        <Flex direction="row" justifyContent="center" position="relative" gap={"1rem"}
            margin={{ base: "0", sm: "0", md: "0", lg: "3rem", xl: "3rem", "2xl": "3rem" }}
            marginY={{ base: "1rem", sm: "1rem", md: "1rem", lg: undefined, xl: undefined, "2xl": undefined }}
        >
            {cards.map((card, index) =>
                index >= currentIndex && index < currentIndex + centerCount
                    ? <Card {...card} />
                    : <CardCompact title={card.title} callback={goToRef} callbackRef={index} />
            )}
        </Flex>
    );
};

export default Component;
