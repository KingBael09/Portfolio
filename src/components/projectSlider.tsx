import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import styles from "../styles/Projects.module.css";

export const SliderComponent = (showAlert: boolean) => {
  return (
    <Slide direction="down" in={showAlert}>
      <Alert
        variant="standard"
        className={styles.msg}
        id="alert"
        severity="success"
        color="success"
      >
        Url Coppied!
      </Alert>
    </Slide>
  );
};

// TODO: change Style Location
