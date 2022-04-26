/* eslint-disable react/no-children-prop */
import {
	Text,
	Container,
	Divider,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getProjectsOverview } from "../../api/apiClient";
import { ContentfulPagination, ProjectOverviewItem } from "../../api/types";
import ProjectCard from "../../components/ProjectCard";
import Seo from "../../components/Seo";
import DefaultContainer from "../../containers/DefaultContainer";

type ProjectsProps = {
	data: ContentfulPagination<ProjectOverviewItem>;
};

const Projects: NextPage<ProjectsProps> = ({ data }) => {
	const [query, setQuery] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value);

	const { items } = data;

	const filteredItems = React.useMemo(
		() => items.filter(({ fields }) => fields.title.toUpperCase().includes(query.toUpperCase())),
		[items, query],
	);

	return (
		<>
			<Seo />
			<DefaultContainer>
				<Stack
					spacing={10}
					justifyContent="center"
					px={["5vw", "10vw"]}
					my={["15vh", "15vh", "22.5vh", "22.5vh"]}>
					<Stack spacing={5}>
						<Heading color="displayColor" fontSize={{ base: "4xl", md: "6xl" }}>
							Projects
						</Heading>
						<Text fontSize={{ base: "14px", md: "16px" }}>
							Here's an overview of projects I've worked on professionally. If you find any
							interesting, please read the case study to find out more! 🙏
						</Text>
						<InputGroup maxW="400px">
							<InputRightElement pointerEvents="none" children={<FaSearch />} />
							<Input
								type="text"
								placeholder="Search projects"
								value={query}
								onChange={handleChange}
							/>
						</InputGroup>
						<Divider />
					</Stack>
					<SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
						{filteredItems.map((project, index) => (
							<ProjectCard key={project.sys.id} {...project.fields} id={project.sys.id} index={0} />
						))}
					</SimpleGrid>
				</Stack>
			</DefaultContainer>
		</>
	);
};

export default Projects;

export const getStaticProps = async () => {
	try {
		const { data } = await getProjectsOverview(100);

		return {
			props: { data },
			revalidate: 7200,
		};
	} catch (error) {
		return {
			props: { data: null },
			revalidate: 100,
		};
	}
};
