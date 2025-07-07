import React from "react";
import { tabs } from "../../data/Social";
import { useNavigate } from "react-router-dom";

const SocailBtn: React.FC = () => {
    const navigate = useNavigate();

  const handleClick = (action: "link" | "tel" | "mailto", target: string) => {
    if (action === "tel") {
      window.location.href = `tel:${target}`;
    } else if (action === "link") {
      navigate(target)
    }else{
        window.location.href = `mailto:${target}`;
    }
  };

  return (
    <div className="fixed bottom-9 left-0 z-50 flex flex-col gap-2">
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleClick(tab.action, tab.target)}
          className={`group flex items-center pl-2 pr-2 py-1 w-[40px] hover:w-[120px]
          h-10 rounded-r-lg overflow-hidden cursor-pointer shadow-md ${tab.color}`}
        >
          <div className="flex items-center justify-center w-6 h-6 shrink-0">
            {tab.icon}
          </div>
          <span
            className={`
              ml-2 text-xs font-medium text-white whitespace-nowrap
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
            `}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SocailBtn;
