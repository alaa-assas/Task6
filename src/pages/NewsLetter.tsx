import { storiesData } from "../data/StoriesData";
import Blogs from "../sections/Blogs/Blogs";
import Stories from "../sections/Stories/Stories";

const NewsLetter = () => {
  return (
    <div className="mx-auto container pt-[94px] md:pt-[154px]">
      <Stories
        preTitle={storiesData.preTitle}
        title={storiesData.title}
        desc={storiesData.desc}      />
      <Blogs />
    </div>
  );
};

export default NewsLetter;
