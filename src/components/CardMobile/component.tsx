import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";

import getRandomColor from "@/utils/getRandomColor"
import { FaGithub } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { SiGoogledocs } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
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

  return (<Card.Root overflow="hidden" flexDirection="column" alignItems={"center"}
    borderRadius={"15px"} backgroundColor={"gray.100"}
    _dark={{ backgroundColor: "gray.900" }}
  >

    {thumbnail && <Image margin={"1rem"} width={"10rem"} height={"10rem"} src={thumbnail} alt="" />}

    <Card.Body gap="2">

      <Card.Title>
        {title}
        <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback()} >
          <FaGithub />
        </IconButton>
      </Card.Title>

      {topics && description && <Card.Description>
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Text textStyle="sm" fontWeight="normal">{description}</Text>}

          {topics && <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            <Text textStyle="md" fontWeight="normal">
              {topics.map(topic =>
                <Badge key={crypto.randomUUID()} colorPalette={getRandomColor()}>{topic}</Badge>
              )}
            </Text>
          </Flex>}

        </Flex>
      </Card.Description>}

    </Card.Body>

    {links && <Card.Footer flexDirection={"row"}
      padding={"1.5rem"} gap={"0.8rem"}
      borderTopWidth={"1px"} justifyContent={"start"}
      width={"100%"}
      flexWrap={"wrap"}
    >

      {links?.docs && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
        <SiGoogledocs />
        <Text textStyle="md" fontWeight="normal">Docs</Text>
      </IconButton>}

      {links?.swagger && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
        <SiSwagger />
        <Text textStyle="md" fontWeight="normal">Swagger</Text>
      </IconButton>}

      {links?.storybook && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
        <SiStorybook />
        <Text textStyle="md" fontWeight="normal">Storybook</Text>
      </IconButton>}

      {links?.host && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
        <CiGlobe />
        <Text textStyle="md" fontWeight="normal">Host</Text>
      </IconButton>}

    </Card.Footer>}

  </Card.Root>)
}

export default Component;