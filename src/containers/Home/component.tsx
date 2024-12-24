import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/react"

import { WithRouterProps } from "@/hocs/withRouter";
import GalacticOrbiter from "@/components/GalacticOrbiter"
import SliderCards from "@/components/SliderCards"
import StyledMarkdown from "@/components/StyledMarkdown";

import { ProgressCircleRing, ProgressCircleRoot } from "@/components/Chakra/progress-circle"

import { Bind } from "./container"
import { useEffect } from "react";
import { STATUS } from "@/store/containerPortfolio";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ actions, state }) => {
    const { about, hardskill, softskill, projects } = state;
    const { doGetRepositories, doGetAbout, doGetHardskill, doGetSoftskill } = actions;

    const avatarTechs = [
        {
            radius: 150,
            orbitDuration: 6,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/typescript.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/python.svg` },
            ],
        },
        {
            radius: 250,
            orbitDuration: 9,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/nodejs.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/mysql.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/docker.svg` },
            ],
        },
        {
            radius: 350,
            orbitDuration: 12,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/vitejs.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/react.svg` },
            ],
        }
    ];

    useEffect(() => {
        doGetRepositories()
        doGetAbout()
        doGetHardskill()
        doGetSoftskill()
    }, [])

    return (
        <>
            <Flex
                direction={"row"}
                width={"100%"}
                align={"center"}
                justify={"center"}
            >
                <GalacticOrbiter
                    centerImage={`${import.meta.env.VITE_BASENAME}/logos/avatar.png`}
                    orbits={avatarTechs}
                />
            </Flex>


            {/* Card ABOUT */}
            {about.status !== STATUS.FAILED
                && <Flex direction={"column"} justify={"center"} width={"100%"}>
                    <Text textStyle="4xl" fontWeight="bold">About</Text>
                    <Box
                        // backgroundColor={"gray.100"}
                        // _dark={{ backgroundColor: "gray.900" }}
                        width={"100%"}
                        margin={"3rem"}
                        borderWidth="1px"
                        borderRadius={"15px"}
                        border={"1px"}
                    >
                        <Text textStyle="md" fontWeight="normal">
                            {about.status === STATUS.IDLE
                                && <ProgressCircleRoot value={null} size="sm">
                                    <ProgressCircleRing cap="round" />
                                </ProgressCircleRoot>
                            }
                            {about.status === STATUS.SUCCESS
                                && <StyledMarkdown content={about.occurrence!} />
                            }
                        </Text>
                    </Box>
                </Flex>
            }

            <Flex direction={"row"} gap={"8rem"} width={"100%"}
                justify={{ base: "", sm: "center", md: "center", lg: 'space-between', xl: 'space-between', "2xl": 'space-between' }}
                wrap={{ base: "nowrap", sm: "wrap", md: "wrap", lg: "nowrap", xl: "nowrap", "2xl": "nowrap" }}
            >

                {/* Card HARD SKILLS */}
                {hardskill.status !== STATUS.FAILED
                    && <Flex direction={"column"} width={"35rem"}>
                        <Text textStyle="4xl" fontWeight="bold">Hard Skills</Text>
                        <Box
                            margin={{ base: "0", sm: "0", md: "0", lg: "3rem", xl: "3rem", "2xl": "3rem" }}
                            marginY={{ base: "1rem", sm: "1rem", md: "1rem", lg: undefined, xl: undefined, "2xl": undefined }}
                            backgroundColor={"gray.100"}
                            _dark={{ backgroundColor: "gray.900" }}
                            width={"100%"}
                            padding={"3rem"}
                            borderRadius={"15px"}
                        >
                            <Text textStyle="md" fontWeight="normal">
                                {hardskill.status === STATUS.IDLE
                                    && <ProgressCircleRoot value={null} size="sm">
                                        <ProgressCircleRing cap="round" />
                                    </ProgressCircleRoot>
                                }
                                {hardskill.status === STATUS.SUCCESS
                                    && <StyledMarkdown content={hardskill.occurrence!} />
                                }
                            </Text>
                        </Box>
                    </Flex>
                }

                {/* Card SOFT SKILLS */}
                {softskill.status !== STATUS.FAILED
                    && <Flex direction={"column"} width={"35rem"}>
                        <Text textStyle="4xl" fontWeight="bold">Soft Skills</Text>
                        <Box
                            margin={{ base: "0", sm: "0", md: "0", lg: "3rem", xl: "3rem", "2xl": "3rem" }}
                            marginY={{ base: "1rem", sm: "1rem", md: "1rem", lg: undefined, xl: undefined, "2xl": undefined }}
                            backgroundColor={"gray.100"}
                            _dark={{ backgroundColor: "gray.900" }}
                            width={"100%"}
                            padding={"3rem"}
                            borderRadius={"15px"}
                        >
                            <Text textStyle="md" fontWeight="normal">
                                {softskill.status === STATUS.IDLE
                                    && <ProgressCircleRoot value={null} size="sm">
                                        <ProgressCircleRing cap="round" />
                                    </ProgressCircleRoot>
                                }
                                {softskill.status === STATUS.SUCCESS
                                    && <StyledMarkdown content={softskill.occurrence!} />
                                }
                            </Text>
                        </Box>
                    </Flex>
                }
            </Flex>

            {/* Sezione Projects */}
            {projects.status !== STATUS.FAILED
                && <Flex direction={"column"} width={"100%"}>
                    <Text textStyle="4xl" fontWeight="bold">Projects</Text>

                    {projects.status === STATUS.IDLE
                        && <ProgressCircleRoot value={null} size="sm">
                            <ProgressCircleRing cap="round" />
                        </ProgressCircleRoot>
                    }
                    {projects.status === STATUS.SUCCESS
                        && <SliderCards centerCount={1} cards={projects.occurrences!} />
                    }
                </Flex>
            }
        </>
    )
};

export default Component;
