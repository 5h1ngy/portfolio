import { Flex, HStack } from "@chakra-ui/react";

import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import GalacticOrbiter from "react-goblin-system/components/GalacticOrbiter";

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";

import About from "./components/About";
import HardSkills from "./components/Hardskills";
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

const Home: React.FC<Bind & WithRouterProps> = () => <>

    <HStack width="100%"
        height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }}
    >
        <GalacticOrbiter {...avatarTechs} />
    </HStack>

    <About />

    <Flex id="skills" width="100%" direction={"row"} gap={"4rem"} justifyContent={"center"}
        wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'nowrap', xl: 'nowrap', "2xl": 'nowrap' }}
    >
        <HardSkills />
        <SoftSkills />
    </Flex>

    <Projects />

    <Contacts />
</>

export default withContainer(withRouter(Home));
