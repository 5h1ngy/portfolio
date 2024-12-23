import _ from "lodash";
import React from "react";
import { Badge, Card, Flex, Image } from "@chakra-ui/react"

import getRandomColor from "@/utils/getRandomColor"

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
      marginY={"2rem"}
      width={"10rem"}
      height={"10rem"}
      src={thumbnail}
      alt="Green double couch with wooden legs"
    />}

    <Card.Body gap="2">

      <Card.Title lineClamp="3">{title}</Card.Title>

      {topics && description && <Card.Description lineClamp="3" >
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Card.Description lineClamp="3">
            {description}
          </Card.Description>}

          {topics && <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            {topics.map(topic =>
              <Badge colorPalette={getRandomColor()}>{topic}</Badge>
            )}
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