import React, { useState } from 'react';
import { Box, Flex, Button, Image, Text } from "@chakra-ui/react";

import { Repository } from "@/services/github.types";
import { Tag } from "@/components/Chakra/tag"
import Card from "@/components/Card"
// Importare icone se servono o usare testo per le frecce.

type CardData = {
    title: string;
    tags?: string[];
    image?: string;
};

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number; // quante card vengono mostrate in full size al centro
    className?: string;
    onCardExpand?: (card: CardData) => void;
}

const Component: React.FC<CardsSliderProps> = ({ cards, centerCount, className, onCardExpand }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const canGoLeft = currentIndex > 0;
    const canGoRight = currentIndex + centerCount < cards.length;

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
        <Flex direction="column" className={className} alignItems="center" position="relative">
            {/* Controlli */}
            <Flex width="100%" justifyContent="space-between" mb={4}>
                <Button onClick={goLeft} disabled={!canGoLeft}>←</Button>
                <Button onClick={goRight} disabled={!canGoRight}>→</Button>
            </Flex>

            {/* Container Cards */}
            <Flex overflow="hidden" justifyContent="center" alignItems="center" position="relative">
                {cards.map((card, index) => {
                    const isInCenterBlock = index >= currentIndex && index < currentIndex + centerCount;

                    // Stile full size
                    const fullWidth = "50rem"; // larghezza card full
                    const reducedWidth = 50; // larghezza card ridotta

                    const cardWidth = isInCenterBlock ? fullWidth : reducedWidth;
                    const transition = 'all 0.3s ease';

                    // Layout card
                    // Se full: mostra immagine, titolo, tags, pulsante
                    // Se ridotta: mostra solo il titolo in modo verticale
                    return (
                        <Box
                            key={index}
                            width={`${cardWidth}px`}
                            marginX="8px"
                            transition={transition}
                            background="white"
                            borderRadius="md"
                            boxShadow="md"
                            overflow="hidden"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            {isInCenterBlock
                                ? <Card {...card} />
                                : (
                                    // Reduced view
                                    <Flex
                                        direction="column"
                                        align="center"
                                        justify="center"
                                        p={2}
                                        textAlign="center"
                                        height="100%"
                                    >
                                        {/* Titolo verticale: opzione semplice: ruotare il testo con CSS */}
                                        <Text
                                            fontSize="sm"
                                            transform="rotate(-90deg)"
                                            whiteSpace="nowrap"
                                        >
                                            {card.title}
                                        </Text>
                                    </Flex>
                                )}
                        </Box>
                    );
                })}
            </Flex>
        </Flex>
    );
};

export default Component;
