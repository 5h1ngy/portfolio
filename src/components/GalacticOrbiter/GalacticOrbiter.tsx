import React, { useRef, useState, useMemo } from "react";
import { chakra } from "@chakra-ui/react";

import { useOrbitAnimations, useResizeObserver } from "./hooks";
import { Props } from "./GalacticOrbiter.types";
import CenterImage from "./CenterImage";
import OrbitCircle from "./OrbitCircle";

const GalacticOrbiter: React.FC<Props> = ({ centerImage, orbits }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    const orbitRefs = useRef<HTMLDivElement[]>([]);
    const planetRefs = useRef<HTMLDivElement[][]>(orbits.map(() => []));

    orbitRefs.current = new Array(orbits.length);
    planetRefs.current = orbits.map(() => []);

    /**
     * Hook personalizzato per tenere traccia delle dimensioni del contenitore
     * e aggiornare "containerSize" quando cambiano.
     */
    useResizeObserver(containerRef, (entry) => {
        setContainerSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
        });
    });

    /**
     * Calcola il raggio più grande fra tutte le orbite.
     * Se non ci sono orbite, ritorna 0.
     */
    const largestOrbitRadius = useMemo(() => {
        if (!orbits.length) return 0;
        return Math.max(...orbits.map((o) => o.radius));
    }, [orbits]);

    /**
     * Calcola un fattore di scala in base al lato minore del contenitore,
     * per mantenere la proporzione quando il contenitore non è quadrato.
     */
    const scaleFactor = useMemo(() => {
        const minSide = Math.min(containerSize.width, containerSize.height);
        if (!largestOrbitRadius || !minSide) return 1;
        return minSide / (largestOrbitRadius * 2);
    }, [largestOrbitRadius, containerSize]);


    useOrbitAnimations(orbitRefs, planetRefs, orbits, scaleFactor);

    return (
        <chakra.div w="100%" h="100%" position="relative">
            <chakra.div
                ref={containerRef}
                position="absolute"
                top="0"
                bottom="0"
                left="0"
                right="0"
            >
                {/* Immagine centrale (avatar, "sole") */}
                <CenterImage centerImage={centerImage} scaleFactor={scaleFactor} />

                {/* Orbite e relativi pianeti */}
                {orbits.map((orbit, orbitIndex) => {
                    const scaledOrbitRadius = orbit.radius * scaleFactor;
                    return (
                        <OrbitCircle
                            key={`orbit-${orbitIndex}`}
                            orbitIndex={orbitIndex}
                            orbitRadiusPx={scaledOrbitRadius}
                            orbitRefs={orbitRefs}
                            planetRefs={planetRefs}
                            planets={orbit.planets}
                            scaleFactor={scaleFactor}
                        />
                    );
                })}
            </chakra.div>
        </chakra.div>
    );
};

export default GalacticOrbiter;
