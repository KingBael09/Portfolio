import React from "react";
import styles from "../styles/404.module.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { DocumentTitle } from "../hooks/docTitle";

const NotFound = () => {
  DocumentTitle("Not Found!");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.oops}>OOPS!</div>
        <div className={styles.msg}>
          The Page You were Looking for Dosen't Exist
        </div>
        <div>
          <Button
            variant="outlined"
            color="inherit"
            className={styles.button}
            component={Link}
            to={"/"}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
