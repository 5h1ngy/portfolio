import _ from "lodash";
import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import withRouter from "@app/hocs/withRouter"

import projectsPublics from "@app/assets/sections/projects_publics.jsonc";
import styles from "./component.projectsPublics.module.scss";

function ProjectsPublics(props) {
    const [markdown, setMarkdown] = useState();

    async function loadMarkdown() {
        const module = await import(`./../../assets/sections/${projectsPublics.descFile}.md`);
        setMarkdown(module.default)
    }

    useEffect(() => {
        loadMarkdown();
    }, [])

    return <Flex className={styles.projectsPublics} {...props}>

        <Heading className={styles.header} as='h1' size='4xl'>
            {projectsPublics.title}
        </Heading>

        <Flex className={styles.content}>
            <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                // components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            />
        </Flex>
    </Flex>
}

export default withRouter(ProjectsPublics)