import React, { useEffect } from "react";
import { chakra, Flex, Stack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

type ContainerProps = {
	children: JSX.Element | JSX.Element[];
};

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<>
			<Navbar />
			<Flex as="main" justifyContent="center" flexDirection="column">
				{children}
			</Flex>
			<Stack alignItems="center" mt={10} mb={5}>
				<Text textAlign="center" fontSize="sm">
					Designed and Developed by Keegan Fargher.
					<br />
					Built with{" "}
					<chakra.span fontWeight="semibold" color="brand.400">
						Next.js
					</chakra.span>{" "}
					&{" "}
					<chakra.span fontWeight="semibold" color="brand.400">
						Chakra UI
					</chakra.span>
					. Hosted on{" "}
					<chakra.span fontWeight="semibold" color="brand.400">
						Vercel
					</chakra.span>
					.
				</Text>
			</Stack>
		</>
	);
};

export default Container;
