import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap"; // Importa GSAP per animazioni
import { Badge, Flex } from "@chakra-ui/react"; // Importa componenti Chakra UI per layout e badge
import { Text } from "@chakra-ui/react"; // Importa il componente Text da Chakra UI

import getRandomColor from '@/utils/getRandomColor'; // Funzione per ottenere un colore casuale
import { Repository } from "@/services/github.types"; // Tipi definiti per i repository
import useMediaQuery from '@/hooks/useMediaQuery'; // Hook personalizzato per rilevare query media
import Card from "@/components/Card"; // Componente Card principale
import CardCompact from "@/components/CardCompact"; // Componente per card compatte
import CardMobile from '@/components/CardMobile'; // Componente per card ottimizzate per dispositivi mobili
import { CiFolderOff } from 'react-icons/ci'; // Icona per stato vuoto
import { EmptyState } from "@/components/Chakra/empty-state"; // Componente per stato vuoto

interface CardsSliderProps {
    cards: Repository[]; // Elenco di repository da visualizzare
    centerCount: number; // Numero di card centrali visibili
    title: string; // Titolo della sezione
}

// Componente principale
const Component: React.FC<CardsSliderProps> = ({ title, cards, centerCount }) => {
    const MAX_SHOW = cards.length - 1; // Numero massimo di card da mostrare
    const [currentIndex, setCurrentIndex] = useState(0); // Stato per l'indice corrente
    const cardRef = useRef<HTMLDivElement | null>(null); // Riferimento per la card
    const isMobileRef = useMediaQuery('(max-width: 768px)'); // Verifica se la viewport è mobile

    // Funzione per aggiornare l'indice corrente
    function goToRef(ref: number) {
        setCurrentIndex(ref);
    }

    // Funzione per ottenere le card in modalità desktop
    function getDefaultCards() {
        return cards.map((card, index) => {
            const isCenter = index >= currentIndex && index < currentIndex + centerCount;
            const isCompact = (index < currentIndex && index >= currentIndex - MAX_SHOW) ||
                (index >= currentIndex + centerCount && index < currentIndex + centerCount + MAX_SHOW);

            if (isCenter) {
                return <Card {...card}
                    key={crypto.randomUUID()}
                    urlCallback={(url: string) => {
                        if (url) window.open(url); // Apre un URL personalizzato
                        else window.open(card.url); // Apre l'URL di default
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
                return null; // Non renderizza nulla se la card non è visibile
            }
        });
    }

    // Funzione per ottenere le card in modalità mobile
    function getMobileCards() {
        return cards.map(card => <CardMobile {...card}
            key={crypto.randomUUID()}
            urlCallback={(url: string) => {
                if (url) window.open(url);
                else window.open(card.url);
            }}
        />);
    }

    // Effetto per gestire animazioni al caricamento
    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current, // Elemento da osservare
                    start: "top 80%", // Inizio animazione
                    // markers: true, // Usato per debug
                },
            });

            // Anima la card
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });

            // Anima il testo interno con effetto stagger
            tl.from(".card-text", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05, // Effetto di ritardo progressivo
            }, "-=0.5");
        }, cardRef);

        return () => ctx.revert(); // Pulisce le animazioni al dismount
    }, []);

    return (
        <Flex ref={cardRef} direction="column" gap={"1rem"} width={"fit-content"}>
            {/* Titolo e badge */}
            <Text className='card-text'>
                <Badge colorPalette={getRandomColor()} size={"lg"}>{title}</Badge>
            </Text>

            {/* Modalità mobile o desktop */}
            {isMobileRef
                ? getMobileCards()
                : <Flex direction="row" position="relative" gap={"1rem"} width={"fit-content"}
                    justifyContent="start" alignItems={'start'}
                    overflowX={'auto'} // TODO: Non funziona ancora
                >
                    {getDefaultCards()}
                </Flex>
            }

            {/* Stato vuoto */}
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
