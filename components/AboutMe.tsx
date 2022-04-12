import {
	SimpleGrid,
	Text,
	Stack,
	Heading,
	Image,
	Flex,
	Box,
	chakra,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverBody,
	PopoverArrow,
	Button,
	useDisclosure,
	ScaleFade,
	Fade,
	List,
	ListIcon,
	ListItem,
	Divider,
	Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile, FaArrowRight } from "react-icons/fa";

const AboutMe = () => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
				<Stack spacing={4}>
					<Heading fontSize="2xl">About Me</Heading>

					<Text color="textSecondary" fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
						Hey there 👋, I'm Keegan Fargher, I've been close to a computer since an early age, and
						been passionate about it ever since.
						<br />
						<br />
						I am currently working at Netgen Custom Software where we build backend systems / APIs
						using .NET Core and mobile applications using React Native. In my 3 years at the
						company, I have architected, developed, maintained and led many successful projects,
						some having 60k+ active users.
						<br />
						<br />
						Since we are a small company, I often find myself filling many roles, whether that be
						setting up a new CI / CD pipeline, deploying mobile apps to the stores, creating figma
						designs or managing client relationships.
						<br />
						<br />
						When I'm not coding, I enjoy gardening / growing things and cooking (
						<Link href="https://recipes.keeganfargher.co.za" isExternal>
							check out my recipes!
						</Link>
						)
						<br />
						<br />
						If you want to learn a bit more about what I do on a day to day basis,{" "}
						<Button colorScheme="brand" onClick={() => onToggle()} variant="link">
							{isOpen ? "show less" : "show more"}
						</Button>
						.
						{/* <Fade in={isOpen}>
							<List mt={3} spacing={3}>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Architected, developed, maintained, tested, led and deployed 10+ .NET Core web
									applications and / or React Native (Expo) mobile apps
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Integrated Unit & Integration testing into the project work flow
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Setup a reusable admin portal template which included authentication (login,
									forgot password, etc.), user management, audit logs, email and SMS sending which
									sped up our projects by 3 weeks and reduced bugs significiantly
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Mentored and trained new hires / juniors; delegating work and helping problem
									solve
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Established and maintained client relationships
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Setup CI / CD for projects using Azure Devops
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Setup coding workflow process using code reviews, pull requests, branches and CI /
									CD
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Improved our clients' system architecture by migrating from .NET Framework to NET
									Core, integrating SOLID principals and implementing a 3-tier architecture
									(Presentation, Application and Data tier)
								</ListItem>
								<ListItem>
									<ListIcon as={FaArrowRight} color="brand.500" />
									Identified we needed better application monitoring & error tracking and integrated
									a self-hosted instance of Sentry using Docker / Docker Compose
								</ListItem>
							</List>
						</Fade> */}
					</Text>
				</Stack>

				<Flex justifyContent="center" position="relative">
					<Box maxW={{ base: "300px", lg: "350px" }} maxH={{ base: "300px", lg: "350px" }}>
						<Image
							src="https://svgsilh.com/svg/26432.svg"
							filter="invert(0.1)"
							zIndex={3}
							position="absolute"
							top={0}
							right={0}
							w={{ base: "100px", lg: "150px" }}
							alt=""
						/>
						<Image
							src="https://keeganfargher.co.za/_next/image?url=%2Fstatic%2Fimages%2Favatar.png&w=256&q=75"
							w={{ base: "300px", lg: "350px" }}
							h={{ base: "300px", lg: "350px" }}
							alt="Abdul Rahman"
						/>
					</Box>
				</Flex>
			</SimpleGrid>
		</>
	);
};

export default AboutMe;
