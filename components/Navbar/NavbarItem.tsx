import React from "react";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

type NavbarItemProps = {
	href: string;
	children: string;
};

const NavbarItem: React.FC<NavbarItemProps> = ({ href, children }) => {
	return (
		<NextLink href={href} passHref>
			<Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
				{children}
			</Button>
		</NextLink>
	);
};

export default NavbarItem;
