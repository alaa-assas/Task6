import { useState, useEffect, useCallback } from "react";
import { IoMdArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    const handleScrollWrapper = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScrollWrapper);
    return () => {
      window.removeEventListener("scroll", handleScrollWrapper);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-5 right-5
        w-12 h-12
        rounded-full
        bg-purple01 text-white
        flex items-center justify-center
        opacity-0 invisible
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 visible translate-x-0" : "opacity-0 translate-x-5 invisible"}
        focus:outline-none z-50 md:bottom-5 md:right-5 
        sm:w-10 sm:h-10 sm:text-lg
      `}
    >
      <IoMdArrowUp size={24} />
    </button>
  );
}