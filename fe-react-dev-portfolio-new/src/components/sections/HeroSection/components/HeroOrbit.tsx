import type { HeroOrbitProps } from './HeroOrbit.types';
import { OrbitCenter, OrbitIcon, OrbitItem, OrbitRing, OrbitRings, OrbitWrapper } from './HeroOrbit.style';
import { resolveOrbitAsset } from '../helpers/HeroOrbit.helpers';
import { useOrbitRings } from '../hooks/HeroOrbit.hooks';

export const HeroOrbit = ({ orbit }: HeroOrbitProps) => {
  const rings = useOrbitRings(orbit);
  const centerAsset = resolveOrbitAsset(orbit.center);

  return (
    <OrbitWrapper>
      <OrbitRings aria-hidden="true">
        {rings.map((ring) => (
          <OrbitRing key={ring.radius} $size={ring.radius * 2} />
        ))}
      </OrbitRings>
      <OrbitCenter>
        <img src={centerAsset} alt="" />
      </OrbitCenter>
      {rings.map((ring, ringIndex) => {
        const iconCount = ring.icons.length;
        return ring.icons.map((icon, iconIndex) => {
          const asset = resolveOrbitAsset(icon.icon);
          const angle = icon.offset ?? (iconCount > 1 ? (360 / iconCount) * iconIndex : 0);
          const duration = icon.speed ?? ring.speed;
          const delay = icon.delay ?? ringIndex * 0.4 + iconIndex * 0.35;

          return (
            <OrbitItem
              key={`${ring.radius}-${icon.label}`}
              $radius={ring.radius}
              $size={icon.size}
              $duration={duration}
              $delay={delay}
              $angle={angle}
              aria-label={icon.label}
            >
              <OrbitIcon $duration={duration} $delay={delay}>
                <img src={asset} alt={icon.label} />
              </OrbitIcon>
            </OrbitItem>
          );
        });
      })}
    </OrbitWrapper>
  );
};
