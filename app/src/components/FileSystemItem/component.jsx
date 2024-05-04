import _ from "lodash";
import React from 'react';
import PropTypes from 'prop-types'

import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import { FcFolder, FcFile, FcAudioFile, FcImageFile } from "react-icons/fc";

import { useTheme } from "./component.styles";

function getIconType(itemExtension) {
    if (['txt', 'doc', 'xls'].includes(itemExtension)) {
        return FcFile;
    } else if (['jpg', 'png'].includes(itemExtension)) {
        return FcImageFile;
    } else if (['mp3', 'mp4', 'wav'].includes(itemExtension)) {
        return FcAudioFile;
    }
}

/**
 * @param {object} props
 * @param {{ theme: { primaryColor: string, secondaryColor: string }}} props.config 
 * @param {{ name: string, type: string }} props.item 
 * @param {() => void} props.item 
 * @returns {import('react').ReactElement}
 */
function FileSystemItem({ config, item, onClick }) {
    const DEBUG_MODE = { border: config.DEBUG_MODE ? '1px solid red' : '' }

    const _itemRaw = item.name.split('/');
    const _itemFullName = _itemRaw[_itemRaw.length - 1].split('.');
    const itemName = _itemFullName[0];
    const itemExtension = item.type === "FILE" ? _itemFullName[1] : '';

    const style = useTheme({
        hoverColor: config.theme.hoverColor,
        clickColor: config.theme.clickColor
    })

    function handleOnClick() {
        if (item.type === "DIRECTORY") {
            onClick([item.folder, item.name].join('/'))
        }
    }

    return <Box {...DEBUG_MODE} {...style.containerBox(item.type)} onClick={() => handleOnClick()}>
        {item.type === "FILE"
            ? <Icon {...DEBUG_MODE} {...style.iconStyle} as={getIconType(itemExtension)} />
            : <Icon {...DEBUG_MODE}  {...style.iconStyle} as={FcFolder} />
        }
        <Text {...DEBUG_MODE} {...style.containerHeading}>
            {item.type === "FILE" ?
                `${itemName}.${itemExtension}`
                : itemName
            }
        </Text>
    </Box>
}

FileSystemItem.propTypes = {
    config: PropTypes.shape({
        theme: PropTypes.shape({
            hoverColor: PropTypes.string.isRequired,
            clickColor: PropTypes.string.isRequired,
        })
    }).isRequired,
    item: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default FileSystemItem;