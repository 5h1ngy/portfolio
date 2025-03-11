import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flex } from "@chakra-ui/react";

import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import GalacticOrbiter from "@/components/GalacticOrbiter";

import About from "./sections/About";
import HardSkills from "./sections/Hardskills";
import SoftSkills from "./sections/Softskills";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";

gsap.registerPlugin(ScrollTrigger);

const avatarTechs = [
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
];

const Home: React.FC<Bind & WithRouterProps> = () =>
    <Flex direction={"column"}>
        
        <Flex
            direction="row"
            width="100vw"
            height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }}
            align="center"
            justify="center"
            paddingX={"20vw"}
        >
            <GalacticOrbiter
                centerImage={`/logos/avatar.png`}
                orbits={avatarTechs}
            />
        </Flex>

        <Flex
            id="about"
            width={"100%"}
            direction={"column"}
            justifyContent={"center"}
            gap={"2rem"}
        >
            <About />
        </Flex>

        <Flex
            id="skills"
            width={"100%"}
            direction={"row"}
            gap={"8rem"}
            justifyContent={"center"}
            wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'wrap', xl: 'nowrap', "2xl": 'nowrap' }}

        >
            <HardSkills />
            <SoftSkills />
        </Flex>


        <Flex
            id="projects"
            direction={"column"}
            width={"100%"}
            gap={"1rem"}
        >
            <Projects />
        </Flex>

        <Flex
            id="contacts"
            width={"100%"}
            direction={"column"}
            justifyContent={"center"}
            gap={"2rem"}
        >
            <Contacts />
        </Flex>
    </Flex>

export default withContainer(withRouter(Home));
