import React from 'react';
import PropTypes from 'prop-types';

import { Drawer, DrawerBody } from '@chakra-ui/react'
import { DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'

import withConfig from '@app/hocs/withConfig'
import { useTheme } from "./Drawer.styles";

/**
 * @param {object} props 
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {() => void} props.onClose 
 * @param {boolean} props.isOpen
 * @returns {import('react').ReactElement}
 */
function CustomDrawer({ config, onClose, isOpen, children }) {

    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    return <Drawer {...style.styleContainer} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent {...style.styleContent}>
            <DrawerCloseButton />
            <DrawerBody {...style.styleBody}>
                {children}
            </DrawerBody>
        </DrawerContent>
    </Drawer>
}

CustomDrawer.propTypes = {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        })
    }),
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default withConfig('pages.Dashboard.Drawer', CustomDrawer);