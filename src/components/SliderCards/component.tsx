import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Badge, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"

import getRandomColor from '@/utils/getRandomColor';
import { Repository } from "@/services/github.types";
import Card from "@/components/Card"
import CardCompact from "@/components/CardCompact"

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number;
    title: string;
}

const Component: React.FC<CardsSliderProps> = ({ title, cards, centerCount }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);

    function goToRef(ref: number) {
        setCurrentIndex(ref)
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    // markers: true, // attiva per debug
                },
            });

            // (1) Anima la card
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });

            // (2) Anima il testo interno
            tl.from(".card-text", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05,
            }, "-=0.5");
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <Flex ref={cardRef} direction="column" gap={"1rem"} width={"fit-content"}>
            <Text className='card-text'>
                <Badge colorPalette={getRandomColor()} size={"lg"}>{title}</Badge>
            </Text>

            <Flex direction="row" position="relative" gap={"1rem"} width={"fit-content"}
                justifyContent="start" alignItems={'start'}
                overflowX={'auto'}
            >
                {cards.map((card, index) => {
                    const isCenter = index >= currentIndex && index < currentIndex + centerCount;
                    const isCompact = (index < currentIndex && index >= currentIndex - 2) ||
                        (index >= currentIndex + centerCount && index < currentIndex + centerCount + 2);

                    if (isCenter) {
                        return <Card  {...card}
                            key={crypto.randomUUID()}
                            urlCallback={(url: string) => {
                                if (url) window.open(url)
                                else window.open(card.url)
                            }}
                        />;
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
        </Flex>
    );
};

export default Component;
