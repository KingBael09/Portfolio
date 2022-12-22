import React from "react";
import styles from "../styles/Skills.module.css";
import _skills from "../data/skillsData";
import { SkillCards } from "../components/skills/cards";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#Skills</div>
        <div className={styles.skill}>
          {_skills.map((e) => {
            return <SkillCards key={e.name} mapData={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

// TODO : utilize other data from _skills
