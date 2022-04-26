import React from "react";
import { Flex, Box, Text, Slide, useDisclosure, useMediaQuery, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDrawer from "./NavbarDrawer";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
	const [isLargerThan768] = useMediaQuery("768");
	const { isOpen, onOpen, onClose } = useDisclosure();
	const Bracket = styled.span`
		color: #8f9094;
		font-weight: 600;
	`;

	return (
		<Box zIndex="99">
			<Slide direction="top" in transition={{ enter: { duration: 0.5, delay: 0.01 } }}>
				<Flex
					as="nav"
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
					px="3vw"
					py="3"
					borderBottom="0.5px solid #1e2029"
					background="black">
					<NextLink href="/" passHref>
						<Text cursor="pointer" color="displayColor" fontWeight="bold" fontSize="32px">
							<Bracket>&#123;</Bracket> K <Bracket>&#125;</Bracket>
						</Text>
					</NextLink>
					{!isLargerThan768 ? (
						<Box color="textSecondary">
							<NavbarItem href="/">Home</NavbarItem>
							<NavbarItem href="/projects">Projects</NavbarItem>
						</Box>
					) : (
						<Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
					)}
				</Flex>
			</Slide>
			<NavbarDrawer isOpen={isOpen} onClose={onClose} />
		</Box>
	);
};

export default Navbar;
