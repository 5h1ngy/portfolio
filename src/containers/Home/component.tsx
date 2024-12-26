import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Flex } from "@chakra-ui/react";

import { WithRouterProps } from "@/hocs/withRouter";
import withRouter from '@/hocs/withRouter';
import GalacticOrbiter from "@/components/GalacticOrbiter";

import { Bind } from "./container";
import bind from "./container";
import About from "./component.about";
import HardSkills from "./component.hardskills";
import SoftSkills from "./component.softskills";
import Projects from "./component.projects";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = ({ actions }) => {
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
            <Flex direction="row" width="100%" height="50vh"
                align="center" justify="center" paddingX={"20vw"}
            >
                <GalacticOrbiter
                    centerImage={`${import.meta.env.VITE_BASENAME}/logos/avatar.png`}
                    orbits={avatarTechs}
                />
            </Flex>


            {/* Card ABOUT */}
            <Flex width={"100%"} direction={"column"} justifyContent={"center"} gap={"2rem"}>
                <About />
            </Flex>

            <Flex width={"100%"} direction={"row"} gap={"8rem"} justifyContent={"center"}
                wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'wrap', xl: 'nowrap', "2xl": 'nowrap' }}
            >

                {/* Card HARD SKILLS */}
                <HardSkills />

                {/* Card SOFT SKILLS */}
                <SoftSkills />

            </Flex>

            {/* Sezione Projects */}
            <Flex direction={"column"} width={"100%"} gap={"1rem"}>
                <Projects />
            </Flex>
        </>
    )
};

export default bind(withRouter(Component));
