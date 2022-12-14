import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

import axios from "axios";
import {
  AiFillGithub,
  AiOutlineFork,
  AiFillEye,
  // AiOutlineCheck,
} from "react-icons/ai";
import { FaClone, FaGlobe } from "react-icons/fa";
import failSafe from "../assets/failSafe.json";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import CircularProgress from "@mui/material/CircularProgress";

// const url: string = "https://api.github.com/users/KingBael09/repos";
// const url: string = "https://animechan.vercel.app/api/random";
const url: string = "lmao";

const Projects = () => {
  const [data, setData]: any = useState([]);
  const [showAlert, setshowAlert] = useState(false);
  const [loading, setloading] = useState(false);

  const fetch = async () => {
    setloading(true);
    try {
      const data = axios.get(url);
      const res = await data;
      setData(res.data);
      setloading(false);
      // console.log(res);
    } catch (error) {
      console.log("failed");
      const failSafeData = failSafe;
      setData(failSafeData);
      setloading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <CircularProgress size={60} thickness={8} color="inherit" />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <Slide direction="down" in={showAlert}>
            <Alert
              variant="standard"
              className={styles.msg}
              id="alert"
              severity="success"
              color="info"
            >
              Url Coppied!
            </Alert>
          </Slide>
          <div className={styles.heading}>Projects</div>
          <div className={styles.proj}>
            {data.map((e: any) => {
              if (e.language && e.name !== "__API_FAILED") {
                return (
                  <div key={e.id} className={styles.card}>
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
                          return (
                            <div key={str} className={styles.hidden}></div>
                          );
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
                          >
                            {<FaGlobe className={styles.ico} />}
                          </IconButton>
                        </span>
                      ) : (
                        <></>
                      )}
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
                      <span>
                        {<AiFillEye className={styles.icon} />}{" "}
                        {e.watchers_count}
                      </span>
                      <span>
                        {<AiOutlineFork className={styles.icon} />} {e.forks}
                      </span>
                    </div>
                  </div>
                );
              } else if (e.name === "__API_FAILED") {
                return (
                  <div
                    key={e.id}
                    className={[styles.card, styles.failStatus].join(" ")}
                  >
                    <div className={[styles.name, styles.fail].join(" ")}>
                      <div className={styles.dName}>{e.name}</div>
                    </div>
                    <div className={styles.failCode}>
                      <span>
                        If you Are Seeing this, it means that GITHUB API has
                        reached its Limit.{" "}
                        <span className={styles.res}>
                          Try Again After Sometime
                        </span>
                      </span>
                      <span className={styles.fail}>
                        This is old Backup Record
                      </span>
                    </div>
                  </div>
                );
              } else {
                return <div key={e.id} className={styles.hidden}></div>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Projects;

// ?Logic To render Tags of repo
