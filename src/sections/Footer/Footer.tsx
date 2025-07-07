import { Link } from "react-router-dom";
import type { LinkItem } from "../../types/Link";

interface FooterProps {
  links: LinkItem[];
  year: string;
}

const Footer: React.FC<FooterProps> = ({ links, year }) => {
  return (
    <div className="container mx-auto flex flex-col-reverse 
    sm:flex-row gap-[30px] sm:gap-3.5 items-center 
    pt-[30px] pb-[30px]
    text-left sm:text-center">
      <span className="text-xl leading-6 tracking-normal">
        {year}
      </span>
      <ul className="flex flex-col sm:flex-row items-center gap-3.5">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="inline-block text-xl leading-6 tracking-normal
            hover:text-purple01 
             transform hover:-translate-y-1.5 
             transition-transform duration-300">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
