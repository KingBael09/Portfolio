import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

import styles from "../components/styles/Footer.module.css";

type data = {
  id: number;
  name: string;
  link: string;
  component: JSX.Element | null;
}[];

const _defContact: data = [
  {
    id: 1,
    name: styles.mail,
    link: "mailto:jayesh0071@outlook.com",
    component: <AiOutlineMail className={styles.icon} />,
  },
  {
    id: 2,
    name: styles.insta,
    link: "https://www.instagram.com/jayesh.singh09/",
    component: <AiOutlineInstagram className={styles.icon} />,
  },
  {
    id: 3,
    name: styles.linkedin,
    link: "https://www.linkedin.com/in/jayesh-singh-5376ab20b",
    component: <AiOutlineLinkedin className={styles.icon} />,
  },
  {
    id: 4,
    name: styles.github,
    link: "https://github.com/KingBael09",
    component: <AiFillGithub className={styles.icon} />,
  },
  {
    id: 5,
    name: styles.twitter,
    link: "https://twitter.com/_singh_jayesh",
    component: <AiOutlineTwitter className={styles.icon} />,
  },
];

export default _defContact;
