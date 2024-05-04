import React from 'react';
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import { useTheme } from "./component.styles";

/**
 * @param {object} props
 * @param {boolean} props.invertTheme 
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {{ icon: import('react').ReactElement }} props.actions 
 * @param {{ label: string, href: string }} props.navigation 
 * @param {{ }} props.position 
 * @returns {import('react').ReactElement}
 */
function ActionBar({ config, actions, navigation, position }) {

    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    return <Flex {...style.styleContainer(position)}>

        <Breadcrumb {...style.styleNavigation} separator={<ChevronRightIcon {...style.styleNavigationSeparator} />}>
            {navigation.map((item, index) =>
                <BreadcrumbItem key={crypto.randomUUID()} isCurrentPage={index === navigation.length - 1}>
                    <BreadcrumbLink {...style.styleBreadcrumbLink} href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>

        <Flex {...style.styleAction}>
            {actions.map(item =>
                <Stack key={crypto.randomUUID()}>
                    <IconButton icon={item.icon} {...style.styleButton} />
                </Stack>
            )}
        </Flex>


    </Flex>
}

ActionBar.propTypes = {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            primaryColor: PropTypes.string.isRequired,
            secondaryColor: PropTypes.string.isRequired,
        })
    }).isRequired,
    actions: PropTypes.arrayOf(PropTypes.shape({
        icon: PropTypes.element,
    })),
    navigation: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
    })),
    position: PropTypes.object.isRequired,
}

export default ActionBar;