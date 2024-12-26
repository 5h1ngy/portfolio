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
    const [currentIndex, setCurrentIndex] = useState(0);

    function goToRef(ref: number) {
        setCurrentIndex(ref)
    }

    return (
        <Flex direction="row" justifyContent="center" alignItems={'center'} position="relative" gap={"1rem"}
            margin={{ base: "0", sm: "0", md: "0", lg: "3rem", xl: "3rem", "2xl": "3rem" }}
            marginY={{ base: "1rem", sm: "1rem", md: "1rem", lg: undefined, xl: undefined, "2xl": undefined }}
        >
            {cards.map((card, index) => {
                const isCenter = index >= currentIndex && index < currentIndex + centerCount;
                const isCompact = (index < currentIndex && index >= currentIndex - 2) ||
                    (index >= currentIndex + centerCount && index < currentIndex + centerCount + 2);

                if (isCenter) {
                    return <Card key={crypto.randomUUID()} {...card} />;
                } else if (isCompact) {
                    return (
                        <CardCompact
                            key={crypto.randomUUID()}
                            title={card.title}
                            callback={goToRef}
                            callbackRef={index}
                        />
                    );
                } else {
                    return null;
                }
            })}
        </Flex>
    );
};

export default Component;
