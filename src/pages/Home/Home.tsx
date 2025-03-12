import React from "react";
import { Text } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";
import { Flex, HStack } from "@chakra-ui/react";

import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import GalacticOrbiter from "react-goblin-system/components/GalacticOrbiter";
import SectionCard from "react-goblin-system/components/SectionCard";

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import StyledMarkdown from "@/components/StyledMarkdown";

import About from "./components/About";
import SoftSkills from "./components/Softskills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const avatarTechs = {
    centerImage: '/logos/avatar.png',
    orbits: [
        {
            radius: 150,
            orbitDuration: 6,
            planets: [
                { imgSrc: `/logos/typescript.svg` },
                { imgSrc: `/logos/python.svg` },
            ],
        },
        {
            radius: 250,
            orbitDuration: 9,
            planets: [
                { imgSrc: `/logos/nodejs.svg` },
                { imgSrc: `/logos/mysql.svg` },
                { imgSrc: `/logos/docker.svg` },
            ],
        },
        {
            radius: 350,
            orbitDuration: 12,
            planets: [
                { imgSrc: `/logos/vitejs.svg` },
                { imgSrc: `/logos/react.svg` },
            ],
        }
    ]
};

const Home: React.FC<Bind & WithRouterProps> = ({ state }) => <>

    <HStack width="100%"
        height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }}
    >
        <GalacticOrbiter {...avatarTechs} />
    </HStack>

    <About />

    <Flex id="skills" width="100%" direction={"row"} gap={"4rem"} justifyContent={"center"}
        wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'nowrap', xl: 'nowrap', "2xl": 'nowrap' }}
    >
        <SectionCard
            status={state.hardskill.status}
            isEmpty={state.hardskill.occurrence === undefined}
            header={{
                title: 'Hard Skills',
            }}
            body={{
                disableStyle: false,
                content: <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={state.hardskill.occurrence!} />
                </Text>
            }}
            empty={{
                icon: <CiFolderOff />,
                title: "No Data Found",
                description: "no information present",
            }}
        />
        <SoftSkills />
    </Flex>

    <Projects />

    <Contacts />
</>

export default withContainer(withRouter(Home));
