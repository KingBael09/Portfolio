import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiNextdotjs,
  SiLinux,
  SiGit,
  SiPython,
  SiTypescript,
  SiMaterialui,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

type data = {
  name: string;
  icon: JSX.Element;
  level: string;
  intNode: intData;
  type: string | null;
  isFav: boolean;
  isLearning: boolean;
}[];

// TODO: Learn difference between interface and type
// TODO: Try dynamic prop passing in icon TS

type intData = {
  name: string;
  icon: JSX.Element | null;
  level: string;
  isLearning: boolean;
}[];

const _defSkill: data = [
  {
    name: "C",
    icon: <SiC style={{ color: "#fff" }} />,
    level: "Intermediate",
    intNode: [],
    type: "Language",
    isFav: false,
    isLearning: false,
  },
  {
    name: "C++",
    icon: <SiCplusplus style={{ color: "#0086d4" }} />,
    level: "Intermediate",
    intNode: [],
    type: "Language",
    isFav: false,
    isLearning: false,
  },

  {
    name: "HTML",
    icon: <SiHtml5 style={{ color: "#ff6d00" }} />,
    level: "Expert",
    intNode: [],
    type: null,
    isFav: false,
    isLearning: false,
  },
  {
    name: "CSS",
    icon: <SiCss3 style={{ color: "#2196f3" }} />,
    level: "Expert",
    intNode: [
      {
        name: "BootStrap",
        icon: <SiBootstrap style={{ color: "#7634fa" }} />,
        level: "Intermediate",
        isLearning: false,
      },
    ],
    type: null,
    isFav: false,
    isLearning: false,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#f7df1e" }} />,
    level: "Intermediate",
    intNode: [
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#3178c6" }} />,
        level: "Beginner",
        isLearning: false,
      },
    ],
    type: "Language",
    isFav: true,
    isLearning: false,
  },
  {
    name: "NodeJs",
    icon: <SiNodedotjs style={{ color: "#83cd29" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "ExpressJS",
        icon: <SiExpress style={{ color: "#353535" }} />,
        level: "Beginner",
        isLearning: true,
      },
    ],
    type: "Backend",
    isFav: true,
    isLearning: true,
  },
  {
    name: "React",
    icon: <SiReact style={{ color: "#61dbfb" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "Material UI",
        icon: <SiMaterialui style={{ color: "#007fff" }} />,
        level: "Beginner",
        isLearning: true,
      },
    ],
    type: "FrontEnd",
    isFav: true,
    isLearning: true,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#4faa41" }} />,
    level: "Beginner",
    intNode: [],
    type: "Database",
    isFav: true,
    isLearning: true,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs style={{ color: "#fff" }} />,
    level: "Beginner",
    intNode: [],
    type: "React Framework",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Linux",
    icon: <SiLinux style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: [],
    type: "Operating System",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Git",
    icon: <SiGit style={{ color: "#f05033" }} />,
    level: "Beginner",
    intNode: [],
    type: "Version Control Software",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Python",
    icon: <SiPython style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: [],
    type: "Language",
    isFav: true,
    isLearning: true,
  },
];

export default _defSkill;
