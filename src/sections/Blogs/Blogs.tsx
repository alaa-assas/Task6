import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getPostsByPage } from "../../redux/slice";
import BlogList from "../BlogList/BlogList";

interface StoriesSectionProps {}

const Blogs: React.FC<StoriesSectionProps> = ({}) => {
  const dispatch = useDispatch();
  const allBlog = useSelector((state: RootState) => state.posts.currentPosts);

  useEffect(() => {
    dispatch(getPostsByPage({ page: 1, itemsPerPage: 3 }));
  }, []);

   const getClassWrap = (index: number) => {
    if (index === 0 || index === 1) {
      return "md:col-span-1 flex flex-col gap-8";
    } else {
      return "md:col-span-2 lg:col-span-1 flex flex-col gap-8";
    }
  };

  return (
    <BlogList
        posts={allBlog}
        containerClass="gap-8 w-full pb-[30px]"
        title="All blog posts"
        titleClass="mt-14"
        getClassWrap={getClassWrap}
        cardProps={{
          classImage: "h-[240px] w-full object-cover",
          descClass: "text-2xl leading-8 line-clamp-[1]",
          pargClass: "line-clamp-[2]",
          
        }}
      />
  );
};

export default Blogs;
