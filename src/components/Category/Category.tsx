import React from "react";
import type { Post } from "../../types/Post";

const Category: React.FC<{ labels: Post["category"] }> = ({ labels }) => (
  <ul className="flex gap-2 flex-wrap items-start">
    {labels.map((item, index) => (
      <li
        key={index}
        className={`rounded-2xl 
          px-2 py-0.5 text-sm font-medium 
          leading-5 md:px-2.5 cursor-pointer 
          ${item.color} ${item.bgColor}`}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default Category;
