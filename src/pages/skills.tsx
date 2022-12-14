import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>Skills</div>
        <div className={styles.skill}>
          <div className={styles.card}>
            <div>Image</div>
            <div>Name</div>
            <div>Skill</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
