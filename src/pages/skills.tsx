import React, { useEffect, useState } from "react";
import styles from "../styles/Skills.module.css";
import _skills from "../data/skillsData";
import { SkillCards } from "../components/skills/cards";
import { DocumentTitle } from "../hooks/docTitle";

const Skills = () => {
  DocumentTitle("Skills");

  const [loadComponent, setloadComponent] = useState(false);

  useEffect(() => {
    setloadComponent(true);
  }, []);

  let delay_index = -1;
  let delay_jump = 50;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#Skills</div>
        <div className={styles.skill}>
          {_skills.map((e) => {
            delay_index += 1;
            const delay = delay_index * delay_jump;
            return (
              <SkillCards
                delay={delay}
                action={loadComponent}
                key={e.name}
                mapData={e}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

// TODO : utilize other data from _skills
