import React from "react";
import { chakra } from "@chakra-ui/react";

import { OrbitCircleProps } from "./OrbitCircle.types";
import PlanetItem from "./PlanetItem";

const OrbitCircle: React.FC<OrbitCircleProps> = ({
    orbitIndex,
    orbitRadiusPx,
    orbitRefs,
    planetRefs,
    planets,
    scaleFactor,
}) => {
    // Calcola il diametro dell'orbita in rem (1rem = 16px)
    const orbitDiameterRem = ((orbitRadiusPx * 2) / 16).toFixed(3);

    return (
        <chakra.div
            key={`orbit-${orbitIndex}`}
            // Salva il riferimento all'elemento DOM per l'orbita
            ref={(el: HTMLDivElement | null) => {
                if (el) {
                    orbitRefs.current[orbitIndex] = el;
                }
            }}
            position="absolute"
            w={`${orbitDiameterRem}rem`}
            h={`${orbitDiameterRem}rem`}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            transformOrigin="center"
            // Imposta un bordo tratteggiato (1px = 0.0625rem)
            border="0.0625rem dashed"
            borderColor="gray.900"
            _dark={{ borderColor: "gray.100" }}
            borderRadius="50%"
        >
            {planets.map((planet, pIndex) => {
                // Calcola l'angolo per posizionare i pianeti in modo uniforme lungo la circonferenza
                const planetCount = planets.length;
                const angle = (360 / planetCount) * pIndex; // in gradi
                const angleRad = (angle * Math.PI) / 180; // converte in radianti

                // Calcola la posizione in pixel e convertila in rem (1rem = 16px)
                const x = orbitRadiusPx * Math.cos(angleRad);
                const y = orbitRadiusPx * Math.sin(angleRad);
                const xRem = (x + orbitRadiusPx) / 16;
                const yRem = (y + orbitRadiusPx) / 16;

                return (
                    <PlanetItem
                        key={`planet-${orbitIndex}-${pIndex}`}
                        planetImgSrc={planet.imgSrc}
                        orbitIndex={orbitIndex}
                        pIndex={pIndex}
                        planetRefs={planetRefs}
                        xRem={xRem}
                        yRem={yRem}
                        scaleFactor={scaleFactor}
                    />
                );
            })}
        </chakra.div>
    );
};

export default OrbitCircle;
