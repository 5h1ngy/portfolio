import _ from "lodash";
import React, { useEffect, Suspense, lazy } from 'react';
import PropTypes from 'prop-types'

import { Flex } from '@chakra-ui/react';

import withRouter from "@app/hocs/withRouter"
import withConfig from "@app/hocs/withConfig"
import { name as namePagesDashboard } from "@app/store/pages/dashboard";
import { name as nameFileSystemNavigator } from "@app/store/containers/fileSystemNavigator";

const Loader = lazy(() => import(`../../components/Loader/index.js`))
const NoItems = lazy(() => import(`../../components/NoItems/index.js`))
const FileSystemGrid = lazy(() => import(`../../components/FileSystemGrid/index.js`))
const FileSystemCards = lazy(() => import(`../../components/FileSystemCards/index.js`))

import { useTheme } from "./component.styles";

function FileSystemNavigator({ config, actions, state, router }) {
    const { currentFolder, loading, occurrences } = state[nameFileSystemNavigator]
    const { header } = state[namePagesDashboard]

    const style = useTheme({
        primaryColor: config.theme.primaryColor,
        secondaryColor: config.theme.secondaryColor
    })

    function makeDirectoryPath(path) {
        return path.split('/')
            .filter(value => value !== '')
            .map((value, index, array) => ({
                label: _.startCase(value),
                href: `/${index !== 0 ? _.slice(array, 0, index + 1).join('/') : value}`
            }))
    }

    useEffect(() => {
        actions.setHeaderOptions('enableHiddenFiles', false)
        actions.setHeaderSwitchOptions('enableViewModeGrid', true)
    }, []);

    useEffect(() => {
        actions.setNavbarNavigation(router.location.pathname, true)
        actions.setBodyActionbarNavigation(makeDirectoryPath(router.location.pathname))
        actions.getNFS(router.location.pathname);
    }, [router.location.pathname]);

    function handleOnSelect(path) {
        const directory = makeDirectoryPath(path)
        actions.setBodyActionbarNavigation(directory)

        const newLocation = directory[directory.length - 1];
        actions.getNFS(newLocation.href);
    }

    return <Flex {...style.mainContainer(loading)}>
        <Suspense>
            <Loader condition={loading}>
                <NoItems condition={occurrences.length !== 0}>

                    {header.multipleSwitch.switchOptions.enableViewModeGrid
                        ? <FileSystemGrid
                            currentFolder={currentFolder}
                            occurrences={occurrences}
                            onSelect={(path) => handleOnSelect(path)}
                        />
                        : undefined
                    }

                    {header.multipleSwitch.switchOptions.enableViewModeList
                        ? <FileSystemCards
                            currentFolder={currentFolder}
                            occurrences={occurrences}
                            onSelect={(path) => handleOnSelect(path)}
                        />
                        : undefined
                    }

                </NoItems>
            </Loader>
        </Suspense>
    </Flex>
}

FileSystemNavigator.propTypes = {
    config: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
}

FileSystemNavigator.defaultProps = {

}

export default withConfig("containers.FileSystemNavigator", withRouter(FileSystemNavigator))