import { useLocation } from "react-router"; // Importa NavLink per navigazione e useLocation per ottenere l'URL corrente.
import React, { useEffect, useRef, useState } from 'react'; // Hook per gestire il ciclo di vita e riferimenti DOM.
import gsap from "gsap"; // Libreria per animazioni.
import { Flex, Spacer, Image, Text, chakra } from "@chakra-ui/react"; // Componenti UI di Chakra UI.
import { IconButton } from "@chakra-ui/react"; // Pulsante con icone di Chakra UI.
import { CiGlobe } from "react-icons/ci"; // Icona di un globo.

import useMediaQuery from '@/layouts/Landing/shared/useMediaQuery'; // Hook per rilevare query media.
import { ColorModeButtonExtended } from "@/components/Chakra/color-mode"; // Pulsante per la modalità chiara/scura.
import { DrawerBackdrop, DrawerBody, DrawerCloseTrigger } from "@/components/Chakra/drawer"; // Componenti per la gestione del drawer.
import { DrawerContent, DrawerRoot, DrawerTrigger } from "@/components/Chakra/drawer"; // Altri componenti del drawer.

import { ComponentProps } from "./component.types"; // Tipizzazione dei props per il componente.
import scrollToSection from "@/layouts/Landing/shared/scrollToSection"; // Funzione per scorrere a una sezione specifica.

export default function Component(props: ComponentProps) {
    const { children, navbarItems, logo } = props; // Props passati al componente.
    const location = useLocation(); // Ottieni il percorso corrente.
    const circleRef = useRef<HTMLDivElement>(null); // Riferimento al div animato dietro il mouse.
    const isMobileRef = useMediaQuery('(max-width: 519px)'); // Verifica se la viewport è mobile.

    // Funzione per gestire il movimento del mouse e aggiornare la posizione del cerchio.
    function handleMouseMove(event: MouseEvent) {
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                x: event.clientX - 50, y: event.clientY - 50,
                duration: 0.1, ease: "power1.out", // Animazione fluida.
            });
        }
    };

    // Funzione per navigare e scorrere verso una sezione specifica.
    function handleNavigationAndScroll(path: string) {
        window.history.pushState(null, '', path); // Aggiorna manualmente l'URL senza ricaricare.
        scrollToSection(path.replace('/', '')); // Scorri verso la sezione specificata.
    }

    // Effetto per scorrere automaticamente verso la sezione corrente all'avvio.
    useEffect(() => {
        setTimeout(() => {
            scrollToSection(location.pathname.replace('/', '')); // Scorri alla sezione corrispondente al percorso.
        }, 500); // Timeout per garantire che il DOM sia pronto.
    }, []);

    // Effetto per attivare l'animazione del mouse, solo su dispositivi non mobili.
    useEffect(() => {
        if (isMobileRef) return; // Disabilita su dispositivi mobili.
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [isMobileRef]);

    // Componente per il logo, visualizzato solo se fornito.
    const Logo: React.FC = () =>
        logo && <Image src={logo} width={'42px'} />;

    // Header del componente, con elementi dinamici in base alla dimensione della viewport.
    const Header: React.FC = () => {
        const [open, setOpen] = useState(false)

        return <Flex wrap={"wrap"} position={"fixed"} zIndex={4} width={"100%"} top={0}>
            {!isMobileRef

                ? <Flex
                    wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"center"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'5%'} paddingY={'1rem'}
                >
                    <Logo />
                    {navbarItems.map(item => (
                        <Text key={item.value}
                            onClick={() => handleNavigationAndScroll(item.value.replace('/', ''))}
                            style={{ cursor: 'pointer' }}
                            textStyle="md" fontWeight="medium">{item.label}</Text>
                    ))}
                    <Spacer />
                    <ColorModeButtonExtended variant="enclosed" size={"sm"} />
                </Flex>

                : <Flex
                    wrap={"wrap"} direction={"row"} width={'100%'}
                    gapX={'1rem'} justifyContent={"start"} justifyItems={"center"} alignContent={'center'} alignItems={'center'}
                    paddingX={'5%'} paddingY={'1rem'}
                >
                    <DrawerRoot size={"full"} open={open} onOpenChange={(event) => setOpen(event.open)}>
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
                                    {navbarItems.map(item =>
                                        <Text
                                            textStyle="3xl"
                                            fontWeight="medium"
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                handleNavigationAndScroll(item.value.replace('/', ''))
                                                setOpen(false)
                                            }}
                                        >
                                            {item.label}
                                        </Text>
                                    )}
                                </Flex>
                            </DrawerBody>
                            <DrawerCloseTrigger />
                        </DrawerContent>
                    </DrawerRoot>
                </Flex>}
        </Flex>
    };

    // Corpo principale del componente.
    const Body: React.FC = () => (
        <Flex minHeight={'100vh'} zIndex={'3'} wrap={"wrap"} borderYWidth="1px"
            paddingTop={'8rem'} paddingBottom={'8rem'}
            paddingX={{ base: "5%", sm: "5%", md: "5%", lg: '5%', xl: '10%', "2xl": '10%' }}
            gap={'8rem'}
        >
            {children !== undefined && children}
        </Flex>
    );

    // Ritorno del layout completo.
    return <Flex position="relative" overflow="hidden"
        direction={"column"} width={"100%"} minHeight={'100vh'}
    >
        {/* Sfondo sfocato */}
        <chakra.div
            position={"absolute"} zIndex={1}
            top={0} left={0} right={0} bottom={0}
            backgroundAttachment="fixed"
            backgroundPosition="top"
            backgroundSize="cover"
            filter="blur(60px)"
            backgroundColor={"gray.100"}
            backgroundImage={'/assets/background_white.png'}
            _dark={{
                backgroundColor: "gray.900",
                backgroundImage: '/assets/background_dark.png'
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

        {/* Contenuto */}
        <Flex position="relative" zIndex={3}
            direction={"column"} width={"100%"} minHeight={'100vh'}
        >
            <Header />
            <Body />
        </Flex>
    </Flex>;
}
