/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
	Box,
	Code,
	Heading,
	Link,
	Text,
	Divider,
	useColorMode,
	Image,
	Tooltip,
	LinkProps,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const CustomLink = (props: LinkProps) => {
	const { colorMode } = useColorMode();
	const color = {
		light: "brand.300",
		dark: "brand.300",
	};

	const { href, title } = props;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	const LinkTooltip = (
		<Tooltip label={title}>
			<Link color={color[colorMode]} isExternal {...props} title="" />
		</Tooltip>
	);

	if (isInternalLink) {
		return (
			<NextLink href={href} passHref>
				{LinkTooltip}
			</NextLink>
		);
	}

	return LinkTooltip;
};

const DocsHeading = (props: any) => (
	<Heading
		css={{
			scrollMarginTop: "100px",
			scrollSnapMargin: "100px", // Safari
			"&[id]": {
				pointerEvents: "none",
			},
			"&[id]:before": {
				display: "block",
				height: " 6rem",
				marginTop: "-6rem",
				visibility: "hidden",
				content: `""`,
			},
			"&[id]:hover a": { opacity: 1 },
		}}
		{...props}
		mb="1em"
		mt="2em">
		<Box pointerEvents="auto">
			{props.children}
			{props.id && (
				<Box
					aria-label="anchor"
					as="a"
					color="brand.500"
					fontWeight="normal"
					outline="none"
					_focus={{
						opacity: 1,
						boxShadow: "outline",
					}}
					opacity="0"
					ml="0.375rem"
					href={`#${props.id}`}>
					#
				</Box>
			)}
		</Box>
	</Heading>
);

const Hr = () => {
	const { colorMode } = useColorMode();
	const borderColor = {
		light: "gray.200",
		dark: "gray.600",
	};

	return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MdxComponents = {
	h1: (props: any) => <Heading as="h1" size="xl" my={4} color="displayColor" {...props} />,
	h2: (props: any) => <DocsHeading as="h2" size="lg" fontWeight="bold" {...props} />,
	h3: (props: any) => <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />,
	h4: (props: any) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
	h5: (props: any) => <DocsHeading as="h5" size="sm" fontWeight="bold" {...props} />,
	h6: (props: any) => <DocsHeading as="h6" size="xs" fontWeight="bold" {...props} />,
	img: (props: any) => (
		<Image
			width={600}
			height={300}
			layout="responsive"
			objectFit="contain"
			loading="lazy"
			borderRadius="lg"
			w="auto"
			h="auto"
			mx="auto"
			{...props}
		/>
	),
	inlineCode: (props: any) => <Code colorScheme="brand" fontSize="0.84em" mt={-10} {...props} />,
	code: (props: any) => <Code colorScheme="brand" fontSize="0.84em" mt={-10} {...props} />,
	br: (props: any) => <Box height="24px" {...props} />,
	hr: Hr,
	a: CustomLink,
	p: (props: any) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
	ul: (props: any) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
	ol: (props: any) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
	li: (props: any): JSX.Element => <Box as="li" pb={1} {...props} />,
};

export { CustomLink };

export default MdxComponents;
