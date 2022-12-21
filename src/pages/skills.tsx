import React from "react";
import styles from "../styles/Skills.module.css";
import ButtonBase from "@mui/material/ButtonBase";
import _skills from "../data/skillsData";

const Skills = () => {
  const viewportWidth = window.innerWidth;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#Skills</div>
        <div className={styles.skill}>
          {_skills.map((e) => {
            return (
              <div key={e.name} className={styles.card}>
                <ButtonBase
                  className={styles.touch}
                  disableRipple={viewportWidth >= 850 ? false : true}
                  color="inherit"
                  component={"div"}
                >
                  <div className={styles.wrapper}>
                    <div className={styles.icon}> {e.icon}</div>
                    <div className={styles.name}>{e.name}</div>
                    {e.intNode.length
                      ? e.intNode.map((elm) => {
                          return (
                            <div key={elm.name} className={styles.addInfo}>
                              <div className={styles.altContainer}>
                                <span className={styles.altImage}>
                                  {elm.icon}
                                </span>
                                <span className={styles.addName}>
                                  {elm.name}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      : null}
                    <div className={styles.level}>{e.level}</div>
                  </div>
                </ButtonBase>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

// TODO : utilize other data from _skills