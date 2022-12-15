import React from "react";
import styles from "../styles/Skills.module.css";
import ButtonBase from "@mui/material/ButtonBase";

const Skills = () => {
  const viewportWidth = window.innerWidth;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>Skills</div>
        <div className={styles.skill}>
          <div className={styles.card}>
            <ButtonBase
              className={styles.touch}
              disableRipple={viewportWidth >= 850 ? false : true}
              href="#"
              color="inherit"
              LinkComponent={"div"}
            >
              <div>Image</div>
              <div>Name</div>
              <div>Skill</div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
