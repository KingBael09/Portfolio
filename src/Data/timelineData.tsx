import styles from "../components/styles/Timeline.module.css";
import { FaGraduationCap, FaBirthdayCake, FaBuilding } from "react-icons/fa";

type typeData = {
  id: number;
  contentArrowStyle: any;
  date: string;
  iconClassName: any;
  icon: JSX.Element;
  contentStyle: any;
  title: string;
  location: string | null;
  info: string | null;
};

const contEdu = {
  background: "hsl(222, 12%, 20%)",
};
const contPresent = {
  background: "hsl(219, 70%, 49%)",
};
const arrPresentR = { borderRight: "7px solid  hsl(219, 70%, 49%)" };
const contZero = {
  background: "hsl(0, 66%, 47%)",
};
const arrZeroR = { borderRight: "7px solid  hsl(0, 66%, 47%)" };

export const _defTimeLine: typeData[] = [
  {
    id: 1,
    contentArrowStyle: arrZeroR,
    date: "9th Nov 2002",
    iconClassName: styles.zeroIcon,
    icon: <FaBirthdayCake />,
    contentStyle: contZero,
    title: "@Day Zero",
    location: null,
    info: null,
  },
  {
    id: 2,
    contentArrowStyle: null,
    date: "~ to 2018",
    iconClassName: styles.intIcon,
    icon: <FaGraduationCap />,
    contentStyle: contEdu,
    title: "Nashik Cambridge School",
    location: "Nashik, IN",
    info: "Schooling till 10th",
  },
  {
    id: 3,
    contentArrowStyle: null,
    date: "2018 to 2020",
    iconClassName: styles.intIcon,
    icon: <FaGraduationCap />,
    contentStyle: contEdu,
    title: "Matoshri Jr College",
    location: "Nashik, IN",
    info: "12th : Science Stream",
  },
  {
    id: 4,
    contentArrowStyle: null,
    date: "2020 to 2024",
    iconClassName: styles.intIcon,
    icon: <FaGraduationCap />,
    contentStyle: contEdu,
    title: "Government College of Engineering",
    location: "Aurangabad, IN",
    info: "B.Tech : Computer Science Engineering",
  },
  {
    id: 5,
    contentArrowStyle: arrPresentR,
    date: "Present",
    iconClassName: styles.finalIcon,
    icon: <FaBuilding />,
    contentStyle: contPresent,
    title: "Next Big Thing",
    location: null,
    info: null,
  },
];
