import React from "react";
import { chakra, Image } from "@chakra-ui/react";
import { PlanetItemProps } from "./PlanetItem.types";

const PlanetItem: React.FC<PlanetItemProps> = ({
    planetImgSrc,
    orbitIndex,
    pIndex,
    planetRefs,
    xRem,
    yRem,
    scaleFactor,
}) => {
    // Calcola la dimensione base in rem in base al fattore di scala
    const computedSizeRem = 2.5 * scaleFactor;
    // Limita la dimensione a un intervallo definito per garantire una resa responsive ottimale
    const clampedSizeRem = Math.max(0.75, Math.min(computedSizeRem, 11.25));

    return (
        <chakra.div
            key={`planet-${orbitIndex}-${pIndex}`}
            // Salva il riferimento dell'elemento per le animazioni GSAP
            ref={(el: HTMLDivElement | null) => {
                if (el) {
                    planetRefs.current[orbitIndex][pIndex] = el;
                }
            }}
            position="absolute"
            // Il wrapper esterno si occupa solo del posizionamento tramite translate
            transform={`translate(${xRem.toFixed(3)}rem, ${yRem.toFixed(3)}rem) translate(-50%, -50%)`}
            background="white"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="0.2rem"
        >
            {/* Wrapper interno: GSAP applicherà la contro-rotazione qui per mantenere l'orientamento */}
            <chakra.div className="planet-inner">
                <Image
                    src={planetImgSrc}
                    alt={`Planet ${pIndex}`}
                    width={`${clampedSizeRem.toFixed(3)}rem`}
                />
            </chakra.div>
        </chakra.div>
    );
};

export default PlanetItem;
