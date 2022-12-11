import React from "react";
import styles from "../styles/Projects.module.css";

// import axios from "axios";
// import failSafe from "./assets/failSafe.json";

// const url: string = "https://api.github.com/users/KingBael09/repos";
// const url: string = "https://animechan.vercel.app/api/random";

const Projects = () => {
  // const fetch = async () => {
  //   try {
  //     const data = axios.get(url);
  //     const res = await data;
  //     console.log(res);
  //   } catch (error) {
  //     console.log("failed");
  //     const failSafeData = failSafe;
  //     console.log(failSafeData);
  //   }
  // };

  // fetch();

  return (
    <div className={styles.container}>
      <div>Projects</div>
    </div>
  );
};

export default Projects;
