import Subscribe from "../../components/Subscribe/Subscribe";

interface StoriesSectionProps {
    preTitle: string;
    title: string;
    desc: string;
  }

const Stories: React.FC<StoriesSectionProps> = ({preTitle,title,desc}) => {
  return (
    <div className="flex flex-col gap-10 items-start md:items-center" data-aos="zoom-in">
        <div>
            <p className="leading-6 font-semibold text-purple02 text-center">
              {preTitle}
            </p>
            <h2 className="leading-[60px] text-5xl font-semibold text-left md:text-center tracking-custom mt-3">
              {title}
            </h2>
            <p className="mt-6 text-left md:text-center text-grey01 text-xl leading-8 lg:w-[80.1578%] mx-auto">
              {desc}
            </p>
        </div>
        <Subscribe />
    </div>
  )
}

export default Stories