import { Box, BoxProps, chakra } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";
import React from "react";

const ChakraNextUnwrappedImage = chakra(NextImage, {
	shouldForwardProp: (prop) =>
		[
			"width",
			"height",
			"src",
			"alt",
			"quality",
			"placeholder",
			"blurDataURL",
			"loader",
			"layout",
		].includes(prop),
});

export const ChakraNextImage = (props: ImageProps & BoxProps) => {
	const { src, alt, width, quality, height, objectFit, borderRadius, ...rest } = props;

	return (
		<Box position="relative" height="100%" {...rest}>
			<ChakraNextUnwrappedImage
				w="auto"
				borderRadius="lg"
				h="auto"
				width={width}
				quality={quality}
				height={height}
				layout="fill"
				objectFit={objectFit}
				src={src}
				alt={alt}
				transition="all 0.2s"
			/>
		</Box>
	);
};

export default ChakraNextImage;
