import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Badge, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react"

import getRandomColor from '@/utils/getRandomColor';
import { Repository } from "@/services/github.types";
import useMediaQuery from '@/hooks/useMediaQuery';
import Card from "@/components/Card"
import CardCompact from "@/components/CardCompact"
import CardMobile from '@/components/CardMobile';
import { CiFolderOff } from 'react-icons/ci';
import { EmptyState } from "@/components/Chakra/empty-state"

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number;
    title: string;
}

const Component: React.FC<CardsSliderProps> = ({ title, cards, centerCount }) => {
    const MAX_SHOW = cards.length - 1
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);// Non causa re-render quando cambia
    const isMobileRef = useMediaQuery('(max-width: 768px)');

    // Qui `isMobileRef.current` può cambiare in background,
    // ma il componente non si ri-renderizza automaticamente.
    // console.log('isMobileRef:', isMobileRef.current);

    function goToRef(ref: number) {
        setCurrentIndex(ref)
    }

    function getDefaultCards() {
        return cards.map((card, index) => {
            const isCenter = index >= currentIndex && index < currentIndex + centerCount;
            const isCompact = (index < currentIndex && index >= currentIndex - MAX_SHOW) ||
                (index >= currentIndex + centerCount && index < currentIndex + centerCount + MAX_SHOW);

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
        });
    }

    function getMobileCards() {
        return cards.map(card => <CardMobile  {...card}
            key={crypto.randomUUID()}
            urlCallback={(url: string) => {
                if (url) window.open(url)
                else window.open(card.url)
            }}
        />)
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

            {isMobileRef
                ? getMobileCards()

                : <Flex direction="row" position="relative" gap={"1rem"} width={"fit-content"}
                    justifyContent="start" alignItems={'start'}
                    overflowX={'auto'} // TODO: don't work
                >
                    {getDefaultCards()}
                </Flex>
            }

            {/* STATUS.SUCCESS */}
            {cards.length === 0
                && <EmptyState
                    icon={<CiFolderOff />}
                    title={`No ${title} Found`}
                    description="Please go to Github/5h1ngy to see more projects"
                />
            }
        </Flex>
    );
};

export default Component;
