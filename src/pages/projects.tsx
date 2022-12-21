import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

import axios from "axios";
import { AiFillGithub, AiOutlineFork, AiFillEye } from "react-icons/ai";
import { FaClone, FaGlobe } from "react-icons/fa";
import failSafe, { typeData } from "../data/failSafe";
import IconButton from "@mui/material/IconButton";
// import Alert from "@mui/material/Alert";
// import Slide from "@mui/material/Slide";
import ButtonBase from "@mui/material/ButtonBase";
import Loader from "../components/common/loader";
import { SliderComponent } from "../components/projectSlider";

// const url: string = "https://api.github.com/users/KingBael09/repos";
// const url: string = "https://animechan.vercel.app/api/random";
const url: string = "lmao";

const Projects = () => {
  const [data, setData] = useState(failSafe);
  const [showAlert, setshowAlert] = useState(false);
  const [loading, setloading] = useState(false);
  const viewportWidth = window.innerWidth;

  const fetch = async () => {
    setloading(true);
    try {
      const data = axios.get(url);
      const res = await data;
      setData(res.data);
      setloading(false);
    } catch (error) {
      console.log("failed");
      setloading(false);
    }
    // TODO: Try using Context for persisting data during Session
  };

  useEffect(() => {
    fetch();
  }, []);

  const DefaultCard = (e: typeData) => {
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

  const FailedCard = (e: typeData) => {
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

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          {SliderComponent(showAlert)}

          <div className={styles.heading}>#Projects</div>
          <div className={styles.proj}>
            {data.map((e: typeData) => {
              if (e.language && e.name !== "__API_FAILED") {
                return DefaultCard(e);
              } else if (e.name === "__API_FAILED") {
                return FailedCard(e);
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;

// TODO: OPTIMIZE Code
