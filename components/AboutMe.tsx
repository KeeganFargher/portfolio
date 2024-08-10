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
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import personalInfo from "../utils/constants/personalInfo";

const AboutMe = () => {
	const { isOpen, onToggle } = useDisclosure();

	const onReadMoreClick = () => {
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
						I'm a member of the team developing{" "}
						<Link href="https://www.mrisoftware.com/za/products/property-central/" isExternal>
							Property Central
						</Link>
						; a comprehensive property management solution. Most of my time is spent converting a 20
						year old VB.NET WinForms desktop application into a modern application using .NET and
						Angular; trying to unwrangle stored procs, VB code and database triggers.
						<br />
						The other 10% of my job is working on new features based on market needs.
						<br />
						<br />
						When I'm not coding, I enjoy hiking, running and gym (
						<Link href={personalInfo.strava} isExternal>
							join me on Strava 🏃
						</Link>
						)
						<br />
						<br />
						If you want to learn some of the fun things I've done so far while working here{" "}
						<Button colorScheme="brand" onClick={onReadMoreClick} variant="link">
							{isOpen ? "show less" : "show more"}
						</Button>
						.
						<Fade in={isOpen}>
							{isOpen && (
								<List mt={3} spacing={3}>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Successfully converted tens of thousands of lines of VB, stored procedures,
										database triggers and views into a modern .NET Core and Angular architecture.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Resurrected our unit/integration testing framework from the grave, fixing
										thousands of tests and integrating it into our CI pipelines.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Upgraded our Angular frontend from v12 to v18 in my spare time.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Rewrote our Azure pipelines into modern YAML templates.
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
