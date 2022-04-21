import { Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getProjectsOverview } from "../api/apiClient";
import { ContentfulPagination, ProjectOverviewItem } from "../api/types";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import HeroSection from "../components/HeroSection";
import MyProjects from "../components/MyProjects";
import Seo from "../components/Seo";
import DefaultContainer from "../containers/DefaultContainer";

type HomePageProps = {
	data: ContentfulPagination<ProjectOverviewItem>;
};

const Home: NextPage<HomePageProps> = ({ data }) => {
	return (
		<>
			<DefaultContainer>
				<Head>
					<Seo />
				</Head>

				<Stack
					as="main"
					spacing="250px"
					justifyContent="center"
					alignItems="flex-start"
					px={{ base: "5vw", md: "10vw" }}
					mt={{ base: "15vh", md: "22.5vh" }}>
					<HeroSection />
					<AboutMe />
					<MyProjects projects={data} />
					<ContactMe />
				</Stack>
			</DefaultContainer>
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	try {
		const { data } = await getProjectsOverview();

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
