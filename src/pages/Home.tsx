
import Hero from "../components/Hero/Hero";
import AllBlogs from "../sections/AllBlogs/AllBlogs";
import RecentSection from "../sections/RecentSection/RecentSection";

const Home = () => {

  return (
    <div className="container mx-auto flex flex-col gap-8 pb-8 pt-36">
      <Hero />
      <RecentSection layout="home" limit={4} />
      <AllBlogs />
    </div>
  );
};

export default Home;
