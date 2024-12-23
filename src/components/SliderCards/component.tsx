import React, { useState } from 'react';
import { Flex } from "@chakra-ui/react";
import { For, HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { Repository } from "@/services/github.types";
import Card from "@/components/Card"
import CardCompact from "@/components/CardCompact"

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number;
}

const Component: React.FC<CardsSliderProps> = ({ cards, centerCount }) => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const canGoLeft = currentIndex > 0;
    const canGoRight = currentIndex + centerCount < cards.length;

    function goToRef(ref: number) {
        setCurrentIndex(ref)
    }

    const goLeft = () => {
        if (canGoLeft) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goRight = () => {
        if (canGoRight) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <Flex direction="row" justifyContent="center" alignItems={'center'} position="relative" gap={"1rem"}
            margin={{ base: "0", sm: "0", md: "0", lg: "3rem", xl: "3rem", "2xl": "3rem" }}
            marginY={{ base: "1rem", sm: "1rem", md: "1rem", lg: undefined, xl: undefined, "2xl": undefined }}
        >
            <IconButton
                aria-label="Call support"
                variant={"ghost"}
                onClick={() => goLeft()}
            >
                <SlArrowLeft />
            </IconButton>

            {cards.map((card, index) => {
                const isCenter = index >= currentIndex && index < currentIndex + centerCount;
                const isCompact = (index < currentIndex && index >= currentIndex - 2) ||
                    (index >= currentIndex + centerCount && index < currentIndex + centerCount + 2);

                if (isCenter) {
                    return <Card key={index} {...card} />;
                } else if (isCompact) {
                    return (
                        <CardCompact
                            key={index}
                            title={card.title}
                            callback={goToRef}
                            callbackRef={index}
                        />
                    );
                } else {
                    return null;
                }
            })}

            <IconButton
                aria-label="Call support"
                variant={"ghost"}
                onClick={() => goRight()}
            >
                <SlArrowRight />
            </IconButton>

        </Flex>
    );
};

export default Component;
