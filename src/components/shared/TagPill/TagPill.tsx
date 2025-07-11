import type { HTMLAttributes, PropsWithChildren } from "react";

import { TagPillRoot } from "./TagPill.style";

export type TagPillProps = HTMLAttributes<HTMLSpanElement>;

export const TagPill = ({ children, ...props }: PropsWithChildren<TagPillProps>) => (
  <TagPillRoot {...props}>{children}</TagPillRoot>
);

