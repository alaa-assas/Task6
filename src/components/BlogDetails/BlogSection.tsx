import type { PostSection } from "../../types/PostSection";
import BlogImgDetails from "./BlogImgDetails";

interface SectionBlogProps {
  item: PostSection;
}

const SectionBlog: React.FC<SectionBlogProps> = ({ item }) => {
  
  return (
    <>
      {item.title && (
        <p className="font-bold text-lg leading-6 text-grey01">{item.title}</p>
      )}
      {item.subTitle && (
        <p className="font-bold leading-6 text-grey01">{item.subTitle}</p>
      )}
      {item.paragraphs.map((p, pindex) => {
        if (p.type == "list")
          return (
            <ul key={pindex} className="list-disc pl-6">
              {(Array.isArray(p.text) ? p.text : []).map((pLi, pLiIndex) => (
                <li key={pLiIndex} className="leading-6 text-grey01 pb-1">
                  {pLi}
                </li>
              ))}
            </ul>
          );
        else {
          return (
            p.span ? <p key={pindex} className="leading-6 text-grey01">
            {p.text.toString().split(p.span)[0]}
            <span className={p.spanStyle == "bold" ? "font-bold" : "underline underline-offset-4"}>
              {p.span}
            </span>
            {p.text.toString().split(p.span)[1]}
          </p> : <p key={pindex} className="leading-6 text-grey01">
          {p.text}
          </p>
            
          );
        }
      })}
      {item.ImgSrc && item.detailsAboutImg && (
        <BlogImgDetails
          imgUrl={item.ImgSrc}
          description={item.detailsAboutImg}
        />
      )}
      {item.paragraphToo.map((p, pIndex) => (
        <p className="leading-6 text-grey01" key={pIndex}>
          {p}
        </p>
      ))}
    </>
  );
};

export default SectionBlog;
