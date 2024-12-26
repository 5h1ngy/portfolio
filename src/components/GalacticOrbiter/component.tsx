import React, {
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
    useMemo,
} from "react";
import gsap from "gsap";
import { Image, chakra } from "@chakra-ui/react";

/** 
 * Rappresenta la configurazione di un singolo Pianeta.
 * Puoi aggiungere altre proprietà se desideri (es. alt, dimensioni personalizzate, ecc.)
 */
type PlanetConfig = {
    imgSrc: string; // URL dell'immagine del pianeta
};

/**
 * Configurazione di una singola Orbita:
 * - radius: raggio dell'orbita (in unità "logiche", es. px prima dello scaling).
 * - orbitDuration: quanti secondi impiega un giro completo (360°).
 * - planets: array di pianeti che appartengono a quest'orbita.
 */
type OrbitConfig = {
    radius: number;
    orbitDuration: number;
    planets: PlanetConfig[];
};

/**
 * Props del componente principale:
 * - centerImage: URL dell'immagine principale (al centro).
 * - orbits: array di configurazioni (OrbitConfig).
 */
interface Props {
    centerImage: string;
    orbits: OrbitConfig[];
}

/**
 * Hook personalizzato per osservare le dimensioni di un elemento (via ResizeObserver).
 * @param ref Riferimento all'elemento DOM da osservare
 * @param callback Funzione che riceve l'oggetto ResizeObserverEntry con i dati sulle dimensioni
 */
function useResizeObserver(
    ref: React.RefObject<HTMLDivElement>,
    callback: (entry: ResizeObserverEntry) => void
) {
    useEffect(() => {
        // Se l'elemento non è presente, non facciamo nulla
        if (!ref.current) return;

        // Creiamo un nuovo ResizeObserver che, a ogni cambiamento di dimensione,
        // invoca il callback con la prima voce dell'array di entries
        const observer = new ResizeObserver(([entry]) => callback(entry));

        // Avviamo l'osservazione
        observer.observe(ref.current);

        // Quando il componente si smonta o 'ref' cambia, interrompiamo l'osservazione
        return () => observer.disconnect();
    }, [ref, callback]);
}

/**
 * Componente principale "GalacticOrbiter".
 * Mostra un'immagine centrale e diversi pianeti orbitanti su una o più orbite.
 */
