import React from "react";
import {
	Button,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

type NavbarDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
};

const NavbarDrawer: React.FC<NavbarDrawerProps> = ({ isOpen, onClose }) => {
	const Bracket = styled.span`
		color: #8f9094;
		font-weight: 600;
	`;

	return (
		<>
			<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent backgroundColor="secondary">
					<DrawerCloseButton />
					<DrawerHeader borderBottomWidth="1px">
						<Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
					</DrawerHeader>

					<DrawerBody>
						<Stack spacing="24px">
							<NextLink href="/" passHref>
								<Button as="a" variant="ghost" fontSize="16px">
									Home
								</Button>
							</NextLink>
							<NextLink href="/projects" passHref>
								<Button as="a" variant="ghost" fontSize="16px">
									Projects
								</Button>
							</NextLink>
							<NextLink href="/blog" passHref>
								<Button as="a" variant="ghost" fontSize="16px">
									Blog
								</Button>
							</NextLink>
						</Stack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default NavbarDrawer;
