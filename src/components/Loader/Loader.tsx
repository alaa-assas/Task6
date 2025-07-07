
const Loader = () => {
  return (
    <div 
      className="bg-white dark:bg-darkNavy 
        fixed h-screen flex-col gap-4 w-full flex 
        items-center justify-center top-0 left-0 z-[9999999]">
      <div
        className="w-20 h-20 border-4 
          border-transparent text-4xl 
          animate-spin flex items-center justify-center
        border-t-purple02 rounded-full">
        <div
          className="w-16 h-16 border-4 
            border-transparent text-2xl animate-spin
            flex items-center justify-center 
          border-t-purple01 rounded-full"
        ></div>
      </div>
    </div>

  );
};

export default Loader;
