import React from 'react';

import { Flex } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/react'

import "./component.css";

/**
 * @returns {import('react').ReactElement}
 */
function Typewriter() {

    return <Flex position={'sticky'} maxWidth={'400px'}>
        <chakra.h4 ariaLabel="Hi! I'm a developer"
            wordBreak={'break-word'}
            fontSize={'9vmin'}
            color={'white'}
            textAlign={'left'}
            fontFamily={'Lato, sans-serif'}
            fontWeight={'700'}
            margin={'1rem 0 1rem 2rem'}
        >
            Hi! I'm a&nbsp;<chakra.span className="typewriter thick"></chakra.span>
        </chakra.h4>
    </Flex>
}

Typewriter.propTypes = {}

export default Typewriter;