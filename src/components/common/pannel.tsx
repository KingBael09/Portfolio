import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineBulb,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import styles from "../styles/Pannel.module.css";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

type data = { id: number; title: string; link: string; icon: any }[];

const itrData: data = [
  { id: 0, title: "Home", link: "/#top", icon: <AiOutlineHome /> },
  {
    id: 1,
    title: "Timeline",
    link: "/#timeline",
    icon: <AiOutlineClockCircle />,
  },
  { id: 2, title: "Projects", link: "/projects", icon: <AiOutlineBulb /> },
  { id: 3, title: "Skills", link: "/skills", icon: <BsCodeSlash /> },
  { id: 4, title: "About", link: "/about", icon: <AiOutlineInfoCircle /> },
  {
    id: 5,
    title: "Certificates",
    link: "/certificates",
    icon: <GrCertificate />,
  },
  { id: 6, title: "Contact", link: "#footer", icon: <AiOutlineMail /> },
];

const Pannel = () => {
  const [Menu, setMenu] = useState(false);

  const showMenu = () => {
    if (Menu === false) {
      // enable scrolling when not in menu
      document.body.style.overflow = "auto";
      return <></>;
    } else {
      // stop scrolling when in menu
      document.body.style.overflow = "hidden";
      return (
        <Fade in={Menu}>
          <div>
            <div className={styles.mMenu}>
              <div className={styles.mHeading}>Menu</div>
              {itrData.map((e) => {
                if (e.title !== "Contact" && e.title !== "Timeline") {
                  return (
                    <NavHashLink
                      key={e.id}
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
                  );
                } else {
                  return (
                    <HashLink
                      key={e.id}
                      to={`${e.link}`}
                      onClick={() => {
                        setMenu(false);
                      }}
                      className={styles.mItems}
                    >
                      <div className={styles.mIcons}>{e.icon}</div>
                      <div className={styles.mTitle}>{e.title}</div>
                    </HashLink>
                  );
                }
              })}
            </div>
          </div>
        </Fade>
      );
    }
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
          <div className={styles.span}> </div>
          <div className={styles.span}> </div>
          <div className={styles.span}> </div>
        </Button>
        {showMenu()}
      </div>
      <div className={styles.desktop}>
        <div className={styles.pannel}>
          {itrData.map((e) => {
            if (e.title !== "Contact" && e.title !== "Timeline") {
              return (
                <NavHashLink
                  key={e.id}
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
              );
            } else {
              return (
                <HashLink
                  key={e.id}
                  to={`${e.link}`}
                  className={styles.itemSet}
                >
                  <div className={styles.icons}>{e.icon}</div>
                  <div className={styles.title}>{e.title}</div>
                </HashLink>
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
