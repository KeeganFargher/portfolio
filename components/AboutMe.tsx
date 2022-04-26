import {
	SimpleGrid,
	Text,
	Stack,
	Heading,
	Image,
	Flex,
	Box,
	Button,
	useDisclosure,
	Link,
	Fade,
	List,
	ListIcon,
	ListItem,
} from "@chakra-ui/react";
import { usePlausible } from "next-plausible";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import personalInfo from "../utils/constants/personalInfo";

const AboutMe = () => {
	const { isOpen, onToggle } = useDisclosure();

	const logEvent = usePlausible();

	const onReadMoreClick = () => {
		logEvent("about_me_read_more");
		onToggle();
	};

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
				<Stack spacing={4}>
					<Heading fontSize="2xl">About Me</Heading>

					<Text color="textSecondary" fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
						Hey there 👋, I'm Keegan Fargher, I've always had an interest in computers, even from a
						young age, and coding has been the natural progression of my passion.
						<br />
						<br />
						I am currently working at Netgen Custom Software where we build backend systems / APIs
						using .NET Core and mobile applications using React Native. In my 3 years at the
						company, I have architected, developed, maintained, and led many successful projects,
						some having 60k+ active users.
						<br />
						<br />
						Since we are a small company, I often find myself filling many roles, whether that be
						setting up a new CI / CD pipeline, deploying mobile apps to the stores, creating figma
						designs or managing client relationships.
						<br />
						<br />
						When I'm not coding, I enjoy gardening / growing things and cooking (
						<Link href={personalInfo.recipes} isExternal>
							check out my recipes!
						</Link>
						)
						<br />
						<br />
						If you want to learn a bit more about what I do on a day to day basis,{" "}
						<Button colorScheme="brand" onClick={onReadMoreClick} variant="link">
							{isOpen ? "show less" : "show more"}
						</Button>
						.
						<Fade in={isOpen}>
							{isOpen && (
								<List mt={3} spacing={3}>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Architected, developed, maintained, tested, led and deployed 10+ successful .NET
										Core web applications and / or React Native (Expo) mobile apps
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
										Setup CI / CD for projects using Azure Devops
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Setup coding workflow process using code reviews, pull requests, branches and CI
										/ CD
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Improved our clients' system architecture by migrating from .NET Framework to
										NET Core, integrating SOLID principals and implementing a 3-tier architecture
										(Presentation, Application and Data tier)
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Integrated & maintained a self-hosted instance of Sentry using Docker / Docker
										Compose
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Established and maintained client relationships
									</ListItem>
								</List>
							)}
						</Fade>
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
							src={personalInfo.profilePictureUrl}
							w={{ base: "300px", lg: "350px" }}
							h={{ base: "300px", lg: "350px" }}
							borderRadius="full"
							alt={personalInfo.name}
						/>
					</Box>
				</Flex>
			</SimpleGrid>
		</>
	);
};

export default AboutMe;
