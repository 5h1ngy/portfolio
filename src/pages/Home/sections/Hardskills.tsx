import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text, Box, Flex } from "@chakra-ui/react";
import { IoMdFlashOff } from "react-icons/io";

import { STATUS } from 'react-goblin-system/store/shared';
import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import StyledMarkdown from "@/components/StyledMarkdown";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
import { EmptyState } from "@/components/Chakra/empty-state";

gsap.registerPlugin(ScrollTrigger);

const Hardskills: React.FC<Bind & WithRouterProps> = ({ state }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ scrollTrigger: { trigger: cardRef.current, start: "top 80%", }, });
            tl.from(cardRef.current, { opacity: 0, y: 50, duration: 1, ease: "power2.out", });
            tl.from(".card-text", { opacity: 0, y: 20, duration: 0.6, ease: "power2.out", stagger: 0.05, }, "-=0.5");
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
            <Text textStyle="4xl" fontWeight="bold" className="card-text">
                Hard Skills
                {state.hardskill.status === STATUS.LOADING && (
                    <ProgressCircleRoot value={null} size="xs" marginLeft="0.8rem">
                        <ProgressCircleRing cap="round" />
                    </ProgressCircleRoot>
                )}
            </Text>

            {state.hardskill.status === STATUS.SUCCESS && !state.hardskill.occurrence && (
                <EmptyState
                    icon={<IoMdFlashOff />}
                    title="No Hard skills"
                    description="Work in progress"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                />
            )}

            {state.hardskill.status === STATUS.SUCCESS && state.hardskill.occurrence && (
                <Box
                    backgroundColor="gray.100"
                    _dark={{ backgroundColor: "gray.900" }}
                    padding="2rem"
                    borderRadius="15px"
                    marginX={{ base: "0", sm: "0", md: "0", lg: "0", xl: "2rem", "2xl": "2rem" }}
                    className="card-text"
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={state.hardskill.occurrence} />
                    </Text>
                </Box>
            )}
        </Flex>
    );
};


export default withContainer(withRouter(Hardskills));
