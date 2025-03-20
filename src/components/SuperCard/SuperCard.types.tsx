import React from "react";
import { CardRootProps, CardHeaderProps, CardBodyProps, CardFooterProps, ConditionalValue, } from "@chakra-ui/react";
import type { Property } from "csstype";

export interface Link {
    icon?: React.ReactElement; // ora si aspetta un React element
    label: string;
    onClick?: () => void;
    href?: string;
}

export interface Props extends Partial<CardRootProps> {
    compact?: boolean;
    orientation?: "vertical" | "horizontal";
    thumbnail?: string;
    thumbnailFallback?: React.ElementType;
    title?: string;
    subTitle?: React.ReactNode;
    description?: React.ReactNode;
    topics?: string[];
    links?: Link[];
    onCardClick?: () => void;
    children?: React.ReactNode;
    headerProps?: Partial<CardHeaderProps>;
    bodyProps?: Partial<CardBodyProps>;
    footerProps?: Partial<CardFooterProps>;
    display?: ConditionalValue<string | readonly string[] | Property.Display | undefined>;
}
