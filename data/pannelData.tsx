import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineBulb,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";

export type typeData = {
  id: number;
  title: string;
  link: string;
  icon: JSX.Element | null;
};

const _defMenu: typeData[] = [
  { id: 0, title: "Home", link: "/#top", icon: <AiOutlineHome /> },
  {
    id: 1,
    title: "Timeline",
    link: "/#timeline",
    icon: <AiOutlineClockCircle />,
  },
  { id: 2, title: "Projects", link: "/projects#top", icon: <AiOutlineBulb /> },
  { id: 3, title: "Skills", link: "/skills#top", icon: <BsCodeSlash /> },
  { id: 4, title: "About", link: "/about#top", icon: <AiOutlineInfoCircle /> },
  {
    id: 5,
    title: "Certificates",
    link: "/certificates",
    icon: <GrCertificate />,
  },
  { id: 6, title: "Contact", link: "#footer", icon: <AiOutlineMail /> },
];

export default _defMenu;
