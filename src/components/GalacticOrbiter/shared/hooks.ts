import { useEffect, useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { OrbitConfig } from "../GalacticOrbiter.types";

/**
 * Hook per osservare i cambiamenti di dimensioni di un elemento DOM
 * tramite ResizeObserver e invocare una callback.
 *
 * @param ref - Ref all'elemento DOM da osservare
 * @param callback - Funzione chiamata ogni volta che le dimensioni cambiano
 */
export function useResizeObserver(
    ref: RefObject<HTMLDivElement | null>,
    callback: (entry: ResizeObserverEntry) => void
) {
    useEffect(() => {
        // Se l'elemento non è ancora montato, non fare nulla
        if (!ref.current) return;

        const observer = new ResizeObserver(([entry]) => {
            callback(entry);
        });

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, callback]);
}

/**
 * Hook per animare le orbite e i pianeti che vi ruotano intorno, usando GSAP.
 *
 * @param orbitRefs  - Riferimenti ai contenitori delle singole orbite
 * @param planetRefs - Riferimenti ai pianeti all'interno di ciascuna orbita
 * @param orbits     - Configurazione di ogni orbita (es. durata, raggio)
 */
export function useOrbitAnimations(
    orbitRefs: RefObject<HTMLDivElement[]>,
    planetRefs: RefObject<HTMLDivElement[][]>,
    orbits: OrbitConfig[]
) {
    useLayoutEffect(() => {
        orbitRefs.current.forEach((orbitEl, i) => {
            if (!orbitEl) return;

            const orbitDuration = orbits[i]?.orbitDuration ?? 10;

            gsap.to(orbitEl, {
                rotation: 360,
                duration: orbitDuration,
                ease: "linear",
                repeat: -1,
                onUpdate: () => {
                    // Legge la rotazione corrente dell'orbita
                    const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;

                    // Inverte la rotazione dei pianeti per mantenerli "dritti"
                    planetRefs.current[i].forEach((planetEl) => {
                        if (planetEl) {
                            gsap.set(planetEl, { rotation: -currentRotation });
                        }
                    });
                },
            });
        });
    }, [orbits, orbitRefs, planetRefs]);
}
