import React from "react";
import NextLink from "next/link";
import { Brand } from "./index";
import { Flex, Heading, Box, Text, Link, Button } from "@chakra-ui/react";
import { BiLayout } from "react-icons/bi";

const Sidebar = () => {
  return (
    <Box
      w='236px'
      h='100%'
      pos='fixed'
      top='0'
      left='0'
      bg='kanban.700'
      borderRight='1px solid #38383d'
      display={{ base: "none", sm: "block", md: "block" }}
    >
      <Flex align='center' h='70px' justify='flex-start' p='20px' gap='10px'>
        <Brand />
        <Heading as='h4' size='md' color='white'>
          Kanban
        </Heading>
      </Flex>
      <Box>
        <Heading
          p='20px'
          mb='10px'
          size='xs'
          textTransform='uppercase'
          color='gray.500'
          fontWeight='600'
          letterSpacing='1px'
        >
          All Boards (8)
        </Heading>
        <NextLink href='/home' legacyBehavior passHref>
          <Link color='gray.500'>
            <Flex
              alin='center'
              gap='10px'
              p='14px 20px'
              mr='13px'
              bg='purple.500'
              borderRadius='0 27px 27px 0'
              color='white'
              textDeco='none'
            >
              <BiLayout style={{ fontSize: "20px" }} />
              <Heading size='sm' fontWeight='600'>
                Plateform Launch
              </Heading>
            </Flex>
          </Link>
        </NextLink>
        <NextLink href='/home' legacyBehavior passHref>
          <Link color='gray.500'>
            <Flex
              alin='center'
              gap='10px'
              p=' 14px 20px'
              mr='13px'
              _hover={{
                background: "purple.500",
                borderRadius: "0 27px 27px 0",
                color: "white",
                textDeco: "none",
              }}
            >
              <BiLayout style={{ fontSize: "20px" }} />
              <Heading size='sm' fontWeight='600'>
                Plateform Launch
              </Heading>
            </Flex>
          </Link>
        </NextLink>
        <NextLink href='/home' legacyBehavior passHref>
          <Link color='gray.500'>
            <Flex
              alin='center'
              gap='10px'
              p='14px 20px'
              mr='13px'
              _hover={{
                background: "purple.500",
                borderRadius: "0 27px 27px 0",
                color: "white",
                textDeco: "none",
              }}
            >
              <BiLayout style={{ fontSize: "20px" }} />
              <Heading size='sm' fontWeight='600'>
                Plateform Launch
              </Heading>
            </Flex>
          </Link>
        </NextLink>
        <Flex align='center' gap='10px' p='14px 20px' color='purple.500'>
          <BiLayout style={{ fontSize: "20px" }} />
          <Button variant='without-bg' p='0'>
            +Create New Board
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Sidebar;
