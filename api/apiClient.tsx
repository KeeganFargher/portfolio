import axios from "axios";
import { ContentfulPagination, ProjectOverviewItem } from "./types";

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_API_KEY;

const URL = `https://cdn.contentful.com/spaces/${SPACE_ID}`;

const API = axios.create({
	baseURL: URL,
	timeout: 20000,
	headers: {
		"content-type": "application/json",
	},
});

const getProjectsOverview = async () => {
	return API.get<ContentfulPagination<ProjectOverviewItem>>(`/entries`, {
		params: {
			select: "fields.title,fields.shortDescription,fields.tags,fields.created,sys.id",
			content_type: "project",
			order: "fields.created",
			access_token: ACCESS_TOKEN,
		},
	});
};

const getProjectSingle = async (id: string) => {
	return API.get<ContentfulPagination<ProjectOverviewItem>>(`/entries`, {
		params: {
			select: "fields.title,fields.shortDescription,fields.id",
			content_type: "project",
			access_token: ACCESS_TOKEN,
		},
	});
};

export { getProjectsOverview, getProjectSingle };
