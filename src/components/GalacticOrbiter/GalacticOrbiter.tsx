import React, { useRef, useState, useMemo } from "react";
import { chakra } from "@chakra-ui/react";

import { useOrbitAnimations, useResizeObserver } from "./hooks";
import { Props } from "./GalacticOrbiter.types";
import CenterImage from "./CenterImage";
import OrbitCircle from "./OrbitCircle";

const GalacticOrbiter: React.FC<Props> = ({ centerImage, orbits }) => {
    // Ref del container per misurare le sue dimensioni
    const containerRef = useRef<HTMLDivElement>(null);

    // Stato per salvare le dimensioni del container (width e height)
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // Ref per le orbite e per i pianeti, inizializzati in base al numero di orbite
    const orbitRefs = useRef<HTMLDivElement[]>([]);
    const planetRefs = useRef<HTMLDivElement[][]>(orbits.map(() => []));

    // Reinizializza i riferimenti per avere array della lunghezza corretta
    orbitRefs.current = new Array(orbits.length);
    planetRefs.current = orbits.map(() => []);

    /**
     * Usa un ResizeObserver per aggiornare le dimensioni del container
     */
    useResizeObserver(containerRef, (entry) => {
        setContainerSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
        });
    });

    /**
     * Calcola il raggio massimo fra tutte le orbite.
     * Se non sono presenti orbite, ritorna 0.
     */
    const largestOrbitRadius = useMemo(() => {
        if (!orbits.length) return 0;
        return Math.max(...orbits.map((orbit) => orbit.radius));
    }, [orbits]);

    /**
     * Calcola il fattore di scala in base al lato minore del container.
     * Questo serve a mantenere le proporzioni anche quando il container non è quadrato.
     */
    const scaleFactor = useMemo(() => {
        const minSide = Math.min(containerSize.width, containerSize.height);
        if (!largestOrbitRadius || !minSide) return 1;
        return minSide / (largestOrbitRadius * 2);
    }, [largestOrbitRadius, containerSize]);

    // Applica le animazioni GSAP per orbite e pianeti, aggiornandole quando cambia il scaleFactor
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

                {/* Mappa delle orbite e dei rispettivi pianeti */}
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
