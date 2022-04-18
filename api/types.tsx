export interface Sys {
	type: string;
	id: string;
	createdAt: string;
	updatedAt: string;
}

export interface ProjectOverviewItem {
	id: string;
	tags: string[];
	created: Date;
	title: string;
	imageUrl: string;
	shortDescription: string;
}

export interface ProjectItem {
	id: string;
	tags: string[];
	created: Date;
	title: string;
	imageUrl: string;
	shortDescription: string;
	longDescription: string;
}

export interface Item<T> {
	fields: T;
	sys: Sys;
}

export interface ContentfulPagination<T> {
	total: number;
	skip: number;
	limit: number;
	items: Item<T>[];
}
