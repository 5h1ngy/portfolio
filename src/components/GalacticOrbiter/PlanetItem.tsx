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
    return (
        <chakra.div
            key={`planet-${orbitIndex}-${pIndex}`}
            ref={(el: HTMLDivElement | null) => {
                if (el) {
                    planetRefs.current[orbitIndex][pIndex] = el;
                }
            }}
            position="absolute"
            transform={`translate(${xRem.toFixed(3)}rem, ${yRem.toFixed(
                3
            )}rem) translate(-50%, -50%)`}
            background="white"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="0.2rem" // già in rem
        >
            <Image
                src={planetImgSrc}
                alt={`Planet ${pIndex}`}
                // Valore già in rem; 2.5 → 2.5rem di base, poi moltiplicato per scaleFactor
                width={`${(2.5 * scaleFactor).toFixed(3)}rem`}
                maxWidth="4rem"
                minWidth="1rem"
            />
        </chakra.div>
    );
};

export default PlanetItem
