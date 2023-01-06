import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

import axios from "axios";
import failSafe, { typeData } from "../data/failSafe";
import Loader from "../components/common/loader";
import { DefaultCard, FailedCard } from "../components/projects/cards";
import { useProjectContext } from "../context/sessionProj";
import { DocumentTitle } from "../hooks/docTitle";
import Snackbar from "@mui/material/Snackbar";

const url: string = "https://api.github.com/users/KingBael09/repos";
// const url: string = "https://animechan.vercel.app/api/random";
// const url: string = "lmao";

const Projects = () => {
  DocumentTitle("Projects");
  const [data, setData] = useState(failSafe);
  const [showAlert, setshowAlert] = useState(false);
  const [loading, setloading] = useState(false);

  const [context, setcontext]: any = useProjectContext();

  const fetch = async () => {
    setloading(true);
    if (!context) {
      try {
        const data = axios.get(url);
        const res = await data;
        setData(res.data);
        setcontext(res.data);
        setloading(false);
      } catch (error) {
        console.log("failed");
        setcontext(data);
        setloading(false);
      }
    } else {
      setData(context);
      setloading(false);
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <Snackbar
            open={showAlert}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            message="URL Coppied!"
            autoHideDuration={2000}
            ContentProps={{ className: styles.msg }}
            onClose={() => {
              setshowAlert(false);
            }}
          />

          <div className={styles.heading}>#Projects</div>
          <div className={styles.proj}>
            {data.map((e: typeData) => {
              if (e.language && e.name !== "__API_FAILED") {
                return (
                  <DefaultCard key={e.id} action={setshowAlert} mapData={e} />
                );
              } else if (e.name === "__API_FAILED") {
                return <FailedCard key={e.id} mapData={e} />;
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
