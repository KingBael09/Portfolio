import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#About Me</div>
        <div className={styles.about}>
          <div className={styles.highlight}>
            Hello I'm <span className={styles.name}>Jayesh</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
