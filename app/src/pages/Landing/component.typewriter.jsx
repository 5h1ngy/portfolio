import React, { useState, useEffect } from 'react';

import { Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'
import Typewriter from 'typewriter-effect';

import styles from "./component.typewriter.module.scss";

/**
 * @returns {import('react').ReactElement}
 */
function Component(props) {

    return <chakra.div className={styles.component}>
        <Typewriter
            options={{
                delay: 50,
                loop: true,
                autoStart: true,
                strings: "Hello I'm 5h1ngy!",
                deleteSpeed: 50,
            }}
            onInit={typewriter => typewriter
                //.pasteString("Hello I'm 5h1ngy!")
                .deleteChars(7)
                .typeString("a Developer!")
                .pauseFor(10000)
                .deleteChars(12)
                .typeString("5h1ngy!")
                .pauseFor(5000)
                .start()
            } />
    </chakra.div>
}

Component.propTypes = {}

export default Component;