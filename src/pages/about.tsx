import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#About Me</div>
        <div className={styles.about}>
          Something About Me
        </div>
      </div>
    </div>
  );
};

export default About;
