import type { Post } from "../../types/Post";
import Category from "../Category/Category";
import BlogContent from "./BlogContent";
import BlogSections from "./BlogSections";

interface BlogDetailsProps {
  blog: Post;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ blog}) => {

  return (
    <div className={`flex flex-col gap-8`}>

      <span className="text-[14px] font-semibold leading-5 text-purple01 flex">
        {blog.date}
      </span>

      <h2 className="font-bold text-4xl leading-8">
        {blog.title}
      </h2>

      <img src={blog.mainImgSrc} alt="blog image"  
        className={`h-[200px] lg:h-[498px] aspect-video `}
      />

      <BlogContent paragraphs={blog.desc} />

      <BlogSections sections={blog.sections} />

      <Category labels={blog.category} />
    </div>
  );
};

export default BlogDetails;
