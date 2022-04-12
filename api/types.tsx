export interface Sys {
	type: string;
}

export interface ProjectOverviewItem {
	id: string;
	tags: string[];
	created: Date;
	title: string;
	shortDescription: string;
}

export interface Item<T> {
	fields: T;
}

export interface ContentfulPagination<T> {
	sys: Sys;
	total: number;
	skip: number;
	limit: number;
	items: Item<T>[];
}
