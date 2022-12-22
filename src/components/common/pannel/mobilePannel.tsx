import { Fade } from "@mui/material/";
import itrData, { typeData } from "../../../data/pannelData";
import styles from "../../styles/Pannel.module.css";
import { MobilePannelBtns } from "./pannelButton";

export const ShowMenu = (Menu: boolean, setMenu: any, handleOnOpen: any) => {
  return (
    <Fade in={Menu} timeout={500}>
      <div>
        <div className={styles.mMenu}>
          <div className={styles.mHeading}>Menu</div>
          {itrData.map((e: typeData) => {
            if (e.title !== "Contact" && e.title !== "Timeline") {
              return (
                <MobilePannelBtns
                  key={e.id}
                  mapData={e}
                  isNavHead={true}
                  mMenuControl={setMenu}
                />
              );
            } else {
              return (
                <MobilePannelBtns
                  key={e.id}
                  mapData={e}
                  isNavHead={false}
                  mMenuControl={setMenu}
                  action={handleOnOpen}
                />
              );
            }
          })}
        </div>
      </div>
    </Fade>
  );
};

// TODO: Create Alternate Styles.module fo mobile
// TODO: Mobile Dialog isn't optimized
