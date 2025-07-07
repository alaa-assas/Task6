import { Link } from "react-router-dom";
import type { Post } from "../../types/Post";
import { GoArrowUpRight } from "react-icons/go";
import Category from "../Category/Category";

interface BlogCardBodyProps {
    blog: Post;
    pargClass?: string;
    descClass?: string;
}

const BlogCardBody: React.FC<BlogCardBodyProps> = ({ blog, pargClass, descClass }) => {

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                {/* author name - date of write blog */}
                <span className="text-sm font-semibold leading-5 text-purple01 flex pt-2">
                    <span className="hidden lg:block">{blog.name}</span>
                    {blog.date}
                </span>
                {/* blog title */}
                <div className="flex justify-between items-start">
                    <h4 className={`text-2xl font-semibold leading-8 tracking-wide w-[90%] lg:w-[83%] ${descClass}`}>
                        {blog.title}
                    </h4>
                    {/* link to navigate to blog page details */}
                    <Link to={`/blog/${blog.id}`}>
                        <GoArrowUpRight className="inline-block w-6 h-6 
                hover:translate-x-1 hover:-translate-y-1 
                transition-transform duration-300"/>
                    </Link>
                </div>
                {/* blog description */}
                <p className={`text-[16px] leading-6 tracking-wide text-gray01 lg:w-[92%] ${pargClass}`}>
                    {blog.desc[0]}
                </p>
            </div>
            <Category labels={blog.category} />
        </div>

    );
};

export default BlogCardBody;