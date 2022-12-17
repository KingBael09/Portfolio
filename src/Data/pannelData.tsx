import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineBulb,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";

type data = { id: number; title: string; link: string; icon: any }[];

const _defMenu: data = [
  { id: 0, title: "Home", link: "/#top", icon: <AiOutlineHome /> },
  {
    id: 1,
    title: "Timeline",
    link: "/#timeline",
    icon: <AiOutlineClockCircle />,
  },
  { id: 2, title: "Projects", link: "/projects", icon: <AiOutlineBulb /> },
  { id: 3, title: "Skills", link: "/skills", icon: <BsCodeSlash /> },
  { id: 4, title: "About", link: "/about", icon: <AiOutlineInfoCircle /> },
  {
    id: 5,
    title: "Certificates",
    link: "/certificates",
    icon: <GrCertificate />,
  },
  { id: 6, title: "Contact", link: "#footer", icon: <AiOutlineMail /> },
];

export default _defMenu;
