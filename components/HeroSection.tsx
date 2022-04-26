import {
	Box,
	Button,
	Link,
	Image,
	Text,
	Stack,
	Heading,
	SlideFade,
	useMediaQuery,
	Icon,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFile } from "react-icons/fa";
import React from "react";
import { usePlausible } from "next-plausible";
import personalInfo from "../utils/constants/personalInfo";

function HeroSection() {
	const [isLargerThan800] = useMediaQuery("800");

	const logEvent = usePlausible();

	const handleClick = (event: string) => logEvent(event);

	return (
		<>
			<Stack spacing={10} justifyContent="flex-start" alignItems="flex-start" width="100%">
				<SlideFade dir="top" in transition={{ enter: { duration: 0.4, delay: 0.7 } }}>
					<Box position="relative">
						<Image
							src="https://svgsilh.com/svg/26432.svg"
							filter="invert(0.2)"
							w={{ base: "70px", md: "150px" }}
							position="absolute"
							top={{ base: "0", md: "-15" }}
							left={{ base: "-5", md: "-10" }}
							zIndex={0}
							alt=""
						/>
						<Text
							color="brand.500"
							fontSize="display2"
							fontWeight="medium"
							position="relative"
							zIndex={1}>
							Hey there 👋, I'm-
						</Text>
					</Box>

					<Heading
						mt={0}
						fontSize="display"
						lineHeight="95%"
						letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}
						position="relative"
						zIndex={1}>
						{personalInfo.name}
					</Heading>
				</SlideFade>

				<SlideFade dir="top" in transition={{ enter: { duration: 0.4, delay: 0.8 } }}>
					<Heading
						color="textSecondary"
						fontSize="display2"
						fontWeight="medium"
						whiteSpace="pre-wrap"
						letterSpacing="-1.6px"
						maxWidth={{ base: "100%", md: "800px" }}>
						Working as a full stack software engineer with a focus on{" "}
						<Box color="displayColor" as="span">
							.NET Core
						</Box>{" "}
						and{" "}
						<Box color="displayColor" as="span">
							React Native
						</Box>{" "}
					</Heading>
				</SlideFade>

				<SlideFade dir="top" in transition={{ enter: { duration: 0.4, delay: 0.9 } }}>
					<Text fontSize="display3" color="textSecondary">
						🚀 Working at{" "}
						<Link href="https://www.netgen.co.za/" isExternal>
							Netgen Custom Software
						</Link>
						<br />
						🥕 Enjoying gardening and cooking when I'm not coding
					</Text>
				</SlideFade>

				<SlideFade dir="top" in transition={{ enter: { duration: 0.4, delay: 1.0 } }}>
					<Wrap spacing={4} shouldWrapChildren width="100%">
						<WrapItem>
							<Link href={personalInfo.linkedIn} isExternal>
								<Button
									leftIcon={<Icon as={FaLinkedin} color="brand.300" />}
									position="static"
									size={isLargerThan800 ? "md" : "sm"}
									color="white"
									onClick={() => handleClick("introduction_linkedin")}>
									LinkedIn
								</Button>
							</Link>
						</WrapItem>
						<WrapItem>
							<Link href={`mailto:${personalInfo.email}`} isExternal>
								<Button
									leftIcon={<Icon as={FaEnvelope} color="brand.300" />}
									transition="0.3s"
									position="static"
									size={isLargerThan800 ? "md" : "sm"}
									color="white"
									onClick={() => handleClick("introduction_email")}>
									Email
								</Button>
							</Link>
						</WrapItem>
						<WrapItem>
							<Link href={personalInfo.cv} isExternal>
								<Button
									leftIcon={<Icon as={FaFile} color="brand.300" />}
									transition="0.3s"
									position="static"
									size={isLargerThan800 ? "md" : "sm"}
									color="white"
									onClick={() => handleClick("introduction_cv")}>
									Resume
								</Button>
							</Link>
						</WrapItem>
					</Wrap>
				</SlideFade>
			</Stack>
		</>
	);
}

export default HeroSection;
