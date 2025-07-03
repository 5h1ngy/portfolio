import type { HeroOrbit as HeroOrbitConfig } from '../../types/portfolio'
import { OrbitCenter, OrbitIcon, OrbitItem, OrbitRing, OrbitRings, OrbitWrapper } from './style'

interface HeroOrbitProps {
  orbit: HeroOrbitConfig
}

export const HeroOrbit = ({ orbit }: HeroOrbitProps) => (
  <OrbitWrapper>
    <OrbitRings aria-hidden="true">
      <OrbitRing $size={220} />
      <OrbitRing $size={300} />
      <OrbitRing $size={380} />
    </OrbitRings>
    <OrbitCenter>
      <img src={orbit.center} alt="" />
    </OrbitCenter>
    {orbit.items.map((item, index) => (
      <OrbitItem
        key={item.label}
        $radius={item.radius}
        $size={item.size}
        $duration={item.speed}
        $delay={index * 0.6}
        aria-label={item.label}
      >
        <OrbitIcon>
          <img src={item.icon} alt={item.label} />
        </OrbitIcon>
      </OrbitItem>
    ))}
  </OrbitWrapper>
)
