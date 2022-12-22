import { AiFillGithub, AiOutlineFork, AiFillEye } from "react-icons/ai";
import { FaClone, FaGlobe } from "react-icons/fa";
import { typeData } from "../../data/failSafe";
import { IconButton, ButtonBase } from "@mui/material";
import styles from "../../styles/Projects.module.css";

const viewportWidth = window.innerWidth;

export const DefaultCard = (e: typeData, setshowAlert: any) => {
  return (
    <div key={e.id} className={styles.card}>
      <ButtonBase
        className={styles.touch}
        disableRipple={viewportWidth >= 850 ? false : true}
        color="inherit"
        component={"div"}
      >
        <div className={styles.cardTop}>
          <div className={styles.name}>
            <div className={styles.dName}>{e.name}</div>
          </div>

          <div className={styles.lang}>{e.language}</div>
        </div>
        <div className={styles.topics}>
          {e.topics.slice(0, 3).map((str: string) => {
            if (str.length <= 10) {
              return (
                <div key={str} className={styles.badge}>
                  {str}
                </div>
              );
            } else {
              return <div key={str} className={styles.hidden}></div>;
            }
          })}
        </div>
        <div className={styles.desc}>
          <div className={styles.content}>
            {!e.description ? (
              <div className={styles.noDesc}>Not Available</div>
            ) : (
              e.description
            )}
          </div>
        </div>
        <div className={styles.stats}>
          <span className={styles.code}>
            <IconButton
              href={e.html_url}
              target="_blank"
              color="inherit"
              rel="noreferrer"
            >
              {<AiFillGithub className={styles.ico} />}
            </IconButton>
          </span>
          {e.homepage ? (
            <span className={styles.demo}>
              <IconButton
                href={e.homepage}
                target="_blank"
                color="inherit"
                rel="noreferrer"
              >
                {<FaGlobe className={styles.ico} />}
              </IconButton>
            </span>
          ) : null}
          <span className={styles.clone}>
            {
              <IconButton
                onClick={() => {
                  setshowAlert(true);
                  setTimeout(() => {
                    setshowAlert(false);
                  }, 1500);
                  navigator.clipboard.writeText(e.clone_url);
                }}
                color="inherit"
              >
                <FaClone />
              </IconButton>
            }
          </span>
          <span className={styles.counts}>
            {<AiFillEye className={styles.icon} />}
            <span>{e.watchers_count}</span>
          </span>
          <span className={styles.counts}>
            {<AiOutlineFork className={styles.icon} />}
            <span> {e.forks}</span>
          </span>
        </div>
      </ButtonBase>
    </div>
  );
};

export const FailedCard = (e: typeData) => {
  return (
    <div key={e.id} className={[styles.card, styles.failStatus].join(" ")}>
      <div className={[styles.name, styles.fail].join(" ")}>
        <div className={styles.dName}>{e.name}</div>
      </div>
      <div className={styles.failCode}>
        <span>
          If you Are Seeing this, it means that GITHUB API has reached its
          Limit. <span className={styles.res}>Try Again After Sometime</span>
        </span>
        <span className={styles.fail}>This is old Backup Record</span>
      </div>
    </div>
  );
};
