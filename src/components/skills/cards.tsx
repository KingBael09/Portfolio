import ButtonBase from "@mui/material/ButtonBase";
import { typedata, typenode } from "../../data/skillsData";
import styles from "../../styles/Skills.module.css";
interface cardType {
  mapData: typedata;
}

const viewportWidth = window.innerWidth;

export const SkillCards = (props: cardType) => {
  const e = props.mapData;
  return (
    <div className={styles.card}>
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
            ? e.intNode.map((elm: typenode) => {
                return (
                  <div key={elm.name} className={styles.addInfo}>
                    <div className={styles.altContainer}>
                      <span className={styles.altImage}>{elm.icon}</span>
                      <span className={styles.addName}>{elm.name}</span>
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
};
