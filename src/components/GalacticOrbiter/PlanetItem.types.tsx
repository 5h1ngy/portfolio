export interface PlanetItemProps {
    planetImgSrc: string;
    orbitIndex: number;
    pIndex: number;
    planetRefs: React.RefObject<HTMLDivElement[][]>;
    xRem: number;
    yRem: number;
    scaleFactor: number;
}