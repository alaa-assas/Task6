

interface BlogCardHeaderProps {
    img: string;
    classImage?: string;
}

const BlogCardHeader: React.FC<BlogCardHeaderProps> = ({ img, classImage }) => {
    return (
        <>
            <img src={img} 
            alt="blog image" 
            className={`transition duration-300 transform hover:scale-105 aspect-video ${classImage}`} />
        </>
    );
};

export default BlogCardHeader;