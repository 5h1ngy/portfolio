import React, { useMemo } from "react";
import { Link, Spacer, Text } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";
import { Flex, HStack } from "@chakra-ui/react";

import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import { useFooter } from "react-goblin-system/layouts/Transformer"
import GalacticOrbiter from "react-goblin-system/components/GalacticOrbiter";
import SectionCard from "react-goblin-system/components/SectionCard";
import StyledMarkdown from "react-goblin-system/components/StyledMarkdown";

import { withContainer, Bind } from "@/hocs/withSlicePortfolio";
import SliderCards from "@/components/SliderCards";

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

const Home: React.FC<Bind & WithRouterProps> = ({ state: { about, hardskill, softskill, projects, contacts, } }) => {

    useFooter(useMemo(() => <>
        <Text>&copy; {new Date().getFullYear()} fe-react-portfolio. All rights reserved.</Text>
        <Spacer />
        <HStack gapX={4}>
            {Object.entries(contacts.occurrence ?? {}).map(([href, label]) =>
                <Link href={href}>{label}</Link>
            )}
        </HStack>
    </>, [contacts]))

    return <>

        <HStack width="100%"
            height={{ base: "30vh", sm: "60vh", md: "60vh", lg: '60vh', xl: '80vh', "2xl": '80vh' }}
        >
            <GalacticOrbiter {...avatarTechs} />
        </HStack>

        <SectionCard
            status={about.status}
            isEmpty={about.occurrence === undefined}
            empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
            style={{ alignItems: "flex-start" }}
            header={{ title: 'About' }}
            body={{
                disableStyle: true,
                content: <Text textStyle="md" fontWeight="normal">
                    <StyledMarkdown content={about.occurrence!} />
                </Text>
            }}
        />

        <Flex id="skills" width="100%" direction={"row"} gap={"4rem"} justifyContent={"center"}
            wrap={{ base: "wrap", sm: "wrap", md: "wrap", lg: 'nowrap', xl: 'nowrap', "2xl": 'nowrap' }}
        >
            <SectionCard
                status={hardskill.status}
                isEmpty={hardskill.occurrence === undefined}
                empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
                style={{ alignItems: "flex-start" }}
                header={{ title: 'Hard Skills' }}
                body={{
                    disableStyle: false,
                    content: <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={hardskill.occurrence!} />
                    </Text>
                }}
            />

            <SectionCard
                status={softskill.status}
                isEmpty={softskill.occurrence === undefined}
                empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
                style={{ alignItems: "flex-start" }}
                header={{ title: 'Soft Skills' }}
                body={{
                    disableStyle: false,
                    content: <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={softskill.occurrence!} />
                    </Text>
                }}
            />
        </Flex>

        <SectionCard
            status={projects.status}
            isEmpty={projects.occurrences === undefined}
            empty={{ icon: <CiFolderOff />, title: "No Data Found", description: "no information present", }}
            style={{ alignItems: "flex-start" }}
            header={{ title: 'Projects' }}
            body={{
                disableStyle: true,
                style: { gap: "1rem" },
                content: <>
                    {Object.entries(projects.occurrences).map(([category, repos]) => (
                        <SliderCards
                            key={category}
                            title={category}
                            centerCount={1}
                            cards={[...repos].sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())}
                        />
                    ))}
                </>
            }}
        />

    </>
}

export default withContainer(withRouter(Home));
