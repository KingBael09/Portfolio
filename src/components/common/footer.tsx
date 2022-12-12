import React from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <a
          target={"_blank"}
          rel="noreferrer"
          className={[styles.mail, styles.qLink].join(" ")}
          href="mailto:jayesh0071@outlook.com"
        >
          <AiOutlineMail className={styles.icon} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className={[styles.insta, styles.qLink].join(" ")}
          href="https://www.instagram.com/jayesh.singh09/"
        >
          <AiOutlineInstagram className={styles.icon} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className={[styles.linkedin, styles.qLink].join(" ")}
          href="https://www.linkedin.com/in/jayesh-singh-5376ab20b"
        >
          <AiOutlineLinkedin className={styles.icon} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className={[styles.github, styles.qLink].join(" ")}
          href="https://github.com/KingBael09"
        >
          <AiFillGithub className={styles.icon} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          className={[styles.twitter, styles.qLink].join(" ")}
          href="https://twitter.com/_singh_jayesh"
        >
          <AiOutlineTwitter className={styles.icon} />
        </a>
      </div>
      <div id="footer" className={styles.base}>
        © Copyright 2022 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
