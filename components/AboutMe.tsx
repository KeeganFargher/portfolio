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
						<br />I am a full-stack developer working in a small team. I designed and developed new
						features for a payment processing system called{" "}
						<Link href="https://sidpayment.com/" isExternal>
							SID Instant EFT
						</Link>
						. I work on everything from modifying the database to backend coding and styling of the
						websites. I am also involved in code reviews and sprint planning.
						<br />
						<br />
						When I'm not coding, I enjoy gardening / growing things and cooking (
						<Link href={personalInfo.recipes} isExternal>
							check out my recipes!
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
										Implemented JWT authentication to ensure no one can intercept a transaction.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Improved transaction performance for Investec bankers by +-50%.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Implemented unit and integration tests for our payment processor.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Noticed Kubernetes was killing pods in the middle of a transaction so I
										implemented{" "}
										<Link
											href="https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"
											isExternal>
											Liveness, Readiness and Startup Probes
										</Link>{" "}
										to ensure a transaction runs to completion before the pod is killed.
									</ListItem>
									<ListItem>
										<ListIcon as={FaArrowRight} color="brand.500" />
										Fixed many long-standing bugs that improved transaction completion rate by
										+-10%.
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
