import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import { Image } from "@chakra-ui/react"

type PlanetConfig = {
    imgSrc: string;
    alt?: string;
};

type OrbitConfig = {
    radius: number;
    orbitDuration: number; // durata in secondi per un giro completo
    planets: PlanetConfig[];
};

interface Props {
    centerImage: string;         // immagine al centro del "sistema"
    centerAlt?: string;
    orbits: OrbitConfig[];       // array di configurazioni per ciascuna orbita
    className?: string;          // per customizzare container generico via CSS
}

const GalacticOrbiter: React.FC<Props> = ({ centerImage, centerAlt = 'Center Image', orbits, className }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRefs = useRef<HTMLDivElement[]>([]);
    const planetRefs = useRef<HTMLDivElement[][]>([]);
    // planetRefs sarà un array di array:
    // planetRefs[i] conterrà i riferimenti ai pianeti della i-esima orbita

    orbitRefs.current = [];
    planetRefs.current = orbits.map(() => []); // Inizializziamo la struttura dati

    useLayoutEffect(() => {
        orbitRefs.current.forEach((orbitEl, orbitIndex) => {
            const orbitConf = orbits[orbitIndex];

            // Animazione dell'orbita
            gsap.to(orbitEl, {
                rotation: 360,
                duration: orbitConf.orbitDuration,
                ease: 'linear',
                repeat: -1,
                onUpdate: () => {
                    // Otteniamo la rotazione corrente dell'orbita
                    const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;
                    // Invertiamo la rotazione per i pianeti di questa orbita
                    planetRefs.current[orbitIndex].forEach((planetEl) => {
                        gsap.set(planetEl, { rotation: -currentRotation });
                    });
                }
            });
        });
    }, [orbits]);

    const maxRadius = Math.max(...orbits.map(o => o.radius), 0);

    return (
        <div
            ref={containerRef}
            className={className ? className : 'galactic-orbiter-container'}
            style={{
                position: 'relative',
                width: `${maxRadius * 4}px`,
                height: `${maxRadius * 4}px`,
            }}
        >
            {/* Centro */}
            <div
                className="galactic-center"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Image
                    src={centerImage}
                    alt={centerAlt}
                    className="galactic-center-image"
                    maxWidth={'15rem'}
                />
            </div>

            {/* Orbits */}
            {orbits.map((orbit, orbitIndex) => {
                const planetCount = orbit.planets.length;

                return (
                    <div
                        key={orbitIndex}
                        className="galactic-orbit"
                        ref={el => {
                            if (el) orbitRefs.current[orbitIndex] = el;
                        }}
                        style={{
                            position: 'absolute',
                            width: `${orbit.radius * 2}px`,
                            height: `${orbit.radius * 2}px`,
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            border: '3px dashed #aaa',
                            borderRadius: '50%'
                        }}
                    >
                        {orbit.planets.map((planet, planetIndex) => {
                            const angleDeg = (360 / planetCount) * planetIndex;
                            const angleRad = (angleDeg * Math.PI) / 180;
                            const x = orbit.radius * Math.cos(angleRad);
                            const y = orbit.radius * Math.sin(angleRad);

                            return (
                                <div
                                    key={planetIndex}
                                    className="galactic-planet"
                                    ref={el => {
                                        if (el) planetRefs.current[orbitIndex][planetIndex] = el;
                                    }}
                                    style={{
                                        position: 'absolute',
                                        // Posizioniamo il pianeta e poi lo centriamo
                                        transform: `translate(${x + orbit.radius}px, ${y + orbit.radius}px) translate(-46%, -46%)`,
                                        background: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '0.6rem',
                                    }}
                                >
                                    <Image
                                        src={planet.imgSrc}
                                        alt={planet.alt || 'Planet'}
                                        maxWidth={'2.5rem'}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default GalacticOrbiter;
