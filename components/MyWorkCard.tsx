import React from 'react';
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link
} from '@chakra-ui/react';

const MyWorkCard = () => {
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      maxW="2xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="Article"
      />

      <Box p={6}>
        <Box>
          <Link
            display="block"
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
            fontSize="2xl"
            _hover={{ color: 'gray.600', textDecor: 'underline' }}
          >
            USA Poultry and Egg Export Council (USAPEEC)
          </Link>

          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            Build a cross platform, offline first, multi-lingual, real-time
            mobile application and an admin portal that bridges the gap between
            food product importers worldwide and exporters of U.S. poultry and
            egg products.
          </chakra.p>
        </Box>

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
              />
              <Link
                mx={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Jone Doe
              </Link>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              21 SEP 2015
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default MyWorkCard;
