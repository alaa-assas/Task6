import type { PostSection } from "../../types/PostSection";
import SectionBlog from "./BlogSection";

interface BlogSectionsProps {
  sections: PostSection[]; 
}

const BlogSections: React.FC<BlogSectionsProps> = ({ sections }) => {
  return (
    <>
        {sections.map((item,index) => (
            <SectionBlog item={item} key={index} />
        ))}
    </>
  );
};

export default BlogSections;