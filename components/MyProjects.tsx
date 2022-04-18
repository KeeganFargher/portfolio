/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Stack, Heading, Text, SimpleGrid, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import ProjectCard from "./ProjectCard";

type MyProjectsProps = {
	projects: ContentfulPagination<ProjectOverviewItem>;
};

const MyProjects: React.FC<MyProjectsProps> = ({ projects }) => {
	const handleClick = (event: string) => {
		// Log analytics
	};

	return (
		<>
			<Stack spacing={8} w="full">
				<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
					<Stack spacing={1}>
						<Stack isInline alignItems="center" justifyContent="space-between">
							<Heading fontSize={{ base: "xl", md: "2xl" }} color="displayColor">
								All Creative Works.
							</Heading>
							<NextLink href="/projects" passHref>
								<Link onClick={() => handleClick("featuredprojects_explore more")}>
									<Text
										display={{ base: "block", md: "none" }}
										fontSize={{ base: "sm", md: "xl" }}
										color="button1"
										_hover={{ color: "button2" }}>
										{" "}
										Explore more &rarr;
									</Text>
								</Link>
							</NextLink>
						</Stack>
						<Text fontSize={{ base: "md", md: "xl" }} color="textSecondary">
							Here's some of my projects that I have worked on.
						</Text>
						<NextLink href="/projects">
							<Link onClick={() => handleClick("featuredprojects_explore more")}>
								<Text display={{ base: "none", md: "block" }} fontSize={{ base: "md", md: "xl" }}>
									Explore more &rarr;
								</Text>
							</Link>
						</NextLink>
					</Stack>

					{projects.items?.map((project, index) => {
						return (
							<React.Fragment key={project.sys.id}>
								{index % 2 === 0 && index > 0 && <Box />}
								<ProjectCard {...project.fields} id={project.sys.id} index={index} />
								{index > 0 && <Box />}
							</React.Fragment>
						);
					})}
				</SimpleGrid>
			</Stack>
		</>
	);
};

export default MyProjects;
