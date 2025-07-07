import React, { useEffect, useState } from "react";
import { tabs } from "../../data/Social";
import { useNavigate } from "react-router-dom";

const SocailBtn: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<number | null>(null);

  useEffect(() => {
    if (activeTab !== null) {
      const timer = setTimeout(() => setActiveTab(null), 3000);    
      return () => clearTimeout(timer);
    }
  }, [activeTab]);

  const handleClick = (index: number,action: "link" | "tel" | "mailto", target: string) => {
    if (activeTab === index) {
    if (action === "tel") {
      window.location.href = `tel:${target}`;
    } else if (action === "link") {
      navigate(target)
    }else{
        window.location.href = `mailto:${target}`;
    }}else{
        setActiveTab(index);
    }
  };

  return (
    <div className="fixed bottom-9 left-0 z-50 flex flex-col gap-2">
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => handleClick(index, tab.action, tab.target)}
          className={`group flex items-center overflow-hidden cursor-pointer shadow-md rounded-r-lg transition-all duration-300
          pl-1 pr-2 py-1 h-10 ${activeTab === index ? "w-[100px]" : "w-[33px]"} ${tab.color}`}
        >
          <div className="flex items-center justify-center w-6 h-6 shrink-0">
            {tab.icon}
          </div>
          <span
            className={`
              ml-2 text-xs font-medium text-white whitespace-nowrap
              ${activeTab === index ? "opacity-100" : "opacity-0"}
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
