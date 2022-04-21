/* eslint-disable jsx-a11y/anchor-is-valid */
import { Text, Image, Link, Box, Heading } from "@chakra-ui/react";
import React from "react";

import dateFormat from "dateformat";
import ProjectCardTag from "./ProjectCardTag";
import { ProjectOverviewItem } from "../../api/types";
import ProjectLink from "./ProjectLink";

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
		// Log analytics
	};

	return (
		<>
			<Box
				width="full"
				marginTop={{ base: "1", md: "3" }}
				display="flex"
				flexDirection={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
				justifyContent="space-between">
				<Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
					<Box
						width={{ base: "100%", md: "85%" }}
						zIndex="2"
						marginLeft={{ base: "0", md: "5%" }}
						marginTop="5%">
						<Link textDecoration="none" _hover={{ textDecoration: "none" }}>
							<Image
								borderRadius="lg"
								src={imageUrl}
								alt="Abstract image interpretation of the project title"
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
					marginTop={{ base: "3", md: "0" }}>
					<ProjectCardTag tags={tags} />
					<ProjectLink id={id} handleClick={handleClick}>
						<Heading marginTop="2">{title}</Heading>
					</ProjectLink>

					<Text fontSize="md" color="gray.400">
						{dateFormat(created, "mmmm d, yyyy")}
					</Text>

					<Text
						height={{ base: "auto", md: "190px" }}
						as="p"
						marginTop="2"
						marginBottom="2"
						color="gray.200"
						fontSize="md">
						{shortDescription}
					</Text>

					<ProjectLink id={id} handleClick={handleClick}>
						<Text fontSize={{ base: "md", md: "lg" }}>Read Case Study &rarr;</Text>
					</ProjectLink>
				</Box>
			</Box>
		</>
	);
};

export default ProjectCard;
