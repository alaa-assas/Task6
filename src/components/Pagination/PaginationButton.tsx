import React from "react";

interface PaginationButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
  disabled: boolean;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ direction, onClick, disabled }) => {
  const isNext = direction === "next";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group flex items-center gap-2 text-[14px] font-medium
        transition duration-200
        ${disabled
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray01 hover:text-purple-600 dark:hover:text-white hover:scale-105"}
      `}
    >
      {!isNext && (
        <img
          src="/Task6/images/icons/arrow-left.svg"
          alt=""
          className={`
            w-4 h-4 transition-transform duration-200
            ${!disabled ? "group-hover:-translate-x-1" : ""}
          `}
        />
      )}
      <span>{isNext ? "Next" : "Previous"}</span>
      {isNext && (
        <img
          src="/Task6/images/icons/arrow-right.svg"
          alt=""
          className={`
            w-4 h-4 transition-transform duration-200
            ${!disabled ? "group-hover:translate-x-1" : ""}
          `}
        />
      )}
    </button>
  );
};

export default PaginationButton;
