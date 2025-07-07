import Subscribe from "../components/Subscribe/Subscribe";
import { comingSoonData } from "../data/ComingSoonData";
import CommingSoonSection from "../sections/CommingSoon/CommingSoon";


const CommingSoon = () => {

  return (
    <div className="min-h-full md:min-h-[calc(100vh_-_90px)] pt-20 flex flex-col gap-4 items-center">
      <CommingSoonSection 
        title={comingSoonData.title}
        desc={comingSoonData.desc}
        imgUrl={comingSoonData.imgUrl}/>

      <Subscribe />
    </div>
  )
}

export default CommingSoon
