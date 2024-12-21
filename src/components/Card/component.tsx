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

  return (<Card.Root maxHeight="20rem" maxWidth="40rem" overflow="hidden" boxShadow="0px 0px 5px 3px rgba(0,0,0,0.4)"
  flexDirection="row"
  >

    <Image
      width={"10rem"}
      src={thumbnail}
      alt="Green double couch with wooden legs"
    />

    <Card.Body gap="2">
      <Card.Title lineClamp="3">{title}</Card.Title>
      {topics && <Card.Description lineClamp="3" >
        <Flex direction="row" wrap={"wrap"} gap={"1rem"}>

          {description && <Card.Description lineClamp="3">
            {description}
          </Card.Description>}

          <Flex direction="row" wrap={"wrap"} gap={"0.4rem"}>
            {topics.map(topic =>
              <Badge colorPalette={getRandomColor()}>{topic}</Badge>
            )}
          </Flex>

        </Flex>
      </Card.Description>}
    </Card.Body>

    {actions && <Card.Footer>
      {actions}
    </Card.Footer>}

  </Card.Root>)
}

export default Component;