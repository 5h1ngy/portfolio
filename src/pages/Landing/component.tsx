import { NavLink, useLocation, useNavigate } from "react-router";
import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { Flex, Spacer, Image, Text, chakra } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"
import { CiGlobe } from "react-icons/ci";

import useMediaQuery from '@/hooks/useMediaQuery';
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger } from "@/components/Chakra/drawer"
import { DrawerContent, DrawerRoot, DrawerTrigger } from "@/components/Chakra/drawer"

import { ComponentProps } from "./component.types";
import scrollToSection from "@/utils/scrollToSection";

export default function Component(props: ComponentProps) {
    const { children, navbarItems, logo } = props;
    const location = useLocation();
    const circleRef = useRef<HTMLDivElement>(null);
    const isMobileRef = useMediaQuery('(max-width: 519px)');

    function handleMouseMove(event: MouseEvent) {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                x: event.clientX - 50, y: event.clientY - 50,
                duration: 0.1, ease: "power1.out",
            });
        }
    };

    function handleNavigationAndScroll(path: string) {
        window.history.pushState(null, '', path);
        scrollToSection(path.replace('/', ''));
    }

    useEffect(() => {
        // Attendi un breve intervallo per assicurarti che il DOM sia aggiornato
        setTimeout(() => {
            scrollToSection(location.pathname.replace('/', ''));
        }, 500); // Puoi aumentare il timeout se necessario
    }, []);

    useEffect(() => {
        if (isMobileRef) return;
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [isMobileRef]);

    const Logo: React.FC = () =>
        logo && <Image src={logo} width={'42px'} />;

    const Header: React.FC = () =>
        <Flex wrap={"wrap"} position={"fixed"} zIndex={4} width={"100%"} top={0}>
            {!isMobileRef

                ? <Flex
                    wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'5%'} paddingY={'1rem'}
                >
                    <Logo />
                    {navbarItems.map(item => (
                        // <NavLink key={crypto.randomUUID()} to={item.value} end>
                        <Text key={item.value}
                            onClick={() => handleNavigationAndScroll(item.value.replace('/', ''))} // Rimuove lo "/" dal valore
                            style={{ cursor: 'pointer' }}
                            textStyle="md" fontWeight="medium">{item.label}</Text>
                        // </NavLink>
                    ))}
                    <Spacer />
                    <ColorModeButtonExtended variant="enclosed" size={"sm"} />
                </Flex>

                : <Flex
                    wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"start"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'5%'} paddingY={'1rem'}
                >
                    <DrawerRoot size={"full"}>
                        <DrawerBackdrop />
                        <DrawerTrigger asChild>
                            <IconButton aria-label="" variant={"subtle"} >
                                <CiGlobe />
                            </IconButton>
                        </DrawerTrigger>
                        <Spacer />
                        <ColorModeButtonExtended variant="enclosed" size={"sm"} />
                        <DrawerContent>
                            <DrawerBody>
                                <Flex direction={"column"} gap={"3rem"} height={"100%"} alignItems={"center"} justifyContent={"center"}>
                                    {navbarItems.map(item => (
                                        <NavLink key={crypto.randomUUID()} to={item.value} end>
                                            <Text textStyle="3xl" fontWeight="medium">{item.label}</Text>
                                        </NavLink>
                                    ))}
                                </Flex>
                            </DrawerBody>
                            <DrawerCloseTrigger />
                        </DrawerContent>
                    </DrawerRoot>
                </Flex>}
        </Flex>

    const Body: React.FC = () => (
        <Flex minHeight={'100vh'} zIndex={'3'} wrap={"wrap"} borderYWidth="1px"
            paddingTop={'8rem'} paddingBottom={'8rem'}
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
        {!isMobileRef && <chakra.div ref={circleRef} pointerEvents="none"
            position="fixed" zIndex={2}
            top={0} left={0}
            width="100px" height="100px"
            borderRadius="50%"
            background="radial-gradient(circle, {colors.gray.100} 0%, transparent 70%)"
            _dark={{
                background: "radial-gradient(circle, {colors.gray.900} 0%, transparent 70%)",
            }}
        />}

        {/* Contenuto non sfocato (in primo piano) */}
        <Flex position="relative" zIndex={3}
            direction={"column"} width={"100%"} minHeight={'100vh'}
        >
            <Header />
            <Body />
        </Flex>
    </Flex>
}
