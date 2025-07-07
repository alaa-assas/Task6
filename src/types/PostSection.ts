
export interface PostSection{
    title?: string;
    subTitle?: string;
    paragraphs: ParagraphType[];
    ImgSrc?: string;
    detailsAboutImg?: string;
    paragraphToo: string[];
} 


interface ParagraphType{
    type: string;
    text: string | string[];
    span?: string;
    spanStyle?: string;
}