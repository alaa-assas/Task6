import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from '../../redux/slice/Theme';
import { LuSunDim } from "react-icons/lu";
import { PiMoonThin } from "react-icons/pi";

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.theme.isDark);

  const changeMode = () => {
    dispatch(toggleDarkMode());
  } 

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDark}
        onChange={changeMode}
      />
      <div className="
        flex py-2 px-2 gap-8 w-24 h-10 
        bg-darkNavy 
        dark:bg-white 
        peer-checked:bg-white 
        peer-checked:dark:bg-white
        rounded-full transition-colors duration-300">
          <LuSunDim className="text-white w-6 h-6 dark:filter dark:invert" />
          <PiMoonThin  className="w-6 h-6 text-darkNavy"/>
      </div>
      <div className={`
        absolute top-2 right-2 w-6 h-6 rounded-full shadow transform transition-transform duration-300
        bg-white
        peer-checked:bg-darkNavy
        dark:bg-white
        peer-checked:dark:bg-darkNavy
        ${isDark ? 'translate-x-[-56px]' : ''}
      `}></div>
    </label>
  );
};

export default DarkModeToggle;