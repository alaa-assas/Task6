
import React from "react";
import type { Post } from "../../types/Post";
import BlogCard from "../../components/BlogCard/BlogCard";
import Pagination from "../../components/Pagination/Pagination";

interface BlogListProps {
  posts: Post[];
  containerClass: string;
  title?: string;
  titleClass?: string;
  showPagination?: boolean;
  cardProps?: {
    classwrap?: string;
    descClass?: string;
    pargClass?: string;
    classImage?: string;
  };
  getClassWrap?: (index: number) => string;
}

const BlogList: React.FC<BlogListProps> = ({
  posts,
  containerClass,
  title = "All blog posts",
  titleClass,
  showPagination = false,
  cardProps = {},
  getClassWrap,
}) => {
  return (
    <section>
      {title && (
        <h2 className={`text-2xl font-semibold leading-8 mb-8 ${titleClass}`}>
          {title}
        </h2>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${containerClass}`}>
        {posts.map((item,index) => (
          <BlogCard
            key={item.id}
            blog={item}
            classwrap={getClassWrap ? getClassWrap(index) : cardProps.classwrap ?? ""}
            {...cardProps}
          />
        ))}
      </div>

      {showPagination && <Pagination />}
    </section>
  );
};

export default BlogList;