import React from "react";
import { Tag, SpaceProps, Wrap, WrapItem } from "@chakra-ui/react";

type ProjectCardTagProps = {
	tags: Array<string>;
	marginTop?: SpaceProps["marginTop"];
};

const ProjectCardTag: React.FC<ProjectCardTagProps> = ({ tags, marginTop }) => {
	return (
		<Wrap spacing={2} marginTop={marginTop}>
			{tags?.map((tag) => {
				return (
					<WrapItem key={tag}>
						<Tag size="md" variant="subtle" colorScheme="brand">
							{tag}
						</Tag>
					</WrapItem>
				);
			})}
		</Wrap>
	);
};

export default ProjectCardTag;
