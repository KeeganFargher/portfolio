import { Avatar, Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
// @ts-ignore
import mdxPrism from "mdx-prism";
import dateFormat from "dateformat";
import readingTime from "reading-time";
import { getProjectsOverview, getProjectSingle } from "../../api/apiClient";
import { Item, ProjectItem } from "../../api/types";
import MdxComponents from "../../components/MdxComponents";
import DefaultContainer from "../../containers/DefaultContainer";
import PostContainer from "../../containers/PostContainer";
import personalInfo from "../../utils/constants/personalInfo";

type ProductPageProps = {
	metadata: Item<ProjectItem>;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

type StaticPropsParams = {
	params: {
		id: string;
	};
};

const Project: NextPage<ProductPageProps> = ({ metadata, source }) => {
	if (!metadata) {
		return <Box>Could not find the project!</Box>;
	}

	return (
		<>
			<DefaultContainer>
				<Stack my="15vh" justifyContent="center" alignItems="center">
					<Stack w={["100vw", "95vw"]} maxW="680px" p={["20px", "20px", "24px", "24px"]}>
						<Heading fontSize={["3xl", "3xl", "5xl", "5xl"]} color="displayColor">
							{metadata.fields.title}
						</Heading>

						<Stack
							py={4}
							direction={{ base: "column", md: "row" }}
							alignItems="baseline"
							justifyContent="space-between">
							<Stack isInline alignItems="center">
								<Avatar
									name={personalInfo.name}
									size="xs"
									src={personalInfo.profilePictureUrl}
									border="1px solid textPrimary"
								/>
								<Text fontSize={["xs", "xs", "sm", "sm"]} color="textPrimary">
									{personalInfo.name} &bull; {dateFormat(metadata.fields.created, "mmmm d, yyyy")}
								</Text>
							</Stack>
							<Stack>
								<Text fontSize={["xs", "xs", "sm", "sm"]} color="textSecondary">
									{readingTime(metadata.fields.longDescription).text} &bull; 2342 views
								</Text>
							</Stack>
						</Stack>

						<Stack
							bg="secondary"
							borderRadius="10px"
							minH="200px"
							border="1px"
							borderColor={{ base: "#333", md: "borderColor" }}>
							<Image
								src={metadata.fields.imageUrl}
								borderRadius="10px"
								width={1366}
								height={892}
								w="auto"
								h="auto"
								mx="auto"
								alt=""
							/>
						</Stack>

						<PostContainer>
							<MDXRemote {...source} components={MdxComponents} />
						</PostContainer>
					</Stack>
				</Stack>
			</DefaultContainer>
		</>
	);
};

export default Project;

export async function getStaticPaths() {
	const { data } = await getProjectsOverview();

	return {
		paths: data.items.map((item) => ({
			params: { id: item.sys.id },
		})),
		fallback: false,
	};
}

export const getStaticProps = async ({ params }: StaticPropsParams) => {
	try {
		const { id } = params ?? {};

		const { data } = await getProjectSingle(id);

		const project = data.items?.[0];

		const source = project.fields.longDescription;
		const mdxSource = await serialize(source, {
			mdxOptions: {
				rehypePlugins: [mdxPrism],
			},
		});

		return {
			props: {
				metadata: project,
				source: mdxSource,
			},
			revalidate: 300,
		};
	} catch (error) {
		return {
			props: { data: null },
			revalidate: 360,
		};
	}
};
