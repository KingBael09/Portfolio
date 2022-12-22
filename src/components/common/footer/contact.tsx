import React from "react";
import { Button } from "@mui/material";
import styles from "../../styles/Footer.module.css";
import itrData from "../../../data/contactData";

const Contact = () => {
  return (
    <div className={styles.contact}>
      {itrData.map((e) => {
        return (
          <Button
            key={e.id}
            color="inherit"
            target={"_blank"}
            rel="noreferrer"
            className={[e.name, styles.qLink].join(" ")}
            href={e.link}
          >
            {e.component}
          </Button>
        );
      })}
    </div>
  );
};

export default Contact;
