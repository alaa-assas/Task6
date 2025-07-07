
interface BlogImgDetailsProps {
  imgUrl: string;
  description: string;
}

const BlogImgDetails: React.FC<BlogImgDetailsProps> = ({ imgUrl , description}) => {

  return (
    <>
      <img src={imgUrl} alt="blog image" className={`h-[498px] w-screen aspect-video `}/>
      <p className="font-bold text-center leading-6 text-grey01 w-full md:w-[72.8791%] mx-auto">{description}</p>
    </>
  );
};

export default BlogImgDetails;
