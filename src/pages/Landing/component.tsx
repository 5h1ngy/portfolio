import { NavLink } from "react-router";
import React, { useEffect, useRef } from 'react';
import { Flex, Spacer, Image, Text, chakra } from "@chakra-ui/react";
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"
import { ComponentProps } from "./component.types";
import gsap from "gsap";

export default function Component(props: ComponentProps) {
    const { children, navbarItems, logo } = props;

    // Ref per il cerchio che segue il mouse
    const circleRef = useRef<HTMLDivElement>(null);

    const Logo: React.FC = () => logo && <Image src={logo} width={'42px'} />;

    const Header: React.FC = () => (
        <Flex wrap={"wrap"} position={"fixed"} zIndex={'3'} width={"100%"} top={0}>
            <Flex
                wrap={"wrap"} direction={"row"} width={'100%'}
                gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                paddingX={'5%'} paddingY={'1rem'}
            >
                <Logo />

                {navbarItems.map(item => (
                    <NavLink key={crypto.randomUUID()} to={item.value} end>
                        <Text textStyle="md">{item.label}</Text>
                    </NavLink>
                ))}

                <Spacer />

                <ColorModeButtonExtended variant="enclosed" size={"sm"} />
            </Flex>
        </Flex>
    )

    const Body: React.FC = () => (
        <Flex wrap={"wrap"}
            // direction={"column"} 
            zIndex={'3'}
            paddingTop={'8rem'} 
            paddingBottom={'5rem'}
            paddingX={{ base: "5%", sm: "4rem", md: "4rem", lg: '4rem', xl: '15%', "2xl": '15%' }}
            gap={'10rem'}
            minHeight={'100vh'}
            borderYWidth="1px"
        >
            {children !== undefined && children}
        </Flex>
    )

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (circleRef.current) {
                // Usiamo GSAP per animare dolcemente la posizione del cerchio
                gsap.to(circleRef.current, {
                    x: e.clientX - 75,
                    y: e.clientY - 75,
                    duration: 0.1,
                    ease: "power1.out" // puoi cambiare l'easing a piacere
                });
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Flex
            direction={"column"} width={"100%"} minHeight={'100vh'}
            position="relative"
            overflow="hidden"
        >
            {/* Background sfocato */}
            <chakra.div
                backgroundColor={"gray.100"}
                backgroundImage={`url(${import.meta.env.VITE_BASENAME}/3.background_white.png)`}
                _dark={{ backgroundColor: "gray.900", backgroundImage: `url(${import.meta.env.VITE_BASENAME}/3.background_dark.png)` }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    // backgroundImage: `url(${import.meta.env.VITE_BASENAME}/background.jpg)`,
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    filter: 'blur(60px)'
                }}
            ></chakra.div>

            {/* Cerchio dietro il mouse */}
            <div
                ref={circleRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '150px',
                    height: '150px',
                    zIndex: 2,
                    pointerEvents: 'none',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)'
                }}
            ></div>

            {/* Contenuto non sfocato (in primo piano) */}
            <div style={{ position: 'relative', zIndex: 3 }}>
                <Header />
                <Body />
            </div>
        </Flex>
    );
}
