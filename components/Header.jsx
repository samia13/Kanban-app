import React from "react";
import { Flex, Heading, Button, Text } from "@chakra-ui/react";
import { Brand } from "./index";
import { BiPlus } from "react-icons/bi";

const Header = () => {
  return (
    <Flex
      h={70}
      bg='kanban.700'
      align='center'
      justify='space-between'
      p='20px'
      ml={{ base: "0", sm: "236px" }}
      borderBottom='1px solid #38383d'
    >
      <Heading as='h4' size='md' color='white'>
        <Flex align='center' gap='5px'>
          <Brand xsShow={true} />
          Plateform Launch
        </Flex>
      </Heading>
      <Button
        color='white'
        bg='purple.500'
        size='sm'
        _hover={{
          background: "brand.purple",
        }}
        p={15}
        borderRadius={21}
        fontWeight={600}
      >
        <BiPlus />
        <Text
          display={{
            base: "none",
            sm: "none",
            md: "block",
          }}
        >
          Add New Task
        </Text>
      </Button>
    </Flex>
  );
};

export default Header;
