import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useEffect } from "react";
import { getPostsByPage } from "../../redux/slice";
import BlogList from "../BlogList/BlogList";

const AllBlogs = () => {
    const dispatch = useDispatch();
    const currentPosts  = useSelector(
        (state: RootState) => state.posts.currentPosts
    );
    
    useEffect(() => {
        dispatch(getPostsByPage({ page: 1, itemsPerPage: 6 }));
    }, []);

    return (
        <BlogList
            posts={currentPosts}
            containerClass="md:gap-4 lg:gap-[32px]"
            title="All blog posts"
            titleClass="mt-[30px]"
            cardProps={{
                classwrap: "flex flex-col gap-8 py-[30px] md:py-0",
                classImage: "h-[240px] w-full object-cover",
                descClass: "line-clamp-[2] text-2xl leading-8",
                pargClass: "line-clamp-[2]",
            }}
            showPagination= {true}
        />
    )
}

export default AllBlogs


