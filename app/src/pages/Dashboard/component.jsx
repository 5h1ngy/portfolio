import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Outlet } from "react-router-dom";

import { IconButton } from '@chakra-ui/react'
import { Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'

import { DragHandleIcon, HamburgerIcon, ViewIcon } from '@chakra-ui/icons'
import { GrHomeRounded, GrImage, GrVolume, GrGroup, GrInbox } from "react-icons/gr";
import { GrCloudUpload, GrCloudDownload } from "react-icons/gr";

import withConfig from '@app/hocs/withConfig'
import withRouter from '@app/hocs/withRouter'
import MultipleSwitch from '@app/components/MultipleSwitch'
import Navbar from '@app/components/Navbar'
import ActionBar from '@app/components/ActionBar'
import withContainer from './container';
import Drawer from './Drawer'

import { useTheme } from "./component.styles";

/**
 * 
 * @param {object} props 
 * @param {{navigate: import('react-router-dom').NavigateFunction}} props.router
 * @returns 
 */
function Dashboard({ actions, state, router, config, children }) {
    const DEBUG_MODE = { border: config.DEBUG_MODE ? '1px solid red' : '' }

    const [isDrawer] = useMediaQuery('(min-width: 1022px)')
    const { isOpen: drawerIsOpen, onOpen: drawerOnOpen, onClose: drawerOnClose } = useDisclosure()

    const [positionContent, setPositionContent] = useState('inherit')

    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    const options = [
        {
            key: "enableHiddenFiles", icon: <ViewIcon />,
            enable: state.header.multipleSwitch.options.enableHiddenFiles
        },
    ]
    const switchOptions = [
        {
            key: "enableViewModeGrid", icon: <DragHandleIcon />,
            enable: state.header.multipleSwitch.switchOptions.enableViewModeGrid
        },
        {
            key: "enableViewModeList", icon: <HamburgerIcon />,
            enable: state.header.multipleSwitch.switchOptions.enableViewModeList
        },
    ]

    const onClickOption = (key, value) => {
        actions.setHeaderOptions(key, value)
    }
    const onClickSwitchOption = (key, value) => {
        actions.setHeaderSwitchOptions(key, value)
    }

    const navigation = [
        {
            key: 'home',
            enable: state.navbar.navigation.home,
            icon: <GrHomeRounded />,
            label: "Home"
        },
        {
            key: 'documents',
            enable: state.navbar.navigation.documents,
            icon: <GrInbox />,
            label: "Documents"
        },
        {
            key: 'images',
            enable: state.navbar.navigation.images,
            icon: <GrImage />,
            label: "Images"
        },
        {
            key: 'music',
            enable: state.navbar.navigation.music,
            icon: <GrVolume />,
            label: "Music"
        },
        {
            key: 'work',
            enable: state.navbar.navigation.work,
            icon: <GrGroup />,
            label: "Work"
        }
    ]
    function onClickNavbar(key, value) {
        actions.setNavbarNavigation(key, value)
        router.navigate(key)
    }

    const actionBarActions = [
        {
            icon: <GrCloudDownload />
        },
        {
            icon: <GrCloudUpload />
        }
    ]

    // Scrolling layer of body
    useEffect(() => {
        window.addEventListener('scroll', function scrollEventListener() {
            if (window.scrollY < 140) setPositionContent('inherit')
            else setPositionContent('0vh')
        })
    })

    // Switch viewmode
    useEffect(() => {
        if (isDrawer) actions.setNavbarMode('FULL')
        else actions.setNavbarMode('DRAWER')
    }, [isDrawer])

    return <Grid {...style.mainContainer}>

        <GridItem {...DEBUG_MODE} {...style.headerContainer}>
            {state.navbarMode === 'DRAWER'
                ? <IconButton {...style.headerButtonDrawer}
                    icon={<HamburgerIcon />}
                    onClick={() => drawerOnOpen()}
                />
                : undefined
            }

            <Spacer />

            <MultipleSwitch
                options={options}
                switchOptions={switchOptions}
                onClickOption={onClickOption}
                onClickSwitchOption={onClickSwitchOption}
            />
        </GridItem>

        {state.navbarMode === 'FULL'
            ? <GridItem {...DEBUG_MODE} {...style.navbarContainer}>
                <Navbar navigation={navigation} onClick={onClickNavbar} />
            </GridItem>
            : drawerIsOpen
                ? <Drawer
                    isOpen={drawerIsOpen}
                    onOpen={drawerOnOpen}
                    onClose={drawerOnClose}
                >
                    <Navbar navigation={navigation} onClick={onClickNavbar} invertTheme />
                </Drawer>
                : undefined}

        <GridItem {...DEBUG_MODE} {...style.bodyContainer(isDrawer)}>
            <ActionBar position={{ top: positionContent }} navigation={state.body.actionBar.navigation} actions={actionBarActions} />

            {!children ? <Outlet /> : children}

            <Spacer />
            <GridItem {...DEBUG_MODE} {...style.footerContainer}>
                Footer
            </GridItem>
        </GridItem>

    </Grid>;
}

Dashboard.propTypes = {
    config: PropTypes.object.isRequired,
    children: PropTypes.element
}

Dashboard.defaultProps = {

}

export default withContainer(withRouter(withConfig('pages.Dashboard', Dashboard)))