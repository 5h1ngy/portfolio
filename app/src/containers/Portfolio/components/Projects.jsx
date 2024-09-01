import _ from "lodash";
import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'

import section from "@app/assets/sections/projects.jsonc";
import withRouter from "@app/hocs/withRouter"

import Cards from "./Projects.Cards";
import styles from "./Projects.module.scss";

async function fetchDataSection() {
    const projectParsed = [];

    for (let project of section.content) {
        const descContent = await import(`./../../../assets/sections/${project.descFile}.md`)

        projectParsed.push({
            thumbnail: project.thumbnail,
            date: project.date,
            name: project.name,

            action: project.action,
            actions: project.actions,

            tags: project.tags.map(tag => tag),
            desc: descContent.default
        });
    }

    return projectParsed
}

function Projects(props) {
    const [sections, setSections] = useState([]);

    useEffect(() => {
        fetchDataSection()
            .then(sectionParsed => setSections(sectionParsed))
    }, [])

    return <Flex className={styles.component} {...props}>

        <Heading className={styles.header} as='h1' size='3xl'>
            {section.title}
        </Heading>

        <Flex className={styles.content}>
            {sections.map((project) =>
                <Cards key={crypto.randomUUID()} project={project} />
            )}
        </Flex>
    </Flex>
}

export default withRouter(Projects)