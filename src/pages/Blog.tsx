import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";
import { getPost } from "../redux/slice";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Stories from "../sections/Stories/Stories";
import RecentSection from "../sections/RecentSection/RecentSection";
import { storiesData } from "../data/StoriesData";

const Blog = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  const post = useSelector(
    (state: RootState) => state.posts.postDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(getPost({ id: parseInt(id) }));
    }
  }, [id]);

  if (!post) {
    return <div>Blog Not Found</div>;
  }

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[42%_1fr]  lg:grid-cols-[33.4%_1fr] gap-8 pt-36">
        
        <RecentSection layout="sidebar" limit={9} id={id} />

        <div className="order-1 md:order-2 h-full flex flex-col">
          <BlogDetails blog={post} />
          <div className="hidden lg:block mt-auto">
            <Stories preTitle={storiesData.preTitle}
              title={storiesData.title}
              desc={storiesData.desc} />
          </div>
        </div>
      </div>
      
      <div className="md:block lg:hidden mt-auto">
        <Stories preTitle={storiesData.preTitle}
              title={storiesData.title}
              desc={storiesData.desc} />
      </div>
    </>
  );
};

export default Blog;
