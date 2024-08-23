import React from 'react';
import PropTypes from 'prop-types';
import { chakra } from '@chakra-ui/react'

import styles from "./component.module.scss";
import "./component.animation.scss";

/**
 * @param {object} props 
 * @param {{ logo: string }} props.stator 
 * @param {{ rotors: Array<{ icon: string, align: { top: string, bottom: string, left: string, right: string } }> }} props.config 
 * @returns {import('react').ReactElement}
 */
function OrbiterSystem({ stator, rotors }) {

    return <div className={styles.component}>

        <img className={styles.logo}
            src={stator.logo}
        />

        {rotors.map((orbiter, index) =>
            <div className={styles.orbiter}
                key={crypto.randomUUID()}
                style={{
                    width: `${24 + (12 * index)}rem`,
                    height: `${24 + (12 * index)}rem`,
                    animation: `rotate ${index % 2 ? ' 25s' : ' 20s'} linear infinite`,
                }}
            >
                {orbiter.icons.map(icon =>
                    <chakra.div className={styles.icons}
                        key={crypto.randomUUID()}
                        {...icon.align}
                    >
                        <img className={styles.icon}
                            src={icon.icon}
                        />
                    </chakra.div>
                )}
            </div >
        )}
    </div >
}

OrbiterSystem.propTypes = {
    stator: PropTypes.shape({
        logo: PropTypes.any.isRequired
    }).isRequired,
    rotors: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.any.isRequired,
        align: PropTypes.shape({
            top: PropTypes.string,
            bottom: PropTypes.string,
            left: PropTypes.string,
            right: PropTypes.string,
        }).isRequired,
    })).isRequired,
}

export default OrbiterSystem;