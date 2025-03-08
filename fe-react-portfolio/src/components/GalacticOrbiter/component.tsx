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
 * - `imgSrc`: URL dell'immagine del pianeta
 */
type PlanetConfig = {
    imgSrc: string;
};

/**
 * Configurazione di una singola Orbita.
 * - `radius`: Raggio dell'orbita in pixel o unità logiche.
 * - `orbitDuration`: Durata in secondi per un giro completo (360°).
 * - `planets`: Elenco di pianeti associati all'orbita.
 */
type OrbitConfig = {
    radius: number;
    orbitDuration: number;
    planets: PlanetConfig[];
};

/**
 * Proprietà del componente `GalacticOrbiter`.
 * - `centerImage`: URL dell'immagine centrale (il fulcro dell'orbita).
 * - `orbits`: Array di configurazioni per le orbite.
 */
interface Props {
    centerImage: string;
    orbits: OrbitConfig[];
}

/**
 * Hook personalizzato per osservare le dimensioni di un elemento usando ResizeObserver.
 * @param ref Riferimento all'elemento DOM da osservare.
 * @param callback Funzione richiamata con l'oggetto `ResizeObserverEntry` ogni volta che cambia la dimensione.
 */
function useResizeObserver(
    ref: React.RefObject<HTMLDivElement>,
    callback: (entry: ResizeObserverEntry) => void
) {
    useEffect(() => {
        if (!ref.current) return;
        const observer = new ResizeObserver(([entry]) => callback(entry));
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, callback]);
}

/**
 * Componente principale `GalacticOrbiter`.
 * - Mostra un'immagine centrale e pianeti orbitanti attorno a una o più orbite.
 */
const Component: React.FC<Props> = ({ centerImage, orbits }) => {
    const [containerWidth, setContainerWidth] = useState(0); // Larghezza effettiva del contenitore.
    const containerRef = useRef<HTMLDivElement>(null); // Riferimento al contenitore principale.
    const orbitRefs = useRef<HTMLDivElement[]>([]); // Riferimenti alle orbite.
    const planetRefs = useRef<HTMLDivElement[][]>([]); // Riferimenti ai pianeti per ogni orbita.

    // Inizializza i riferimenti per orbite e pianeti.
    orbitRefs.current = [];
    planetRefs.current = orbits.map(() => []);

    // Trova il raggio più grande tra le orbite.
    const largestOrbitRadius = useMemo(() => {
        if (!orbits.length) return 0;
        return Math.max(...orbits.map((orbit) => orbit.radius));
    }, [orbits]);

    // Calcola il fattore di scala per adattare l'orbita più grande al contenitore.
    const scaleFactor = useMemo(() => {
        if (largestOrbitRadius === 0) return 1;
        return containerWidth / (largestOrbitRadius * 2);
    }, [largestOrbitRadius, containerWidth]);

    // Usa `useResizeObserver` per monitorare la larghezza del contenitore.
    useResizeObserver(containerRef, (entry) => {
        setContainerWidth(entry.contentRect.width);
    });

    // Anima le orbite con GSAP per una rotazione continua.
    useLayoutEffect(() => {
        orbitRefs.current.forEach((orbitEl, i) =>
            gsap.to(orbitEl, {
                rotation: 360,
                duration: orbits[i].orbitDuration,
                ease: "linear",
                repeat: -1,
                onUpdate: () => {
                    const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;
                    planetRefs.current[i].forEach((planetEl) =>
                        gsap.set(planetEl, { rotation: -currentRotation })
                    );
                },
            })
        );
    }, [orbits]);

    return (
        // Contenitore principale "fullscreen" (100% larghezza e altezza).
        <chakra.div
            width="100%"
            height="100%"
            position="relative"
        >
            {/* Contenitore interno per il calcolo delle dimensioni */}
            <chakra.div
                ref={containerRef}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
            >
                {/* Immagine centrale */}
                <chakra.div
                    position="absolute"
                    zIndex={20}
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    <Image
                        src={centerImage}
                        alt=""
                        width={`clamp(3rem, ${10 * scaleFactor}rem, 15rem)`}
                    />
                </chakra.div>

                {/* Generazione delle orbite e pianeti */}
                {orbits.map((orbit, orbitIndex) => {
                    const scaledOrbitRadius = orbit.radius * scaleFactor;
                    const planetCount = orbit.planets.length;

                    return (
                        <chakra.div
                            key={crypto.randomUUID()}
                            ref={(element: HTMLDivElement) =>
                                element && (orbitRefs.current[orbitIndex] = element)
                            }
                            position="absolute"
                            width={`${scaledOrbitRadius * 2}px`}
                            height={`${scaledOrbitRadius * 2}px`}
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            border="1px dashed"
                            borderColor="gray.900"
                            _dark={{ borderColor: "gray.100" }}
                            borderRadius="50%"
                        >
                            {orbit.planets.map((planet, pIndex) => {
                                const angle = (360 / planetCount) * pIndex;
                                const angleRad = (angle * Math.PI) / 180;
                                const x = scaledOrbitRadius * Math.cos(angleRad);
                                const y = scaledOrbitRadius * Math.sin(angleRad);

                                return (
                                    <chakra.div
                                        key={crypto.randomUUID()}
                                        ref={(element: HTMLDivElement) =>
                                            element &&
                                            (planetRefs.current[orbitIndex][pIndex] = element)
                                        }
                                        position="absolute"
                                        transform={`translate(${x + scaledOrbitRadius}px, ${y + scaledOrbitRadius}px) translate(-50%, -50%)`}
                                        background="white"
                                        borderRadius="50%"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        padding="0.2rem"
                                    >
                                        <Image
                                            src={planet.imgSrc}
                                            alt=""
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
