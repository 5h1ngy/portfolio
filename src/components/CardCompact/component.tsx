import _ from "lodash";
import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export interface Props {
  title: string;
  callback: Function;
  callbackRef: number;
}

const Component: React.FC<Props> = ({ title, callback, callbackRef }) => {
  return (
    <Flex overflow="hidden" flexDirection="row"
    minHeight="14rem" maxHeight="14rem"
      minWidth="5rem" maxWidth="5rem"
      borderRadius={"15px"} backgroundColor={"gray.100"}
      _dark={{ backgroundColor: "gray.900" }}
      align="center" justify="center" onClick={() => callback(callbackRef)}
    >
      <Text
        textStyle="sm"
        fontWeight="medium"
        writingMode="vertical-rl" // Imposta il testo in verticale
      // textOrientation="upright" // Mantiene il testo leggibile in verticale
      >
        {title}
      </Text>
    </Flex>
  );
};

export default Component;
