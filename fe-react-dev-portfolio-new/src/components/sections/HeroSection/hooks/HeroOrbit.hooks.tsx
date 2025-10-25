import { useMemo } from 'react';

import type { HeroOrbit } from '@data/portfolio.types';

export interface OrbitRingConfig {
  radius: number;
  speed: number;
  icons: HeroOrbit['rings'][number]['icons'];
}

export const useOrbitRings = (orbit: HeroOrbit) =>
  useMemo<OrbitRingConfig[]>(() => {
    return orbit.rings
      .map((ring) => ({
        radius: ring.radius,
        speed: ring.speed,
        icons: ring.icons.filter((icon) => icon.icon),
      }))
      .filter((ring) => ring.icons.length > 0)
      .sort((a, b) => a.radius - b.radius);
  }, [orbit.rings]);
