
interface CommingSoonProps{
  title: string;
  desc: string;
  imgUrl: string;
}

const CommingSoonSection: React.FC<CommingSoonProps> = ({title,desc,imgUrl}) => {
  return (
    <section className="flex flex-col gap-4 items-center" data-aos="zoom-in">
      <img src={imgUrl} alt="under development" />
      <h2 className="text-5xl font-semibold text-center tracking-custom">
        {title}
      </h2>
      <p className="text-left md:text-center text-grey01 text-xl leading-8 lg:w-[60.1578%] mx-auto">
        {desc}
      </p>
    </section>
    
  )
}

export default CommingSoonSection
