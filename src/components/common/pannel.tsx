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
import { Link } from "react-router-dom";

type data = { id: number; title: string; link: string; icon: any }[];

const itrData: data = [
  { id: 0, title: "Home", link: "/", icon: <AiOutlineHome /> },
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
  { id: 6, title: "Contact", link: "/#footer", icon: <AiOutlineMail /> },
];

const Pannel = () => {
  const [Menu, setMenu] = useState(false);

  const showMenu = () => {
    if (Menu === false) {
      return <></>;
    } else {
      return (
        <div>
          <div className={styles.mMenu}>
            <div className={styles.mHeading}>Menu</div>
            {itrData.map((e) => {
              if (e.title !== "Certificates" && e.title !== "Contact") {
                return (
                  <Link
                    key={e.id}
                    to={`${e.link}`}
                    onClick={() => {
                      setMenu(false);
                    }}
                    className={styles.mItems}
                  >
                    <div className={styles.mIcons}>{e.icon}</div>
                    <div className={styles.mTitle}>{e.title}</div>
                  </Link>
                );
              } else if (e.title === "Certificates") {
                return (
                  <Link
                    key={e.id}
                    to={`${e.link}`}
                    onClick={() => {
                      setMenu(false);
                    }}
                    className={styles.mItems}
                  >
                    <div className={styles.mIcons}>
                      <GiAchievement />
                    </div>
                    <div className={styles.mTitle}>{e.title}</div>
                  </Link>
                );
              } else if (e.title === "Contact") {
                return (
                  <a
                    key={e.id}
                    href={`${e.link}`}
                    onClick={() => {
                      setMenu(false);
                    }}
                    className={styles.mItems}
                  >
                    <div className={styles.mIcons}>{e.icon}</div>
                    <div className={styles.mTitle}>{e.title}</div>
                  </a>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <button
          onClick={() => {
            Menu ? setMenu(false) : setMenu(true);
          }}
          className={styles.button}
        >
          <div className={styles.span}> </div>
          <div className={styles.span}> </div>
          <div className={styles.span}> </div>
        </button>
        {showMenu()}
      </div>
      <div className={styles.desktop}>
        <div className={styles.pannel}>
          {itrData.map((e) => {
            if (e.title !== "Contact") {
              return (
                <Link key={e.id} to={`${e.link}`} className={styles.itemSet}>
                  <div className={styles.icons}>{e.icon}</div>
                  <div className={styles.title}>{e.title}</div>
                </Link>
              );
            } else {
              return (
                <a key={e.id} href={`${e.link}`} className={styles.itemSet}>
                  <div className={styles.icons}>{e.icon}</div>
                  <div className={styles.title}>{e.title}</div>
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Pannel;
