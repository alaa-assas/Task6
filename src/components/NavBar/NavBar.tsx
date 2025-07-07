import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NavData } from "../../data/NavData";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
  px-[8.2051%] md:px-[3.8369%] lg:px-[7.7777%]
  fixed left-1/2 -translate-x-1/2 pt-5 pb-5 z-51 border border-transparent
  bg-white dark:bg-darkNavy
  transition-all duration-200 ease-in-out
  ${(!isScrolled || menuOpen)
        ? 'w-full'
        : (isScrolled && !menuOpen)
          ? 'w-[85%] mt-3 rounded-4xl shadow shadow-darkNavy dark:border-gray-600'
          : ''
      }
`}>
      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-lg lg:text-[20px] leading-6 z-10">
          Your Name
        </p>

        <ul
          className={`z-51 flex flex-col gap-5 justify-center items-center font-normal text-lg lg:text-[20px] leading-6 transition-all duration-300 ease-in-out fixed inset-0 h-screen w-screen
    ${menuOpen
              ? "translate-y-0 opacity-100 pointer-events-auto bg-white dark:bg-darkNavy delay-150"
              : "-translate-y-full md:translate-y-0 opacity-0 pointer-events-none delay-0"
            }
    md:static md:transform-none md:flex-row md:gap-3.5 md:bg-transparent md:h-auto md:w-auto md:opacity-100 md:pointer-events-auto md:delay-0
  `}
        >
          <li className="font-semibold text-lg lg:text-[20px] leading-6 md:hidden">
            Your Name
          </li>

          {NavData.map((item, index) => (
            <li key={index} className="p-2">
              <NavLink
                to={item.path}
                end={item.path === "/theblog"}
                className={({ isActive }) =>
                  (isActive ? "border-b-2 pb-1" : " ") + "hover:text-purple01 transition-transform duration-300"
                }
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          <li>
            <DarkModeToggle />
          </li>

          <li className="fixed bottom-1 md:hidden mb-5">
            <button onClick={() => setMenuOpen(false)} aria-label="close menu">
              <img
                src="/Task6/images/navbar/close.svg"
                alt="Close"
                className="dark:filter dark:invert"
              />
            </button>
          </li>
        </ul>

        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <img
            src="/Task6/images/navbar/bars.svg"
            alt="Menu"
            className="dark:filter dark:invert"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
