import { NavLink } from "react-router";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { Flex, Spacer, Image, Text, chakra } from "@chakra-ui/react";

import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"
import { ComponentProps } from "./component.types";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

export default function Component(props: ComponentProps) {
    const { children, navbarItems, logo } = props;

    const circleRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(event: MouseEvent) {
        if (circleRef.current) {
            gsap.to(circleRef.current, { x: event.clientX - 50, y: event.clientY - 50, duration: 0.1, ease: "power1.out" });
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            return document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const Logo: React.FC = () =>
        logo && <Image src={logo} width={'42px'} />;

    const Header: React.FC = () =>
        <Flex wrap={"wrap"} position={"fixed"} zIndex={4} width={"100%"} top={0}>
            <Flex
                wrap={"wrap"} direction={"row"} width={'100%'}
                gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                paddingX={'5%'} paddingY={'1rem'}
            >
                <Logo />

                {navbarItems.map(item => (
                    <NavLink key={crypto.randomUUID()} to={item.value} end>
                        <Text textStyle="md" fontWeight="medium">{item.label}</Text>
                    </NavLink>
                ))}

                <Spacer />

                <ColorModeButtonExtended variant="enclosed" size={"sm"} />
            </Flex>
        </Flex>

    const Body: React.FC = () => (
        <Flex minHeight={'100vh'} zIndex={'3'} wrap={"wrap"} borderYWidth="1px"
            paddingTop={'8rem'} paddingBottom={'5rem'}
            paddingX={{ base: "5%", sm: "5%", md: "5%", lg: '5%', xl: '10%', "2xl": '10%' }}
            gap={'8rem'}
        >
            {children !== undefined && children}
        </Flex>
    )

    return <Flex position="relative" overflow="hidden"
        direction={"column"} width={"100%"} minHeight={'100vh'}
    >
        {/* Background sfocato */}
        <chakra.div
            position={"absolute"} zIndex={1}
            top={0} left={0} right={0} bottom={0}

            backgroundAttachment="fixed"
            backgroundPosition="top"
            backgroundSize="cover"
            filter="blur(60px)"

            backgroundColor={"gray.100"}
            backgroundImage={`url(${import.meta.env.VITE_BASENAME}/assets/background_white.png)`}

            _dark={{
                backgroundColor: "gray.900",
                backgroundImage: `url(${import.meta.env.VITE_BASENAME}/assets/background_dark.png)`
            }}
        />

        {/* Cerchio dietro il mouse */}
        <chakra.div ref={circleRef} pointerEvents="none"
            position="fixed" zIndex={2}
            top={0} left={0}
            width="100px" height="100px"
            borderRadius="50%"
            background="radial-gradient(circle, {colors.gray.100} 0%, transparent 70%)"
            _dark={{
                background: "radial-gradient(circle, {colors.gray.900} 0%, transparent 70%)",
            }}
        />

        {/* Contenuto non sfocato (in primo piano) */}
        <Flex position="relative" zIndex={3}
            direction={"column"} width={"100%"} minHeight={'100vh'}
        >
            <Header />

            {/* Avvolgiamo TUTTO in SmoothScrollProvider */}
            <SmoothScrollProvider>
                <Body />
            </SmoothScrollProvider>
        </Flex>
    </Flex>
}
