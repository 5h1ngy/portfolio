import _ from "lodash";
import React from 'react';

import { Flex, Stack } from '@chakra-ui/react';
import { Button, Heading, Text, Image } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tfoot } from '@chakra-ui/react'
import { Tr, Th, Td } from '@chakra-ui/react'
import { TableCaption, TableContainer } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


import { Icon } from '@chakra-ui/react';
import { FcFolder, FcFile, FcAudioFile, FcImageFile } from "react-icons/fc";

import { useTheme } from "./component.styles";

function getIconType(extension) {
    if (['txt', 'doc', 'xls'].includes(extension)) {
        return FcFile;
    } else if (['jpg', 'png'].includes(extension)) {
        return FcImageFile;
    } else if (['mp3', 'mp4', 'wav'].includes(extension)) {
        return FcAudioFile;
    }
}

function FileSystemCards({ config, currentFolder, occurrences, onSelect }) {
    const DEBUG_MODE = { border: config.DEBUG_MODE ? '1px solid red' : '' }

    const style = useTheme({
        hoverColor: config.theme.hoverColor,
        clickColor: config.theme.clickColor,
        backgroundColor: config.theme.backgroundColor
    })

    return <Flex {...DEBUG_MODE} {...style.styleContent}>
        {occurrences.map(item => {
            const _itemRaw = item.name.split('/');
            const _itemFullName = _itemRaw[_itemRaw.length - 1].split('.');
            const itemName = _itemFullName[0];
            const itemExtension = item.type === "FILE" ? _itemFullName[1] : '';

            return <Card {...DEBUG_MODE} {...style.styleCard(item.type)}
                onClick={() => {
                    if (item.type === "DIRECTORY") {
                        onSelect([currentFolder, item.name].join('/'))
                    }
                }}
            >
                {item.type === "FILE"
                    ? <Icon {...DEBUG_MODE} {...style.iconStyle} as={getIconType(itemExtension)} />
                    : <Icon {...DEBUG_MODE}  {...style.iconStyle} as={FcFolder} />
                }

                <Stack>
                    <CardBody>
                        <Heading size='md'>{itemName}</Heading>

                        <Text py='2'>
                            {item.type}{item.lastModifyDate}
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        })}
    </Flex>
}

export default FileSystemCards;