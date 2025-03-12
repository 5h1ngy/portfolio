import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text, Flex } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";

import { STATUS } from 'react-goblin-system/store/shared';
import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle";
import { EmptyState } from "@/components/Chakra/empty-state";
import SliderCards from "@/components/SliderCards";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC<Bind & WithRouterProps> = ({ state }) =>
    <Flex
        id="projects"
        direction={"column"}
        width="100%"
        gap={"1rem"}
    >
        <Text textStyle="4xl" fontWeight="bold" marginBottom={"1.5rem"}>
            Projects
            {state.projects.status === STATUS.LOADING && (
                <ProgressCircleRoot value={null} size="xs" marginLeft={'0.8rem'}>
                    <ProgressCircleRing cap="round" />
                </ProgressCircleRoot>
            )}
        </Text>

        <Flex
            direction={"row"}
            wrap={"wrap"}
            alignItems={"start"}
            justifyContent={{ base: "start", sm: "start", md: "start", lg: 'start', xl: 'start', "2xl": 'center' }}
            marginX={{ base: "0", sm: "0", md: "0", lg: '0', xl: '2rem', "2xl": '2rem' }}
            gap={"3rem"}
        >
            {state.projects.status === STATUS.SUCCESS && state.projects.occurrences?.length !== 0 && (
                <SliderCards
                    title="Infrastructure"
                    centerCount={1}
                    cards={state.projects.occurrences
                        .filter(occurrence => occurrence.name.startsWith("infra-"))
                        .filter(occurrence => occurrence?.description !== "Work in progress...")
                        .sort((a, b) => {
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                    }
                />
            )}

            {state.projects.status === STATUS.SUCCESS && state.projects.occurrences?.length !== 0 && (
                <SliderCards
                    title="Command Line Interface"
                    centerCount={1}
                    cards={state.projects.occurrences
                        .filter(occurrence => occurrence.name.startsWith("cli-"))
                        .filter(occurrence => occurrence?.description !== "Work in progress...")
                        .sort((a, b) => {
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                    }
                />
            )}

            {state.projects.status === STATUS.SUCCESS && state.projects.occurrences?.length !== 0 && (
                <SliderCards
                    title="Frontend"
                    centerCount={1}
                    cards={state.projects.occurrences
                        .filter(occurrence =>
                            occurrence.name.startsWith("fe-") &&
                            !occurrence.name.startsWith("fe-pixijs") &&
                            !occurrence.name.startsWith("fe-phaser")
                        )
                        .filter(occurrence => occurrence?.description !== "Work in progress...")
                        .sort((a, b) => {
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                    }
                />
            )}

            {state.projects.status === STATUS.SUCCESS && state.projects.occurrences?.length !== 0 && (
                <SliderCards
                    title="Backend"
                    centerCount={1}
                    cards={state.projects.occurrences
                        .filter(occurrence => occurrence.name.startsWith("be-"))
                        .filter(occurrence => occurrence?.description !== "Work in progress...")
                        .sort((a, b) => {
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                    }
                />
            )}

            {state.projects.status === STATUS.SUCCESS && state.projects.occurrences?.length !== 0 && (
                <SliderCards
                    title="Videogames"
                    centerCount={1}
                    cards={state.projects.occurrences
                        .filter(occurrence => occurrence.name.startsWith("fe-phaser"))
                        .filter(occurrence => occurrence?.description !== "Work in progress...")
                        .sort((a, b) => {
                            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
                        })
                    }
                />
            )}

            {(state.projects.status === STATUS.SUCCESS || state.projects.status === STATUS.FAILED) && state.projects.occurrences?.length === 0 && (
                <EmptyState
                    icon={<CiFolderOff />}
                    title="No Projects Found"
                    description="Please go to Github/5h1ngy to see more projects"
                />
            )}
        </Flex>
    </Flex>

export default withContainer(withRouter(Projects));
