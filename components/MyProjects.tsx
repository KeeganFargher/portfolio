/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, Stack, Heading, Text, SimpleGrid, Flex, Box, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { ProjectOverviewItem } from "../api/types";
import ProjectCard from "./ProjectCard";

type MyProjectsProps = {
	projects: ProjectOverviewItem[];
};

const MyProjects: React.FC<MyProjectsProps> = ({ projects }) => {
	const handleClick = (event: string) => {
		console.log(event);
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

					{projects?.map((project, index) => {
						// hacky kinda way to make a
						if (index > 0 && index % 2 === 0) {
							return <Box />;
						}

						return (
							<ProjectCard
								{...project}
								imageUrl="https://i.ibb.co/GkcNhB7/usapeec.jpg"
								index={index}
							/>
						);
					})}

					{/* <ProjectCard
						title="Vellux Africa"
						tags={["Azure", "IoT", ".NET Core"]}
						imageURL="https://i.ibb.co/GkcNhB7/usapeec.jpg"
						description="A website that provides roadmap for various fields in Programming and help people learn to code for free."
						deployLink="google.com"
						link="google.com"
						githubLink="google.com"
						index={0}
					/>

					<ProjectCard
						title="USAPEEC"
						tags={["next.js"]}
						imageURL="https://i.ibb.co/GkcNhB7/usapeec.jpg"
						description="A website that provides roadmap for various fields in Programming and help people learn to code for free."
						deployLink="google.com"
						githubLink="google.com"
						index={1}
					/>

					<Box />
					<Box />

					<ProjectCard
						title="USAPEEC"
						tags={["next.js"]}
						imageURL="https://i.ibb.co/GkcNhB7/usapeec.jpg"
						description="A website that provides roadmap for various fields in Programming and help people learn to code for free."
						deployLink="google.com"
						githubLink="google.com"
						index={2}
					/> */}
				</SimpleGrid>
			</Stack>
		</>
	);
};

export default MyProjects;
