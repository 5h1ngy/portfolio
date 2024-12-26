import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";

import getRandomColor from "@/utils/getRandomColor"
import { SlLogin } from "react-icons/sl";
import { SiGoogledocs } from "react-icons/si";

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
    maxHeight="14rem" minHeight="14rem" minWidth="35rem" maxWidth="35rem"
    borderRadius={"15px"} backgroundColor={"gray.100"}
    _dark={{ backgroundColor: "gray.900" }}
  >

    {thumbnail && <Image
      margin={"1rem"}
      width={"10rem"}
      height={"10rem"}
      src={thumbnail}
      alt="Green double couch with wooden legs"
    />}

    <Card.Body gap="2">

      <Card.Title lineClamp="2">
        {title}
        <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback()} >
          <SlLogin />
        </IconButton>
      </Card.Title>

      {topics && description && <Card.Description>
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Text textStyle="sm" fontWeight="normal" lineClamp="2">{description}</Text>}

          {topics && <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            <Text textStyle="md" fontWeight="normal" lineClamp="2">
              {topics.map(topic =>
                <Badge key={crypto.randomUUID()} colorPalette={getRandomColor()}>{topic}</Badge>
              )}
            </Text>
          </Flex>}

        </Flex>
      </Card.Description>}

    </Card.Body>

    {links && <Card.Footer height={"14rem"} flexDirection={"column"}
      padding={"1.5rem"} gap={"1rem"}
      borderLeftWidth={"1px"} justifyContent={"center"}
    >

      {links?.docs && <IconButton aria-label="" variant={"ghost"} onClick={() => urlCallback(links?.docs)} >
        <SiGoogledocs />
        <Text textStyle="xs" fontWeight="normal">Docs</Text>
      </IconButton>}

    </Card.Footer>}

  </Card.Root>)
}

export default Component;