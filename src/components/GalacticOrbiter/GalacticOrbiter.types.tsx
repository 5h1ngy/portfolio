export type PlanetConfig = {
    imgSrc: string;
};

export type OrbitConfig = {
    radius: number;
    orbitDuration: number;
    planets: PlanetConfig[];
};

export interface Props {
    centerImage: string;
    orbits: OrbitConfig[];
}