import _ from "lodash";
import React from 'react';

import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react'
import { DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'

import Card from "@app/components/Card";

export default function ({ project }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const action = project.action === "modal"
        ? () => onOpen()
        : () => { }

    return <React.Fragment>
        <Card {...project} action={action} />

        <Drawer size={"lg"} placement={"right"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                {/* <DrawerHeader>
                    {`xl drawer contents`}
                </DrawerHeader> */}

                <DrawerBody style={{ fontSize: '1.25rem' }}>
                    <ReactMarkdown
                        children={project.desc}
                        // Skip this if you don't use ChakraUI
                        components={ChakraUIRenderer()}
                        // Skip this if you don't use ChakraUI
                        skipHtml
                    />
                </DrawerBody>

            </DrawerContent>
        </Drawer>
    </React.Fragment>
}