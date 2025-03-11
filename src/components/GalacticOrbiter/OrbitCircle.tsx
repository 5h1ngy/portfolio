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
    const orbitDiameterRem = ((orbitRadiusPx * 2) / 16).toFixed(3);

    return (
        <chakra.div
            key={`orbit-${orbitIndex}`}
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
            // 1px = 0.0625rem
            border="0.0625rem dashed"
            borderColor="gray.900"
            _dark={{ borderColor: "gray.100" }}
            borderRadius="50%"
        >
            {planets.map((planet, pIndex) => {
                // Calcolo dell'angolo e posizione
                const planetCount = planets.length;
                const angle = (360 / planetCount) * pIndex; // gradi
                const angleRad = (angle * Math.PI) / 180; // radianti

                // Coordinata in px, poi convertita in rem
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

export default OrbitCircle