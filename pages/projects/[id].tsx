import { Avatar, Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { ArticleJsonLd, NextSeo } from "next-seo";
// @ts-ignore
import mdxPrism from "mdx-prism";
import dateFormat from "dateformat";
import readingTime from "reading-time";
import axios from "axios";
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

const Project: NextPage<ProductPageProps> = ({ metadata, source }) => {
	if (!metadata) {
		return <Box>Could not find the project!</Box>;
	}

	const { title, created, longDescription, imageUrl, shortDescription } = metadata?.fields ?? {};
	const { id, updatedAt } = metadata?.sys ?? {};

	return (
		<>
			<NextSeo
				title={title}
				description={shortDescription}
				canonical={`https://keeganfargher.co.za/projects/${id}`}
				openGraph={{
					url: `https://keeganfargher.co.za/projects/${id}`,
					site_name: personalInfo.name,
					title,
					description: shortDescription,
					type: "article",
					article: {
						authors: [personalInfo.name],
						publishedTime: created.toString(),
						modifiedTime: updatedAt,
						tags: ["Programming", "Web Development", "Software Engineering"],
					},
					images: [
						{
							url: imageUrl,
							alt: title,
						},
					],
				}}
				additionalMetaTags={[
					{ property: "twitter:card", content: "summary_large_image" },
					{
						property: "twitter:url",
						content: `https://keeganfargher.co.za/projects/${id}`,
					},
					{ property: "twitter:title", content: title },
					{ property: "twitter:description", content: shortDescription },
					{ property: "twitter:image", content: imageUrl },
				]}
			/>
			<ArticleJsonLd
				url={`https://keeganfargher.co.za/projects/${id}`}
				title={title}
				images={[imageUrl]}
				datePublished={created.toString()}
				dateModified={updatedAt.toString()}
				authorName={personalInfo.name}
				publisherName={personalInfo.name}
				publisherLogo={personalInfo.profilePictureUrl}
				description={shortDescription}
			/>

			<DefaultContainer>
				<Stack my="15vh" justifyContent="center" alignItems="center">
					<Stack w={["100vw", "95vw"]} maxW="680px" p={["20px", "20px", "24px", "24px"]}>
						<Heading fontSize={["3xl", "3xl", "5xl", "5xl"]} color="displayColor">
							{title}
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
									{personalInfo.name} &bull; {dateFormat(created, "mmmm d, yyyy")}
								</Text>
							</Stack>
							<Stack>
								<Text fontSize={["xs", "xs", "sm", "sm"]} color="textSecondary">
									{readingTime(longDescription).text}
								</Text>
							</Stack>
						</Stack>

						<Stack borderRadius="10px" minH="200px">
							<Image src={imageUrl} borderRadius="10px" w="100%" h="auto" mx="auto" alt="" />
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

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await getProjectsOverview(200);

	return {
		paths: data.items.map((item) => ({
			params: { id: item.sys.id },
		})),
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { id } = params ?? {};

		const { data } = await getProjectSingle(id as string);

		const project = data.items?.[0];

		const mdxSource = await serialize(project.fields.longDescription, {
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
			notFound: true,
			props: {},
			revalidate: 6400,
		};
	}
};
