import { useEffect, useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { OrbitConfig } from "./GalacticOrbiter.types";

/**
 * Hook per osservare i cambiamenti di dimensioni di un elemento DOM tramite ResizeObserver.
 *
 * @param ref - Riferimento all'elemento DOM da osservare.
 * @param callback - Funzione chiamata ogni volta che le dimensioni cambiano.
 */
export function useResizeObserver(
    ref: RefObject<HTMLDivElement | null>,
    callback: (entry: ResizeObserverEntry) => void
) {
    useEffect(() => {
        // Se l'elemento non è ancora montato, esce dal hook
        if (!ref.current) return;

        // Crea un nuovo ResizeObserver che invoca la callback con il primo entry
        const observer = new ResizeObserver(([entry]) => {
            callback(entry);
        });

        // Inizia ad osservare l'elemento referenziato
        observer.observe(ref.current);

        // Cleanup: disconnette l'observer quando il componente viene smontato o le dipendenze cambiano
        return () => {
            observer.disconnect();
        };
    }, [ref, callback]);
}

/**
 * Hook per animare le orbite e i pianeti che vi ruotano intorno utilizzando GSAP.
 *
 * @param orbitRefs  - Riferimenti ai contenitori delle orbite.
 * @param planetRefs - Riferimenti ai pianeti all'interno di ciascuna orbita.
 * @param orbits     - Configurazione di ogni orbita (es. durata, raggio).
 * @param scaleFactor- Fattore di scala per adattare l'animazione alle dimensioni del container.
 */
export function useOrbitAnimations(
    orbitRefs: RefObject<HTMLDivElement[]>,
    planetRefs: RefObject<HTMLDivElement[][]>,
    orbits: OrbitConfig[],
    scaleFactor: number
) {
    useLayoutEffect(() => {
        // Interrompe eventuali animazioni già attive per ogni orbita
        orbitRefs.current.forEach((orbitEl) => {
            if (!orbitEl) return;
            gsap.killTweensOf(orbitEl);
        });

        // Per ogni orbita, crea una nuova animazione
        orbitRefs.current.forEach((orbitEl, i) => {
            if (!orbitEl) return;

            // Durata dell'animazione definita nella configurazione, default a 10 secondi
            const orbitDuration = orbits[i]?.orbitDuration ?? 10;

            // Imposta il centro di rotazione sull'orbita
            gsap.set(orbitEl, { transformOrigin: "50% 50%" });

            // Avvia l'animazione di rotazione continua (360°) per l'orbita
            gsap.to(orbitEl, {
                rotation: 360,
                duration: orbitDuration,
                ease: "linear",
                repeat: -1,
                onUpdate: () => {
                    // Ottiene la rotazione corrente dell'orbita
                    const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;
                    // Applica la contro-rotazione a ogni pianeta all'interno di questa orbita
                    planetRefs.current[i].forEach((planetEl) => {
                        if (planetEl) {
                            // Seleziona l'elemento interno che contiene il pianeta (wrapper per la contro-rotazione)
                            const innerEl = planetEl.querySelector(".planet-inner");
                            if (innerEl) {
                                gsap.set(innerEl, { rotation: -currentRotation });
                            }
                        }
                    });
                },
            });
        });
    }, [orbits, scaleFactor, orbitRefs, planetRefs]);
}
