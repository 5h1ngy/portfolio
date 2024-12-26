import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text, Box, Flex } from "@chakra-ui/react";
import { IoMdFlashOff } from "react-icons/io";

import { WithRouterProps } from "@/hocs/withRouter";
import withRouter from "@/hocs/withRouter";

import StyledMarkdown from "@/components/StyledMarkdown";
import { STATUS } from "@/store/containerPortfolio";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
import { EmptyState } from "@/components/Chakra/empty-state";

import { Bind } from "./container"; // il tuo container
import bind from "./container";     // HOC

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const { hardskill } = state;
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Creiamo un GSAP context per pulire le animazioni quando il componente si smonta
        let ctx = gsap.context(() => {
            // Creiamo una timeline legata allo scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    // markers: true, // attiva per debug
                },
            });

            // (1) Anima la card: fade + spostamento
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });

            // (2) Anima il contenuto interno con stagger
            // Qui usiamo la classe .card-text su vari elementi
            tl.from(".card-text", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05, // ogni elemento .card-text entra uno dopo l'altro
            }, "-=0.5");
            // ^ "-=0.5" significa: inizia questa animazione 0.5s
            // prima che finisca la precedente, per un leggero overlap
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <Flex
            ref={cardRef}
            direction="column"
            gap="2rem"
            width="35rem"
        >
            {/* Titolo + eventuale spinner di caricamento */}
            <Text textStyle="4xl" fontWeight="bold" className="card-text">
                Hard Skills
                {hardskill.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft="0.8rem">
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {/* Caso: Nessun contenuto */}
            {hardskill.status === STATUS.SUCCESS && !hardskill.occurrence && (
                <EmptyState
                    icon={<IoMdFlashOff />}
                    title="No Hard skills"
                    description="Work in progress"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                />
            )}

            {/* Caso: Testo presente */}
            {hardskill.status === STATUS.SUCCESS && hardskill.occurrence && (
                <Box
                    backgroundColor="gray.100"
                    _dark={{ backgroundColor: "gray.900" }}
                    padding="2rem"
                    borderRadius="15px"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={hardskill.occurrence} />
                    </Text>
                </Box>
            )}
        </Flex>
    );
};

export default bind(withRouter(Component));
