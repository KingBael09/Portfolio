import React from "react";
import styles from "../../styles/Footer.module.css";
import Contact from "./contact";

const Footer = () => {
  return (
    <div className={styles.container}>
      <Contact />
      <div id="footer" className={styles.base}>
        © Copyright 2022 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
