/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "@chakra-ui/react";
import React from "react";

import NextLink from "next/link";

type ProjectLinkProps = {
	id: string;
	handleClick: (event: string) => void;
	children: JSX.Element | JSX.Element[];
};

const ProjectLink: React.FC<ProjectLinkProps> = ({ handleClick, id, children }) => {
	return (
		<NextLink href="/projects/[id]/" as={`/projects/${id}`} passHref>
			<Link href={`/projects/${id}`} onClick={() => handleClick("project_click")}>
				{children}
			</Link>
		</NextLink>
	);
};

export default ProjectLink;
