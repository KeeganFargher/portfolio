export interface Icon {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    provider: string;
    related: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
}

export interface Tech {
    icon: Icon;
    _id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    tooltip: string;
    url: string;
    id: string;
}

export interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Cover {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    formats: Formats;
    provider: string;
    related: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
}

export interface Logo {
    _id: string;
    name: string;
    alternativeText: string;
    caption: string;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    width: number;
    height: number;
    url: string;
    formats: Formats;
    provider: string;
    related: string[];
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    id: string;
}

export interface Project {
    backendTech: Tech[];
    mobileTech: Tech[];
    _id: string;
    name: string;
    brief: string;
    published_at: Date;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    cover: Cover;
    logo: Logo;
    myRole: string;
    clientName: string;
    shortDescription: string;
    clientDescription: string;
    longDescription: string;
    id: string;
}
