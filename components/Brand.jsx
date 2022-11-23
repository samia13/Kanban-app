import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Brand = ({ xsShow = false }) => {
  return (
    <Flex
      w={26}
      h={22}
      justify='space-between'
      display={xsShow && { base: "block", sm: "none", md: "none" }}
    >
      <Text
        as='span'
        w='6px'
        display='inline-block'
        h='100%'
        bg='purple.500'
        borderRadius='4px'
      ></Text>
      <Text
        as='span'
        w='6px'
        display='inline-block'
        h='100%'
        bg='purple.500'
        opacity='0.7'
        borderRadius='4px'
      ></Text>
      <Text
        as='span'
        w='6px'
        display='inline-block'
        h='100%'
        bg='purple.500'
        opacity='0.5'
        borderRadius='4px'
      ></Text>
    </Flex>
  );
};

export default Brand;
