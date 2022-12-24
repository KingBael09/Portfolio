import React from "react";
import styles from "../styles/Certificates.module.css";
import Construction from "../components/common/construction";
import { DocumentTitle } from "../hooks/docTitle";

const Certificates = () => {
  DocumentTitle("Certificates");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.heading}>#Certificates</div>
        <div className={styles.certificates}>
          {/* Work In Progress */}
          <Construction />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
