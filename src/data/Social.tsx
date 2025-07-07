import { FaPhone, FaInfo } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const tabs: {
    color: string;
    icon: React.ReactElement;
    label: string;
    action: "tel" | "link" | "mailto";
    target: string;
  }[] = [
      {
        color: "bg-purple02",
        icon: <MdEmail className="text-white text-base" />,
        label: "Email",
        action: "mailto",
        target: "hello@skillbirdge.com",
      },
      {
        color: "bg-[#C11574]",
        icon: <FaPhone className="text-white text-base" />,
        label: "Call Us",
        action: "tel",
        target: "+123456789",
      },
      {
        color: "bg-[#3538CD]",
        icon: <FaInfo className="text-white text-base" />,
        label: "FAQ",
        action: "link",
        target: "/about",
      },
    ];
