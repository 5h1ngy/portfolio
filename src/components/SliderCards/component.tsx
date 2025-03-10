import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { Badge, Flex, Text } from "@chakra-ui/react";

import getRandomColor from '@/utils/getRandomColor';
import { Repository } from "@/services/github.types";
import useMediaQuery from '@/layouts/Landing/shared/useMediaQuery';
import Card from "@/components/Card";
import CardCompact from "@/components/CardCompact";
import CardMobile from '@/components/CardMobile';
import { CiFolderOff } from 'react-icons/ci';
import { EmptyState } from "@/components/Chakra/empty-state";

interface CardsSliderProps {
    cards: Repository[];
    centerCount: number;
    title: string;
}

const Component: React.FC<CardsSliderProps> = ({ title, cards, centerCount }) => {
    const MAX_SHOW = cards.length - 1;
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isMobileRef = useMediaQuery('(max-width: 768px)');

    // Funzione di callback al click su una card compatta
    // => effetto "rimbalzo" con GSAP
    function goToRef(ref: number) {
        if (!containerRef.current) {
            // Se per qualche motivo il container non esiste, aggiorno comunque
            setCurrentIndex(ref);
            return;
        }

        // Timeline per gestire l’effetto di rimbalzo
        const tl = gsap.timeline();

        // (1) Piccola contrazione / scale "down"
        tl.to(containerRef.current, {
            scale: 0.9, duration: 0.2, ease: 'power1.in',
            onComplete: () => {
                // Aggiorno lo stato quando la scala è ridotta
                setCurrentIndex(ref);
            }
        });

        // (2) Rimbalzo verso la scala originale
        tl.to(containerRef.current, {
            scale: 1, duration: 0.6, ease: 'bounce.out'
        });
    }

    // Funzione per ottenere le card in modalità desktop
    function getDefaultCards() {
        return cards.map((card, index) => {
            const isCenter = index >= currentIndex && index < currentIndex + centerCount;
            const isCompact = (
                index < currentIndex && index >= currentIndex - MAX_SHOW
            ) || (
                    index >= currentIndex + centerCount && index < currentIndex + centerCount + MAX_SHOW
                );

            if (isCenter) {
                // Card estesa
                return (
                    <Card
                        {...card}
                        key={crypto.randomUUID()}
                        urlCallback={(url: string) => {
                            if (url) window.open(url, "_blank");
                            else window.open(card.url, "_blank");
                        }}
                    />
                );
            } else if (isCompact) {
                // Card compatta
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

    // Funzione per ottenere le card in modalità mobile
    function getMobileCards() {
        return cards.map((card) => (
            <CardMobile
                {...card}
                key={crypto.randomUUID()}
                urlCallback={(url: string) => {
                    if (url) window.open(url, "_blank");
                    else window.open(card.url, "_blank");
                }}
            />
        ));
    }

    // Effetto per animare l'ingresso del container (una tantum)
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    // markers: true,
                },
            });

            // Fade in + spostamento verso l’alto
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });

            // Stagger su testi interni (classe .card-text)
            tl.from(
                ".card-text",
                {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.05,
                },
                "-=0.5"
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <Flex ref={cardRef} direction="column" gap="1rem" width="fit-content">
            {/* Titolo con badge */}
            <Text className="card-text">
                <Badge colorPalette={getRandomColor()} size="lg">
                    {title}
                </Badge>
            </Text>

            {/* Contenitore animabile */}
            {isMobileRef ? (
                // Modalità mobile
                <Flex
                    ref={containerRef}
                    direction="column"
                    gap="1rem"
                    width="fit-content"
                >
                    {getMobileCards()}
                </Flex>
            ) : (
                // Modalità desktop
                <Flex
                    ref={containerRef}
                    direction="row"
                    position="relative"
                    gap="1rem"
                    width="fit-content"
                    justifyContent="start"
                    alignItems="start"
                    overflowX="auto"
                >
                    {getDefaultCards()}
                </Flex>
            )}

            {/* Stato vuoto */}
            {cards.length === 0 && (
                <EmptyState
                    icon={<CiFolderOff />}
                    title={`No ${title} Found`}
                    description="Please go to Github/5h1ngy to see more projects"
                />
            )}
        </Flex>
    );
};

export default Component;
