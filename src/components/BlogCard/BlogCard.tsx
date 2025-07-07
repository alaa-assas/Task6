import type { Post } from "../../types/Post";
import { memo } from "react";
import BlogCardHeader from "./BlogCardHeader";
import BlogCardBody from "./BlogCardBody";

interface BlogCardProps {
  blog: Post;
  classwrap: string;
  classImage?: string;
  descClass?: string;
  pargClass?: string;
}

const BlogCard: React.FC<BlogCardProps> = memo(({ blog ,classwrap, classImage, descClass, pargClass}) => {
  return (
    <div className={`${classwrap}`} data-aos="fade-down">
      <BlogCardHeader img={blog.mainImgSrc} classImage={classImage} />
      <BlogCardBody blog={blog} pargClass={pargClass} descClass={descClass}/>
    </div>
  );
});

export default BlogCard;
