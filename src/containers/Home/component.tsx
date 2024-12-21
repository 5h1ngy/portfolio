import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Text } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/react"

import { WithRouterProps } from "@/hocs/withRouter";
import GalacticOrbiter from "@/components/GalacticOrbiter"
import SliderCards from "@/components/SliderCards"
import StyledMarkdown from "@/components/StyledMarkdown";

import markdown from "@/assets/about.md"
import softskill from "@/assets/softskill.md"
import hardskill from "@/assets/hardskill.md"

import { Bind } from "./container"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ actions, state }) => {
    const { repositories } = state;
    const { doGetRepositories } = actions;

    const avatarTechs = [
        {
            radius: 150,
            orbitDuration: 6,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-typescript.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-python.svg` },
            ],
        },
        {
            radius: 250,
            orbitDuration: 9,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-node-js.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-mysql.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-docker.svg` },
            ],
        },
        {
            radius: 350,
            orbitDuration: 12,
            planets: [
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-vitejs.svg` },
                { imgSrc: `${import.meta.env.VITE_BASENAME}/logos/logo-react.svg` },
            ],
        }
    ];

    useEffect(() => {
        doGetRepositories()
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
                    centerImage={`${import.meta.env.VITE_BASENAME}/avatar.png`}
                    orbits={avatarTechs}
                />
            </Flex>


            {/* Card ABOUT */}
            <Flex direction={"column"} gap={"1rem"} justify={"center"} width={"100%"}>
                <Text textStyle="4xl" fontWeight="bold">About</Text>
                <Box
                    // backgroundColor={"gray.100"}
                    // _dark={{ backgroundColor: "gray.900" }}
                    width={"100%"}
                    padding={"3rem"}
                    borderWidth="1px"
                    borderRadius={"15px"}
                    border={"1px"}
                >
                    <Text textStyle="md" fontWeight="normal">
                        {/* Se vuoi usare lo StyledMarkdown anche qui: */}
                        <StyledMarkdown content={markdown} />
                    </Text>
                </Box>
            </Flex>

            <Flex direction={"row"} gap={"8rem"} width={"100%"} justify={"center"}>

                {/* Card HARD SKILLS */}
                <Flex direction={"column"} width={"35rem"}>
                    <Text textStyle="4xl" fontWeight="bold">Hard Skills</Text>
                    <Box
                        margin={"3rem"}
                        backgroundColor={"gray.100"}
                        _dark={{ backgroundColor: "gray.900" }}
                        boxShadow="0px 0px 5px 3px rgba(0,0,0,0.4)"
                        width={"100%"}
                        padding={"3rem"}
                        borderWidth="1px"
                        borderRadius={"15px"}
                        border={"1px"}
                    >
                        <Text textStyle="md" fontWeight="normal">
                            <StyledMarkdown content={hardskill} />
                        </Text>
                    </Box>
                </Flex>

                {/* Card SOFT SKILLS */}
                <Flex direction={"column"} width={"35rem"}>
                    <Text textStyle="4xl" fontWeight="bold">Soft Skills</Text>
                    <Box
                        margin={"3rem"}
                        backgroundColor={"gray.100"}
                        _dark={{ backgroundColor: "gray.900" }}
                        boxShadow="0px 0px 5px 3px rgba(0,0,0,0.4)"
                        width={"100%"}
                        padding={"3rem"}
                        borderWidth="1px"
                        borderRadius={"15px"}
                        border={"1px"}
                    >
                        <Text textStyle="md" fontWeight="normal">
                            <StyledMarkdown content={softskill} />
                        </Text>
                    </Box>
                </Flex>
            </Flex>

            {/* Sezione Projects */}
            <Flex direction={"column"} gap={"1rem"} width={"100%"}>
                <Text textStyle="4xl" fontWeight="bold">Projects</Text>
                <SliderCards centerCount={2} cards={repositories} />
            </Flex>
        </>
    )
};

export default Component;
