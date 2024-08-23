import _ from "lodash";
import React from 'react';
import PropTypes from 'prop-types';

import { chakra } from '@chakra-ui/react'

import withRouter from "@app/hocs/withRouter"
import WhoIm from "./component.whoIm";
import TechStack from "./component.techStack";
import TechStackLegacy from "./component.techStackLegacy";
import ProjectsPublics from "./component.projectsPublics";

import styles from "./component.module.scss";

function Separator({ color, rotation, type }) {
    let style = ''

    if (type === "wave") {
        style = "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    } else if (type === "curve") {
        style = "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
    }

    return <chakra.div className={styles.separator}
        transform={`rotate(${rotation}deg)`}
    >
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
            // position={'relative'}
            display={'block'}
            width={'calc(100% + 1.3px)'}
            height={'90px'}
        >
            <chakra.path fill={color} d={style} />
        </svg>
    </chakra.div>
}

function Presentation() {

    return <>

        <WhoIm marginY='5vh' />

        <chakra.div marginY='5vh'>
            <Separator color={"blue.700"} rotation={'180'} type={"wave"} />
            <TechStack />
            <Separator color={"blue.700"} rotation={'180'} type={"curve"} />
        </chakra.div>

        <TechStackLegacy marginY='5vh' />

        <chakra.div marginY='5vh'>
            <Separator color={"blue.700"} rotation={'180'} type={"wave"} />
            <ProjectsPublics />
            <Separator color={"blue.700"} rotation={'180'} type={"curve"} />
        </chakra.div>

    </>
}

Presentation.propTypes = {
    router: PropTypes.object.isRequired
}

export default withRouter(Presentation)