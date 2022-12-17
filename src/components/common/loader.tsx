import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress size={60} thickness={8} color="inherit" />
    </div>
  );
};

export default Loader;
