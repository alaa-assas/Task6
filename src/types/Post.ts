import type { PostSection } from "./PostSection";

export interface category{
    name: string;
    color: string;
    bgColor: string;
}

export interface Post{
    id: number;
    date: string;
    title: string;
    name?: string;
    mainImgSrc: string;
    desc: string[];
    category: category[];
    sections: PostSection[];
} 