import _ from "lodash";
import React from 'react';
// import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react'

import Separator from "@app/components/Separator"
import About from "@app/containers/Portfolio/components/About";
import Techs from "@app/containers/Portfolio/components/Techs";
import Projects from "@app/containers/Portfolio/components/Projects";
// import styles from "@app/containers/Portfolio/component.module.scss";

const Component = () => <>

    <About />

    <chakra.div >
        <Separator color={"blue.700"} rotation={'180'} type={"wave"} />
        <Techs />
        <Separator color={"blue.700"} rotation={'180'} type={"curve"} />
    </chakra.div>

    <Projects />
</>

export default Component