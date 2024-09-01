import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Outlet, useNavigate } from "react-router-dom";

import { chakra } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

import avatarUser from '@app/assets/icons/avatar-user.svg'
import logoJavascript from '@app/assets/icons/logo-javascript.svg'
import logoReact from '@app/assets/icons/logo-react.svg'
import logoRedux from '@app/assets/icons/logo-redux.svg'
import logoNodeJs from '@app/assets/icons/logo-node-js.svg'
import logoTypescript from '@app/assets/icons/logo-typescript.svg'
import logoNestJs from '@app/assets/icons/logo-nest-js.svg'
import logoMongoDb from '@app/assets/icons/logo-mongo-db.svg'

// import ActionBar from '@app/components/ActionBar'
import OrbiterSystem from '@app/components/OrbiterSystem';
import Typewriter from './component.typewriter';

import styles from "./component.module.scss";

export const orbiterProps = {
    stator: { logo: avatarUser },
    rotors: [
        {
            icons: [
                { icon: logoJavascript, align: { top: `18.5rem`, left: `18.5rem` } },
                { icon: logoReact, align: { top: `18.5rem`, right: `18.5rem` } },
                { icon: logoRedux, align: { bottom: `18.5rem`, left: `18.5rem` } },
            ]
        },
        {
            icons: [
                { icon: logoNodeJs, align: { top: `28.5rem`, left: `28.5rem` } },
                { icon: logoTypescript, align: { top: `28.5rem`, right: `28.5rem` } },
                { icon: logoNestJs, align: { bottom: `28.5rem`, left: `28.5rem` } },
                { icon: logoMongoDb, align: { bottom: `28.5rem`, right: `28.5rem` } },
            ]
        }
    ]
}

/**
 * @param {object} props 
 * @param {import('react').ReactElement} props.children
 * @returns {import('react').ReactElement}
 */
function HomeScroll({ children }) {
    const navigate = useNavigate()

    useEffect(() => {
        if (location.pathname === '/') navigate('home')
    }, [])

    return <Grid className={styles.component}>

        <Flex className={styles.preview}>
            <Typewriter />
            <OrbiterSystem {...orbiterProps} />
        </Flex>

        <GridItem className={styles.body}
            border-top-radius={'25px'}
        >

            {!children ? <Outlet /> : children}

            <Spacer />

        </GridItem>

    </Grid >;
}

HomeScroll.propTypes = {
    children: PropTypes.element,
}

export default HomeScroll;