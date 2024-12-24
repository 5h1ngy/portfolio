import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import { Image } from "@chakra-ui/react"

type PlanetConfig = {
    imgSrc: string;
    alt?: string;
};

type OrbitConfig = {
    radius: number;
    // durata in secondi per un giro completo
    orbitDuration: number;
    planets: PlanetConfig[];
};

interface Props {
    // immagine al centro del "sistema"
    centerImage: string;
    centerAlt?: string;
    // array di configurazioni per ciascuna orbita
    orbits: OrbitConfig[];
    // per customizzare container generico via CSS
    className?: string;
}

const Component: React.FC<Props> = ({ centerImage, centerAlt = 'Center Image', orbits, className }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const orbitRefs = useRef<HTMLDivElement[]>([]);
    const planetRefs = useRef<HTMLDivElement[][]>([]);

    orbitRefs.current = [];
    planetRefs.current = orbits.map(() => []);

    useLayoutEffect(() => {
        orbitRefs.current.forEach((orbitEl, orbitIndex) => gsap.to(orbitEl, {
            rotation: 360,
            duration: orbits[orbitIndex].orbitDuration,
            ease: 'linear',
            repeat: -1,
            onUpdate: () => {
                const currentRotation = gsap.getProperty(orbitEl, "rotation") as number;
                planetRefs.current[orbitIndex].forEach((planetEl) => {
                    gsap.set(planetEl, { rotation: -currentRotation });
                });
            }
        }));
    }, [orbits]);

    const maxRadius = Math.max(...orbits.map(o => o.radius), 0);

    return (
        <div
            ref={containerRef}
            className={className ? className : 'galactic-orbiter-container'}
            style={{
                position: 'relative',
                width: `${maxRadius * 2}px`,
                height: `${maxRadius * 2}px`,
            }}
        >
            {/* Centro */}
            <div
                className="galactic-center"
                style={{
                    zIndex: 20,
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

export default Component;
