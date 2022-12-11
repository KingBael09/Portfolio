import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineClockCircle,
  AiOutlineBulb,
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
// import { MdWebStories } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { GiAchievement } from "react-icons/gi";
import styles from "../styles/Pannel.module.css";

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
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <AiOutlineHome />
              </div>
              <div className={styles.mTitle}>Home</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <AiOutlineClockCircle />
              </div>
              <div className={styles.mTitle}>Timeline</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <AiOutlineBulb />
              </div>
              <div className={styles.mTitle}>Projects</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <BsCodeSlash />
              </div>
              <div className={styles.mTitle}>Skills</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <AiOutlineInfoCircle />
              </div>
              <div className={styles.mTitle}>About</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <GiAchievement />
              </div>
              <div className={styles.mTitle}>Certificates</div>
            </div>
            <div className={styles.mItems}>
              <div className={styles.mIcons}>
                <AiOutlineMail />
              </div>
              <div className={styles.mTitle}>Contact</div>
            </div>
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
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <AiOutlineHome />
            </div>
            <div className={styles.title}>Home</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <AiOutlineClockCircle />
            </div>
            <div className={styles.title}>Timeline</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <AiOutlineBulb />
            </div>
            <div className={styles.title}>Projects</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <BsCodeSlash />
            </div>
            <div className={styles.title}>Skills</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <AiOutlineInfoCircle />
            </div>
            <div className={styles.title}>About</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <GrCertificate />
            </div>
            <div className={styles.title}>Certificates</div>
          </div>
          <div className={styles.itemSet}>
            <div className={styles.icons}>
              <AiOutlineMail />
            </div>
            <div className={styles.title}>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pannel;
