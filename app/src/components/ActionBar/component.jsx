import React from 'react';
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

import styles from "./component.module.scss";

/**
 * @param {object} props
 * @param {{ icon: import('react').ReactElement }} props.actions 
 * @param {{ label: string, href: string }} props.navigation 
 * @param {{ }} props.position 
 * @returns {import('react').ReactElement}
 */
function ActionBar({ actions, navigation, position }) {
    const styleComponent = position.top === "inherit" ? {
        paddingX: '40px',
        borderRadius: '65px'
    } : {
        borderBottomRadius: '25px',
        paddingX: '40px',
        boxShadow: "0px 0px 5px 3px rgba(0,0,0,0.1)",
        backgroundColor: "blue.700"
    }

    return <Flex className={styles.component}
        top={position.top}
        {...styleComponent}
    >
        <Breadcrumb className={styles.navigation}
            spacing={'8px'}
            separator={<ChevronRightIcon className={styles.separator} />}
        >
            {navigation.map((item, index) =>
                <BreadcrumbItem key={crypto.randomUUID()} isCurrentPage={index === navigation.length - 1}>
                    <BreadcrumbLink className={styles.breadcrumbLink} href={item.href}>
                        {item.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )}
        </Breadcrumb>

        {actions && <Flex className={styles.actions}>
            {actions.map(item =>
                <Stack key={crypto.randomUUID()}>
                    <IconButton className={styles.button} icon={item.icon} variant={'ghost'} />
                </Stack>
            )}
        </Flex>}

    </Flex>
}

ActionBar.propTypes = {
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