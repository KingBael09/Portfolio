import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material/";
import styles from "../../styles/Pannel.module.css";
import Contact from "../footer/contact";

const isMobile = window.matchMedia("(any-pointer:coarse)").matches;

export const ContactDialog = (dialogStatus: boolean, handleOnClose: any) => {
  return (
    <Dialog
      className={styles.dialog}
      onClose={handleOnClose}
      open={dialogStatus}
      fullWidth
      keepMounted
      disableScrollLock
      disablePortal
      hideBackdrop={isMobile ? true : false}
      PaperProps={{
        className: styles.paper,
      }}
    >
      <DialogTitle className={styles.dialogTitle}>Contact Me!</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <Contact />
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button
          variant="contained"
          color="inherit"
          fullWidth
          className={styles.diagButton}
          onClick={handleOnClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// TODO: Move Styles to new Module
