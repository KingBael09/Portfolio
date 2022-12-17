import React from "react";
import styles from "../styles/Construction.module.css";

const Construction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.img}></div>
        <div className={styles.msg}>Work in Progress</div>
      </div>
    </div>
  );
};

export default Construction;
