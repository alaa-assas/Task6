import { motion } from "framer-motion";

const title = "THE BLOG".split(""); 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, 
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <motion.div
      className="mt-5 w-full absolute left-0 top-[80px] md:mt-[30px] lg:static"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-6xl font-bold 
        text-center w-full border-y-1 py-2 border-black01 
        dark:border-white md:text-[157px] lg:text-[175px] xl:text-[222px]"
        variants={containerVariants} 
      >
        {title.map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ duration: 0.4, ease: [0.3, 0.8, 0.4, 1] }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
};

export default Hero;