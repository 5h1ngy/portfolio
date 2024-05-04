import _ from "lodash";
import React from 'react';

import { Flex } from '@chakra-ui/react';

import FileSystemItem from "@app/components/FileSystemItem";
import { useTheme } from "./component.styles";

function FileSystemGrid({ config, currentFolder, occurrences, onSelect }) {
    const DEBUG_MODE = { border: config.DEBUG_MODE ? '1px solid red' : '' }

    const style = useTheme()

    return <Flex {...DEBUG_MODE} {...style.styleContent}>
        {occurrences.map(occurrence =>
            <FileSystemItem key={crypto.randomUUID()}
                item={{ name: occurrence.name, type: occurrence.type, folder: currentFolder }}
                onClick={(path) => onSelect(path)}
            />
        )}
    </Flex>
}

export default FileSystemGrid;