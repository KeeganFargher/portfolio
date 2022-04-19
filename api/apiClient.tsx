import axios from "axios";
import { ContentfulPagination, ProjectItem, ProjectOverviewItem } from "./types";

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

const defaultParams = {
	content_type: "project",
	order: "fields.created",
	access_token: ACCESS_TOKEN,
};

const getProjectsOverview = async () => {
	return API.get<ContentfulPagination<ProjectOverviewItem>>(`/entries`, {
		params: {
			select:
				"fields.title,fields.shortDescription,fields.tags,fields.created,fields.imageUrl,sys.id",
			limit: 3,
			...defaultParams,
		},
	});
};

const getProjectSingle = async (id: string) => {
	if (!id) {
		throw new Error("[getProjectSingle] ID cannot be null or empty!");
	}

	return API.get<ContentfulPagination<ProjectItem>>(`/entries`, {
		params: {
			select:
				"fields.title,fields.shortDescription,fields.tags,fields.created,fields.imageUrl,sys.id,fields.longDescription",
			"sys.id": id,
			...defaultParams,
		},
	});
};

export { getProjectsOverview, getProjectSingle };
