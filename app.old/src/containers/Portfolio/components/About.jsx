import _ from "lodash";
import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import withRouter from "@app/hocs/withRouter";

import whoIm from "@app/assets/sections/about.jsonc";
import styles from "./About.module.scss";

function About(props) {
    const [markdown, setMarkdown] = useState();

    async function loadMarkdown() {
        const module = await import(`./../../../assets/sections/${whoIm.descFile}.md`);
        setMarkdown(module.default)
    }

    useEffect(() => {
        loadMarkdown();
    }, [])

    return <Flex className={styles.component} {...props}>

        <Heading className={styles.header} as='h1' size='3xl'>
            {whoIm.title}
        </Heading>

        <Flex className={styles.content}>
            <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            />
        </Flex>
    </Flex>
}

export default withRouter(About)