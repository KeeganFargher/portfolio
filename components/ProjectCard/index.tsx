/* eslint-disable jsx-a11y/anchor-is-valid */
import { Text, Image, Link, Box, Heading } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";
import ProjectCardTag from "./ProjectCardTag";
import { ProjectOverviewItem } from "../../api/types";

type ProjectCardProps = ProjectOverviewItem & {
	imageUrl: string;
	index?: number | undefined;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	imageUrl,
	title,
	shortDescription,
	created,
	id,
	tags,
	index = 0,
}) => {
	const handleClick = (event: string) => {
		console.log(event);
	};

	return (
		<>
			<Box
				width="full"
				marginTop={{ base: "1", sm: "3" }}
				display="flex"
				flexDirection={{ base: "column", sm: index % 2 === 0 ? "row" : "row-reverse" }}
				justifyContent="space-between">
				<Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
					<Box
						width={{ base: "100%", sm: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", sm: "5%" }}
						marginTop="5%">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={imageUrl}
								alt="some good alt text"
								objectFit="contain"
							/>
						</Link>
					</Box>
					<Box zIndex="1" width="100%" position="absolute" height="100%">
						<Box
							bgGradient="radial(purple.200 1px, transparent 1px)"
							backgroundSize="20px 20px"
							opacity="0.4"
							height="100%"
						/>
					</Box>
				</Box>
				<Box
					display="flex"
					flex="1"
					flexDirection="column"
					justifyContent="center"
					marginTop={{ base: "3", sm: "0" }}>
					<ProjectCardTag tags={tags} />
					<Heading marginTop="2">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							{title}
						</Link>
					</Heading>

					<Text fontSize="sm" color="gray.300">
						{new Date(created).toLocaleDateString()}
					</Text>

					<Text as="p" marginTop="2" color="gray.300" fontSize="lg">
						{shortDescription}
					</Text>

					<NextLink href={`/projects/${id}`} passHref>
						<Link isExternal href={`/projects/${id}`}>
							<Text display={{ base: "none", md: "block" }} fontSize={{ base: "md", md: "lg" }}>
								Read Case Study &rarr;
							</Text>
						</Link>
					</NextLink>
				</Box>
			</Box>
		</>
	);
};

export default ProjectCard;
