export type TagType = {
    fa_icon_name: string;
    content: string;
    color: string;
}

export type Course = {
    name: string;
    length: string;
    countsFor: string;
    description: string[];
    tags: TagType[];
    units: string[];
    prereqs: string = null;
    slug: string;
}