import React from 'react';
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

import { useTheme } from "./component.styles";

/**
 * @param {object} props
 * @param {boolean} props.invertTheme 
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {{ icon: import('react').ReactElement, label: string, key: string, enable: boolean }} props.navigation 
 * @param { () => void } props.onClick 
 * @returns {import('react').ReactElement}
 */
function Navbar({ invertTheme, config, navigation, onClick }) {
    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    return <Flex {...style.styleContainer}>
        {navigation.map(item =>
            <Stack key={crypto.randomUUID()} {...style.styleStackContainer}>
                <IconButton key={crypto.randomUUID()} {...style.styleButton(invertTheme, item.enable)}
                    icon={item.icon} onClick={() => onClick(item.key, !item.enable)} />
                <Text fontSize='sm' {...style.styleText(invertTheme)}>{item.label}</Text>
            </Stack>
        )}
    </Flex>
}

Navbar.propTypes = {
    invertTheme: PropTypes.bool,
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        })
    }),
    navigation: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        enable: PropTypes.bool.isRequired,
        icon: PropTypes.element.isRequired,
        label: PropTypes.string.isRequired,
    })).isRequired,
    onClick: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
    invertTheme: false,
}

export default Navbar;