import ButtonBase from "@mui/material/ButtonBase";
import { typedata, typenode } from "../../data/skillsData";
import styles from "../../styles/Skills.module.css";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface cardType {
  mapData: typedata;
  action: any;
  delay: number;
}

const viewportWidth = window.innerWidth;

export const SkillCards = (props: cardType) => {
  const e = props.mapData;
  const loadComponent = props.action;
  const nodeRef = useRef(null);
  const delay = props.delay;

  return (
    <CSSTransition
      in={loadComponent}
      nodeRef={nodeRef}
      timeout={100 + delay}
      classNames={{
        enterActive: styles.cardEnter,
        enterDone: styles.cardEnterActive,
      }}
    >
      <div ref={nodeRef} className={styles.card}>
        <ButtonBase
          className={styles.touch}
          disableRipple={viewportWidth >= 850 ? false : true}
          color="inherit"
          component={"div"}
        >
          <div className={styles.wrapper}>
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
            <div className={styles.icon}> {e.icon}</div>
            <div className={styles.name}>{e.name}</div>

            <div className={styles.level}>{e.level}</div>
          </div>
        </ButtonBase>
      </div>
    </CSSTransition>
  );
};
