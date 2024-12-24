import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, IconButton, Image } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react";

import getRandomColor from "@/utils/getRandomColor"
import { SlLogin  } from "react-icons/sl";

export interface Props {
  _id: number;
  title: string;
  thumbnail?: string,
  topics?: string[],
  description?: string,
  actions?: React.ReactElement;
}

const Component: React.FC<Props> = ({ thumbnail, title, description, topics, actions }) => {

  return (<Card.Root overflow="hidden" flexDirection="row"
    minHeight="14rem" width="35rem" borderRadius={"15px"}
    backgroundColor={"gray.100"}
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

      <Card.Title lineClamp="3">
      {title}
        <IconButton
          aria-label="Call support"
          variant={"ghost"}
          // onClick={}
        >
          <SlLogin  />
        </IconButton>
      </Card.Title>

      {topics && description && <Card.Description>
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Text textStyle="sm" fontWeight="normal" lineClamp="3">{description}</Text>}

          {topics && <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            <Text textStyle="md" fontWeight="normal" lineClamp="3">
              {topics.map(topic =>
                <Badge colorPalette={getRandomColor()}>{topic}</Badge>
              )}
            </Text>
          </Flex>}

        </Flex>
      </Card.Description>}

    </Card.Body>

    {actions && <Card.Footer>
      {actions}
    </Card.Footer>}

  </Card.Root>)
}

export default Component;