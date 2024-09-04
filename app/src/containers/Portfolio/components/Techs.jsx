import _ from "lodash";
import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactApexChart from "react-apexcharts";

import withRouter from "@app/hocs/withRouter";
import techs from "@app/assets/sections/techs.jsonc";
import useTechGraphOptions from "@app/containers/Portfolio/hooks/useTechGraphOptions";

import styles from "./Techs.module.scss";

function Techs(props) {
    const [markdown, setMarkdown] = useState();
    const radarGraphOptions = useTechGraphOptions()

    async function loadMarkdown() {
        const module = await import(`./../../../assets/sections/${techs.descFile}.md`);
        setMarkdown(module.default)
    }

    useEffect(() => {
        loadMarkdown();
    }, [])

    return <Flex className={styles.component}
        {...props}
    >

        <Heading className={styles.header} as='h1' size='3xl'>
            {techs.title}
        </Heading>

        <Flex className={styles.content}>

            {/* Graph */}
            <ReactApexChart type="radar" width={"900px"} height={"900px"}
                {...radarGraphOptions}
            />

            <ReactMarkdown
                children={markdown}
                // Skip this if you don't use ChakraUI
                components={ChakraUIRenderer()}
                // Skip this if you don't use ChakraUI
                skipHtml
            />

        </Flex>
    </Flex >
}

export default withRouter(Techs)