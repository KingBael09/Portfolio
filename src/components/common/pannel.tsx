import React, { useState } from "react";
import styles from "../styles/Pannel.module.css";
import { GiAchievement } from "react-icons/gi";
import { HashLink, NavHashLink } from "react-router-hash-link";
import {
  Button,
  Fade,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import itrData from "../../data/pannelData";
import Contact from "./contact";

const Pannel = () => {
  const [Menu, setMenu] = useState(false);
  const [dialogStatus, setdialogStatus] = useState(false);
  const isMobile = window.matchMedia("(any-pointer:coarse)").matches;

  const handleOnClose = () => {
    setdialogStatus(false);
  };
  const handleOnOpen = () => {
    setdialogStatus(true);
  };

  const showMenu = () => {
    if (Menu) {
      // stop scrolling when in menu or in
      document.body.style.overflowY = "hidden";
    } else {
      // enable scrolling when not in menu also Compensates pageshift
      document.body.style.overflowY = "scroll";
      if (isMobile) {
        // if Mobile then diable scroll when dialog Open
        if (dialogStatus) {
          document.body.style.overflowY = "hidden";
        }
      }
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
                    component={"div"}
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
              } else if (e.title === "Timeline") {
                return (
                  <ButtonBase
                    key={e.id}
                    color="inherit"
                    component={"div"}
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
              } else {
                return (
                  <ButtonBase
                    key={e.id}
                    color="inherit"
                    component={"div"}
                    className={styles.mItems}
                  >
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
      {/* TODO : Mobile Dialog Not Optimized */}
      <Dialog
        className={styles.dialog}
        onClose={handleOnClose}
        open={dialogStatus}
        fullWidth
        keepMounted
        disableScrollLock
        disablePortal
        hideBackdrop={isMobile?true:false}
        PaperProps={{
          className: styles.paper,
        }}
      >
        <DialogTitle className={styles.dialogTitle}>Contact Me!</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <Contact />
        </DialogContent>
        <DialogActions className={styles.dialogActions}>
          <Button
            variant="contained"
            color="inherit"
            fullWidth
            className={styles.diagButton}
            onClick={handleOnClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
        <div id="desktopPannel" className={styles.pannel}>
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
            } else if (e.title === "Timeline") {
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
            } else {
              return (
                <ButtonBase
                  key={e.id}
                  color="inherit"
                  component={"div"}
                  className={styles.itemSet}
                  onClick={handleOnOpen}
                >
                  <div className={styles.itemSet}>
                    <div className={styles.icons}>{e.icon}</div>
                    <div className={styles.title}>{e.title}</div>
                  </div>
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
