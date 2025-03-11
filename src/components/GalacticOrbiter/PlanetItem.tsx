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
    const computedSizeRem = 2.5 * scaleFactor;
    const clampedSizeRem = Math.max(0.75, Math.min(computedSizeRem, 11.25));

    return (
        <chakra.div
            key={`planet-${orbitIndex}-${pIndex}`}
            ref={(el: HTMLDivElement | null) => {
                if (el) {
                    planetRefs.current[orbitIndex][pIndex] = el;
                }
            }}
            position="absolute"
            // Il wrapper esterno si occupa solo del posizionamento
            transform={`translate(${xRem.toFixed(3)}rem, ${yRem.toFixed(3)}rem) translate(-50%, -50%)`}
            background="white"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="0.2rem"
        >
            {/* Wrapper interno, quello che verrà ruotato da GSAP */}
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
