import React, { useState } from "react";

import { Card, Icon, } from "@chakra-ui/react";
import { Box, Wrap, Flex, } from "@chakra-ui/react";
import { Image, Text, Badge, } from "@chakra-ui/react";
import { IconButton, } from "@chakra-ui/react";

import { Props } from "./SuperCard.types";
import { getRandomColor } from "react-goblin-system/shared/utils";

const SuperCard: React.FC<Props> = (props) => {
    const {
        compact = false,
        orientation = "vertical",
        thumbnail, thumbnailFallback,
        title, subTitle,
        description,
        topics, links,
        onCardClick,
        children,
        // Props passati a <Card.Root>
        size = "md",
        variant = "outline",
        colorPalette = "gray",
        display
    } = props;

    const { headerProps, bodyProps, footerProps } = props;

    const flexDirection = orientation === "horizontal"
        ? { base: "column", xs: "column", sm: "row", md: "row", lg: "row", "2xl": "row" } as any
        : "column";

    // Stato che determina se l'immagine è in errore.
    const [thumbnailError, setThumbnailError] = useState(false);

    return compact ? (
        <Flex
            style={{ cursor: "pointer" }}
            overflow="hidden"
            flexDirection="row"

            display={display}
            width={{ base: "1rem", xs: "2rem", sm: "3rem", md: "4rem", lg: "4rem", "2xl": "4rem" } as any}
            height={
                orientation === "vertical"
                    ? { base: "auto", xs: "26rem", sm: "24rem", md: "22rem", lg: "20rem", "2xl": "18rem" } as any
                    : "14rem"
            }

            borderRadius="15px"
            backgroundColor="gray.100"
            _dark={{ backgroundColor: "gray.900" }}
            align="center"
            justify="center"
            onClick={() => onCardClick && onCardClick()}
        >
            <Text
                textStyle="sm"
                fontWeight="medium"
                writingMode="vertical-rl"
                textAlign="center"
            >
                {title}
            </Text>
        </Flex>
    ) : (
        <Card.Root
            size={size}
            variant={variant}
            colorPalette={colorPalette}
            flexDirection={flexDirection}
            overflow="hidden"
            // Esempio di dimensioni "fisse" leggermente diverse a seconda del breakpoint
            width={
                orientation === "vertical"
                    ? { base: "100%", xs: '17rem', sm: "17rem", md: "17rem", lg: "19rem", "2xl": "21rem" } as any
                    : { base: "100%", xs: '17rem', sm: 'fit-content', md: 'fit-content', lg: 'fit-content', "2xl": 'fit-content' } as any
            }
            height={
                orientation === "vertical"
                    ? { base: "auto", xs: '30rem', sm: "28rem", md: "26rem", lg: "24rem", "2xl": "22rem" } as any
                    : { base: "auto", xs: '30rem', sm: "16rem", md: "16rem", lg: "16rem", "2xl": "16rem" } as any
            }
            display={display}
        >
            {thumbnail && !thumbnailError ? (
                <Image
                    alt="thumbnail"
                    objectFit="cover"
                    width={orientation === "horizontal" ? "10rem" : "100%"}
                    maxHeight={orientation === "horizontal" ? "10rem" : "12rem"}
                    src={thumbnail}
                    onError={(e) => {
                        // Impedisci ulteriori cicli di errore in caso di errore anche sulla fallback
                        e.currentTarget.onerror = null;
                        setThumbnailError(true);
                    }}
                />
            ) : thumbnail && thumbnailFallback ? (
                // Se c'è la prop thumbnail ma l'immagine ha fallito il caricamento, mostriamo l'icona
                <Flex
                    align="center"
                    justify="center"
                    width={orientation === "horizontal" ? "10rem" : "100%"}
                    maxHeight={orientation === "horizontal" ? "100%" : "12rem"}
                    // Background trasparente
                    backgroundColor="transparent"
                    padding={'2rem'}
                >
                    <Icon as={thumbnailFallback} boxSize={12} /* icona più grande */ />
                </Flex>
            ) : null}

            <Flex flexDirection={'column'}>
                {(title || subTitle) && (
                    <Card.Header {...headerProps}>
                        {title && (
                            <Text as="h2" textStyle="lg" fontWeight="bold">
                                {title}
                            </Text>
                        )}
                        {subTitle && (
                            <Text textStyle="sm" color="fg.muted">
                                {subTitle}
                            </Text>
                        )}
                    </Card.Header>
                )}

                <Card.Body
                    cursor={onCardClick ? "pointer" : "auto"}
                    onClick={onCardClick}
                    {...bodyProps}
                >
                    {/* Contenitore scrollabile se la descrizione è troppo lunga */}
                    {description && (
                        <Box mb="2" maxHeight="6rem" overflowY="auto">
                            <Text textStyle="sm" fontWeight="normal">
                                {description}
                            </Text>
                        </Box>
                    )}

                    {topics && topics.length > 0 && (
                        <Wrap gap={2}>
                            {topics.map((topic) => (
                                <Badge key={topic} colorPalette={getRandomColor()} variant="subtle">
                                    {topic}
                                </Badge>
                            ))}
                        </Wrap>
                    )}

                    {children}
                </Card.Body>

                {links && links.length > 0 && (
                    <Card.Footer
                        display="flex"
                        flexDirection={'row'}
                        flexWrap="wrap"
                        gap="2"
                        justifyContent={orientation === "vertical" ? "flex-start" : "flex-end"}
                        {...footerProps}
                    >
                        {links.map((link) => (
                            <IconButton
                                key={link.label}
                                variant="ghost"
                                aria-label={link.label}
                                onClick={link.onClick}
                            >
                                {link.icon}
                            </IconButton>
                        ))}
                    </Card.Footer>
                )}
            </Flex>

        </Card.Root>
    );
};

export default SuperCard;
