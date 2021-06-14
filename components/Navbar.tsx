import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  useColorMode
} from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { AiOutlineMenu } from 'react-icons/ai';
import Logo from './Logo';

export default function Navbar() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <chakra.header
      position="sticky"
      top={0}
      bg={bg}
      w="full"
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow="md"
      zIndex={99}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Flex>
          <chakra.a
            href="/"
            title="Choc Home Page"
            display="flex"
            alignItems="center"
          >
            <Logo />
            <VisuallyHidden>Choc</VisuallyHidden>
          </chakra.a>
          <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            Keegan Fargher
          </chakra.h1>
        </Flex>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <IconButton
              onClick={toggleColorMode}
              aria-label={`Turn on ${colorMode} mode`}
              icon={
                colorMode === 'light' ? <MoonIcon /> : <SunIcon color="white" />
              }
            />
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">Blog</Button>
            <Button variant="ghost">Company</Button>
            <Button variant="ghost">Sign in</Button>
          </HStack>

          <Box display={{ base: 'inline-flex', md: 'none' }}>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Button w="full" variant="ghost" onClick={toggleColorMode}>
                Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
              </Button>
              <Button w="full" variant="ghost">
                Features
              </Button>
              <Button w="full" variant="ghost">
                Pricing
              </Button>
              <Button w="full" variant="ghost">
                Blog
              </Button>
              <Button w="full" variant="ghost">
                Company
              </Button>
              <Button w="full" variant="ghost">
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
