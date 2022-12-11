import React from "react";
// import { AiOutlineMail } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.contact}>
        Contact Me:
        <span className={styles.mail}>
          <AiOutlineMail className={styles.icon} /> jayesh0071@outlook.com
        </span>
      </div> */}
      <div className={styles.base}>© Copyright 2022 All Rights Reserved</div>
    </div>
  );
};

export default Footer;

// TODO: Add Contact Me component
