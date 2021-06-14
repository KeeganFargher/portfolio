import React from 'react';

import {
  chakra,
  Box,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  Stack,
  ListItem,
  UnorderedList,
  Img
} from '@chakra-ui/react';

import MyWorkCard from '../components/MyWorkCard';

export default function Home() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}

      <Box mx="auto" mb={32} px={4} w={{ lg: 8 / 12, xl: 8 / 12 }}>
        <chakra.section
          position="relative"
          height="100vh"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mx="auto"
        >
          <Box
            height={{ base: '90%', md: '60%' }}
            mx="auto"
            textAlign="center"
            maxWidth={['100%', '100%', '100%', '100%', '70%']}
          >
            <Box
              mb={5}
              mx="auto"
              bgGradient="linear(to-l, #3023AE, #f09)"
              boxSize="200px"
              borderRadius="81% 19% 44% 56% / 73% 76% 24% 27% "
              overflow="hidden"
            >
              <Img src={'/avatar.jpg'} alt="Keegan Fargher" />
            </Box>

            <chakra.p
              mb={2}
              fontSize="xl"
              fontWeight="semibold"
              letterSpacing="wide"
              color={useColorModeValue('gray.900', 'gray.300')}
            >
              Hey there! I'm Keegan Fargher 👋👻
            </chakra.p>
            <chakra.h1
              mb={3}
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight="bold"
              lineHeight="shorter"
              color={useColorModeValue('gray.900', 'white')}
            >
              I am a{' '}
              <chakra.span
                bgGradient="linear(to-l, #3023AE, #f09)"
                bgClip="text"
              >
                full stack
              </chakra.span>{' '}
              web and mobile{' '}
              <chakra.span
                bgGradient="linear(to-l, #3023AE, #f09)"
                bgClip="text"
              >
                developer
              </chakra.span>
            </chakra.h1>
            <chakra.p
              mb={5}
              color={useColorModeValue('gray.900', 'gray.300')}
              fontSize={{ md: 'lg' }}
            >
              I love creative problem solving, building ambitious websites and
              apps, and improving processes
            </chakra.p>
          </Box>

          {/* <HeroAvatarBlob /> */}
        </chakra.section>

        <chakra.section
          // bgColor="gray.900"
          height="100vh"
          mx="auto"
        >
          <chakra.h2
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            textAlign="center"
            color={useColorModeValue('gray.900', 'white')}
            mb={5}
          >
            About me
          </chakra.h2>

          <chakra.div
            mb={5}
            width="15%"
            mx="auto"
            style={{
              border: '3px solid',
              borderImageSlice: 1,
              borderWidth: '5px',
              borderImageSource: 'linear-gradient(to left, #3023AE, #f09)',
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0
            }}
          />

          <chakra.p mb={3} fontSize={{ md: 'lg' }}>
            I am a passionate full stack web and mobile developer located in
            Cape Town, South Africa, currently working for{' '}
            <Link isExternal href="https://www.netgen.co.za">
              Netgen Custom Software.
            </Link>
          </chakra.p>
          <chakra.p fontSize={{ md: 'lg' }}>
            Some of my daily activities and work I have done include:
            <UnorderedList spacing={2.5}>
              <ListItem>
                Integrating Unit & Integration testing into the project work
                flow
              </ListItem>
              <ListItem>
                Setting up CI / CD for projects using Azure Devops
              </ListItem>
              <ListItem>
                Setting up coding workflow process using code reviews, pull
                requests, branches and CI / CD
              </ListItem>
              <ListItem>
                Architecting new systems and maintaining existing systems
              </ListItem>
              <ListItem>Mentoring and training up new hires</ListItem>
              <ListItem>Mainting client relationships</ListItem>
              <ListItem>
                Improving our clients' system architecture by migrating from
                .NET Framework to NET Core, integrating SOLID principals and
                implementing a 3-tier architecture (Presentation, Application
                and Data tier)
              </ListItem>
              <ListItem>
                Identified we needed better application monitoring & error
                tracking and integrated a self-hosted instance of Sentry using
                Docker
              </ListItem>
            </UnorderedList>
          </chakra.p>
        </chakra.section>

        <chakra.section height="100vh" mx="auto" w={{ lg: 8 / 12, xl: 8 / 12 }}>
          <chakra.h2
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight="shorter"
            color={useColorModeValue('gray.900', 'white')}
          >
            My Recent Work
          </chakra.h2>
          <chakra.p mb={5} color="gray.500" fontSize={{ md: 'lg' }}>
            Here are a few design projects I've worked on recently. Want to see
            more?
          </chakra.p>

          <Stack mb={5} direction="row" spacing={5}>
            <Button size="sm">Backend</Button>
            <Button size="sm">Mobile</Button>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
            <MyWorkCard />
            <MyWorkCard />
            <MyWorkCard />
          </SimpleGrid>
        </chakra.section>
      </Box>
    </React.Fragment>
  );
}
