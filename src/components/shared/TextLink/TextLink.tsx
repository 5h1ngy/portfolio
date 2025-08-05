import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

import { TextLinkRoot } from './TextLink.style'

export type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const TextLink = ({ children, ...props }: PropsWithChildren<TextLinkProps>) => (
  <TextLinkRoot {...props}>{children}</TextLinkRoot>
)
