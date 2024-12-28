import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";

import getRandomColor from "@/utils/getRandomColor"
import { FaGithub } from "react-icons/fa";
import { SiStorybook, SiSwagger } from "react-icons/si";
import { SiGoogledocs } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

export interface Props {
  _id: number;
  title: string;
  thumbnail?: string,
  topics?: string[],
  description?: string,
  links?: Record<string, string>,
  urlCallback: Function;
}

const Component: React.FC<Props> = ({ thumbnail, title, description, topics, links, urlCallback }) => {

  return (<Card.Root overflow="hidden" flexDirection="row" alignItems={"center"}
    maxHeight="16rem" minHeight="16rem" minWidth="30rem" maxWidth="30rem"
    borderRadius={"15px"} backgroundColor={"gray.100"}
    _dark={{ backgroundColor: "gray.900" }}
  >

    <Flex flexDirection="column">

      {thumbnail && <Image
        margin={"1rem"}
        width={"10rem"}
        height={"10rem"}
        src={thumbnail}
        alt="Green double couch with wooden legs"
      />}

      {links && <Flex // height={"14rem"} 
        flexDirection={"row"}
        padding={"0.5rem"} gap={"0.8rem"}
        borderLeftWidth={"1px"} justifyContent={"center"}
      >

        {links?.docs && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
          <SiGoogledocs />
          <Text textStyle="xs" fontWeight="normal">Docs</Text>
        </IconButton>}


        {links?.swagger && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.swagger)} >
          <SiSwagger />
          <Text textStyle="xs" fontWeight="normal">Swagger</Text>
        </IconButton>}

        {links?.storybook && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.storybook)} >
          <SiStorybook />
          <Text textStyle="xs" fontWeight="normal">Storybook</Text>
        </IconButton>}

        {links?.host && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.host)} >
          <CiGlobe />
          <Text textStyle="xs" fontWeight="normal">Host</Text>
        </IconButton>}

      </Flex>}
    </Flex>

    <Card.Body gap="2">

      <Card.Title lineClamp="3">
        {title}
        <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback()} >
          <FaGithub />
        </IconButton>
      </Card.Title>

      {topics && description && <Card.Description>
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Text textStyle="sm" fontWeight="normal" lineClamp="3">{description}</Text>}

          {topics && <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            <Text textStyle="md" fontWeight="normal" lineClamp="3">
              {topics.map(topic =>
                <Badge key={crypto.randomUUID()} colorPalette={getRandomColor()}>{topic}</Badge>
              )}
            </Text>
          </Flex>}

        </Flex>
      </Card.Description>}
    </Card.Body>
  </Card.Root>)
}

export default Component;