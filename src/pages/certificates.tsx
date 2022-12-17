import React from "react";
import styles from "../styles/Certificates.module.css";
import Construction from "../components/common/construction";

const Certificates = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#Certificates</div>
        <div className={styles.certificates}>
          <Construction />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
