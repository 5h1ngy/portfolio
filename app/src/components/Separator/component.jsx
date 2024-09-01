import _ from "lodash";
import React from 'react';
import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

import styles from "./component.module.scss";

/**
 * @param {object} props
 * @param {string} props.color
 * @param {string} props.rotation
 * @param {string} props.type
 * @returns {import('react').ReactElement}
 */
function Component({ color, rotation, type }) {
    const style = (() => {
        switch (type) {
            case "wave": {
                return "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            }
            case "curve": {
                return "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            }
            default: {
                throw "type property must be != '' "
            }
        }
    })()

    return <ChakraProvider>
        <chakra.div className={styles.separator}
            transform={`rotate(${rotation}deg)`}
        >
            <svg className={styles.svg}
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <chakra.path fill={color} d={style} />
            </svg>
        </chakra.div>
    </ChakraProvider>
}

Component.propTypes = {
    color: PropTypes.string,
    rotation: PropTypes.string,
    type: PropTypes.string,
}

export default Component;