import styled from 'styled-components'

export const TagList = styled.div<{ $gap?: string; $justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ $gap }) => $gap ?? '0.45rem'};
  justify-content: ${({ $justify }) => $justify ?? 'flex-start'};
  padding: 0;
  margin: 0;
  list-style: none;
`
