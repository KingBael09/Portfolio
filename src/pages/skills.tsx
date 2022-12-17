import React from "react";
import styles from "../styles/Skills.module.css";
import ButtonBase from "@mui/material/ButtonBase";
import _skills from "../assets/skillsData";

const Skills = () => {
  const viewportWidth = window.innerWidth;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>Skills</div>
        <div className={styles.skill}>
          {_skills.map((e) => {
            return (
              <div key={e.name} className={styles.card}>
                <ButtonBase
                  className={styles.touch}
                  disableRipple={viewportWidth >= 850 ? false : true}
                  href="#"
                  color="inherit"
                  LinkComponent={"div"}
                >
                  <div className={styles.wrapper}>
                    <div className={styles.image}> {e.image}</div>
                    <div className={styles.name}>{e.name}</div>
                    <>
                      {e.intNode.length ? (
                        e.intNode.map((elm: any) => {
                          return (
                            <div key={elm.name} className={styles.addInfo}>
                              <div className={styles.altContainer}>
                                <span className={styles.altImage}>
                                  {elm.image}
                                </span>
                                <span className={styles.addName}>
                                  {elm.name}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </>
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
