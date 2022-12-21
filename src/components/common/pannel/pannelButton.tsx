import styles from "../../styles/Pannel.module.css";
import { GiAchievement } from "react-icons/gi";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { ButtonBase } from "@mui/material/";
import { typeData } from "../../../data/pannelData";

interface typeButton {
  mapData: typeData;
  isNavHead: boolean;
  mMenuControl?: any;
  action?: any;
}

export const PannelBtns = (props: typeButton) => {
  const e = props.mapData;
  const isNavHead = props.isNavHead;
  const handleOnOpen = props.action;

  if (isNavHead) {
    return (
      <ButtonBase color="inherit" component={"div"} className={styles.itemSet}>
        <NavHashLink
          to={`${e.link}`}
          className={(navData) =>
            navData.isActive
              ? [styles.itemSet, styles.active].join(" ")
              : styles.itemSet
          }
        >
          <div className={styles.icons}>{e.icon}</div>
          <div className={styles.title}>{e.title}</div>
        </NavHashLink>
      </ButtonBase>
    );
  } else {
    return (
      <ButtonBase
        color="inherit"
        component={"div"}
        className={styles.itemSet}
        onClick={e.title === "Contact" ? handleOnOpen : undefined}
      >
        {e.title === "Contact" ? (
          <div className={styles.itemSet}>
            <div className={styles.icons}>{e.icon}</div>
            <div className={styles.title}>{e.title}</div>
          </div>
        ) : (
          <HashLink to={`${e.link}`} className={styles.itemSet}>
            <div className={styles.icons}>{e.icon}</div>
            <div className={styles.title}>{e.title}</div>
          </HashLink>
        )}
      </ButtonBase>
    );
  }
};

export const MobilePannelBtns = (props: typeButton) => {
  const e = props.mapData;
  const isNavHead = props.isNavHead;
  const handleOnOpen = props.action;
  const setMenu = props.mMenuControl;

  if (isNavHead) {
    return (
      <ButtonBase
        color="inherit"
        component={"div"}
        className={styles.mItems}
      >
        <NavHashLink
          to={`${e.link}`}
          onClick={() => {
            setMenu(false);
          }}
          className={(navData) =>
            navData.isActive
              ? [styles.mItems, styles.mActive].join(" ")
              : styles.mItems
          }
        >
          <div className={styles.mIcons}>
            {e.title === "Certificates" ? <GiAchievement /> : e.icon}
          </div>
          <div className={styles.mTitle}>{e.title}</div>
        </NavHashLink>
      </ButtonBase>
    );
  } else {
    return (
      <ButtonBase
        color="inherit"
        component={"div"}
        className={styles.mItems}
      >
        {e.title === "Timeline" ? (
          <HashLink
            to={`${e.link}`}
            onClick={() => {
              setMenu(false);
            }}
            className={styles.mItems}
          >
            <div className={styles.mIcons}>{e.icon}</div>
            <div className={styles.mTitle}>{e.title}</div>
          </HashLink>
        ) : (
          <div
            onClick={() => {
              setMenu(false);
              handleOnOpen();
            }}
            className={styles.mItems}
          >
            <div className={styles.mIcons}>{e.icon}</div>
            <div className={styles.mTitle}>{e.title}</div>
          </div>
        )}
      </ButtonBase>
    );
  }
};

// TODO: Optimize Style imports
