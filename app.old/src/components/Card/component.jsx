import _ from "lodash";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ChakraProvider, chakra } from "@chakra-ui/react"
import { Flex, Stack } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react"
import { Badge, Tag } from "@chakra-ui/react"
import { IconButton, Image } from "@chakra-ui/react"

import { Icon } from "@chakra-ui/icons"
import { GoGlobe } from "react-icons/go";

import gitHubIcon from "./icons/gitHubIcon";
import styles from "./component.module.scss";

function randomColor() {
    return _.sample([
        "whiteAlpha", "blackAlpha", "gray",
        "red", "orange", "yellow",
        "green", "teal", "blue",
        "cyan", "purple", "pink"
    ])
}

/**
 * @param {object} props
 * @param {string} props.thumbnail
 * @param {string} props.date
 * @param {string} props.name
 * @param {() => void} props.action
 * @param {Array<{ type: string, icon: string, link: string }>} props.actions
 * @param {Array<string>} props.tags
 * @returns {import('react').ReactElement}
 */
function Component({ thumbnail, date, name, action, actions, tags }) {
    const tagColors = []

    function getTagColors() {
        tags.map(function getSingleColor() {
            const color = randomColor();

            if (tagColors.find(tagColor => tagColor === color)) {
                getSingleColor()
            } else {
                tagColors.push(color)
            }
        })
    }

    getTagColors();

    /**
     * @param {Array<{ type: string, icon: string, link: string }>} action 
     * @returns {import('react').ReactElement}
     */
    function getActions(action) {
        let icon = undefined
        let button = undefined

        if (action.icon === "host") icon = GoGlobe
        if (action.icon === "github") icon = gitHubIcon

        if (action.type === "link" && typeof action.link === "string") {
            button = <IconButton key={crypto.randomUUID()}
                className={styles.button} size="md" variant="solid" aria-label=''
                icon={<Icon className={styles.icon} as={icon} boxSize={"1.6rem"} />}
                onClick={() => window.open(action.link)}
            />
        }

        return button
    }

    return <ChakraProvider>
        <chakra.div className={styles.card}>

            <chakra.div className={styles.thumbnail}>
                <Image className={styles.preview} src={thumbnail} alt="thumbnail" objectFit="cover" />

                <Flex className={styles.actions}>
                    {actions.map(getActions)}
                </Flex>
            </chakra.div>

            <chakra.div onClick={typeof action === 'function' ? action : () => { }}>
                <Text className={styles.title} as="b" fontSize="xl">
                    <Badge className={styles.date} colorScheme={randomColor()} as="i" variant="solid">
                        {date}
                    </Badge>
                    {name}
                </Text>

                <Flex className={styles.tags}>
                    {tags.map((tag, index) =>
                        <Tag key={crypto.randomUUID()} className={styles.element}
                            colorScheme={tagColors[index]} size={"md"} variant="solid"
                        >
                            {tag}
                        </Tag>
                    )}
                </Flex>
            </chakra.div>

        </chakra.div>
    </ChakraProvider>
}

Component.propTypes = {
    thumbnail: PropTypes.string,
    date: PropTypes.string,
    name: PropTypes.string,
    action: PropTypes.func,
    actions: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        link: PropTypes.string,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
}

export default Component;