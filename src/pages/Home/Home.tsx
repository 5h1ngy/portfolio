import React, { useEffect, useMemo } from "react";
import { Badge, Box, Link, Spacer, Text, WrapItem } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react"
import { Flex, HStack } from "@chakra-ui/react";
import { CiFolderOff } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiGoogledocs, SiStorybook, SiSwagger } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { GoAlert } from "react-icons/go";

import { getRandomColor } from 'react-goblin-system/shared/utils';
import withRouter, { WithRouterProps } from "react-goblin-system/hocs/withRouter"
import { useFooter } from "react-goblin-system/layouts/Transformer"
import GalacticOrbiter from "react-goblin-system/components/GalacticOrbiter";
import SectionCard from "react-goblin-system/components/SectionCard";
import StyledMarkdown from "react-goblin-system/components/StyledMarkdown";
import SuperCard from "react-goblin-system/components/SuperCard";

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

const Home: React.FC<Bind & WithRouterProps> = ({ state: { about, hardskill, softskill, selfHosted, projects, contacts, } }) => {
    const colors = useMemo(() => (
        Array.from({ length: Object.keys(projects.occurrences).length }).map(() => getRandomColor())
    ), [projects.occurrences])


    useFooter(useMemo(() => <>
        <Text>&copy; {new Date().getFullYear()} fe-react-portfolio. All rights reserved.</Text>
        <Spacer />
        <HStack id={"contacts"} gapX={4}>
            {Object.entries(contacts.occurrence ?? {}).map(([label, href]) =>
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
            id={"about"}
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
            id={"open-source"}
            status={selfHosted.status}
            isEmpty={selfHosted.occurrences.length === 0}
            empty={{ icon: <GoAlert />, title: "Work in progress...", description: "No Projects Found" }}
            style={{ alignItems: "flex-start" }}
            header={{ title: 'Selfhosted open-source' }}
            // subHeader={{content: 'Test'}}
            body={{
                disableStyle: true,
                content: <>
                    <SliderCards
                        title="ASD"
                        cards={selfHosted.occurrences}
                    />
                </>
            }}
        />

        <SectionCard
            id={"projects"}
            status={projects.status}
            isEmpty={projects.occurrences === undefined}
            empty={{ icon: <GoAlert />, title: "Work in progress...", description: "No Projects Found" }}
            style={{ alignItems: "flex-start" }}
            header={{ title: 'Projects' }}
            body={{
                disableStyle: true,
                content: <Wrap display="flex" justifyContent={"center"} padding={'2rem'}>
                    {Object.entries(projects.occurrences).map(([category, repos], catIndex) => <>
                        {repos.map((repo, index) =>
                            <Flex key={crypto.randomUUID()} flexDirection="column" alignItems="flex-start" gap="1rem">

                                <Badge colorPalette={colors[catIndex]} visibility={index === 0 ? "visible" : "hidden"} size={"lg"}>
                                    {category}
                                </Badge>

                                <SuperCard
                                    title={repo.name}
                                    topics={repo.topics}
                                    description={repo.description}
                                    thumbnail={`/thumbnails/${repo.name}.png`}
                                    thumbnailFallback={IoCodeSlash}
                                    orientation="vertical"
                                    links={[
                                        { label: "GitHub", icon: <FaGithub />, onClick: () => window.open(repo.html_url) },
                                        ...(typeof repo.homepage === 'string' && repo.homepage !== ''
                                            ? [
                                                { label: "Deploy", icon: <CiGlobe />, onClick: () => window.open(repo.homepage!), },
                                            ]
                                            : []),
                                    ]}
                                />
                            </Flex>
                        )}
                        {/* Forza un'interruzione di linea dopo ogni categoria */}
                        <WrapItem flexBasis="100%" />
                    </>)}
                </Wrap>
            }}
        />
    </>
}

export default withContainer(withRouter(Home));