const Component: React.FC<Props> = ({ centerImage, orbits }) => {
    /**
     * Memorizziamo la larghezza effettiva del contenitore.
     * Ci serve per calcolare un fattore di scala che adatta orbite e pianeti
     * alle dimensioni reali del container in cui risiede il componente.
     */
    const [containerWidth, setContainerWidth] = useState(0);

    /**
     * Riferimento al contenitore assoluto che occupa l'intero spazio disponibile (100vw, 100vh).
     * Usiamo questo ref per:
     * - Misurare la larghezza reale (con useResizeObserver).
     */
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Array di riferimenti per le orbite (uno per ogni OrbitConfig).
     * - orbitRefs: ci serve per animare la rotazione di ogni orbita con GSAP.
     */
    const orbitRefs = useRef<HTMLDivElement[]>([]);

    /**
     * Array di riferimenti per i pianeti (matrice 2D: orbitIndex -> planetIndex).
     * - planetRefs: ci serve per animare l'orientamento (rotation) di ogni pianeta (contro-rotazione).
     */
    const planetRefs = useRef<HTMLDivElement[][]>([]);

    // Reinizializziamo i vettori allungandoli in base al numero di orbite.
    orbitRefs.current = [];
    planetRefs.current = orbits.map(() => []);

    /**
     * Calcolo del raggio più grande tra tutte le orbite:
     * Serve per capire quanta parte del container occuperà l'orbita più vasta (prima dello scaling).
     */
    const largestOrbitRadius = useMemo(() => {
        if (!orbits.length) return 0;
        return Math.max(...orbits.map((orbit) => orbit.radius));
    }, [orbits]);

    /**
     * Calcolo del fattore di scala:
     * - Se il raggio più grande è 0 (nessuna orbita), non scaliamo (scaleFactor = 1).
     * - Altrimenti, dividiamo la larghezza effettiva del container per il diametro (raggio*2)
     *   in modo che l'orbita più grande stia dentro lo spazio disponibile.
     */
    const scaleFactor = useMemo(() => {
        if (largestOrbitRadius === 0) return 1;
        return containerWidth / (largestOrbitRadius * 2);
    }, [largestOrbitRadius, containerWidth]);

    /**
     * Usiamo il nostro hook personalizzato (useResizeObserver) per osservare
     * la larghezza del container (containerRef).
     * Appena cambia, aggiorniamo il nostro 'containerWidth'.
     */
    useResizeObserver(containerRef, (entry) => {
        setContainerWidth(entry.contentRect.width);
    });

    /**
     * Una volta che i riferimenti (orbitRefs, planetRefs) e le orbits sono pronte,
     * avviamo l'animazione di ogni orbita con GSAP:
     * - rotation: 360 (giro completo)
     * - durata in secondi = orbitDuration
     * - ripeti all'infinito (repeat: -1)
     * - OnUpdate: aggiorniamo i pianeti impostando rotation = -currentRotation,
     *   per tenerli "fissi" (non girati) mentre l'orbita ruota.
     */
    useLayoutEffect(() => {
        orbitRefs.current.forEach((orbitEl, i) =>
            gsap.to(orbitEl, {
                rotation: 360,
                duration: orbits[i].orbitDuration,
                ease: "linear",
                repeat: -1,
                onUpdate: () => {
                    // Leggiamo la rotazione corrente dell'orbita
                    const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;
                    // Per ogni pianeta su questa orbita, applichiamo la rotazione inversa
                    planetRefs.current[i].forEach((planetEl) =>
                        gsap.set(planetEl, { rotation: -currentRotation })
                    );
                },
            })
        );
    }, [orbits]);

    /**
     * RENDER DEL COMPONENTE
     */
    return (
        // container "fullscreen" (100vw x 100vh)
        <chakra.div
            width="100%"
            minHeight="100%"
            position="relative"
        // overflow="hidden"
        >
            {/** 
         * containerRef: usato per misurare dimensioni con useResizeObserver
         * position:absolute (occupa tutto il div genitore)
         */}
            <chakra.div
                ref={containerRef}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
            >
                {/** IMMAGINE AL CENTRO */}
                <chakra.div
                    position={"absolute"}
                    zIndex={20} // la mettiamo sopra le orbite
                    top={"50%"}
                    left={"50%"}
                    transform={"translate(-50%, -50%)"}
                >
                    {/** Ridimensioniamo l'immagine in base a scaleFactor, 
                 con clamp() per non eccedere in piccole o grandi dimensioni */}
                    <Image
                        src={centerImage}
                        alt={""}
                        width={`clamp(3rem, ${10 * scaleFactor}rem, 15rem)`}
                    />
                </chakra.div>

                {/** ORBITS */}
                {orbits.map((orbit, orbitIndex) => {
                    // Calcoliamo il raggio dell'orbita, dopo averlo scalato
                    const scaledOrbitRadius = orbit.radius * scaleFactor;
                    // Numero di pianeti su quest'orbita (per distribuire gli angoli)
                    const planetCount = orbit.planets.length;

                    return (
                        <chakra.div
                            key={crypto.randomUUID()} // Genera un ID unico per React
                            ref={(element: HTMLDivElement) =>
                                element && (orbitRefs.current[orbitIndex] = element)
                            }
                            position={"absolute"}
                            // L'orbita avrà diametro = 2 * raggio
                            width={`${scaledOrbitRadius * 2}px`}
                            height={`${scaledOrbitRadius * 2}px`}
                            top={"50%"}
                            left={"50%"}
                            transform={"translate(-50%, -50%)"}
                            border={"1px dashed"}
                            borderColor={"gray.900"}
                            _dark={{ borderColor: "gray.100" }}
                            borderRadius={"50%"} // cerchio
                        >
                            {orbit.planets.map((planet, pIndex) => {
                                // Calcolo dell'angolo per il pianeta pIndex
                                const angle = (360 / planetCount) * pIndex;
                                // Convertiamo in radianti
                                const angleRad = (angle * Math.PI) / 180;

                                // Calcolo delle coordinate (x, y) relative al centro
                                // Il centro del pianeta sta esattamente su (scaledOrbitRadius)
                                const x = scaledOrbitRadius * Math.cos(angleRad);
                                const y = scaledOrbitRadius * Math.sin(angleRad);

                                return (
                                    <chakra.div
                                        key={crypto.randomUUID()}
                                        ref={(element: HTMLDivElement) =>
                                            element &&
                                            (planetRefs.current[orbitIndex][pIndex] = element)
                                        }
                                        position={"absolute"}
                                        // Spostiamo il pianeta sulle coordinate (x, y),
                                        // poi di nuovo un translate(-50%, -50%) per centrarlo
                                        transform={`translate(${x + scaledOrbitRadius}px, ${y + scaledOrbitRadius
                                            }px) translate(-50%, -50%)`}
                                        background={"white"}
                                        borderRadius={"50%"}
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        padding={"0.2rem"}
                                    >
                                        {/** Immagine del pianeta, ridimensionata anch'essa in base a scaleFactor */}
                                        <Image
                                            src={planet.imgSrc}
                                            alt={""}
                                            width={`clamp(1rem, ${2.5 * scaleFactor}rem, 4rem)`}
                                        />
                                    </chakra.div>
                                );
                            })}
                        </chakra.div>
                    );
                })}
            </chakra.div>
        </chakra.div>
    );
};

export default Component;
