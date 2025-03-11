export interface OrbitCircleProps {
    orbitIndex: number;
    orbitRadiusPx: number;
    orbitRefs: React.RefObject<HTMLDivElement[]>;
    planetRefs: React.RefObject<HTMLDivElement[][]>;
    planets: Array<{ imgSrc: string }>;
    scaleFactor: number;
}