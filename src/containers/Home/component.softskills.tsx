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
    const { softskill } = state;
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 80%",
                    // markers: true, // attiva per debug
                },
            });

            // (1) Anima la card
            tl.from(cardRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
            });

            // (2) Anima il testo interno
            tl.from(".card-text", {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.05,
            }, "-=0.5");
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <Flex ref={cardRef} direction="column" gap="2rem" width="35rem">
            {/* Titolo + eventuale spinner di caricamento */}
            <Text textStyle="4xl" fontWeight="bold" className="card-text">
                Soft Skills
                {softskill.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft="0.8rem">
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {/* Caso: Nessun contenuto */}
            {softskill.status === STATUS.SUCCESS && !softskill.occurrence && (
                <EmptyState
                    icon={<IoMdFlashOff />}
                    title="No Soft skills"
                    description="Work in progress"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                />
            )}

            {/* Caso: Testo presente */}
            {softskill.status === STATUS.SUCCESS && softskill.occurrence && (
                <Box
                    backgroundColor="gray.100"
                    _dark={{ backgroundColor: "gray.900" }}
                    padding="2rem"
                    borderRadius="15px"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={softskill.occurrence} />
                    </Text>
                </Box>
            )}
        </Flex>
    );
};

export default bind(withRouter(Component));
