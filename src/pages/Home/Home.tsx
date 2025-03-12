import React, { useMemo } from "react";
import { Box, Container, Heading, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";
import { Flex, HStack } from "@chakra-ui/react";

import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import { useFooter } from "react-goblin-system/layouts/Transformer"
import GalacticOrbiter from "react-goblin-system/components/GalacticOrbiter";
import SectionCard from "react-goblin-system/components/SectionCard";

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import StyledMarkdown from "@/components/StyledMarkdown";

import Projects from "./components/Projects";

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

const Home: React.FC<Bind & WithRouterProps> = ({ state }) => {

    useFooter(useMemo(() => <>
        <Text>&copy; {new Date().getFullYear()} fe-react-portfolio. All rights reserved.</Text>
        <Spacer />
        <HStack gapX={4}>
            <Link href="https://www.github.com/5h1ngy">GitHub</Link>
            <Link href="https://www.linkedin.com/in/davide-scarano-b228a12b0/">Linkedin</Link>
            <Link href="mailto:sig.scarano@outlook.it">Email</Link>
        </HStack>
    </>, [state.contacts]))


    // <SectionCard
    //     status={state.contacts.status}
    //     isEmpty={state.contacts.occurrence === undefined}
    //     empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
    //     style={{ alignItems: "flex-start" }}
    //     // header={{ title: 'Contacts' }}
    //     body={{
    //         disableStyle: false,
    //         content: <>

    //             <Heading size="4xl" fontWeight="bold">Contacts</Heading>

    //             <Text textStyle="md" fontWeight="normal">
    //                 <StyledMarkdown content={state.contacts.occurrence!} />
    //             </Text>

    //         </>
    //     }}
    // />

    return <>

        <HStack width="100%"
            height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }}
        >
            <GalacticOrbiter {...avatarTechs} />
        </HStack>

        <SectionCard
            status={state.about.status}
            isEmpty={state.about.occurrence === undefined}
            empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
            style={{ alignItems: "flex-start" }}
            header={{ title: 'About' }}
            body={{
                disableStyle: true,
                content: <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={state.about.occurrence!} />
                </Text>
            }}
        />

        <Flex id="skills" width="100%" direction={"row"} gap={"4rem"} justifyContent={"center"}
            wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'nowrap', xl: 'nowrap', "2xl": 'nowrap' }}
        >
            <SectionCard
                status={state.hardskill.status}
                isEmpty={state.hardskill.occurrence === undefined}
                empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
                style={{ alignItems: "flex-start" }}
                header={{ title: 'Hard Skills' }}
                body={{
                    disableStyle: false,
                    content: <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={state.hardskill.occurrence!} />
                    </Text>
                }}
            />

            <SectionCard
                status={state.softskill.status}
                isEmpty={state.softskill.occurrence === undefined}
                empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
                style={{ alignItems: "flex-start" }}
                header={{ title: 'Soft Skills' }}
                body={{
                    disableStyle: false,
                    content: <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={state.softskill.occurrence!} />
                    </Text>
                }}
            />
        </Flex>

        <Projects />

    </>
}

export default withContainer(withRouter(Home));
