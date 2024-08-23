import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom";

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

import ActionBar from '@app/components/ActionBar'
import OrbiterSystem from '@app/components/OrbiterSystem';
import Typewriter from '@app/components/Typewriter';

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
    const [positionContent, setPositionContent] = useState('inherit')

    // Scrolling layer of body
    useEffect(() => {
        window.addEventListener('scroll', function scrollEventListener() {
            if (window.scrollY < 1000) setPositionContent('inherit')
            else setPositionContent('0vh')
        })
    })

    return <Grid className={styles.component}>

        {/* <GridItem className='header'> */}
        {/* <Flex className='content' /> */}
        {/* </GridItem> */}

        <Grid className={styles.preview}>
            <Flex className={styles.fatherBox}
                border-right-radius='50% 100%'
            >
                <Flex className={styles.content}
                    padding-x='5%'
                >
                    <Typewriter />
                    <OrbiterSystem {...orbiterProps} />
                </Flex>
            </Flex>
        </Grid>


        {/* <chakra.div
            // position={'absolute'}
            // left={'0'}
            width={'100%'}
            overflow={'hidden'}
            line-height={'0'}
            // transform={'rotate(180deg)'}
            position={'sticky'}
            marginTop={'90vh'}
        >
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                // position={'relative'}
                display={'block'}
                width={'calc(100% + 1.3px)'}
                height={'42px'}
            >
                <chakra.path fill='blue.900' d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" />
            </svg>
        </chakra.div> */}

        <GridItem className={styles.body}
            border-top-radius={'25px'}
        >
            <ActionBar position={{ top: positionContent }}
                navigation={[{
                    label: "TEST",
                    href: "/asd"
                }]}
            />

            {!children ? <Outlet /> : children}

            <Spacer />

            <GridItem className={styles.footer}> Footer: TODO </GridItem>

        </GridItem>

    </Grid >;
}

HomeScroll.propTypes = {
    children: PropTypes.element,
}

export default HomeScroll;