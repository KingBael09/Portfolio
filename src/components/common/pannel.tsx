import React, { useState } from "react";
import styles from "../styles/Pannel.module.css";
import { GiAchievement } from "react-icons/gi";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Button, Fade, ButtonBase } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import itrData from "../../data/pannelData";

const Pannel = () => {
  const [Menu, setMenu] = useState(false);

  const showMenu = () => {
    if (Menu === false) {
      // enable scrolling when not in menu also Compensates pageshift
      document.body.style.overflowY = "scroll";
    } else {
      // stop scrolling when in menu
      document.body.style.overflowY = "hidden";
    }
    return (
      <Fade in={Menu}>
        <div>
          <div className={styles.mMenu}>
            <div className={styles.mHeading}>Menu</div>
            {itrData.map((e) => {
              if (e.title !== "Contact" && e.title !== "Timeline") {
                return (
                  <ButtonBase
                    key={e.id}
                    color="inherit"
                    className={styles.mItems}
                  >
                    <NavHashLink
                      to={`${e.link}`}
                      onClick={() => {
                        setMenu(false);
                      }}
                      className={({ isActive }) =>
                        isActive
                          ? [styles.mItems, styles.mActive].join(" ")
                          : styles.mItems
                      }
                    >
                      <div className={styles.mIcons}>
                        {e.title === "Certificates" ? (
                          <GiAchievement />
                        ) : (
                          e.icon
                        )}
                      </div>
                      <div className={styles.mTitle}>{e.title}</div>
                    </NavHashLink>
                  </ButtonBase>
                );
              } else {
                return (
                  <ButtonBase
                    key={e.id}
                    color="inherit"
                    className={styles.mItems}
                  >
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
                  </ButtonBase>
                );
              }
            })}
          </div>
        </div>
      </Fade>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <Button
          color="inherit"
          variant="text"
          onClick={() => {
            Menu ? setMenu(false) : setMenu(true);
          }}
          className={styles.button}
        >
          {Menu ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </Button>
        {showMenu()}
      </div>
      <div className={styles.desktop}>
        <div className={styles.pannel}>
          {itrData.map((e) => {
            if (e.title !== "Contact" && e.title !== "Timeline") {
              return (
                <ButtonBase
                  key={e.id}
                  color="inherit"
                  component={"div"}
                  className={styles.itemSet}
                >
                  <NavHashLink
                    to={`${e.link}`}
                    className={({ isActive }) =>
                      isActive
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
                  key={e.id}
                  color="inherit"
                  component={"div"}
                  className={styles.itemSet}
                >
                  <HashLink to={`${e.link}`} className={styles.itemSet}>
                    <div className={styles.icons}>{e.icon}</div>
                    <div className={styles.title}>{e.title}</div>
                  </HashLink>
                </ButtonBase>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Pannel;

// TODO: MAKE Contact option some kind of trigger to a popup
