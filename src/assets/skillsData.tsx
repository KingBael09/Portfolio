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
  image: any;
  level: string;
  intNode: any;
  type: string | null;
  isFav: boolean;
  isLearning: boolean;
}[];

const _defSkill: data = [
  {
    name: "C",
    image: <SiC style={{ color: "#fff" }} />,
    level: "Intermediate",
    intNode: [],
    type: "Language",
    isFav: false,
    isLearning: false,
  },
  {
    name: "C++",
    image: <SiCplusplus style={{ color: "#0086d4" }} />,
    level: "Intermediate",
    intNode: [],
    type: "Language",
    isFav: false,
    isLearning: false,
  },

  {
    name: "HTML",
    image: <SiHtml5 style={{ color: "#ff6d00" }} />,
    level: "Expert",
    intNode: [],
    type: null,
    isFav: false,
    isLearning: false,
  },
  {
    name: "CSS",
    image: <SiCss3 style={{ color: "#2196f3" }} />,
    level: "Expert",
    intNode: [
      {
        name: "BootStrap",
        image: <SiBootstrap style={{ color: "#7634fa" }} />,
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
    image: <SiJavascript style={{ color: "#f7df1e" }} />,
    level: "Intermediate",
    intNode: [
      {
        name: "TypeScript",
        image: <SiTypescript style={{ color: "#3178c6" }} />,
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
    image: <SiNodedotjs style={{ color: "#83cd29" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "ExpressJS",
        image: <SiExpress style={{ color: "#353535" }} />,
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
    image: <SiReact style={{ color: "#61dbfb" }} />,
    level: "Beginner",
    intNode: [
      {
        name: "Material UI",
        image: <SiMaterialui style={{ color: "#007fff" }} />,
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
    image: <SiMongodb style={{ color: "#4faa41" }} />,
    level: "Beginner",
    intNode: [],
    type: "Database",
    isFav: true,
    isLearning: true,
  },
  {
    name: "NextJS",
    image: <SiNextdotjs style={{ color: "#fff" }} />,
    level: "Beginner",
    intNode: [],
    type: "React Framework",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Linux",
    image: <SiLinux style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: [],
    type: "Operating System",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Git",
    image: <SiGit style={{ color: "#f05033" }} />,
    level: "Beginner",
    intNode: [],
    type: "Version Control Software",
    isFav: true,
    isLearning: true,
  },
  {
    name: "Python",
    image: <SiPython style={{ color: "#000" }} />,
    level: "Beginner",
    intNode: [],
    type: "Language",
    isFav: true,
    isLearning: true,
  },
];

export default _defSkill;
