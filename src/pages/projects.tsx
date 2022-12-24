import React, { useState, useEffect } from "react";
import styles from "../styles/Projects.module.css";

import axios from "axios";
import failSafe, { typeData } from "../data/failSafe";
import Loader from "../components/common/loader";
import { SliderComponent } from "../components/projects/alert";
import { DefaultCard, FailedCard } from "../components/projects/cards";
import { useProjectContext } from "../context/sessionProj";
import { DocumentTitle } from "../hooks/docTitle";

// const url: string = "https://api.github.com/users/KingBael09/repos";
// const url: string = "https://animechan.vercel.app/api/random";
const url: string = "lmao";

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
          {SliderComponent(showAlert)}

          <div className={styles.heading}>#Projects</div>
          <div className={styles.proj}>
            {data.map((e: typeData) => {
              if (e.language && e.name !== "__API_FAILED") {
                return DefaultCard(e, setshowAlert);
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
