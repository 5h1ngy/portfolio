import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

import { ActionLinkRoot } from "./ActionLink.style";

export type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const ActionLink = ({ children, ...props }: PropsWithChildren<ActionLinkProps>) => (
  <ActionLinkRoot {...props}>{children}</ActionLinkRoot>
);

