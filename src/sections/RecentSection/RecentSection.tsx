import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard"
import type { RootState } from "../../redux/store";
import { getRecentPosts } from "../../redux/slice";
import { useEffect } from "react";

type LayoutType = "home" | "sidebar";

interface RecentSectionProps {
    limit?: number;
    layout?: LayoutType;
    id?: string
}

const RecentSection: React.FC<RecentSectionProps> = ({ limit, layout, id }) => {

    const dispatch = useDispatch();
    const recentPosts = useSelector(
        (state: RootState) => state.posts.recentPosts
    );

    useEffect(() => {
        dispatch(getRecentPosts({ len: limit, id: id }));
    }, [dispatch, limit]);

    switch (layout) {
        case "home":
            return (
                <section className="mt-[100px] md:mt-[230px] lg:mt-[60px]">
                    <h2 className="text-2xl font-semibold mb-6 leading-8">
                        Recent Posts
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {recentPosts.length > 0 && (
                            <BlogCard
                                blog={recentPosts?.[0]}
                                classwrap="flex flex-col gap-8 w-full"
                                classImage="w-full h-auto max-h-60"
                                descClass="line-clamp-[1] text-2xl leading-8"
                                pargClass="line-clamp-[2]"

                            />
                        )}
                        <div className="flex flex-col gap-8 w-full">
                            {recentPosts.slice(1, 3).map((blog, index) => (
                                <BlogCard
                                    key={index}
                                    blog={blog}
                                    classwrap="flex gap-8 flex-col md:flex-row"
                                    classImage="w-full h-auto max-h-52 md:w-1/2 lg:w-full"
                                    descClass="line-clamp-[1] text-lg leading-7"
                                    pargClass="line-clamp-[3]"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 pt-8">
                        {recentPosts.length > 3 && (
                            <BlogCard
                                blog={recentPosts?.[3]}
                                classwrap="flex gap-8 items-stretch lg:flex-row flex-col"
                                classImage="lg:max-h-[246px] max-h-[200px]  "
                                descClass="text-2xl leading-8 line-clamp-[1]"
                                pargClass="lg:w-1/2 w-full line-clamp-[2] md:line-clamp-[4]"
                            />
                        )}
                    </div>
                </section>
            );
        case "sidebar": return (
            <div className="flex flex-col gap-8 order-2 md:order-1">
                <h2 className="text-2xl font-semibold leading-8">Recent Posts</h2>
                {recentPosts.map((item, key) => (
                    <BlogCard
                        key={key}
                        blog={item}
                        classwrap="flex flex-col gap-6 py-[30px] md:py-0"
                        classImage="w-full object-cover h-[204px]"
                    />
                ))}
            </div>
        )
    }
}

export default RecentSection;
