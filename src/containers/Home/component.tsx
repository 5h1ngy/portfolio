import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { WithRouterProps } from "@/hocs/withRouter";
import { Box, chakra, Flex, Separator } from "@chakra-ui/react"
// import ReactMarkdown from "react-markdown";

import { Bind } from "./container"
import GalacticOrbiter from "@/components/GalacticOrbiter"
import { useEffect, useState } from "react";
import markdown from "@/assets/about.md"
import techs from "@/assets/techs.md"
import skill from "@/assets/skill.md"
import { Text } from "@chakra-ui/react"
import StyledMarkdown from "./StyledMarkdown";

gsap.registerPlugin(ScrollTrigger);

const Component: React.FC<Bind & WithRouterProps> = (props) => {
    // const [markdown, setMarkdown] = useState();

    // async function loadMarkdown() {
    //     const module = await import(`./../assets/sections/about.md`);
    //     setMarkdown(module.default)
    // }

    // useEffect(() => {
    //     loadMarkdown();
    // }, [])

    return <>

        <Flex direction={"row"} width={'100%'} align={"center"} justify={"center"}>
            <GalacticOrbiter
                centerImage={`${import.meta.env.VITE_BASENAME}/avatar.png`}
                orbits={[
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
                ]}
            />
        </Flex>

        {/* <Box
            backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
            borderWidth='1px' padding={'3rem'}
            borderRadius={'15px'}
            border={'1px'}
            width={'100%'} height={'100vh'}
            // boxShadow="0px 0px 5px 3px rgba(0,0,0,0.4)"
        >
            <Text textStyle="md" fontWeight="normal">
                {markdown}
            </Text>
        </Box> */}

        <Flex
            // backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
            // borderWidth='1px' padding={'3rem'}
            // borderRadius={'15px'}
            // border={'1px'}
            wrap={"wrap"}
            width={'100%'}
            gap={'3rem'}
            align={"start"}
            justify={"center"}
        >

            <Flex direction={"column"} gap={'1rem'}>
                <Text textStyle="4xl" fontWeight="bold">
                    TEST
                </Text>
                <Box
                    backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
                    borderWidth='1px' padding={'3rem'}
                    borderRadius={'15px'}
                    border={'1px'}
                    width={'35rem'}
                >
                    <Text textStyle="md" fontWeight="normal">
                        {markdown}
                    </Text>
                    {/* <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                // components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            /> */}
                </Box>
            </Flex>

            <Flex direction={"column"} gap={'1rem'}>
                <Text textStyle="4xl" fontWeight="bold">
                    TEST
                </Text>
                <Box
                    backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
                    borderWidth='1px' padding={'3rem'}
                    borderRadius={'15px'}
                    border={'1px'}
                    width={'35rem'}
                // width={'30rem'}
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={techs} />
                        {/* {techs} */}
                    </Text>
                    {/* <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                // components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            /> */}
                </Box>
            </Flex>

            <Flex direction={"column"} gap={'1rem'}>
                <Text textStyle="4xl" fontWeight="bold">
                    TEST
                </Text>
                <Separator />
                <Box
                    backgroundColor={"gray.100"} _dark={{ backgroundColor: "gray.900" }}
                    borderWidth='1px' padding={'3rem'}
                    borderRadius={'15px'}
                    border={'1px'}
                    width={'60rem'}
                // width={'30rem'}
                >
                    <Text textStyle="md" fontWeight="normal">
                        <StyledMarkdown content={skill} />
                        {/* {techs} */}
                    </Text>
                    {/* <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                // components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            /> */}
                </Box>
            </Flex>
        </Flex>
        {/* 
        
        Descrizione

        // Splittato su destra
        Stack Tecnologico

        // Slides cards
        Progetti

        Carriera

        <chakra.div width='10rem' height='10rem'
            backgroundColor={"white"} _dark={{ backgroundColor: "black" }}
            borderWidth='1px'
        >

        </chakra.div>

        */}

    </>
}

export default Component;