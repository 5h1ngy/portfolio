import styled, { keyframes } from 'styled-components'
import { usePortfolio } from '../../context/PortfolioContext'

const float = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-18px) scale(1.03);
  }
`

const DecorationContainer = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
`

const Decoration = styled.span<{
  $size: number
  $top: string
  $left: string
  $blur?: number
  $opacity?: number
}>`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  border-radius: 50%;
  background: ${({ theme }) => theme.gradients.accent};
  filter: ${({ $blur }) => ($blur ? `blur(${$blur}px)` : 'blur(0)')};
  opacity: ${({ $opacity }) => $opacity ?? 0.18};
  animation: ${float} 12s ease-in-out infinite;
`

const Outline = styled.span<{
  $size: number
  $top: string
  $left: string
  $opacity?: number
}>`
  position: absolute;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.accentSoft};
  opacity: ${({ $opacity }) => $opacity ?? 0.22};
  animation: ${float} 16s ease-in-out infinite reverse;
`

export const BackgroundDecorations = () => {
  const { data } = usePortfolio()

  if (!data?.ui?.decorations?.length) {
    return null
  }

  return (
    <DecorationContainer aria-hidden="true">
      {data.ui.decorations.map((decoration) => {
        if (decoration.type === 'outline') {
          return (
            <Outline
              key={decoration.id}
              $size={decoration.size}
              $top={decoration.top}
              $left={decoration.left}
              $opacity={decoration.opacity}
            />
          )
        }

        return (
          <Decoration
            key={decoration.id}
            $size={decoration.size}
            $top={decoration.top}
            $left={decoration.left}
            $blur={decoration.blur}
            $opacity={decoration.opacity}
          />
        )
      })}
    </DecorationContainer>
  )
}
