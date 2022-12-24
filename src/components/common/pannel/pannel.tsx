import React, { useState } from "react";
import styles from "../../styles/Pannel.module.css";
import { Button } from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import itrData, { typeData } from "../../../data/pannelData";
import { ContactDialog } from "./contact";
import { ShowMenu } from "./mobilePannel";
import { PannelBtns } from "./pannelButton";

const Pannel = () => {
  const [Menu, setMenu] = useState(false);
  const [dialogStatus, setdialogStatus] = useState(false);

  const handleOnClose = () => {
    setdialogStatus(false);
  };
  const handleOnOpen = () => {
    setdialogStatus(true);
  };

  return (
    <div className={styles.container}>
      {ContactDialog(dialogStatus, handleOnClose)}
      <div className={styles.mobile}>
        <Button
          color="inherit"
          variant="text"
          onClick={() => {
            Menu ? setMenu(false) : setMenu(true);
          }}
          className={styles.button}
        >
          {Menu ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </Button>
        {ShowMenu(Menu, setMenu, handleOnOpen)}
      </div>
      <div className={styles.desktop}>
        <div id="desktopPannel" className={styles.pannel}>
          {itrData.map((e: typeData) => {
            if (e.title !== "Contact" && e.title !== "Timeline") {
              return <PannelBtns key={e.id} mapData={e} isNavHead={true} />;
            } else {
              return (
                <PannelBtns
                  key={e.id}
                  mapData={e}
                  isNavHead={false}
                  action={handleOnOpen}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Pannel;
